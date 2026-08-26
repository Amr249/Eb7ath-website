import { LandingPage } from "@/components/pages/LandingPage";
import { getBlogPostsByLocale } from "@/lib/cms/getBlogPosts";

export const revalidate = 60;

export default async function Home() {
  const initialPostsByLocale = await getBlogPostsByLocale(3);
  return <LandingPage initialPostsByLocale={initialPostsByLocale} />;
}
