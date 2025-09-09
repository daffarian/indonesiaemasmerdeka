import { CardArticleTypes } from "@/types/CardArticle";
import Link from "next/link";

// max words
import { setMaxWords } from "@/lib/utils";

export default function CardArticle(article: CardArticleTypes) {
  return (
    <div
      className={`${article.className} border-[1px] border-zinc-200 rounded-3xl p-5 bg-white shadow-md`}
    >
      {/* Images Start */}
      <div className="">
        <img
          src={article.image_url}
          alt=""
          className="rounded-3xl h-52 w-full object-cover"
        />
      </div>
      {/* Images Stop */}

      {/* Date & category Start */}
      <div className="my-5 font-medium flex flex-row justify-between">
        <time>
          {article.date.toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </time>
        <span className="bg-amber-100 px-2 py-1 !text-sm rounded-xl text-yellow-500">
          {article.category}
        </span>
      </div>
      {/* Date & category Stop */}

      {/* Title Start */}
      <div className="font-bold my-5">{article.title}</div>
      {/* Title Stop */}

      {/* Content Start */}
      <div className="text-zinc-600">
        {setMaxWords(article.description, 20)}
      </div>
      {/* Content Stop */}
      {/* Link Start */}
      <div>
        <Link
          href={`/impact-stories/${article.slug}`}
          className="text-primary font-medium my-5 inline-block"
        >
          Baca Selengkapnya
        </Link>
      </div>
      {/* Link Stop */}
    </div>
  );
}
