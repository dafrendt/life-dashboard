"use client";

import { useState } from "react";

const preloadedWorkouts = [
  {
    name: "Murph",
    exercises: "1 mile run, 100 pull-ups, 200 push-ups, 300 squats, 1 mile run",
  },
  {
    name: "Push Day",
    exercises: "Bench Press, Overhead Press, Tricep Dips, Lateral Raises",
  },
  {
    name: "Pull Day",
    exercises: "Deadlift, Pull-ups, Barbell Rows, Bicep Curls",
  },
  {
    name: "Leg Day",
    exercises: "Squat, Leg Press, Romanian Deadlift, Calf Raises",
  },
];

export default function Fitness() {
  const [selectedWorkout, setSelectedWorkout] = useState("");
  const [exercises, setExercises] = useState("");
  const [duration, setDuration] = useState("");
  const [effort, setEffort] = useState("");
  const [murphTime, setMurphTime] = useState("");
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const handlePreload = (workout: { name: string; exercises: string }) => {
    setSelectedWorkout(workout.name);
    setExercises(workout.exercises);
  };

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
            style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 14px", borderRadius: "8px", border: "none", backgroundColor: item.href === "/fitness" ? "#18453B" : "transparent", color: item.href === "/fitness" ? "white" : "#888", fontSize: "14px", fontWeight: "500", cursor: "pointer", textDecoration: "none" }}
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
          <h1 style={{ fontSize: "28px", fontWeight: "700", margin: "0 0 6px 0" }}>🏋️ Fitness</h1>
          <p style={{ color: "#555", fontSize: "14px", margin: 0 }}>Log workouts, track progress, chase the Murph.</p>
        </div>

        {/* Murph Tracker */}
        <div style={{ backgroundColor: "#161616", border: "1px solid #18453B", borderRadius: "12px", padding: "24px", marginBottom: "24px" }}>
          <div style={{ color: "#18453B", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>
            🎯 Murph Progression
          </div>
          <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
            <div>
              <div style={{ color: "#555", fontSize: "12px", marginBottom: "4px" }}>Best Time</div>
              <div style={{ fontSize: "24px", fontWeight: "700" }}>--:--</div>
            </div>
            <div>
              <div style={{ color: "#555", fontSize: "12px", marginBottom: "4px" }}>Goal</div>
              <div style={{ fontSize: "24px", fontWeight: "700", color: "#18453B" }}>Sub 60:00</div>
            </div>
            <div>
              <div style={{ color: "#555", fontSize: "12px", marginBottom: "4px" }}>Last Murph</div>
              <div style={{ fontSize: "24px", fontWeight: "700" }}>--</div>
            </div>
          </div>
        </div>

        {/* Preloaded Workouts */}
        <div style={{ marginBottom: "24px" }}>
          <div style={{ color: "#666", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "12px" }}>
            Quick Load Workout
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {preloadedWorkouts.map((workout) => (
              <button
                key={workout.name}
                onClick={() => handlePreload(workout)}
                style={{ padding: "10px 20px", borderRadius: "8px", border: "1px solid #2a2a2a", backgroundColor: selectedWorkout === workout.name ? "#18453B" : "#161616", color: selectedWorkout === workout.name ? "white" : "#888", fontSize: "14px", cursor: "pointer", fontWeight: "500" }}
              >
                {workout.name}
              </button>
            ))}
          </div>
        </div>

        {/* Log Workout Form */}
        <div style={{ backgroundColor: "#161616", border: "1px solid #2a2a2a", borderRadius: "12px", padding: "24px" }}>
          <div style={{ color: "#666", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "20px" }}>
            Log Today&apos;s Workout
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ color: "#666", fontSize: "12px" }}>Workout Name</label>
              <input
                value={selectedWorkout}
                onChange={(e) => setSelectedWorkout(e.target.value)}
                placeholder="e.g. Push Day"
                style={{ backgroundColor: "#0f0f0f", border: "1px solid #2a2a2a", borderRadius: "8px", padding: "10px 14px", color: "white", fontSize: "14px", outline: "none" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ color: "#666", fontSize: "12px" }}>Duration (minutes)</label>
              <input
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="e.g. 60"
                style={{ backgroundColor: "#0f0f0f", border: "1px solid #2a2a2a", borderRadius: "8px", padding: "10px 14px", color: "white", fontSize: "14px", outline: "none" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px", gridColumn: "span 2" }}>
              <label style={{ color: "#666", fontSize: "12px" }}>Exercises</label>
              <textarea
                value={exercises}
                onChange={(e) => setExercises(e.target.value)}
                placeholder="List exercises, sets, reps, weights..."
                rows={3}
                style={{ backgroundColor: "#0f0f0f", border: "1px solid #2a2a2a", borderRadius: "8px", padding: "10px 14px", color: "white", fontSize: "14px", outline: "none", resize: "vertical" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ color: "#666", fontSize: "12px" }}>Perceived Effort (1-10)</label>
              <input
                value={effort}
                onChange={(e) => setEffort(e.target.value)}
                placeholder="e.g. 8"
                style={{ backgroundColor: "#0f0f0f", border: "1px solid #2a2a2a", borderRadius: "8px", padding: "10px 14px", color: "white", fontSize: "14px", outline: "none" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ color: "#666", fontSize: "12px" }}>Murph Time (if applicable)</label>
              <input
                value={murphTime}
                onChange={(e) => setMurphTime(e.target.value)}
                placeholder="e.g. 58:32"
                style={{ backgroundColor: "#0f0f0f", border: "1px solid #2a2a2a", borderRadius: "8px", padding: "10px 14px", color: "white", fontSize: "14px", outline: "none" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px", gridColumn: "span 2" }}>
              <label style={{ color: "#666", fontSize: "12px" }}>Notes & How You Felt</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="How did the workout feel? Any adjustments? Body feedback..."
                rows={3}
                style={{ backgroundColor: "#0f0f0f", border: "1px solid #2a2a2a", borderRadius: "8px", padding: "10px 14px", color: "white", fontSize: "14px", outline: "none", resize: "vertical" }}
              />
            </div>

          </div>

          <button
            onClick={handleSave}
            style={{ marginTop: "20px", padding: "12px 32px", backgroundColor: "#18453B", border: "none", borderRadius: "8px", color: "white", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}
          >
            {saved ? "✓ Saved!" : "Save Workout"}
          </button>

        </div>
      </main>
    </div>
  );
}

