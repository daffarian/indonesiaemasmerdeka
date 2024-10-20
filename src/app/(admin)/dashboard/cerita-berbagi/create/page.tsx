import AdminHeading from "@/components/common/AdminHeading";
import AdminBody from "@/components/common/AdminBody";
import ArticleForm from "@/components/common/Form/ArticleForm";

export default function Page() {
  return (
    <>
    <AdminHeading text="Tambah Artikel"/>
    <AdminBody>
      <ArticleForm/>
    </AdminBody>
    </>
  );
}
