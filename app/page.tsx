import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroSection from "@/components/home/HeroSection"
import BgGradient from "@/components/common/BgGradient";
import DemoSection from "@/components/home/DemoSection";

export default function Home() {
  return(
    <div className="relative w-full">
      <BgGradient className="" children/>
      <div className="flex flex-col">
        <HeroSection/>
        <DemoSection/>
      </div>
    </div>
  );
}
