import { fetchArticleBySlug } from "@/lib/data/fetchArticle";
import { fetchArticle } from "@/lib/data/fetchArticle";
import type { Metadata, ResolvingMetadata } from "next";


export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const [articleBySlug] = await fetchArticleBySlug(params.slug);

  return {
    metadataBase: new URL("https://yayasanindonesiaemas.com"),
    description: `${articleBySlug.description}`,
    title: `${articleBySlug.title}`,
    openGraph: {
      title: `${articleBySlug.title}`,
      images: `${articleBySlug.image_url}`,
    },
  };
}

// export const metadata: Metadata = {
//   metadataBase: new URL("https://yayasanindonesiaemas.com"),
//   title: "Kebijakan Privasi | Yayasan Indonesia Emas Merdeka",
//   description:
//     "Yayasan Indonesia Emas Merdeka adalah lembaga sosial yang didirikan dengan tujuan untuk berkontribusi pada pembangunan Indonesia yang lebih baik dan lebih sejahtera. Kami berkomitmen untuk memberikan dampak positif melalui berbagai program yang fokus pada program kesehatan, pemerataan akses pendidikan, pemberdayaan UMKM, dan pelestarian lingkungan untuk meningkatkan kualitas hidup masyarakat Indonesia secara berkelanjutan.",
//   keywords: [
//     "platform donasi",
//     "galang dana",
//     "bantuan kemanusiaan",
//     "kesehatan",
//     "yayasanindonesiaemas.com",
//     "yayasanindonesiaemasmerdeka",
//     "yayasanindonesiaemas",
//     "yayasan indonesia emas",
//     "lingkungan",
//     "pendidikan",
//     "umkm",
//     "pemberdayaan masyarakat",
//     "konservasi alam",
//     "pemberdayaan perempuan",
//     "bantuan sosial",
//     "pengembangan UMKM",
//     "akses pendidikan",
//     "pelatihan UMKM",
//     "donasi kesehatan",
//     "gerakan peduli lingkungan",
//     "kesadaran lingkungan",
//     "pembangunan berkelanjutan",
//     "program lingkungan hidup",
//     "konservasi sumber daya alam",
//     "program pendidikan Indonesia",
//     "pelatihan kewirausahaan",
//     "akses layanan kesehatan",
//     "pengelolaan sampah",
//     "green initiatives",
//     "pembangunan ekonomi lokal",
//     "program bantuan Indonesia",
//     "pengurangan kemiskinan",
//     "inisiatif kesehatan masyarakat",
//     "donasi untuk pendidikan",
//   ],
//   openGraph: {
//     images:
//       "https://yayasanindonesiaemas.com/opengraph-image.png?552dec655558f188",
//   },
// };

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
            className="rounded-3xl w-full aspect-video object-cover"
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
