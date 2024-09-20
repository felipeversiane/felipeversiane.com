import { SocialButton } from "../button";
import { SocialItems } from "@/config";

export default function SocialStack() {
  return (
    <div className="flex items-center space-x-4">
      {SocialItems.map((item, index) => (
        <SocialButton
          key={index}
          name={item.name}
          url={item.url}
          href={item.href}
        />
      ))}
    </div>
  );
}
