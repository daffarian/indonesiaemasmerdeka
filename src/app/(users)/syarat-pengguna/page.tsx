import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { UserTerms } from "@/types/UserTerms";

import { fetchUserTerms } from "@/lib/data/fetchUserTerms";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://yayasanindonesiaemas.com"),
  title: "Syarat Pengguna | Yayasan Indonesia Emas Merdeka",
  description:
    "Yayasan Indonesia Emas Merdeka adalah lembaga sosial yang didirikan dengan tujuan untuk berkontribusi pada pembangunan Indonesia yang lebih baik dan lebih sejahtera. Kami berkomitmen untuk memberikan dampak positif melalui berbagai program yang fokus pada program kesehatan, pemerataan akses pendidikan, pemberdayaan UMKM, dan pelestarian lingkungan untuk meningkatkan kualitas hidup masyarakat Indonesia secara berkelanjutan.",
  keywords: [
    "platform donasi",
    "galang dana",
    "bantuan kemanusiaan",
    "kesehatan",
    "yayasanindonesiaemas.com",
    "yayasanindonesiaemasmerdeka",
    "yayasanindonesiaemas",
    "yayasan indonesia emas",
    "lingkungan",
    "pendidikan",
    "umkm",
    "pemberdayaan masyarakat",
    "konservasi alam",
    "pemberdayaan perempuan",
    "bantuan sosial",
    "pengembangan UMKM",
    "akses pendidikan",
    "pelatihan UMKM",
    "donasi kesehatan",
    "gerakan peduli lingkungan",
    "kesadaran lingkungan",
    "pembangunan berkelanjutan",
    "program lingkungan hidup",
    "konservasi sumber daya alam",
    "program pendidikan Indonesia",
    "pelatihan kewirausahaan",
    "akses layanan kesehatan",
    "pengelolaan sampah",
    "green initiatives",
    "pembangunan ekonomi lokal",
    "program bantuan Indonesia",
    "pengurangan kemiskinan",
    "inisiatif kesehatan masyarakat",
    "donasi untuk pendidikan",
  ],
  openGraph: {
    images:
      "https://yayasanindonesiaemas.com/opengraph-image.png?552dec655558f188",
  },
};

export default async function Page() {
  const userTerms = await fetchUserTerms();
  return (
    <section className="py-16 lg:py-20">
      {/* Heading Start */}
      <div className="bg-primary py-5 lg:py-10">
        <div className="container">
          <h1 className="text-white">Syarat Pengguna</h1>
        </div>
      </div>
      {/* Heading Stop */}
      {/* User Terms Start */}
      <dl className="container mt-10 ">
        <Accordion
          type="single"
          collapsible
          className="flex flex-col gap-5 items-center"
        >
          {userTerms?.map((value: UserTerms, index: number) => (
            <AccordionItem
              value={`item-${index + 1}`}
              className="border p-5 rounded-xl w-full lg:w-[50rem]"
              key={value.id}
            >
              <AccordionTrigger className="text-left text-base py-0">
                <dt className="text-base font-normal lg:text-lg">{`${
                  index + 1
                }.  ${value.title}`}</dt>
              </AccordionTrigger>
              <AccordionContent className="bg-zinc-100 p-5 rounded-xl text-base mt-4">
                <dd
                  className="prose"
                  dangerouslySetInnerHTML={{ __html: value.content }}
                ></dd>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </dl>
      {/* User Terms Stop */}
    </section>
  );
}
