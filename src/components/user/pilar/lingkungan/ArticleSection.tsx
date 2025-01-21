import CardArticle from "@/components/common/CardArticle";
import { Article } from "@/types/Article";
import { fetchArticleByCategory } from "@/lib/data/fetchArticle";
export default async function ArticleSection() {
  const article: Article[] = await fetchArticleByCategory("Lingkungan");
  return (
    <>
      {article?.length > 0 && (
        <div className="container">
          <h2 className="text-primary my-10">Cerita Berbagi</h2>
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
                className={'mb-10 lg:mb-20'}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
