import { useState } from "react";

import QuickAccess from "../components/QuickAccess";
import LampToggle from "../components/lamp-toggle";
import AlarmsList from "../components/AlarmsList";
import WekkerComponent from "../components/WekkerComponent";
import AlarmSound from "../components/AlarmSound";
import Avondroutine from "../../componenten/avondroutine";

function Sleep() {
  const [view, setView] = useState("quick-access");

  return (
    <>
      {/* QUICK ACCESS */}

      {view === "quick-access" && (
        <QuickAccess
          onLampClick={() => setView("lamp")}
          onWekkerClick={() => setView("alarms-list")}
          onAvondroutineClick={() => setView("avondroutine")}
        />
      )}

      {/* LAMP */}

      {view === "lamp" && <LampToggle />}

      {/* ALARMS LIST */}

      {view === "alarms-list" && (
        <AlarmsList onAddAlarm={() => setView("wekker-component")} />
      )}

      {/* WEKKER COMPONENT */}

      {view === "wekker-component" && (
        <WekkerComponent
          onCancel={() => setView("alarms-list")}
          onSave={() => setView("alarms-list")}
          onOpenAlarmSound={() => setView("alarm-sound")}
        />
      )}

      {/* ALARM SOUND */}

      {view === "alarm-sound" && (
        <AlarmSound onBack={() => setView("wekker-component")} />
      )}

      {/* AVONDROUTINE */}

      {view === "avondroutine" && <Avondroutine />}
    </>
  );
}

export default Sleep;
