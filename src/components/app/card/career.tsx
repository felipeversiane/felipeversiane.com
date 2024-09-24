import { CareerProps } from "@/config";
import Link from "next/link";

export default function CareerCard({
  title,
  enterprise,
  enterprise_url,
  location,
  begin,
  end,
  now,
}: CareerProps) {
  return (
    <div className="w-full flex flex-col items-start justify-start space-y-1.5">
      <h3 className="font-medium text-xl">{title}</h3>
      <div className="flex items-center justify-start space-x-1">
        <Link
          className="hover:text-secondary text-md underline decoration-primary underline-offset-4 transition-colors duration-300 ease-in-out"
          href={enterprise_url}
          target="_blank"
        >
          {enterprise}
        </Link>
        <div className="text-md flex items-center justify-start space-x-1 text-secondary">
          <p>•</p>
          <p>{location}</p>
        </div>
      </div>
      <p className="text-md text-secondary space-x-1">
        <span>{begin}</span>
        <span>-</span>
        <span>{end}</span>
      </p>
    </div>
  );
}
