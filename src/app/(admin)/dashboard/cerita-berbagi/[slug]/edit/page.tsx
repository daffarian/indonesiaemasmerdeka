import AdminBody from "@/components/common/AdminBody";
import AdminHeading from "@/components/common/AdminHeading";
import EditArticleForm from "@/components/dashboard/article/EditArticleForm";

import { fetchArticleBySlug } from "@/lib/fetch/fetchArticle";
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
