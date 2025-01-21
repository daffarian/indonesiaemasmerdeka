import AdminHeading from "@/components/admin/AdminHeading";
import AdminBody from "@/components/admin/AdminBody";
import CreateUserTermsForm from "@/components/admin/userTerms/CreateUserTermsForm";

export default function Page() {
  return (
    <>
    <AdminHeading text="Tambah Syarat Pengguna"/>
    <AdminBody>
      <CreateUserTermsForm/>
    </AdminBody>
    </>
  );
}
