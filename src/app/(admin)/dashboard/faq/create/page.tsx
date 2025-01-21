import AdminHeading from "@/components/admin/AdminHeading";
import AdminBody from "@/components/admin/AdminBody";
import CreateFaqForm from "@/components/admin/faq/CreateFaqForm";

export default function Page() {
  return (
    <>
    <AdminHeading text="Tambah FAQ"/>
    <AdminBody>
      <CreateFaqForm/>
    </AdminBody>
    </>
  );
}
