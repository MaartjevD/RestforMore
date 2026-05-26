import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Onboarding from "./pages/onboarding-page";
import Home from "./pages/home";
import Sleep from "./pages/Sleep";
import AlarmSound from "./components/AlarmSound";
import Progress from "./pages/Progress";
import Account from "./pages/account";

function App() {
  const [onboardingComplete, setOnboardingComplete] = useState(() => {
    try {
      return localStorage.getItem("onboardingComplete") === "true";
    } catch (e) {
      return false;
    }
  });

  const [naam, setNaam] = useState(() => {
    try {
      return localStorage.getItem("userNaam") || "";
    } catch (e) {
      return "";
    }
  });

  const [bedtijd, setBedtijd] = useState(() => {
    try {
      return localStorage.getItem("bedtijd") || "";
    } catch (e) {
      return "";
    }
  });

  const handleOnboardingComplete = ({ naam: newNaam, tijd }) => {
    setNaam(newNaam || "");
    setBedtijd(tijd || "");
    try {
      localStorage.setItem("userNaam", newNaam || "");
      localStorage.setItem("bedtijd", tijd || "");
      localStorage.setItem("onboardingComplete", "true");
    } catch (e) {
      // ignore
    }
    setOnboardingComplete(true);
  };

  if (!onboardingComplete) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home naam={naam} bedtijd={bedtijd} />} />
        <Route path="/sleep" element={<Sleep />} />
        <Route path="/alarm" element={<AlarmSound />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Layout>
  );
}

export default App;
