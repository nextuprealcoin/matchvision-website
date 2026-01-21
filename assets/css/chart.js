/* ---------------------------------------------------
   CHART.JS — Futbol IQ Academy
   Premium gradients, rounded visuals, dark-mode styling
   Fully updated with Mental Performance Impact Curve
--------------------------------------------------- */

// Ensure Chart.js is loaded
if (typeof Chart === "undefined") {
  console.error("Chart.js not found. Make sure chart.js is included before this file.");
}

/* ---------------------------------------------------
   CREATE GRADIENTS
--------------------------------------------------- */
function createGradient(ctx, color1, color2) {
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  return gradient;
}

/* ---------------------------------------------------
   GLOBAL CHART SETTINGS
--------------------------------------------------- */
Chart.defaults.color = "#ffffff";
Chart.defaults.font.family = "Inter, sans-serif";
Chart.defaults.font.size = 14;

Chart.defaults.plugins.legend.labels.usePointStyle = true;
Chart.defaults.plugins.tooltip.backgroundColor = "rgba(0,0,0,0.8)";
Chart.defaults.plugins.tooltip.borderColor = "#ffffff";
Chart.defaults.plugins.tooltip.borderWidth = 1;

Chart.defaults.elements.line.borderWidth = 3;
Chart.defaults.elements.point.radius = 5;
Chart.defaults.elements.point.hoverRadius = 7;

/* ---------------------------------------------------
   TEXT SHADOW PLUGIN (Mental Chart Only)
--------------------------------------------------- */
const MentalChartTextShadow = {
  id: "mentalTextShadow",
  beforeDraw(chart) {
    if (chart.canvas.id !== "mentalChart") return;
    const ctx = chart.ctx;
    ctx.save();
    ctx.shadowColor = "rgba(0,0,0,0.9)";
    ctx.shadowBlur = 6;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
  },
  afterDraw(chart) {
    if (chart.canvas.id !== "mentalChart") return;
    chart.ctx.restore();
  }
};

Chart.register(MentalChartTextShadow);

/* ---------------------------------------------------
   DECISION-MAKING CHART (Homepage)
--------------------------------------------------- */
const decisionCanvas = document.getElementById("decisionChart");

