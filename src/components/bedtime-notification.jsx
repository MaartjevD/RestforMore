// import React, { useEffect, useState } from "react";
// import "./sleep-notification.css";

// import MoonIcon from "../assets/moon.svg";

// export default function SleepNotification({ setBedtijd }) {
//   const [showNotification, setShowNotification] = useState(false);

//   useEffect(() => {
//     if (!setBedtijd) return;

//     const checkTime = () => {
//       const now = new Date();

//       const [hours, minutes] = setBedtijd.split(":").map(Number);

//       const sleepDate = new Date();
//       sleepDate.setHours(hours, minutes, 0, 0);

//       const notificationDate = new Date(sleepDate);
//       notificationDate.setMinutes(notificationDate.getMinutes() - 45);

//       const difference = notificationDate - now;

//       if (difference <= 0 && difference > -60000) {
//         setShowNotification(true);

//         setTimeout(() => {
//           setShowNotification(false);
//         }, 6000);
//       }
//     };

//     const interval = setInterval(checkTime, 1000);

//     return () => clearInterval(interval);
//   }, [setBedtijd]);

//   if (!showNotification) return null;

//   return (
//     <div className="rfm-notification">
//       <div className="rfm-icon-box">
//         <img src={MoonIcon} alt="" className="rfm-icon" />
//       </div>

//       <div className="rfm-text">
//         <strong>RFM</strong>
//         <span>Tijd om je telefoon weg te leggen</span>
//       </div>

//       <span className="rfm-now">nu</span>
//     </div>
//   );
// }

//
//
//zonder de timer, alleen de notificatie

// import React, { useState } from "react";
// import "./bedtime-notification.css";

// import MoonIcon from "../assets/moon.svg";

// export default function SleepNotification() {
//   const [showNotification] = useState(true);

//   if (!showNotification) return null;

//   return (
//     <div className="rfm-notification">
//       <div className="rfm-icon-box">
//         <img src={MoonIcon} alt="" className="rfm-icon" />
//       </div>

//       <div className="rfm-text">
//         <strong>RFM</strong>
//         <span>Tijd om je telefoon weg te leggen</span>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import "./sleep-notification.css";

import MoonIcon from "../assets/moon.svg";

export default function SleepNotification({ tijd }) {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (!tijd) return;

    const checkTime = () => {
      const now = new Date();

      const [hours, minutes] = tijd.split(":").map(Number);

      const sleepDate = new Date();
      sleepDate.setHours(hours, minutes, 0, 0);

      const notificationDate = new Date(sleepDate);
      notificationDate.setMinutes(notificationDate.getMinutes() - 45);

      const difference = notificationDate - now;

      if (difference <= 0 && difference > -60000) {
        setShowNotification(true);

        setTimeout(() => {
          setShowNotification(false);
        }, 6000);
      }
    };

    checkTime();

    const interval = setInterval(checkTime, 1000);

    return () => clearInterval(interval);
  }, [tijd]);

  if (!showNotification) return null;

  return (
    <div className="rfm-notification">
      <div className="rfm-icon-box">
        <img src={MoonIcon} alt="" className="rfm-icon" />
      </div>

      <div className="rfm-text">
        <strong>RFM</strong>
        <span>Tijd om je telefoon weg te leggen</span>
      </div>

      <span className="rfm-now">nu</span>
    </div>
  );
}
