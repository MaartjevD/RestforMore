import { useState } from "react";
import Onboarding from "../componenten/onboarding.jsx";

function App() {
  const [bedtijd, setBedtijd] = useState("");

  return <Onboarding setBedtijd={setBedtijd} />;
}
export default App;
