import { ResearchPublicationPage } from "@/components/pages/ResearchPublicationPage";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title: `البحث | إِبحَث`,
    description: slug,
  };
}

export default async function ResearchPublication({ params }) {
  const { slug } = await params;
  return <ResearchPublicationPage slug={slug} />;
}
