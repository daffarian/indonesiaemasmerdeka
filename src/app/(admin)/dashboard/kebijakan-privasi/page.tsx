import Search from "@/components/common/Search";
import ButtonCreate from "@/components/common/ButtonCreate";
import AdminHeading from "@/components/admin/AdminHeading";
import AdminBody from "@/components/admin/AdminBody";
import TablePrivacyPolicy from "@/components/admin/privacyPolicy/TablePrivacyPolicy";

// fetch filtered privacy policy
import { fetchFilteredPrivacyPolicy } from "@/lib/data/fetchPrivasiPolicy";


export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const privacyPolicy = await fetchFilteredPrivacyPolicy(query, currentPage);

  return (
    <>
      {/* Heading & Toggle Start */}
      <AdminHeading text="Kebijakan Privasi"/>
      {/* Heading & Toggle Stop */}
      <AdminBody>
        {/* Privasi Policy Settings Start */}
        <div className="flex flex-row justify-between gap-5">
          {/* Search Start */}
          <Search placeholder="Cari kebijakan privasi" />
          {/* Search Stop */}
          {/* Crate Start */}
          <ButtonCreate href="/dashboard/kebijakan-privasi/create" />
          {/* Crate Stop */}
        </div>
        {/* Table Start */}
        <div className="overflow-x-scroll mt-14 rounded-lg border">
          <TablePrivacyPolicy
            data={privacyPolicy}
          />
        </div>
        {/* Table Stop */}
      </AdminBody>
      {/* Privasi Policy Settings Stop */}
    </>
  );
}
