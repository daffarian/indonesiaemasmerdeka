import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { UserTerms } from "@/types/UserTerms";

import { fetchUserTerms } from "@/lib/fetch/fetchUserTerms";

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
        <Accordion type="single" collapsible className="flex flex-col gap-5 items-center">
            {userTerms?.map((value: UserTerms, index: number) => (
              <AccordionItem
                value={`item-${index + 1}`}
                className="border p-5 rounded-xl w-full lg:w-[50rem]"
                key={value.id}
              >
                <AccordionTrigger className="text-left text-base py-0">
                  <dt className="text-base font-normal lg:text-lg">{`${index + 1}.  ${
                    value.title
                  }`}</dt>
                </AccordionTrigger>
                <AccordionContent className="bg-zinc-100 p-5 rounded-xl text-base mt-4">
                  <dd className="prose" dangerouslySetInnerHTML={{ __html: value.content }}></dd>
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </dl>
      {/* User Terms Stop */}
    </section>
  );
}
