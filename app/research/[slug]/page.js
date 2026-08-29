import { ResearchPublicationPage } from "@/components/pages/ResearchPublicationPage";
import { getResearchPublicationData } from "@/lib/cms/getExpertsData";

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { research } = await getResearchPublicationData(slug);
  return {
    title: research?.title ? `${research.title.slice(0, 60)}… | إِبحَث` : `البحث | إِبحَث`,
    description: research?.journal || slug,
  };
}

export default async function ResearchPublication({ params }) {
  const { slug } = await params;
  const { research, expert } = await getResearchPublicationData(slug);
  return <ResearchPublicationPage slug={slug} research={research} expert={expert} />;
}
