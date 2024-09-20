import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialised ${inter.className} mx-[250px] my-[60px] flex items-center justify-start`}
      >
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Felipe Versiane",
  description: "Back-end Developer from Brazil",
};
