import { ExpertProfilePage } from "@/components/pages/ExpertProfilePage";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title: `خبراؤنا | إِبحَث`,
    description: slug,
  };
}

export default async function ExpertProfile({ params }) {
  const { slug } = await params;
  return <ExpertProfilePage slug={slug} />;
}
