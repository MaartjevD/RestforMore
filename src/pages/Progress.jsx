import React from "react";
import Streak from "../../componenten/streaks";
import SleepTracker from "../components/sleep-tracker";
import SleepCard from "../../componenten/educatie";

export default function Progress() {
  return (
    <main>
      <div style={{ padding: "16px" }}>
        <Streak />
      </div>

      <div style={{ padding: "16px" }}>
        <SleepTracker />
      </div>

      <SleepCard />
    </main>
  );
}
