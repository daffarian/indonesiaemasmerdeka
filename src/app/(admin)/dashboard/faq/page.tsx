import Search from "@/components/common/Search";
import TableFaq from "@/components/admin/faq/TableFaq";
import ButtonCreate from "@/components/common/ButtonCreate";
import AdminHeading from "@/components/admin/AdminHeading";
import AdminBody from "@/components/admin/AdminBody";

import { fetchFilteredFaq } from "@/lib/data/fetchFaq";


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

  const faq = await fetchFilteredFaq(query, currentPage);

  return (
    <>
      {/* Heading & Toggle Start */}
      <AdminHeading text="FAQ"/>
      {/* Heading & Toggle Stop */}
      <AdminBody>
        {/* Cerita Berbagi Settings Start */}
        <div className="flex flex-row justify-between gap-5">
          {/* Search Start */}
          <Search placeholder="Cari Faq" />
          {/* Search Stop */}
          {/* Crate Start */}
          <ButtonCreate href="/dashboard/faq/create" />
          {/* Crate Stop */}
        </div>
        {/* Table Start */}
        <div className="overflow-x-scroll mt-14 rounded-lg border">
          <TableFaq
            data={faq}
          />
        </div>
        {/* Table Stop */}
      </AdminBody>
      {/* Cerita Berbagi Settings Stop */}
    </>
  );
}
