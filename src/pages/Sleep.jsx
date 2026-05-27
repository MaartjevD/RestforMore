import { useState } from "react";

import QuickAccess from "../components/QuickAccess";
import LampToggle from "../components/lamp-toggle";
import AlarmsList from "../components/AlarmsList";
import WekkerComponent from "../components/WekkerComponent";
import AlarmSound from "../components/AlarmSound";

function Sleep() {
  const [view, setView] = useState("quick-access");

  return (
    <>
      {view === "quick-access" && (
        <QuickAccess
          onLampClick={() => setView("lamp")}
          onWekkerClick={() => setView("alarms-list")}
          onAvondroutineClick={() => setView("avondroutine")}
        />
      )}

      {view === "lamp" && <LampToggle />}

      {view === "alarms-list" && (
        <AlarmsList onAddAlarm={() => setView("wekker-component")} />
      )}

      {view === "wekker-component" && (
        <WekkerComponent
          onCancel={() => setView("alarms-list")}
          onSave={() => setView("alarms-list")}
          onOpenAlarmSound={() => setView("alarm-sound")}
        />
      )}

      {view === "alarm-sound" && (
        <AlarmSound onBack={() => setView("wekker-component")} />
      )}
    </>
  );
}

export default Sleep;
