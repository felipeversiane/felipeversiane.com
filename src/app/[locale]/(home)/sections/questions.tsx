import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { useTranslations } from "next-intl";
  
  export default function Questionss() {
    const t = useTranslations("pages.questions");
    const questions = t.raw("questions");   
    return (
      <section className="flex flex-col items-start justify-start space-y-4 w-full">
        <div className="space-y-1">
          <h2 className="text-3xl font-medium leading-[1.2] bg-gradient-to-b from-quartiary to-foreground bg-clip-text text-transparent ">{t("title")}</h2>
          <p className="text-secondary text-md font-regular">{t("description")}</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {questions.map((question: any, index: number) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{question.name}</AccordionTrigger>
              <AccordionContent>{question.response}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    );
  }
  