import React, { useEffect, useRef, useState } from "react";

const IntroVideo = ({ finishIntro }) => {
  const [status, setStatus] = useState("initializing");
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    setStatus("loading");

    const onCanPlay = () => {
      setStatus("ready");
      video
        .play()
        .then(() => setStatus("playing"))
        .catch((err) => {
          console.error("Autoplay failed:", err);
        });
    };

    const onEnded = () => {
      setStatus("completed");
      setTimeout(() => finishIntro(), 300);
    };

    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("ended", onEnded);
    video.load();

    const fallbackTimeout = setTimeout(() => {
      finishIntro();
    }, 20000);

    return () => {
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("ended", onEnded);
      clearTimeout(fallbackTimeout);
    };
  }, [finishIntro]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      }}
    >
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundColor: "#000"
        }}
      >
        <source src="/intro_vedio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          color: "#666",
          fontSize: "10px",
          fontFamily: "monospace",
          zIndex: 10000,
          backgroundColor: "rgba(0,0,0,0.5)",
          padding: "8px",
          borderRadius: "3px",
          border: "1px solid #333",
          opacity: status === "completed" ? 0.3 : 0.6,
          transition: "opacity 0.3s ease"
        }}
      >
        <div>Status: <strong>{status}</strong></div>
      </div>
    </div>
  );
};

export default IntroVideo;
