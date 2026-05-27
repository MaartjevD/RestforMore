import HomeHeader from "../components/HomeHeader";
import SleepTracker from "../components/sleep-tracker";
import SleepCard from "../../componenten/educatie";
import Avondroutine from "../../componenten/avondroutineEdit";

export default function Home({ naam, bedtijd }) {
  return (
    <main>
      <HomeHeader naam={naam} bedtijd={bedtijd} />

      <SleepTracker />
      <Avondroutine />

      <SleepCard />
    </main>
  );
}
