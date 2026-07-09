"use client";

import { useEffect, useState } from "react";

type TickerItem = {
  project: string;
  stat: string;
};

const DEFAULT_ITEMS: TickerItem[] = [
  { project: "PRIORZAP", stat: "247 claims defended this week" },
  { project: "SAMURAI", stat: "extension v2.1 live — 1,200+ users" },
  { project: "GALAXY", stat: "3 agents running on MacDaddy" },
  { project: "VFLOW 2.0", stat: "wireframe engine: 300 builds/hr" },
  { project: "VELDON LAB", stat: "16 projects · 1 team · 0 fluff" },
  { project: "MLLC", stat: "Phase 5 deploy complete" },
  { project: "SANCTUARY", stat: "dual-database sync live" },
  { project: "JACK", stat: "persistent soul arch stable" },
];

export function ProjectTicker() {
  const [items] = useState<TickerItem[]>(DEFAULT_ITEMS);

  return (
    <div className="relative overflow-hidden bg-black border-t border-zinc-800 h-7 flex items-center">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* Double render for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-2 text-xs">
            <span className="font-mono text-[10px] font-bold tracking-widest text-amber-500/80 bg-amber-500/10 px-1.5 py-0.5 rounded">
              {item.project}
            </span>
            <span className="text-zinc-400 font-mono text-[11px]">
              {item.stat}
            </span>
            <span className="text-zinc-700 mx-1">·</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
