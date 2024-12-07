import AdminBody from "@/components/admin/AdminBody";
import AdminHeading from "@/components/admin/AdminHeading";
import EditFaqForm from "@/components/admin/faq/EditFaqForm";

import { fetchFaqById } from "@/lib/data/fetchFaq";

export default async function Page({ params }: { params: { id: number } }) {
  const [faqById] = await fetchFaqById(params.id);
  return (
    <>
      <AdminHeading text="Edit FAQ" />
      <AdminBody>
        <EditFaqForm faq={faqById} />
      </AdminBody>
    </>
  );
}
