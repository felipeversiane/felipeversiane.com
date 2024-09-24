'use client';

import { useTranslations } from "next-intl";
import { Button } from "../button";
import { email, phone } from "@/config";

export default function MainCTA() {
  const t = useTranslations("pages.cta");

  return (
      <div className="w-full h-fit p-2 flex items-center space-y-2 justify-center flex-col rounded-lg">
        <span className="font-semibold text-4xl flex items-center flex-col justify-center">
          <h2 className="bg-gradient-to-b from-primary to-foreground bg-clip-text text-transparent">
            {t("title_one")}
          </h2>
          <h2>{t("title_two")}</h2>
        </span>
        <p className="text-md text-secondary">{t("description")}</p>
        <div className="pt-3 flex space-x-4 items-center justify-center">
          <Button
            message={t("email")}
            variant="normal"
            onClick={() => (window.location.href = `mailto:${email}`)}
          />
          <Button
            message={t("message")}
            variant="bordered"
            onClick={() => (window.location.href = `tel:${phone}`)}
          />
        </div>
      </div>
  );
}
