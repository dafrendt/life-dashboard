const quotes = [
  "Job's not finished.",
  "Let's get to work.",
  "Be a Grundy.",
  "No days off.",
];

export default function Home() {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
      1000 /
      60 /
      60 /
      24
  );
  const quote = quotes[dayOfYear % quotes.length];

  return (
    <div className="flex min-h-screen bg-[#0f0f0f] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1a1a1a] border-r border-[#2a2a2a] p-6 flex flex-col gap-2">
        <div className="text-[#18453B] font-bold text-xl mb-8">☆ DALLAS</div>
        {[
          { icon: "🏠", label: "Dashboard" },
          { icon: "🏋️", label: "Training" },
          { icon: "🥗", label: "Nutrition" },
          { icon: "💚", label: "Wellness" },
          { icon: "🔥", label: "75 Hard" },
          { icon: "📚", label: "Reading" },
          { icon: "🎓", label: "School" },
          { icon: "💰", label: "Finance" },
          { icon: "❤️", label: "Health Stats" },
        ].map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#18453B] hover:text-white transition-all text-gray-400 text-sm font-medium"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-1">Welcome back, Dallas 👋</h1>
          <p className="text-[#18453B] text-lg font-medium">"{quote}"</p>
          <p className="text-gray-500 text-sm mt-1">
            {today.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
            <div className="text-gray-400 text-sm mb-1">🏋️ Training</div>
            <div className="text-2xl font-bold">No workout logged</div>
            <div className="text-gray-500 text-sm mt-1">Tap to log today's session</div>
          </div>

          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
            <div className="text-gray-400 text-sm mb-1">🥗 Nutrition</div>
            <div className="text-2xl font-bold">0 / 2,500 cal</div>
            <div className="text-gray-500 text-sm mt-1">No meals logged today</div>
          </div>

          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
            <div className="text-gray-400 text-sm mb-1">🔥 75 Hard</div>
            <div className="text-2xl font-bold">Day 1</div>
            <div className="text-gray-500 text-sm mt-1">0 / 5 tasks complete</div>
          </div>

          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
            <div className="text-gray-400 text-sm mb-1">💰 Finance</div>
            <div className="text-2xl font-bold">$0 spent</div>
            <div className="text-gray-500 text-sm mt-1">No expenses logged today</div>
          </div>

          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
            <div className="text-gray-400 text-sm mb-1">📚 Reading</div>
            <div className="text-2xl font-bold">No book active</div>
            <div className="text-gray-500 text-sm mt-1">Start tracking your reading</div>
          </div>

          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
            <div className="text-gray-400 text-sm mb-1">❤️ Health Stats</div>
            <div className="text-2xl font-bold">-- steps</div>
            <div className="text-gray-500 text-sm mt-1">Sync from Apple Health</div>
          </div>
        </div>

        {/* Wellness Strip */}
        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
          <div className="text-gray-400 text-sm mb-3">💚 Today's Wellness Check</div>
          <div className="flex gap-6">
            <div>
              <div className="text-gray-500 text-xs mb-1">Energy</div>
              <div className="text-white font-bold">--/10</div>
            </div>
            <div>
              <div className="text-gray-500 text-xs mb-1">Soreness</div>
              <div className="text-white font-bold">--/10</div>
            </div>
            <div>
              <div className="text-gray-500 text-xs mb-1">Mood</div>
              <div className="text-white font-bold">--/10</div>
            </div>
            <div>
              <div className="text-gray-500 text-xs mb-1">Sleep Quality</div>
              <div className="text-white font-bold">--/10</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}