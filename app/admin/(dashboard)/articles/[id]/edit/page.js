import { ArticleEditor } from "@/components/admin/ArticleEditor";

export default async function EditArticlePage({ params }) {
  const { id } = await params;
  return <ArticleEditor articleId={id} />;
}
