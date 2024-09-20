import Link from "next/link";
import Image from "next/image";
import { SocialButtonProps } from "@/config";

export default function SocialButton({ name, url, href }: SocialButtonProps) {
  return (
    <Link
      target="blank"
      href={href}
      className="py-2.5 px-2.5 hover:bg-border-secondary rounded-lg shadow-lg border-[1.5px] border-border-secondary border-solid flex items-center bg-background  transition-all duration-300 ease-in-out"
    >
      <Image src={url} alt={name} width={19} height={19} />
    </Link>
  );
}
