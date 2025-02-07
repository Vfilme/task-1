import { About } from "@/widgets/about";
import { HomeMain } from "@/widgets/homeMain";
import { Portfolio } from "@/widgets/portfolio";
import { Services } from "@/widgets/services";

export default function Home() {
  return (
    <>
      <HomeMain />
      <About />
      <Services />
      <Portfolio />
    </>
  );
}
