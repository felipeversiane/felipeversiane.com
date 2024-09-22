import Header from "@/components/app/header/navbar";
import {HeroHome,Projects} from "./sections";
import { Footer } from "@/components/app/footer";
import Careers from "./sections/careers";
import { MainCTA } from "@/components/app/cta";


export default function Home() {

  return (
    <main className="space-y-24 w-full h-full">
      <Header/>
      <HeroHome/>
      <Projects/>
      {/* <Careers/> */}
      <MainCTA/>
      <Footer/>
    </main>
  );
}
