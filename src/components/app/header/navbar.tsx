import { SocialStack } from "../stack";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LangSwitcher } from "../button";
import { useLocale, useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("config.personal");
  const  locale  = useLocale(); 

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between w-full p-4">
      <Link href={`/${locale}`} className="flex gap-2.5 items-center justify-start">
        <Avatar className="shadow-lg">
          <AvatarImage src="/images/perfil.svg" width={60} height={60} />
          <AvatarFallback>FV</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start justify-start">
          <p className="gap-1.5 relative top-1 flex font-medium text-[17.5px]">
            <span>{t("first_name")}</span>
            <span>{t("secondary_name")}</span>
          </p>
          <p className="font-normal text-md text-primary">{t("index")}</p>
        </div>
      </Link>
      <div className="flex items-center justify-start space-x-4 mt-4 sm:mt-0">
        <SocialStack />
        <LangSwitcher />
      </div>
    </div>
  );
}
