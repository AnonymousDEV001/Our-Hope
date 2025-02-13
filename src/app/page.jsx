import Hero from "@/components/Hero/Hero";
import Steps from "@/components/Steps/Steps";

export default function Home() {
  return (
    <div className="px-8">
    <Hero/>
    <div className="my-16"></div>
    <h1 className="text-4xl font-bold text-center">How It Works (Simple 3-Step Process)</h1>
    <Steps/>
    <div className="my-16"></div>
    </div>
  );
}
