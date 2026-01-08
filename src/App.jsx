import { useState } from "react";
import { IntroLogo } from "./components/IntroLogo";
import Home from "./pages/Home";

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <IntroLogo onFinish={() => setIntroDone(true)} />}
      {introDone && <Home />}
    </>
  );
}
