import HeaderAdmin from "@/components/common/Layout/HeaderAdmin";
import DesktopNavAdmin from "@/components/common/Layout/DesktopNavAdmin";
import { fetchArticleVisible } from "@/lib/fetch/fetchVisible";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isArticleVisible] = await fetchArticleVisible();
  return (
    <>
      <HeaderAdmin isArticleVisible={isArticleVisible.value} />
      <div className="flex flex-row">
        <DesktopNavAdmin />
        <main className="bg-amber-50 w-full min-h-dvh rounded-tl-lg py-20 lg:py-24">
          <div className="container lg:px-5">{children}</div>
        </main>
      </div>
    </>
  );
}
