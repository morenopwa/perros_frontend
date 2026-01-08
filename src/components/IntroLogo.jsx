import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

import animationData from "../assets/lottie/intro.json";
import rugido from "../assets/audio/rugido.mp3";

export function IntroLogo({ onFinish }) {
  const audioRef = useRef(null);
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("introSeen");

    if (seen) {
      onFinish();
    } else {
      sessionStorage.setItem("introSeen", "true");
      setCanPlay(true);
    }
  }, [onFinish]);

  const handleUserInteraction = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.8;
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const handleComplete = () => {
    onFinish();
  };

  if (!canPlay) return null;

  return (
    <div style={styles.overlay} onClick={handleUserInteraction}>
      <audio ref={audioRef} src={rugido} preload="auto" />

      <Lottie
        animationData={animationData}
        loop={false}
        autoplay
        onComplete={handleComplete}
        style={{ width: 320, maxWidth: "80vw" }}
      />

      <p style={styles.text}>TOCA PARA DESATAR A LA BESTIA</p>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "#000",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    cursor: "pointer",
  },
  text: {
    marginTop: 20,
    fontSize: 12,
    letterSpacing: 2,
    color: "#aaa",
  },
};
