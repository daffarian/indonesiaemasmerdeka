import { fetchArticleVisible } from "@/lib/fetch/fetchVisible";
import { setArticleVisible } from "@/lib/action/setArticleVisible";

import Search from "@/components/common/Search";
import Table from "@/components/common/data/Table";

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
    <div className="container lg:px-5 py-20 lg:py-24 rounded-tl-lg">
      {/* Heading & Toggle Start */}
      <div className="shadow-lg p-3 rounded-lg bg-white flex flex-row items-center justify-between">
        <h1 className="text-lg lg:text-3xl text-primary">Cerita Berbagi</h1>
        <ToggleVisibility
          fetchVisibility={fetchArticleVisible}
          setVisibility={setArticleVisible}
        />
      </div>
      {/* Heading & Toggle Stop */}
      {/* Cerita Berbagi Settings Start */}
      <div className="mt-5 shadow-lg rounded-lg bg-white p-3">
        {/* Search Start */}
        <Search placeholder="Cari Artikel" />
        {/* Search Stop */}
        {/* Table Start */}
        <div className="overflow-x-scroll mt-14 rounded-lg border">
          <Table
            className="text-zinc-500"
            type="edit"
            columns={[
              { key: "title", label: "Judul" },
              { key: "category", label: "Kategori" },
              { key: "created_at", label: "Tanggal" },
            ]}
            data={articles}
          />
        </div>
        {/* Table Stop */}
      </div>
      {/* Cerita Berbagi Settings Stop */}
    </div>
  );
}
