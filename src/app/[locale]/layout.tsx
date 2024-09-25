import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { locales } from "@/config";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
        className={`antialiased ${inter.className} mx-4 my-4 flex items-center justify-start sm:mx-8 md:mx-[5rem] lg:mx-[15rem] xl:mx-[25rem] sm:my-[2em] md:my-[3em] lg:my-[4em]`}
        >
        <NextIntlClientProvider messages  ={messages}>
          {children}
          <SpeedInsights/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Felipe Versiane",
  description: "Back-end Developer from Brazil",
};
