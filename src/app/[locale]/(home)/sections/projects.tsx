"use client";

import { ProjectCard } from "@/components/app/card";
import { ProjectProps } from "@/config";
import { useTranslations } from "use-intl";

export default function Projects() {
  const t = useTranslations("pages.projects");
  const projects:ProjectProps[] = t.raw("projects");

  return (
    <div className="flex flex-col items-start justify-start space-y-8 w-full">
      <div className="space-y-2">
        <h2 className="text-2xl font-medium -mx-1.5">{t("title")}</h2>
        <p className="text-secondary text-md font-regular">{t("description")}</p>
      </div>
      <ul className="flex flex-col space-y-4 w-full">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            tags={project.tags}
            description={project.description}
            url={project.url}
          />
        ))}
      </ul>
    </div>
  );
}
