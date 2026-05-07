import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/home";
import Sleep from "./pages/Sleep";
import Progress from "./pages/progress";
import Account from "./pages/account";
import Onboarding from "../componenten/onboarding.jsx";

function App() {
  return (
    <>
      <Onboarding />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sleep" element={<Sleep />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;