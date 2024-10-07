import HeaderUser from "@/components/common/Layout/HeaderUser";
import FooterUser from "@/components/common/Layout/FooterUser";

import { fetchArticleVisible } from "@/lib/fetch/fetchVisible";
export default async function Layout({ children }: { children: React.ReactNode }) {
  const [isArticleVisible] = await fetchArticleVisible();
  return (
    <>
      <HeaderUser isArticleVisible={isArticleVisible.value} />
      <main>{children}</main>
      <FooterUser/>
    </>
  );
}
