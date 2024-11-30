import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default async function Page() {
  return (
    <section className="py-16 lg:py-20">
      {/* Heading Start */}
      <div className="bg-primary py-5 lg:py-10">
        <div className="container">
          <h1 className="text-white">FAQ</h1>
        </div>
      </div>
      {/* Heading Stop */}
      {/* Faq Start */}
      <div className="container mt-10 ">
        <Accordion type="single" collapsible className="flex flex-col gap-5">
          <AccordionItem
            value="item-1"
            className="border p-5 rounded-xl"
          >
            <AccordionTrigger className="text-left text-base py-0">
              {`1. `}Apakah kegiatan penggalangan dana memiliki lisensi ?
            </AccordionTrigger>
            <AccordionContent className="bg-zinc-100 p-5 rounded-xl text-base mt-4">
              Kegiatan operasional penggalangan dana di BenihBaik.com telah
              mendapatkan Izin Pengumpulan Uang atau Barang dari Kementerian
              Sosial Republik Indonesia berdasarkan Surat Keputusan Menteri
              Sosial Republik Indonesia Nomor 19 : 190/HUK-PS/2024 (untuk
              kategori Non Bencana) dan Surat Keputusan Menteri Sosial Republik
              Indonesia Nomor 15 : 259/HUK-PS/2024 (untuk kategori Bencana).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border p-5 rounded-xl">
            <AccordionTrigger className="text-left text-base py-0">
              {`2. `}Apakah kegiatan penggalangan dana memiliki lisensi ?
            </AccordionTrigger>
            <AccordionContent className="bg-zinc-100 p-5 rounded-xl text-base mt-4">
              Kegiatan operasional penggalangan dana di BenihBaik.com telah
              mendapatkan Izin Pengumpulan Uang atau Barang dari Kementerian
              Sosial Republik Indonesia berdasarkan Surat Keputusan Menteri
              Sosial Republik Indonesia Nomor 19 : 190/HUK-PS/2024 (untuk
              kategori Non Bencana) dan Surat Keputusan Menteri Sosial Republik
              Indonesia Nomor 15 : 259/HUK-PS/2024 (untuk kategori Bencana).
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {/* Faq Stop */}
    </section>
  );
}
