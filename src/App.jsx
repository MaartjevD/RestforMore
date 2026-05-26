import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Onboarding from "./pages/onboarding-page";
import Home from "./pages/home";
import Sleep from "./pages/Sleep";
import AlarmSound from "./components/AlarmSound";
import Progress from "./pages/Progress";
import Account from "./pages/account";

function App() {
  return (
    <Layout>
      <Onboarding />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sleep" element={<Sleep />} />
        <Route path="/alarm" element={<AlarmSound />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Layout>
  );
}
export default App;
