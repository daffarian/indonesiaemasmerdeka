import { fetchArticleVisible } from "@/lib/fetch/fetchVisible";
import { setArticleVisible } from "@/lib/action/setArticleVisible";

import Search from "@/components/common/Search";
import Table from "@/components/admin/article/Table";
import ButtonCreate from "@/components/common/ButtonCreate";
import AdminHeading from "@/components/admin/AdminHeading";
import AdminBody from "@/components/admin/AdminBody";

import { fetchFilteredArticles } from "@/lib/fetch/fetchArticle";

import ToggleVisibility from "@/components/common/ToggleVisibility";

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

  const articles = await fetchFilteredArticles(query, currentPage);

  return (
    <>
      {/* Heading & Toggle Start */}
      <AdminHeading text="Cerita Berbagi">
        <ToggleVisibility
          fetchVisibility={fetchArticleVisible}
          setVisibility={setArticleVisible}
        />
      </AdminHeading>
      {/* Heading & Toggle Stop */}
      <AdminBody>
        {/* Cerita Berbagi Settings Start */}
        <div className="flex flex-row justify-between gap-5">
          {/* Search Start */}
          <Search placeholder="Cari Artikel" />
          {/* Search Stop */}
          {/* Crate Start */}
          <ButtonCreate href="/dashboard/cerita-berbagi/create" />
          {/* Crate Stop */}
        </div>
        {/* Table Start */}
        <div className="overflow-x-scroll mt-14 rounded-lg border">
          <Table
            data={articles}
          />
        </div>
        {/* Table Stop */}
      </AdminBody>
      {/* Cerita Berbagi Settings Stop */}
    </>
  );
}
