import { fetchArticle } from "@/lib/data/fetchArticle";
import { Article } from "@/types/Article";
import Link from "next/link";
import CardArticle from "@/components/common/CardArticle";

export default async function ArticleSection({
  className,
}: {
  className?: string;
}) {
  const article: Article[] = await fetchArticle();
  return (
    <>
      {article.length > 0 && (
        <section className={`${className} py-10 lg:py-20`}>
          <div className="container">
            <h2 className="text-primary mb-10">Impact Stories</h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {article.map((value: any, index: number) => (
                <CardArticle
                  image_url={value.image_url}
                  category={value.category}
                  date={value.created_at}
                  id={value.id}
                  description={value.description}
                  slug={value.slug}
                  title={value.title}
                  key={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
