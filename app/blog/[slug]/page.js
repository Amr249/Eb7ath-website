import { BlogPostPage } from "@/components/pages/BlogPostPage";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title: `المدونة | إِبحَث`,
    description: slug,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  return <BlogPostPage slug={slug} />;
}
