import Search from "@/components/common/Search";
import ButtonCreate from "@/components/common/ButtonCreate";
import AdminHeading from "@/components/admin/AdminHeading";
import AdminBody from "@/components/admin/AdminBody";

import { fetchFilteredUserTerms } from "@/lib/data/fetchUserTerms";

import TableUserTerms from "@/components/admin/userTerms/TableUserTerms";

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

  const userTerms = await fetchFilteredUserTerms(query, currentPage);

  return (
    <>
      {/* Heading & Toggle Start */}
      <AdminHeading text="Syarat Pengguna"/>
      {/* Heading & Toggle Stop */}
      <AdminBody>
        {/* User Terms Settings Start */}
        <div className="flex flex-row justify-between gap-5">
          {/* Search Start */}
          <Search placeholder="Cari syarat pengguna" />
          {/* Search Stop */}
          {/* Create Start */}
          <ButtonCreate href="/dashboard/syarat-pengguna/create" />
          {/* Create Stop */}
        </div>
        {/* Table Start */}
        <div className="overflow-x-scroll mt-14 rounded-lg border">
          <TableUserTerms
            data={userTerms}
          />
        </div>
        {/* Table Stop */}
      </AdminBody>
      {/* User Terms Settings Stop */}
    </>
  );
}
