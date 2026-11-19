import Home from '@/components/Home';
import { getCmsData } from '@/lib/contentful';

export default async function Page() {
  const cms = await getCmsData();
  return <Home cms={cms} />;
}
