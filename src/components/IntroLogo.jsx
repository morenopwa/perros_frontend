import { useEffect } from "react";
import video from "../assets/video/videologoperro.mp4";
import rugido from "../assets/audio/rugido.mp3";
import "../styles/global.css";

export default function IntroLogo({ onFinish }) {
  useEffect(() => {
    const audio = new Audio(rugido);
    audio.volume = 0.9;

    // Intentamos reproducir el audio
    audio.play().catch(() => {
      console.warn("🔇 Autoplay de audio bloqueado");
    });

    // Duración de la intro (ajústala a tu video)
    const timer = setTimeout(() => {
      onFinish();
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="intro-video-container">
      <video
        src={video}
        autoPlay
        muted
        playsInline
        className="intro-video"
      />
    </div>
  );
}
