import { ExpertEditor } from "@/components/admin/ExpertEditor";

export default async function EditExpertPage({ params }) {
  const { id } = await params;
  return <ExpertEditor expertId={id} />;
}