if (decisionCanvas) {
  const ctx1 = decisionCanvas.getContext("2d");
  const decisionGradient = createGradient(ctx1, "#4b7bff", "#6c5ce7");

  new Chart(ctx1, {
    type: "radar",
    data: {
      labels: [
        "Scanning",
        "Speed of Play",
        "Risk Assessment",
        "Option Selection",
        "Tempo Control",
        "Pattern Recognition"
      ],
      datasets: [
        {
          label: "Player Score",
          data: [70, 65, 60, 75, 68, 72],
          backgroundColor: decisionGradient,
          borderColor: "#6c5ce7",
          borderWidth: 2,
          pointBackgroundColor: "#ffffff",
          pointBorderColor: "#6c5ce7"
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        r: {
          angleLines: { color: "rgba(255,255,255,0.1)" },
          grid: { color: "rgba(255,255,255,0.15)" },
          pointLabels: { color: "#ffffff", font: { size: 14 } },
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    }
  });
}

/* ---------------------------------------------------
   AWARENESS CHART (Homepage)
--------------------------------------------------- */
const awarenessCanvas = document.getElementById("awarenessChart");

if (awarenessCanvas) {
  const ctx2 = awarenessCanvas.getContext("2d");
  const awarenessGradient = createGradient(ctx2, "#2dd4bf", "#22c55e");

  new Chart(ctx2, {
    type: "bar",
    data: {
      labels: ["Pre-Scan", "Shoulder Checks", "Field Awareness", "Pressure Recognition"],
      datasets: [
        {
          label: "Awareness Score",
          data: [65, 72, 68, 75],
          backgroundColor: awarenessGradient,
          borderRadius: 12
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: "#ffffff" }
        },
        y: {
          grid: { color: "rgba(255,255,255,0.15)" },
          ticks: { color: "#ffffff" },
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    }
  });
}

/* ---------------------------------------------------
   INTELLIGENCE RADAR (Advanced Analysis)
--------------------------------------------------- */
const radarCanvas = document.getElementById("intelligenceRadarChart");

if (radarCanvas) {
  const ctx3 = radarCanvas.getContext("2d");
  const radarGradient = createGradient(ctx3, "rgba(120,120,255,0.4)", "rgba(120,120,255,0.1)");

  new Chart(ctx3, {
    type: "radar",
    data: {
      labels: [
        "Scanning",
        "Speed of Play",
        "Risk Assessment",
        "Pattern Recognition",
        "Decision Quality"
      ],
      datasets: [
        {
          label: "Intelligence Metrics",
          data: [78, 85, 72, 80, 88],
          backgroundColor: radarGradient,
          borderColor: "rgba(120,120,255,1)",
          borderWidth: 2,
          pointBackgroundColor: "#ffffff"
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        r: {
          angleLines: { color: "rgba(255,255,255,0.1)" },
          grid: { color: "rgba(255,255,255,0.1)" },
          pointLabels: { color: "#ffffff" },
          ticks: { display: false }
        }
      },
      plugins: { legend: { display: false } }
    }
  });
}

/* ---------------------------------------------------
   TECHNICAL OUTPUT BAR (Advanced Analysis)
--------------------------------------------------- */
const technicalCanvas = document.getElementById("technicalBarChart");

if (technicalCanvas) {
  const ctx4 = technicalCanvas.getContext("2d");

  new Chart(ctx4, {
    type: "bar",
    data: {
      labels: ["Shots", "Goals", "Passes", "Touches"],
      datasets: [
        {
          label: "Technical Output",
          data: [3, 1, 42, 68],
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(120, 120, 255, 0.6)",
            "rgba(255, 206, 86, 0.6)"
          ],
          borderColor: "#ffffff",
          borderWidth: 1,
          borderRadius: 10
        }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: "#ffffff" } },
        y: { ticks: { color: "#ffffff" } }
      }
    }
  });
}

/* ---------------------------------------------------
   MATCH INFLUENCE LINE (Advanced Analysis)
--------------------------------------------------- */
const influenceCanvas = document.getElementById("influenceLineChart");

if (influenceCanvas) {
  const ctx5 = influenceCanvas.getContext("2d");

  new Chart(ctx5, {
    type: "line",
    data: {
      labels: ["0–15", "15–30", "30–45", "45–60", "60–75", "75–90"],
      datasets: [
        {
          label: "Match Influence",
          data: [40, 55, 60, 70, 65, 80],
          borderColor: "rgba(120,120,255,1)",
          backgroundColor: "rgba(120,120,255,0.25)",
          borderWidth: 2,
          tension: 0.3,
          pointBackgroundColor: "#ffffff"
        }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: "#ffffff" } },
        y: { ticks: { color: "#ffffff" } }
      }
    }
  });
}

/* ---------------------------------------------------
   MENTAL PERFORMANCE IMPACT CURVE (UPDATED)
   Black points, smaller size, correct legend colors
--------------------------------------------------- */
const mentalCanvas = document.getElementById("mentalChart");

if (mentalCanvas) {
  const ctxM = mentalCanvas.getContext("2d");

  new Chart(ctxM, {
    type: "line",
    data: {
      labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90"],
      datasets: [
        {
          label: "Trains Mental Game",
          data: [40, 50, 60, 70, 75, 80, 85, 90, 92, 95],
          borderColor: "#00e6c3",
          borderWidth: 4,
          tension: 0.4,
          pointBackgroundColor: "#000000",
          pointBorderColor: "#000000",
          pointRadius: 4,
          pointHoverRadius: 6
        },
        {
          label: "Does Not Train Mental Game",
          data: [40, 45, 50, 48, 52, 50, 55, 53, 54, 52],
          borderColor: "#ff4bd8",
          borderWidth: 4,
          tension: 0.4,
          pointBackgroundColor: "#000000",
          pointBorderColor: "#000000",
          pointRadius: 4,
          pointHoverRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            usePointStyle: false,
            boxWidth: 20,
            color: "#ffffff",
            font: { size: 18, weight: "800" }
          }
        },
        mentalTextShadow: true
      },
      scales: {
        x: {
          ticks: {
            color: "#ffffff",
            font: { size: 18, weight: "800" },
            padding: 12
          },
          grid: { color: "rgba(255,255,255,0.15)" }
        },
        y: {
          ticks: {
            color: "#ffffff",
            font: { size: 18, weight: "800" },
            padding: 12
          },
          grid: { color: "rgba(255,255,255,0.15)" }
        }
      }
    }
  });
}

