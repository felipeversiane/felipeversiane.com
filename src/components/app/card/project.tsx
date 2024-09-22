import { ProjectProps } from "@/config";
import Image from "next/image";
import { TagBadge } from "../badge";

export default function ProjectCard({
  name,
  tags,
  description,
  url,
}: ProjectProps) {
  const handleCardClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div
      onClick={handleCardClick}
      className="relative -mx-[calc(18px)]  cursor-pointer border-border-secondary group bg-background hover:bg-card-hover p-4 flex items-center justify-between rounded-lg transition-all duration-300 ease-in-out"
    >
      <div className="flex flex-col items-start justify-start space-y-1">
        <div className="flex items-start justify-start">
          <span className="text-xl font-medium">{name}</span>
          <ul className="flex items-center justify-start ml-2 space-x-2">
            {tags.map((item, index) => (
              <TagBadge key={index} tag={item} />
            ))}
          </ul>
        </div>
        <p className="text-md font-regular text-secondary line-clamp-2">
          {description}
        </p>
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <Image
          src="/icons/sheet/link-icon.svg"
          alt="Link Icon"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}
