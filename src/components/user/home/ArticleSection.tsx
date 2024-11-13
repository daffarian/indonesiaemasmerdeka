import { fetchArticle } from "@/lib/fetch/fetchArticle";
import { div } from "framer-motion/client";
import Link from "next/link";

export default async function ArticleSection({
  className,
}: {
  className?: string;
}) {
  const article = await fetchArticle();
  return (
    <section className={`${className} py-10 lg:py-20`}>
      <div className="container">
        <h2 className="text-primary mb-10">Cerita Berbagi</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {article?.length > 0 ? (
            article.map((value: any, index: number) => (
              <div
                className="border-[1px] border-zinc-200 rounded-3xl p-5 bg-white shadow-md"
                key={index}
              >
                {/* Images Start */}
                <div className="">
                  <img src={value.image_url} alt="" className="rounded-3xl h-52 w-full object-cover" />
                </div>
                {/* Images Stop */}

                {/* Date & category Start */}
                <div className="my-5 font-medium flex flex-row justify-between">
                  <time>
                    {value.created_at.toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <span className="bg-amber-100 px-2 py-1 !text-sm rounded-xl text-yellow-500">
                    {value.category}
                  </span>
                </div>
                {/* Date & category Stop */}

                {/* Title Start */}
                <div className="font-bold my-5">{value.title}</div>
                {/* Title Stop */}

                {/* Content Start */}
                <div className="text-zinc-600">
                  {(() => {
                    const words = value.description.split(" "); // Memisahkan kata
                    return words.length > 100
                      ? words.slice(0, 20).join(" ") + "..." // Menggabungkan kembali kata dan menambahkan '...'
                      : value.description; // Mengembalikan teks asli jika kurang dari 100 kata
                  })()}
                </div>
                {/* Content Stop */}
                {/* Link Start */}
                <div>
                  <Link
                    href={`/cerita-berbagi/${value.slug}`}
                    className="text-primary font-medium my-5 inline-block"
                  >
                    Baca Selengkapnya
                  </Link>
                </div>
                {/* Link Stop */}
              </div>
            ))
          ) : (
            <div>Belum ada article</div>
          )}
        </div>
      </div>
    </section>
  );
}
