import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { locales } from "@/config";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  const messages = useMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`antialised ${inter.className} mx-[250px] my-[60px] flex items-center justify-start`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Felipe Versiane",
  description: "Back-end Developer from Brazil",
};
