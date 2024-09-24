import { ToolCard } from "@/components/app/card";
import { ToolProps } from "@/config";
import { useTranslations } from "next-intl";

export default function Tools() {
  const t = useTranslations("pages.tools");
  const tools:ToolProps[] = t.raw("tools")

  return (
    <section className="flex flex-col items-start justify-start space-y-10 w-full">
      <div className="space-y-1">
        <h2 className="text-3xl font-medium leading-[1.2] bg-gradient-to-b from-quartiary to-foreground bg-clip-text text-transparent">
          {t("title")}
        </h2>
        <p className="text-secondary text-md font-regular">
          {t("description")}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full">
        {tools.map((tool: any, index: number) => (
          <ToolCard
            key={index}
            name={tool.name}
            type={tool.type}
            icon={tool.icon}
          />
        ))}
      </div>
    </section>
  );
}
