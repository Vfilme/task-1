import { About } from "@/widgets/about";
import { HomeMain } from "@/widgets/homeMain";
import { Portfolio } from "@/widgets/portfolio";
import { Services } from "@/widgets/services";
import { Testimonials } from "@/widgets/testimonials";

export default function Home() {
  return (
    <>
      <HomeMain />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
    </>
  );
}
