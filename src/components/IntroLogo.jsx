import videoSrc from "../assets/video/videologoperro.mp4";

export default function IntroLogo({ onFinish, isBackground }) {
  return (
    <div className={`intro-video-container ${isBackground ? "video-as-bg" : ""}`}>
      <video
        src={videoSrc}
        autoPlay
        muted
        playsInline
        onEnded={onFinish} // El formulario aparece justo cuando acaba el video
        className="intro-video"
      />
      <div className="video-overlay"></div>
    </div>
  );
}