import Link from "next/link";
import { fetchArticle } from "@/lib/fetch/fetchArticle";
export default async function Page() {
  const article = await fetchArticle();
  return (
    <div className="py-20 lg:py-24">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
        {article?.length > 0 ? (
          article.map((value: any, index: number) => (
            <div
              className="border-[1px] border-zinc-200 rounded-3xl p-5 bg-white shadow-md"
              key={index}
            >
              {/* Images Start */}
              <div className="">
                <img
                  src={`${value.image_url}`}
                  alt=""
                  className="rounded-3xl w-full h-52 object-cover"
                />
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
              <h2 className="font-bold my-5">{value.title}</h2>
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
  );
}
