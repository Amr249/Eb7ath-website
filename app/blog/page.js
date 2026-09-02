import { BlogPage } from "@/components/pages/BlogPage";
import { getBlogPostsByLocale } from "@/lib/cms/getBlogPosts";

export const metadata = {
  title: "المدونة | اِبْحَثْ",
};

export const revalidate = 60;

export default async function Blog() {
  const initialPostsByLocale = await getBlogPostsByLocale();
  return <BlogPage initialPostsByLocale={initialPostsByLocale} />;
}
