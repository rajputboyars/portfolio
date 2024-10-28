import { About } from "@/components/About";
import { Button } from "@/components/Buttons";
import { FAQ } from "@/components/FAQ";
import { OurWorks } from "@/components/OurWorks";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black">
      <div className="flex flex-col items-center min-h-screen bg-black p-8 max-w-[1400px] m-auto">
        <div>
          <About />
        </div>
        <Services />
        <div>
          <Testimonials />
        </div>
        <div>
          <OurWorks />
        </div>
        <FAQ />
        <div className="flex space-x-4 p-8">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </div>
    </div>
  );
}
