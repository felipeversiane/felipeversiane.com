import { ResumeButton } from "@/components/app/button";
import { useTranslations } from "next-intl";

export default function HeroHome() {
  const t = useTranslations("pages.home");

  return (
    <div className="flex flex-col items-start justify-start space-y-4 w-full">
      <h3 className="relative flex items-center pl-5 font-light text-md text-sucess">
          <span className="ml-1">{t("available")}</span>
          <span className="absolute left-0 top-3 flex h-3 w-3 -translate-y-1/2 pl-1">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full pl-1 opacity-75 bg-sucess"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full pl-3 bg-sucess"></span>
          </span>
        </h3>
      <h1 className="w-full flex flex-col items-start justify-start text-[44px] font-semibold leading-none">
        <p>{t("first")}</p>
        <p className="bg-gradient-to-r from-secondary to-border bg-clip-text text-transparent leading-[1.2]">
          {t("secondary")}
        </p>
      </h1>
      <p className="font-light text-sm w-3/4 text-secondary">
        {t('description')}
      </p>
      <ResumeButton />
    </div>
  );
}
