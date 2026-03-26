"use client";

import { useEffect, useRef, useState } from "react";

interface HeroVideoProps {
  src: string;
}

export default function HeroVideo({ src }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Delay video loading until after page is interactive
  // Skip entirely on narrow screens where the video is barely visible
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    // Wait for page to be fully loaded + idle before loading video
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => setShouldLoad(true), { timeout: 3000 });
    } else {
      setTimeout(() => setShouldLoad(true), 1500);
    }
  }, []);

  // Dynamically import and initialize hls.js only when ready
  useEffect(() => {
    if (!shouldLoad) return;

    const video = videoRef.current;
    if (!video) return;

    let hls: { destroy: () => void } | null = null;

    const onPlaying = () => setLoaded(true);
    video.addEventListener("playing", onPlaying);

    import("hls.js").then((HlsModule) => {
      const Hls = HlsModule.default;

      if (Hls.isSupported()) {
        const hlsInstance = new Hls({
          startLevel: -1,
          capLevelToPlayerSize: true,
          maxBufferLength: 10,
          maxMaxBufferLength: 30,
        });
        hlsInstance.loadSource(src);
        hlsInstance.attachMedia(video);
        hls = hlsInstance;
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
      }
    });

    return () => {
      video.removeEventListener("playing", onPlaying);
      if (hls) hls.destroy();
    };
  }, [shouldLoad, src]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {shouldLoad && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className={`absolute inset-0 h-full w-full object-cover origin-left scale-[1.2] transition-opacity duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ marginLeft: "200px" }}
        />
      )}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-10"
        style={{ background: "linear-gradient(to top, #070612, transparent)" }}
      />
    </div>
  );
}
