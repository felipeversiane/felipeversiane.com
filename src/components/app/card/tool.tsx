import { ToolProps } from "@/config/tool";
import Image from "next/image";

export default function ToolCard({
  name,
  type,
  icon
}: ToolProps) {
  return (
    <div className="p-2 space-x-2 flex items-center border border-border-secondary justify-start bg-card hover:bg-card-hover rounded-lg transition-all duration-300 ease-in-out">
      <Image src={icon} alt={name} width={40} height={40} className="flex-shrink-0" />
      <div className="flex select-none flex-col items-start justify-start ml-2">
        <h2 className="text-md font-regular overflow-hidden whitespace-nowrap">{name}</h2>
        <p className="text-sm text-secondary font-regular overflow-hidden whitespace-nowrap">{type}</p>
      </div>
    </div>
  );
}
