"use client";

import { useState } from "react";

export default function Health() {
  const [energy, setEnergy] = useState("");
  const [soreness, setSoreness] = useState("");
  const [mood, setMood] = useState("");
  const [sleepHours, setSleepHours] = useState("");
  const [sleepQuality, setSleepQuality] = useState("");
  const [currentBook, setCurrentBook] = useState("");
  const [pagesRead, setPagesRead] = useState("");
  const [totalPages, setTotalPages] = useState("");
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#0f0f0f", color: "white", fontFamily: "system-ui, sans-serif" }}>

      {/* Sidebar */}
      <aside style={{ width: "220px", backgroundColor: "#161616", borderRight: "1px solid #2a2a2a", padding: "24px 16px", display: "flex", flexDirection: "column", gap: "4px", flexShrink: 0 }}>
        <div style={{ color: "#18453B", fontWeight: "700", fontSize: "18px", marginBottom: "32px", letterSpacing: "2px" }}>
          ✦ DALLAS
        </div>
        {[
          { icon: "🏠", label: "Dashboard", href: "/" },
          { icon: "🏋️", label: "Fitness", href: "/fitness" },
          { icon: "❤️", label: "Health", href: "/health" },
          { icon: "✈️", label: "Work/AF", href: "/work" },
          { icon: "💰", label: "Finance", href: "/finance" },
          { icon: "🥗", label: "Nutrition", href: "/nutrition" },
          { icon: "🔥", label: "75 Hard", href: "/seventyfivehard" },
          { icon: "💡", label: "Projects", href: "/projects" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 14px", borderRadius: "8px", border: "none", backgroundColor: item.href === "/health" ? "#18453B" : "transparent", color: item.href === "/health" ? "white" : "#888", fontSize: "14px", fontWeight: "500", cursor: "pointer", textDecoration: "none" }}
          >
            <span style={{ fontSize: "16px" }}>{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </aside>

      {/* Main */}
      <main style={{ flex: 1, padding: "40px", overflowY: "auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "32px" }}>
          <h1 style={{ fontSize: "28px", fontWeight: "700", margin: "0 0 6px 0" }}>❤️ Health</h1>
          <p style={{ color: "#555", fontSize: "14px", margin: 0 }}>Apple Health stats, daily wellness, and reading progress.</p>
        </div>

        {/* Apple Health Stats */}
        <div style={{ backgroundColor: "#161616", border: "1px solid #18453B", borderRadius: "12px", padding: "24px", marginBottom: "24px" }}>
          <div style={{ color: "#18453B", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>
            🍎 Apple Health — Today
          </div>
          <div style={{ display: "flex", gap: "40px" }}>
            {[
              { label: "Steps", value: "--" },
              { label: "Sleep", value: "--h" },
              { label: "Resting HR", value: "-- bpm" },
              { label: "Active Cal", value: "--" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ color: "#555", fontSize: "12px", marginBottom: "4px" }}>{stat.label}</div>
                <div style={{ fontSize: "22px", fontWeight: "700" }}>{stat.value}</div>
              </div>
            ))}
          </div>
          <div style={{ color: "#333", fontSize: "12px", marginTop: "12px" }}>
            Auto-sync via Apple Health Export coming soon
          </div>
        </div>

        {/* Daily Wellness Log */}
        <div style={{ backgroundColor: "#161616", border: "1px solid #2a2a2a", borderRadius: "12px", padding: "24px", marginBottom: "24px" }}>
          <div style={{ color: "#666", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "20px" }}>
            💚 Daily Wellness Log
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ color: "#666", fontSize: "12px" }}>Energy (1-10)</label>
              <input
                value={energy}
                onChange={(e) => setEnergy(e.target.value)}
                placeholder="e.g. 8"
                style={{ backgroundColor: "#0f0f0f", border: "1px solid #2a2a2a", borderRadius: "8px", padding: "10px 14px", color: "white", fontSize: "14px", outline: "none" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ color: "#666", fontSize: "12px" }}>Soreness (1-10)</label>
              <input
                value={soreness}
                onChange={(e) => setSoreness(e.target.value)}
                placeholder="e.g. 4"
                style={{ backgroundColor: "#0f0f0f", border: "1px solid #2a2a2a", borderRadius: "8px", padding: "10px 14px", color: "white", fontSize: "14px", outline: "none" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ color: "#666", fontSize: "12px" }}>Mood (1-10)</label>
              <input
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="e.g. 7"
                style={{ backgroundColor: "#0f0f0f", border: "1px solid #2a2a2a", borderRadius: "8px", padding: "10px 14px", color: "white", fontSize: "14px", outline: "none" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ color: "#666", fontSize: "12px" }}>Sleep Hours</label>
              <input
                value={sleepHours}
                onChange={(e) => setSleepHours(e.target.value)}
                placeholder="e.g. 7.5"
                style={{ backgroundColor: "#0f0f0f", border: "1px solid #2a2a2a", borderRadius: "8px", padding: "10px 14px", color: "white", fontSize: "14px", outline: "none" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ color: "#666", fontSize: "12px" }}>Sleep Quality (1-10)</label>
              <input
                value={sleepQuality}
                onChange={(e) => setSleepQuality(e.target.value)}
                placeholder="e.g. 7"
                style={{ backgroundColor: "#0f0f0f", border: "1px solid #2a2a2a", borderRadius: "8px", padding: "10px 14px", color: "white", fontSize: "14px", outline: "none" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px", gridColumn: "span 2" }}>
              <label style={{ color: "#666", fontSize: "12px" }}>Notes</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="How are you feeling today? Anything to note..."
                rows={3}
                style={{ backgroundColor: "#0f0f0f", border: "1px solid #2a2a2a", borderRadius: "8px", padding: "10px 14px", color: "white", fontSize: "14px", outline: "none", resize: "vertical" }}
              />
            </div>

          </div>

          <button
            onClick={handleSave}
            style={{ marginTop: "20px", padding: "12px 32px", backgroundColor: "#18453B", border: "none", borderRadius: "8px", color: "white", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}
          >
            {saved ? "✓ Saved!" : "Save Wellness Log"}
          </button>
        </div>

        {/* Reading Tracker */}
        <div style={{ backgroundColor: "#161616", border: "1px solid #2a2a2a", borderRadius: "12px", padding: "24px" }}>
          <div style={{ color: "#666", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "20px" }}>
            📚 Reading Progress
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px", gridColumn: "span 2" }}>
              <label style={{ color: "#666", fontSize: "12px" }}>Current Book</label>
              <input
                value={currentBook}
                onChange={(e) => setCurrentBook(e.target.value)}
                placeholder="Book title and author"
                style={{ backgroundColor: "#0f0f0f", border: "1px solid #2a2a2a", borderRadius: "8px", padding: "10px 14px", color: "white", fontSize: "14px", outline: "none" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ color: "#666", fontSize: "12px" }}>Pages Read</label>
              <input
                value={pagesRead}
                onChange={(e) => setPagesRead(e.target.value)}
                placeholder="e.g. 120"
                style={{ backgroundColor: "#0f0f0f", border: "1px solid #2a2a2a", borderRadius: "8px", padding: "10px 14px", color: "white", fontSize: "14px", outline: "none" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ color: "#666", fontSize: "12px" }}>Total Pages</label>
              <input
                value={totalPages}
                onChange={(e) => setTotalPages(e.target.value)}
                placeholder="e.g. 320"
                style={{ backgroundColor: "#0f0f0f", border: "1px solid #2a2a2a", borderRadius: "8px", padding: "10px 14px", color: "white", fontSize: "14px", outline: "none" }}
              />
            </div>

            {pagesRead && totalPages && (
              <div style={{ gridColumn: "span 2", backgroundColor: "#0f0f0f", borderRadius: "8px", padding: "12px 16px" }}>
                <div style={{ color: "#666", fontSize: "12px", marginBottom: "8px" }}>Progress</div>
                <div style={{ backgroundColor: "#2a2a2a", borderRadius: "4px", height: "8px", overflow: "hidden" }}>
                  <div style={{ backgroundColor: "#18453B", height: "100%", width: `${Math.min((parseInt(pagesRead) / parseInt(totalPages)) * 100, 100)}%`, borderRadius: "4px" }} />
                </div>
                <div style={{ color: "#18453B", fontSize: "12px", marginTop: "6px" }}>
                  {Math.round((parseInt(pagesRead) / parseInt(totalPages)) * 100)}% complete
                </div>
              </div>
            )}

          </div>
        </div>

      </main>
    </div>
  );
}
