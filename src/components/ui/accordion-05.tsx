import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { company } from "@/data/content";

export function Accordion05() {
  const [openItem, setOpenItem] = useState<string>("");

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        value={openItem}
        onValueChange={setOpenItem}
      >
        {company.values.map((value, i) => (
          <AccordionItem
            value={String(i + 1)}
            key={value.title}
            className="last:border-b border-line"
            onMouseEnter={() => setOpenItem(String(i + 1))}
          >
            <AccordionTrigger className="text-center overflow-hidden text-ink-300 duration-200 hover:no-underline cursor-pointer -space-y-6 data-[state=open]:space-y-0 data-[state=open]:text-ink-900 [&>svg]:hidden">
              <div className="flex flex-1 items-start justify-center gap-4">
                <p className="text-xs">0{i + 1}</p>
                <h1 className="uppercase relative text-center text-3xl md:text-5xl font-display font-medium tracking-tight">
                  {value.title}
                </h1>
              </div>
            </AccordionTrigger>

            <AccordionContent className="text-ink-500 pb-6 px-6 md:px-20 text-center">
              {value.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
