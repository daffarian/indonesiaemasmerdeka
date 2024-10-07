import HeaderAdmin from "@/components/common/Layout/HeaderAdmin";
import SideNavAdmin from "@/components/common/Layout/SideNavAdmin";
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
      <SideNavAdmin />
      <main>{children}</main>
    </>
  );
}
