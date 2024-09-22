'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useLocale } from 'next-intl';

interface ResumeButtonProps {
  className?: string;
}

export default function ResumeButton({ className = '' }: ResumeButtonProps) {
  const t = useTranslations('pages.home.resume');
  const locale = useLocale();

  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      if (event.key.toLowerCase() === 'q' && event.ctrlKey) {
        downloadResume();
      }
    }
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const downloadResume = () => {
    const resumeFile = locale === 'en-US' ? '/resume/resume_en.pdf' : '/resume/resume_pt.pdf';
    window.open(resumeFile, '_blank');
  };

  return (
    <Link 
      href="#" 
      onClick={downloadResume} 
      className={`py-2 px-4 group w-fit h-fit transition-colors hover:bg-tertiary duration-300 ease-in-out rounded-lg text-sm text-primary-foreground flex items-center justify-start gap-2 ${className}`}
    >
      <span>{t("press")}</span>
      <div className="flex items-center justify-center gap-1">
        <span className="px-1 text-md py-0.5 rounded-sm transition-colors duration-300 ease-in-out group-hover:text-background group-hover:bg-foreground bg-border flex items-center justify-center">
          CTRL
        </span>
        <span className="px-1 py-0.5 rounded-sm transition-colors duration-300 ease-in-out group-hover:text-black group-hover:bg-white bg-border flex items-center justify-center">
          Q
        </span>
      </div>
      <span>{t("to_resume")}</span>
      <Image
        height={20}
        width={20}
        src="/icons/sheet/arrow-right-icon.svg"
        alt="Arrow Right Icon"
        className="group-hover:translate-x-1 transition-transform duration-300 ease-in-out"
      />
    </Link>
  );
}
