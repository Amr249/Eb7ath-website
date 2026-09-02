import { BlogPostPage } from "@/components/pages/BlogPostPage";
import { getBlogPostBySlug } from "@/lib/cms/getBlogPosts";

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const articles = await getBlogPostBySlug(slug);
  const title = articles.ar?.title || articles.en?.title;
  return {
    title: title ? `${title} | اِبْحَثْ` : "المدونة | اِبْحَثْ",
    description: articles.ar?.excerpt || articles.en?.excerpt || slug,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const initialArticlesByLocale = await getBlogPostBySlug(slug);
  return <BlogPostPage slug={slug} initialArticlesByLocale={initialArticlesByLocale} />;
}
