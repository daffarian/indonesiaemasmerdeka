import { fetchArticleBySlug } from "@/lib/fetch/fetchArticle";
import { fetchArticle } from "@/lib/fetch/fetchArticle";

export default async function Page({ params }: { params: { slug: string } }) {
  const [articleBySlug] = await fetchArticleBySlug(params.slug);
  console.log(articleBySlug);
  return (
    <article className="py-20 container">
      <div className="lg:px-40 mx-auto">
        {/* Images Start */}
        <div className="">
          <img
            src={articleBySlug.image_url}
            alt=""
            className="rounded-3xl w-full"
          />
        </div>
        {/* Images Stop */}

        {/* Date & category Start */}
        <div className="my-5 lg:my-10 font-medium flex flex-row justify-between">
          <time>
            {articleBySlug.created_at.toLocaleDateString("id-ID", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </time>
          <h6 className="bg-amber-100 px-2 py-1 text-sm rounded-xl lg:text-lg text-yellow-500">
            {articleBySlug.category}
          </h6>
        </div>
        {/* Date & category Stop */}

        {/* Title Start */}
        <h2 className="font-bold my-5 lg:my-10">{articleBySlug.title}</h2>
        {/* Title Stop */}

        {/* Content Start */}
        <div
          className="text-zinc-600 prose lg:prose-lg"
          dangerouslySetInnerHTML={{ __html: articleBySlug.content }}
        ></div>
        {/* Content Stop */}
      </div>
    </article>
  );
}
