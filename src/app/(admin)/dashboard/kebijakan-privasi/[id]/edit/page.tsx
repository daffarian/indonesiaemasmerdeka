import AdminBody from "@/components/admin/AdminBody";
import AdminHeading from "@/components/admin/AdminHeading";
import EditPrivacyPolicyForm from "@/components/admin/privacyPolicy/EditPrivacyPolicyForm";

import { fetchPrivacyPolicyById } from "@/lib/fetch/fetchPrivasiPolicy";
export default async function Page({ params }: { params: { id: number } }) {
  const [privacyPolicyById] = await fetchPrivacyPolicyById(params.id);
  return (
    <>
      <AdminHeading text="Edit Kebijan Privasi" />
      <AdminBody>
        <EditPrivacyPolicyForm privacyPolicy={privacyPolicyById} />
      </AdminBody>
    </>
  );
}
