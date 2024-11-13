import AdminHeading from "@/components/admin/AdminHeading";
import AdminBody from "@/components/admin/AdminBody";
import CreateArticleForm from "@/components/admin/article/CreateArticleForm";

export default function Page() {
  return (
    <>
    <AdminHeading text="Tambah Artikel"/>
    <AdminBody>
      <CreateArticleForm/>
    </AdminBody>
    </>
  );
}
