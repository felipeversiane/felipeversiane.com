'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { appLocales } from "@/config";
import { Locale } from "@/navigation";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/navigation";

export default function LangSwitcher() {
  const t = useTranslations("config.lang");
  const currentLocale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-md p-2.5 hover:bg-border-secondary transition-all duration-300 ease-in-out">
        <Image
          src="icons/sheet/translation-icon.svg"
          alt="Translate Icon"
          width={19}
          height={19}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {appLocales.map(({ name, src, locale }) => (
          <DropdownMenuItem
            key={name}
            onClick={() => {
              router.push(pathname, { locale });
            }}
          >
            <Image
              src={src}
              alt={t(name)}
              width={19}
              height={19}
              className="mr-2"
            />
            {t(name)}
            {name === currentLocale.toLowerCase() && (
              <Image
                src="icons/sheet/check-icon.svg"
                alt="Selected Icon"
                width={12}
                height={12}
                className="ml-3"
              />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