/* ---------------------------------------------------
   TEAM INTELLIGENCE RADAR
--------------------------------------------------- */
const teamRadar = document.getElementById("teamIntelligenceRadarChart");

if (teamRadar) {
  const ctxA = teamRadar.getContext("2d");
  const gradA = createGradient(ctxA, "rgba(120,120,255,0.4)", "rgba(120,120,255,0.1)");

  new Chart(ctxA, {
    type: "radar",
    data: {
      labels: [
        "Pressing Triggers",
        "Shape Discipline",
        "Spacing",
        "Rotations",
        "Build-Up Structure",
        "Defensive Compactness"
      ],
      datasets: [{
        data: [75, 82, 78, 70, 80, 85],
        backgroundColor: gradA,
        borderColor: "rgba(120,120,255,1)",
        borderWidth: 2,
        pointBackgroundColor: "#ffffff"
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        r: {
          ticks: { display: false },
          grid: { color: "rgba(255,255,255,0.1)" },
          angleLines: { color: "rgba(255,255,255,0.1)" },
          pointLabels: { color: "#ffffff" }
        }
      }
    }
  });
}

/* ---------------------------------------------------
   TEAM TECHNICAL OUTPUT BAR
--------------------------------------------------- */
const teamBar = document.getElementById("teamTechnicalBarChart");

if (teamBar) {
  const ctxB = teamBar.getContext("2d");

  new Chart(ctxB, {
    type: "bar",
    data: {
      labels: ["Passes", "Final 3rd Entries", "Shots", "Goals", "Recoveries", "Turnovers"],
      datasets: [{
        data: [420, 38, 14, 3, 52, 17],
        backgroundColor: [
          "rgba(120,120,255,0.6)",
          "rgba(75,192,192,0.6)",
          "rgba(255,99,132,0.6)",
          "rgba(255,206,86,0.6)",
          "rgba(22,199,132,0.6)",
          "rgba(200,120,255,0.6)"
        ],
        borderColor: "#ffffff",
        borderWidth: 1,
        borderRadius: 10
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: "#ffffff" } },
        y: { ticks: { color: "#ffffff" } }
      }
    }
  });
}

/* ---------------------------------------------------
   TEAM MATCH INFLUENCE LINE
--------------------------------------------------- */
const teamLine = document.getElementById("teamInfluenceLineChart");

if (teamLine) {
  const ctxC = teamLine.getContext("2d");

  new Chart(ctxC, {
    type: "line",
    data: {
      labels: ["0–15", "15–30", "30–45", "45–60", "60–75", "75–90"],
      datasets: [{
        data: [45, 55, 60, 70, 65, 75],
        borderColor: "rgba(120,120,255,1)",
        backgroundColor: "rgba(120,120,255,0.25)",
        borderWidth: 2,
        tension: 0.3,
        pointBackgroundColor: "#ffffff"
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: "#ffffff" } },
        y: { ticks: { color: "#ffffff" } }
      }
    }
  });
}

/* ---------------------------------------------------
   COLLEGE RECRUITING — PIPELINE PIE CHART
   Potential Players → Applicants → Accepted → Scholarships
--------------------------------------------------- */
const collegePieCanvas = document.getElementById("collegePieChart");

if (collegePieCanvas) {
  const ctxPie = collegePieCanvas.getContext("2d");

  new Chart(ctxPie, {
    type: "pie",
    data: {
      labels: [
        "Potential College Soccer Players",
        "Applied to College Soccer Programs",
        "Accepted & Playing in College",
        "Received Athletic Scholarships"
      ],
      datasets: [
        {
          data: [100000, 45000, 12000, 3500], // Example 5-year snapshot
          backgroundColor: [
            "rgba(0, 230, 195, 0.85)",   // Mint
            "rgba(255, 75, 216, 0.85)",  // Pink
            "rgba(120, 120, 255, 0.85)", // Blue
            "rgba(255, 206, 86, 0.85)"   // Gold
          ],
          borderColor: "#ffffff",
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: "#ffffff",
            font: { size: 16, weight: "700" },
            padding: 20
          }
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.label || "";
              const value = context.raw || 0;
              return `${label}: ${value.toLocaleString()}`;
            }
          }
        }
      }
    }
  });
}

/* ---------------------------------------------------
   END OF FILE
--------------------------------------------------- */
