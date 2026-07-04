"use client";

import { useState } from "react";

const ccafCourses = [
  { name: "English Composition", credits: 3, status: "Complete" },
  { name: "Speech", credits: 3, status: "Complete" },
  { name: "Mathematics", credits: 3, status: "In Progress" },
  { name: "History", credits: 3, status: "Not Started" },
  { name: "Social Science", credits: 3, status: "Not Started" },
];

export default function Work() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskCategory, setTaskCategory] = useState("Training");
  const [taskPriority, setTaskPriority] = useState("Medium");
  const [taskDue, setTaskDue] = useState("");
  const [taskNotes, setTaskNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const completedCourses = ccafCourses.filter((c) => c.status === "Complete").length;
  const totalCredits = ccafCourses.reduce((a, b) => a + b.credits, 0);
  const completedCredits = ccafCourses.filter((c) => c.status === "Complete").reduce((a, b) => a + b.credits, 0);

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
            style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 14px", borderRadius: "8px", border: "none", backgroundColor: item.href === "/work" ? "#18453B" : "transparent", color: item.href === "/work" ? "white" : "#888", fontSize: "14px", fontWeight: "500", cursor: "pointer", textDecoration: "none" }}
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
          <h1 style={{ fontSize: "28px", fontWeight: "700", margin: "0 0 6px 0" }}>✈️ Work / Air Force</h1>
          <p style={{ color: "#555", fontSize: "14px", margin: 0 }}>CCAF progress, military training, and task management.</p>
        </div>

        {/* CCAF Progress */}
        <div style={{ backgroundColor: "#161616", border: "1px solid #18453B", borderRadius: "12px", padding: "24px", marginBottom: "24px" }}>
          <div style={{ color: "#18453B", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>
            🎓 CCAF Progress
          </div>
          <div style={{ display: "flex", gap: "40px", marginBottom: "20px" }}>
            <div>
              <div style={{ color: "#555", fontSize: "12px", marginBottom: "4px" }}>Courses Complete</div>
              <div style={{ fontSize: "24px", fontWeight: "700" }}>{completedCourses}/{ccafCourses.length}</div>
            </div>
            <div>
              <div style={{ color: "#555", fontSize: "12px", marginBottom: "4px" }}>Credits Earned</div>
              <div style={{ fontSize: "24px", fontWeight: "700", color: "#18453B" }}>{completedCredits}/{totalCredits}</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div style={{ backgroundColor: "#2a2a2a", borderRadius: "4px", height: "8px", marginBottom: "20px" }}>
            <div style={{ backgroundColor: "#18453B", height: "100%", width: `${(completedCredits / totalCredits) * 100}%`, borderRadius: "4px" }} />
          </div>

          {/* Course List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {ccafCourses.map((course) => (
              <div key={course.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", backgroundColor: "#0f0f0f", borderRadius: "8px" }}>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: "500" }}>{course.name}</div>
                  <div style={{ color: "#555", fontSize: "12px" }}>{course.credits} credits</div>
                </div>
                <div style={{ fontSize: "12px", fontWeight: "600", color: course.status === "Complete" ? "#18453B" : course.status === "In Progress" ? "#f59e0b" : "#555", padding: "4px 10px", backgroundColor: course.status === "Complete" ? "#18453B22" : course.status === "In Progress" ? "#f59e0b22" : "#2a2a2a", borderRadius: "6px" }}>
                  {course.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Task Manager */}
        <div style={{ backgroundColor: "#161616", border: "1px solid #2a2a2a", borderRadius: "12px", padding: "24px" }}>
          <div style={{ color: "#666", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "20px" }}>
            📋 Add Task
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px", gridColumn: "span 2" }}>
              <label style={{ color: "#666", fontSize: "12px" }}>Task Title</label>
              <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="e.g. Complete PT test"
                style={{ backgroundColor: "#0f0f0f", border: "1px solid #2a2a2a", borderRadius: "8px", padding: "10px 14px", color: "white", fontSize: "14px", outline: "none" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ color: "#666", fontSize: "12px" }}>Category</label>
              <select
                value={taskCategory}
                onChange={(e) => setTaskCategory(e.target.value)}
                style={{ backgroundColor: "#0f0f0f", border: "1px solid #2a2a2a", borderRadius: "8px", padding: "10px 14px", color: "white", fontSize: "14px", outline: "none" }}
              >
                <option>Training</option>
                <option>CCAF</option>
                <option>Admin</option>
                <option>PME</option>
                <option>Other</option>
              </select>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ color: "#666", fontSize: "12px" }}>Priority</label>
              <select
                value={taskPriority}
                onChange={(e) => setTaskPriority(e.target.value)}
                style={{ backgroundColor: "#0f0f0f", border: "1px solid #2a2a2a", borderRadius: "8px", padding: "10px 14px", color: "white", fontSize: "14px", outline: "none" }}
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ color: "#666", fontSize: "12px" }}>Due Date</label>
              <input
                type="date"
                value={taskDue}
                onChange={(e) => setTaskDue(e.target.value)}
                style={{ backgroundColor: "#0f0f0f", border: "1px solid #2a2a2a", borderRadius: "8px", padding: "10px 14px", color: "white", fontSize: "14px", outline: "none" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px", gridColumn: "span 2" }}>
              <label style={{ color: "#666", fontSize: "12px" }}>Notes</label>
              <textarea
                value={taskNotes}
                onChange={(e) => setTaskNotes(e.target.value)}
                placeholder="Any additional details..."
                rows={3}
                style={{ backgroundColor: "#0f0f0f", border: "1px solid #2a2a2a", borderRadius: "8px", padding: "10px 14px", color: "white", fontSize: "14px", outline: "none", resize: "vertical" }}
              />
            </div>

          </div>

          <button
            onClick={handleSave}
            style={{ marginTop: "20px", padding: "12px 32px", backgroundColor: "#18453B", border: "none", borderRadius: "8px", color: "white", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}
          >
            {saved ? "✓ Task Added!" : "Add Task"}
          </button>
        </div>

      </main>
    </div>
  );
}