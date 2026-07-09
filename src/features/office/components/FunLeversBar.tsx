"use client";

import { useState, useCallback } from "react";

type Lever = {
  id: string;
  label: string;
  icon: string;
  active: boolean;
  description: string;
};

const LEVERS: Lever[] = [
  { id: "coffee", label: "Coffee", icon: "☕", active: false, description: "Speed up agents" },
  { id: "deploy", label: "Deploy", icon: "🚀", active: false, description: "Fake deploy animation" },
  { id: "disco", label: "Disco", icon: "🪩", active: false, description: "Disco lighting" },
  { id: "rain", label: "Rain", icon: "🌧️", active: false, description: "Make it rain in the office" },
  { id: "print", label: "Print", icon: "🖨️", active: false, description: "Screenshot the office" },
  { id: "neon", label: "Neon", icon: "💜", active: false, description: "Cyberpunk mode" },
  { id: "zen", label: "Zen", icon: "🧘", active: false, description: "Calm the office down" },
  { id: "mystery", label: "???", icon: "🎰", active: false, description: "Random easter egg" },
];

export function FunLeversBar() {
  const [levers, setLevers] = useState<Lever[]>(LEVERS);

  const toggleLever = useCallback((id: string) => {
    setLevers((prev) =>
      prev.map((l) => (l.id === id ? { ...l, active: !l.active } : l))
    );
  }, []);

  return (
    <div className="flex items-center gap-1 px-3 py-2 bg-zinc-900/80 backdrop-blur border-t border-zinc-800 overflow-x-auto">
      <span className="text-xs text-zinc-500 mr-2 font-mono uppercase tracking-wider shrink-0">
        Controls
      </span>
      {levers.map((lever) => (
        <button
          key={lever.id}
          onClick={() => toggleLever(lever.id)}
          title={lever.description}
          className={`
            group flex flex-col items-center gap-0.5 px-2 py-1 rounded min-w-[44px]
            transition-all duration-200 shrink-0
            ${lever.active
              ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_8px_rgba(245,158,11,0.3)]"
              : "bg-zinc-800 text-zinc-500 border border-zinc-700 hover:border-zinc-600 hover:text-zinc-400"
            }
          `}
        >
          <span className={`text-lg transition-transform ${lever.active ? "scale-110" : "group-hover:scale-105"}`}>
            {lever.icon}
          </span>
          <span className="text-[10px] font-mono uppercase tracking-wider leading-none">
            {lever.label}
          </span>
        </button>
      ))}
    </div>
  );
}
