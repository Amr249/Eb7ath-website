import { ResearchEditor } from "@/components/admin/ResearchEditor";

export default async function EditResearchPage({ params }) {
  const { id } = await params;
  return <ResearchEditor researchId={id} />;
}
