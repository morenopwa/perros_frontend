import { useState } from "react";
import IntroLogo from "../components/IntroLogo";
import HangaroundForm from "../components/HangaroundForm";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroLogo onFinish={() => setShowIntro(false)} />}
      {!showIntro && <HangaroundForm />}
    </>
  );
}
