"use client";

import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

interface HeroVideoProps {
  src: string;
}

export default function HeroVideo({ src }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    const onPlaying = () => setLoaded(true);
    video.addEventListener("playing", onPlaying);

    if (Hls.isSupported()) {
      hls = new Hls({
        startLevel: -1,
        capLevelToPlayerSize: true,
      });
      hls.loadSource(src);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }

    return () => {
      video.removeEventListener("playing", onPlaying);
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Dark background placeholder — prevents LCP from waiting on video */}
      <div
        className={`absolute inset-0 bg-[#070612] transition-opacity duration-1000 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
        style={{ zIndex: 1 }}
      />
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover origin-left scale-[1.2]"
        style={{ marginLeft: "200px" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-10"
        style={{ background: "linear-gradient(to top, #070612, transparent)" }}
      />
    </div>
  );
}
