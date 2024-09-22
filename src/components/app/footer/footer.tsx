import { useTranslations } from "next-intl";

export default function Footer() {
  return (
    <div className="w-full flex items-start justify-between">
      <span>
        <p className="text-md text-secondary">© Felipe Versiane®™ 2023</p>
      </span>
      <span>
        <p className="text-md text-secondary"> Next.js & Shadcn 💗</p>
      </span>
    </div>
  );
}
