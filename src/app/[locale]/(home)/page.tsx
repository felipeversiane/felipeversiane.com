import Header from "@/components/app/header/navbar";
import {HeroHome} from "./sections";



export default function Home() {

  return (
    <div className="space-y-24 w-full h-full">
      <Header/>
      <HeroHome/>
    </div>
  );
}
