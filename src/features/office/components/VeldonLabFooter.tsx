"use client";

import { useState } from "react";
import { FunLeversBar } from "./FunLeversBar";
import { ProjectTicker } from "./ProjectTicker";

type GuestbookEntry = {
  name: string;
  message: string;
  time: number;
};

export function VeldonLabFooter() {
  const [showGuestbook, setShowGuestbook] = useState(false);
  const [entries, setEntries] = useState<GuestbookEntry[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem("veldolab-guestbook");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const signGuestbook = () => {
    if (!message.trim()) return;
    const entry: GuestbookEntry = {
      name: name.trim() || "Anonymous",
      message: message.trim(),
      time: Date.now(),
    };
    const updated = [entry, ...entries].slice(0, 50);
    setEntries(updated);
    localStorage.setItem("veldolab-guestbook", JSON.stringify(updated));
    setName("");
    setMessage("");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      {/* Project ticker — top row */}
      <ProjectTicker />

      {/* Levers bar — middle row */}
      <FunLeversBar />

      {/* Action strip — bottom row */}
      <div className="flex items-center gap-3 px-4 py-2 bg-zinc-950/90 backdrop-blur border-t border-zinc-800">
        {/* Talk to Veronica */}
        <button
          onClick={() => {
            // Opens chat with Veronica agent
            const chatBtn = document.querySelector('[aria-label="Open chat"]') as HTMLButtonElement;
            chatBtn?.click();
            // Dispatch event to switch to Veronica agent
            window.dispatchEvent(new CustomEvent("veldolab:talk-to-veronica"));
          }}
          className="flex items-center gap-2 px-3 py-1.5 rounded bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 transition-colors text-xs font-mono uppercase tracking-wider"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          Talk to Veronica
          <span className="text-green-600 text-[10px]">ONLINE</span>
        </button>

        {/* Book a call */}
        <a
          href="https://veldonlab.com/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300 hover:bg-zinc-700 transition-colors text-xs font-mono uppercase tracking-wider"
        >
          Book a Call
        </a>

        {/* Guestbook */}
        <button
          onClick={() => setShowGuestbook(!showGuestbook)}
          className={`px-3 py-1.5 rounded border transition-colors text-xs font-mono uppercase tracking-wider ${
            showGuestbook
              ? "bg-purple-500/20 border-purple-500/40 text-purple-300"
              : "bg-zinc-800 border-zinc-700 text-zinc-400 hover:bg-zinc-700"
          }`}
        >
          📖 Guestbook {entries.length > 0 && `(${entries.length})`}
        </button>

        <div className="flex-1" />

        {/* Powered by */}
        <span className="text-[10px] text-zinc-600 font-mono">
          VELDON LAB · EST 2024
        </span>
      </div>

      {/* Guestbook panel */}
      {showGuestbook && (
        <div className="absolute bottom-full left-0 right-0 max-h-64 overflow-y-auto bg-zinc-950/95 backdrop-blur border-t border-purple-500/30 p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-purple-400">
              📖 Sign Our Guestbook
            </h3>
            <span className="text-[10px] text-zinc-600 font-mono">
              {entries.length} signatures
            </span>
          </div>

          {/* Sign form */}
          <div className="flex gap-2 mb-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="your name"
              className="flex-1 bg-zinc-900 border border-zinc-700 rounded px-2 py-1 text-xs text-zinc-300 font-mono placeholder:text-zinc-600 focus:border-purple-500/50 focus:outline-none"
              maxLength={30}
            />
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && signGuestbook()}
              placeholder="leave a message..."
              className="flex-[2] bg-zinc-900 border border-zinc-700 rounded px-2 py-1 text-xs text-zinc-300 font-mono placeholder:text-zinc-600 focus:border-purple-500/50 focus:outline-none"
              maxLength={120}
            />
            <button
              onClick={signGuestbook}
              disabled={!message.trim()}
              className="px-3 py-1 rounded bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-mono hover:bg-purple-500/30 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              Sign
            </button>
          </div>

          {/* Entries */}
          <div className="space-y-1.5">
            {entries.length === 0 && (
              <p className="text-xs text-zinc-600 font-mono italic">
                No signatures yet. Be the first.
              </p>
            )}
            {entries.slice(0, 10).map((entry, i) => (
              <div
                key={entry.time}
                className="flex gap-2 text-xs animate-in fade-in slide-in-from-bottom-2"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span className="text-purple-500 font-mono shrink-0">
                  {entry.name}:
                </span>
                <span className="text-zinc-400 font-mono">{entry.message}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
