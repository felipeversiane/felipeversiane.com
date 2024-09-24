import { useTranslations } from "next-intl";

export default function Footer() {
    const currentYear = new Date().getFullYear(); 

  return (
    <div className="w-full flex items-start justify-between">
      <span>
        <p className="text-md text-secondary">© Felipe Versiane®™ {currentYear}</p>
      </span>
      <span>
        <p className="text-md text-secondary"> Next.js & Shadcn 💗</p>
      </span>
    </div>
  );
}
