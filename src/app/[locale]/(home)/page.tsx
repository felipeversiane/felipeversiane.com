import Header from "@/components/app/header/navbar";
import {HeroHome,Projects,Careers,Questions,Tools} from "./sections";
import { Footer } from "@/components/app/footer";
import { MainCTA } from "@/components/app/cta";


export default function Home() {

  return (
    <main className="space-y-24 w-full h-full">
      <Header/>
      <HeroHome/>
      <Projects/>
      <Careers/>
      <Tools/>
      <Questions/>
      <MainCTA/>
      <Footer/>
    </main>
  );
}
