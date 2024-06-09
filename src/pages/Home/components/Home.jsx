import Boost from "./Boost";
import Hero from "./Hero";
import LinkGenerator from "./LinkGenerator";
import Statistic from "./Statistic";
export default function Home() {
  return (
    <section>
      <Hero />
      <LinkGenerator />
      <Statistic />
      <Boost />
    </section>
  );
}
