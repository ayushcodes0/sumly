import HeroSection from "@/components/home/HeroSection"
import BgGradient from "@/components/common/BgGradient";
import DemoSection from "@/components/home/DemoSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PricingSection from "@/components/home/PricingSection";

export default function Home() {
  return(
    <div className="relative w-full">
      <BgGradient className="" children/>
      <div className="flex flex-col">
        <HeroSection/>
        <DemoSection/>
        <HowItWorksSection/>
        <PricingSection/> 
      </div>
    </div>
  );
}
