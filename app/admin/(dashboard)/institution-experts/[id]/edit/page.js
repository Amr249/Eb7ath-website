import { InstitutionExpertEditor } from "@/components/admin/InstitutionExpertEditor";

export default async function EditInstitutionExpertPage({ params }) {
  const { id } = await params;
  return <InstitutionExpertEditor expertId={id} />;
}
