import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("example");

  return (
    <div className="">
      {t('text')}
    </div>
  );
}
