"use client";

export default function Home() {
  const quotes = [
    "Job's not finished.",
    "Let's get to work.",
    "Be a Grundy.",
    "No days off.",
  ];

  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
      1000 / 60 / 60 / 24
  );
  const quote = quotes[dayOfYear % quotes.length];

  const navItems = [
    { icon: "🏠", label: "Dashboard" },
    { icon: "🏋️", label: "Training" },
    { icon: "🥗", label: "Nutrition" },
    { icon: "💚", label: "Wellness" },
    { icon: "🔥", label: "75 Hard" },
    { icon: "📚", label: "Reading" },
    { icon: "🎓", label: "School" },
    { icon: "💰", label: "Finance" },
    { icon: "❤️", label: "Health Stats" },
  ];

  const cards = [
    { icon: "🏋️", label: "Training", value: "No workout logged", sub: "Tap to log today" },
    { icon: "🥗", label: "Nutrition", value: "0 / 2,500 cal", sub: "No meals logged today" },
    { icon: "🔥", label: "75 Hard", value: "Day 1", sub: "0 / 5 tasks complete" },
    { icon: "💰", label: "Finance", value: "$0 spent", sub: "No expenses logged today" },
    { icon: "📚", label: "Reading", value: "No book active", sub: "Start tracking your reading" },
    { icon: "❤️", label: "Health Stats", value: "-- steps", sub: "Sync from Apple Health" },
  ];

  const wellness = [
    { label: "Energy", value: "--/10" },
    { label: "Soreness", value: "--/10" },
    { label: "Mood", value: "--/10" },
    { label: "Sleep Quality", value: "--/10" },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#0f0f0f", color: "white", fontFamily: "system-ui, sans-serif" }}>
      
      {/* Sidebar */}
      <aside style={{ width: "220px", backgroundColor: "#161616", borderRight: "1px solid #2a2a2a", padding: "24px 16px", display: "flex", flexDirection: "column", gap: "4px", flexShrink: 0 }}>
        <div style={{ color: "#18453B", fontWeight: "700", fontSize: "18px", marginBottom: "32px", letterSpacing: "2px" }}>
          ✦ DALLAS
        </div>
        {navItems.map((item) => (
          <button
            key={item.label}
            style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 14px", borderRadius: "8px", border: "none", backgroundColor: "transparent", color: "#888", fontSize: "14px", fontWeight: "500", cursor: "pointer", textAlign: "left", width: "100%" }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#18453B";
              (e.currentTarget as HTMLButtonElement).style.color = "white";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
              (e.currentTarget as HTMLButtonElement).style.color = "#888";
            }}
          >
            <span style={{ fontSize: "16px" }}>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </aside>

      {/* Main */}
      <main style={{ flex: 1, padding: "40px", overflowY: "auto" }}>
        
        {/* Header */}
        <div style={{ marginBottom: "36px" }}>
          <h1 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "6px", margin: "0 0 6px 0" }}>
            Welcome back, Dallas 👋
          </h1>
          <p style={{ color: "#18453B", fontSize: "16px", fontWeight: "600", margin: "0 0 4px 0" }}>
            &ldquo;{quote}&rdquo;
          </p>
          <p style={{ color: "#555", fontSize: "13px", margin: 0 }}>
            {today.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
          {cards.map((card) => (
            <div
              key={card.label}
              style={{ backgroundColor: "#161616", border: "1px solid #2a2a2a", borderRadius: "12px", padding: "24px", cursor: "pointer", transition: "border-color 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = "#18453B"}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = "#2a2a2a"}
            >
              <div style={{ color: "#666", fontSize: "12px", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "1px" }}>
                {card.icon} {card.label}
              </div>
              <div style={{ fontSize: "22px", fontWeight: "700", marginBottom: "6px" }}>
                {card.value}
              </div>
              <div style={{ color: "#555", fontSize: "13px" }}>
                {card.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Wellness Strip */}
        <div style={{ backgroundColor: "#161616", border: "1px solid #2a2a2a", borderRadius: "12px", padding: "24px" }}>
          <div style={{ color: "#666", fontSize: "12px", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "1px" }}>
            💚 Today&apos;s Wellness Check
          </div>
          <div style={{ display: "flex", gap: "40px" }}>
            {wellness.map((item) => (
              <div key={item.label}>
                <div style={{ color: "#555", fontSize: "12px", marginBottom: "4px" }}>{item.label}</div>
                <div style={{ fontSize: "20px", fontWeight: "700", color: "#18453B" }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
