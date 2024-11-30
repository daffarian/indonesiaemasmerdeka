import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// faq types
import { Faq } from "@/types/Faq";

// Fetch Faq
import { fetchFaq } from "@/lib/fetch/fetchFaq";

export default async function Page() {
  const faq = await fetchFaq();
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
      <dl className="container mt-10 ">
        <Accordion type="single" collapsible className="flex flex-col gap-5">
            {faq?.map((value: Faq, index: number) => (
              <AccordionItem
                value={`item-${index + 1}`}
                className="border p-5 rounded-xl"
                key={value.id}
              >
                <AccordionTrigger className="text-left text-base py-0">
                  <dt className="text-base font-normal">{`${index + 1}.  ${
                    value.question
                  }`}</dt>
                </AccordionTrigger>
                <AccordionContent className="bg-zinc-100 p-5 rounded-xl text-base mt-4">
                  <dd dangerouslySetInnerHTML={{ __html: value.answer }}></dd>
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </dl>
      {/* Faq Stop */}
    </section>
  );
}
