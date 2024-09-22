"use client";

import { ResumeButton } from "@/components/app/button";
import { useTranslations } from "next-intl";

export default function Careers() {
  const t = useTranslations("pages.careers");

  return (
    <section className="flex flex-col items-start justify-start space-y-4 w-full">
      <div className="space-y-2">
        <h2 className="text-2xl font-medium -mx-1.5">{t("title")}</h2>
        <p className="text-secondary text-md font-regular">
          {t("description")}
        </p>
      </div>
    </section>
  );
}
