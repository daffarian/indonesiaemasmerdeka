import HeaderUser from "@/components/common/Layout/HeaderUser";
import FooterUser from "@/components/common/Layout/FooterUser";
import countNewVisitor from "@/lib/action/countNewVisitor";
import { fetchArticleVisible } from "@/lib/data/fetchVisible";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isArticleVisible] = await fetchArticleVisible();

  await countNewVisitor();

  return (
    <>
      <HeaderUser isArticleVisible={isArticleVisible.value} />
      <main>{children}</main>
      <FooterUser />
    </>
  );
}
