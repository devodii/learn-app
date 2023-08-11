import { HeroSection } from "@/components/sections";
import { HowItWorks } from "@/components/sections";

export default function Home() {
  return (
    <div className="bg-zinc-900 text-gray-100">
      <div className="max-w-screen-2xl mx-auto flex  flex-col px-12 lg:px-24 pb-12 min-h-screen">
        <HeroSection />
        <HowItWorks />
      </div>
    </div>
  );
}
