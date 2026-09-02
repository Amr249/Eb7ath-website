import { ConsultantsPage } from "@/components/pages/ConsultantsPage";
import { getAllExpertsByLocale } from "@/lib/cms/getExpertsData";

export const metadata = {
  title: "الاستشاريين | اِبْحَثْ",
  description:
    "نخبة من الاستشاريين والأساتذة الجامعيين الممارسين في المنظومة الصحية السعودية، يشرفون على منهجية البحث ويدعمون النشر في المجلات المحكّمة.",
};

export const revalidate = 60;

export default async function Consultants() {
  const expertsByLocale = await getAllExpertsByLocale();
  return <ConsultantsPage expertsByLocale={expertsByLocale} />;
}
