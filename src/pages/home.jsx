import HomeHeader from "../components/HomeHeader";
import SleepTracker from "../components/sleep-tracker";
import SleepCard from "../../componenten/educatie";

export default function Home({ naam, bedtijd }) {
  return (
    <main>
      <HomeHeader naam={naam} bedtijd={bedtijd} />

      <SleepTracker />

      <section style={{ padding: "0 16px 24px 16px" }}>
        <h3>Hoe heb je vannacht geslapen?</h3>
        {/* reflectie wordt binnen SleepTracker afgehandeld; hier tonen we educatie */}
        <SleepCard />
      </section>
    </main>
  );
}
