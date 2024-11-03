import AdminHeading from "@/components/common/AdminHeading";
import AdminBody from "@/components/common/AdminBody";
import CreateArticleForm from "@/components/dashboard/article/CreateArticleForm";

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
