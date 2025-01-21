import AdminBody from "@/components/admin/AdminBody";
import AdminHeading from "@/components/admin/AdminHeading";
import EditArticleForm from "@/components/admin/article/EditArticleForm";

import { fetchArticleBySlug } from "@/lib/data/fetchArticle";
export default async function Page({ params }: { params: { slug: string } }) {
  const [articleBySlug] = await fetchArticleBySlug(params.slug);
  return (
    <>
      <AdminHeading text="Edit Artikel" />
      <AdminBody>
        <EditArticleForm article={articleBySlug} />
      </AdminBody>
    </>
  );
}
