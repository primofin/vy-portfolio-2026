// Minimal Contentful Delivery API client (no SDK needed).
// Requires CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN in .env.local.

export type CmsProject = {
  name: string;
  desc: string;
  tech: string[];
  live?: string;
  repo?: string;
  img?: string;
};
export type CmsExperience = {
  role: string;
  org: string;
  when: string;
  url?: string;
};
export type CmsStack = { title: string; items: string[] };
export type CmsData = {
  projects: CmsProject[] | null;
  experience: CmsExperience[] | null;
  stacks: CmsStack[] | null;
};

const SPACE = process.env.CONTENTFUL_SPACE_ID;
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const ENV = process.env.CONTENTFUL_ENVIRONMENT || 'master';

async function getEntries<T>(contentType: string, order?: string): Promise<T[] | null> {
  if (!SPACE || !TOKEN) {
    console.warn('[contentful] missing CONTENTFUL_SPACE_ID / CONTENTFUL_ACCESS_TOKEN, using static fallback');
    return null;
  }
  const params = new URLSearchParams({ content_type: contentType, limit: '100' });
  if (order) params.set('order', order);
  try {
    const res = await fetch(
      `https://cdn.contentful.com/spaces/${SPACE}/environments/${ENV}/entries?${params}`,
      { headers: { Authorization: `Bearer ${TOKEN}` }, next: { revalidate: 300 } },
    );
    if (!res.ok) {
      console.error(`[contentful] ${contentType}: HTTP ${res.status}`);
      return null;
    }
    const json = await res.json();
    console.log(`[contentful] ${contentType}: fetched ${json.items.length} entries`);
    return json.items.map((i: { fields: T }) => i.fields);
  } catch (e) {
    console.error(`[contentful] ${contentType}: fetch failed`, e);
    return null;
  }
}

const split = (s?: string) =>
  (s ?? '')
    .replace(/\.$/, '')
    .split(',')
    .map((t) => t.trim().replace(/\s+/g, ' '))
    .filter(Boolean);

const month = (iso?: string) =>
  iso
    ? new Date(iso).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' })
    : '';

export async function getCmsData(): Promise<CmsData> {
  const [projects, experience, stacks] = await Promise.all([
    getEntries<Record<string, string>>('projectInfo', 'sys.createdAt'),
    getEntries<Record<string, string>>('devEperienences', '-fields.starting'),
    getEntries<Record<string, string>>('techStack', 'sys.createdAt'),
  ]);

  return {
    projects: projects
      ?.filter((p) => p.title)
      .map((p) => ({
        name: p.title,
        desc: p.info,
        tech: split(p.tech),
        live: p.url,
        repo: p.repo,
        img: p.imgs,
      })) ?? null,
    experience: experience?.map((e) => ({
      role: e.jobTitle,
      org: e.company,
      when: `${month(e.starting)} – ${e.ending ? month(e.ending) : 'Present'}`,
      url: e.companyUrl,
    })) ?? null,
    stacks: stacks?.map((s) => ({ title: s.stackName, items: split(s.technologies) })) ?? null,
  };
}
