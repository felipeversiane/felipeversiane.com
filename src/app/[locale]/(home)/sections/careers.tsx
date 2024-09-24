"use client";

import { CareerCard } from "@/components/app/card";
import { CareerProps } from "@/config";
import { useTranslations } from "next-intl";

export default function Careers() {
  const t = useTranslations("pages.careers");
  const jobs: CareerProps[] = t.raw("jobs");

  return (
    <section className="flex flex-col items-start justify-start space-y-10 w-full">
      <div className="space-y-2">
        <h2 className="text-2xl font-medium -mx-1.5">{t("title")}</h2>
        <p className="text-secondary text-md font-regular">
          {t("description")}
        </p>
      </div>
      <div className="w-full space-y-10">
        {jobs.map((job: any, index: number) => (
          <CareerCard
            key={index}
            title={job.title}
            enterprise={job.enterprise}
            enterprise_url={job.enterprise_url}
            begin={job.begin}
            end={job.end}
            location={job.location}
            now={job.now}
          />
        ))}
      </div>
    </section>
  );
}
