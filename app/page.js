import { LandingPage } from "@/components/pages/LandingPage";
import { getBlogPostsByLocale } from "@/lib/cms/getBlogPosts";
import { getFeaturedExpertsByLocale } from "@/lib/cms/getExpertsData";

export const revalidate = 60;

export default async function Home() {
  const [initialPostsByLocale, initialExpertsByLocale] = await Promise.all([
    getBlogPostsByLocale(3),
    getFeaturedExpertsByLocale(3),
  ]);
  return (
    <LandingPage
      initialPostsByLocale={initialPostsByLocale}
      initialExpertsByLocale={initialExpertsByLocale}
    />
  );
}
