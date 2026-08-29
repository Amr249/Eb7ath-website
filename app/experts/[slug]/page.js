import { ExpertProfilePage } from "@/components/pages/ExpertProfilePage";
import { getExpertProfileData } from "@/lib/cms/getExpertsData";

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { expert } = await getExpertProfileData(slug);
  const name = expert?.name?.ar || expert?.name?.en || slug;
  return {
    title: `${name} | إِبحَث`,
    description: expert?.specialty?.ar || expert?.specialty?.en || "",
  };
}

export default async function ExpertProfile({ params }) {
  const { slug } = await params;
  const { expert, publications } = await getExpertProfileData(slug);
  return <ExpertProfilePage slug={slug} expert={expert} publications={publications} />;
}
