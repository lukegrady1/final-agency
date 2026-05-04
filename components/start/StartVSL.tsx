"use client";

import { Play } from "lucide-react";
import BlurIn from "../BlurIn";

export default function StartVSL() {
  return (
    <BlurIn>
      <div className="relative max-w-4xl mx-auto">
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-card border border-card-border">
          {/*
            TODO: Replace this placeholder with your VSL.
            Options:
              1. Mux/HLS — drop in <HeroVideo />-style player pointing at a Mux playback URL.
              2. YouTube/Vimeo — replace the inner div with an <iframe src="..." className="absolute inset-0 w-full h-full" allow="autoplay; encrypted-media" allowFullScreen />
              3. MP4 — <video src="/your-vsl.mp4" controls poster="/vsl-poster.jpg" className="absolute inset-0 w-full h-full object-cover" />
          */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(108,106,246,0.18) 0%, rgba(7,6,18,0.6) 60%, #070612 100%)",
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-4">
              <Play className="w-8 h-8 text-white translate-x-0.5" />
            </div>
            <p className="text-white/70 text-sm font-medium">
              VSL placeholder — drop your video here
            </p>
            <p className="text-white/40 text-xs mt-1">
              See <code className="text-accent-light">components/start/StartVSL.tsx</code>
            </p>
          </div>
        </div>
        <p className="text-center text-white/40 text-xs mt-4">
          Watch this 2-minute video before booking your call.
        </p>
      </div>
    </BlurIn>
  );
}
