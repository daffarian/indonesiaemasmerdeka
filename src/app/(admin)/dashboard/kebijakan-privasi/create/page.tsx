import AdminHeading from "@/components/admin/AdminHeading";
import AdminBody from "@/components/admin/AdminBody";
import CreatePrivacyPolicyForm from "@/components/admin/privacyPolicy/CreatePrivacyPolicyForm";

export default function Page() {
  return (
    <>
    <AdminHeading text="Tambah Kebijakan Privasi"/>
    <AdminBody>
      <CreatePrivacyPolicyForm/>
    </AdminBody>
    </>
  );
}
