import { Locale } from "@/navigation";

export const locales = ['pt-BR', 'en-US'] as const;

export type AppLocale = {
    name: string;
    src: string;
    locale:Locale,
  };
  
  export const appLocales: AppLocale[] = [
    {  name: "pt-br", src: "/icons/flags/brazil-flag.svg",locale:"pt-BR" },
    {  name: "en-us", src: "/icons/flags/eua-flag.svg",locale:'en-US' },
  ];
  