import AdminBody from "@/components/admin/AdminBody";
import AdminHeading from "@/components/admin/AdminHeading";
import EditUserTermsForm from "@/components/admin/userTerms/EditUserTermsForm";

import { fetchUserTermsById } from "@/lib/data/fetchUserTerms";

export default async function Page({ params }: { params: { id: number } }) {
  const [userTermsById] = await fetchUserTermsById(params.id);
  return (
    <>
      <AdminHeading text="Edit Syarat Pengguna" />
      <AdminBody>
        <EditUserTermsForm userTerms={userTermsById} />
      </AdminBody>
    </>
  );
}
