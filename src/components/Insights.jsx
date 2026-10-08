import useInView from "../hooks/useInView";

const hours = [
  { h: "8am", v: 35 },
  { h: "10am", v: 72 },
  { h: "12pm", v: 88 },
  { h: "2pm", v: 55 },
  { h: "4pm", v: 78 },
  { h: "6pm", v: 95 },
  { h: "8pm", v: 60 },
  { h: "10pm", v: 28 },
];

const chartPath = () => {
  const w = 320,
    h = 90;
  const pts = hours.map((p, i) => {
    const x = (i / (hours.length - 1)) * w;
    const y = h - (p.v / 100) * h;
    return [x, y];
  });
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const [px, py] = pts[i - 1],
      [cx, cy] = pts[i];
    d += ` C${px + 20},${py} ${cx - 20},${cy} ${cx},${cy}`;
  }
  return { d, pts };
};

export default function Insights() {
  const [ref, inView] = useInView();
  const { d, pts } = chartPath();

  return (
    <section id="insights" className="section section-white" ref={ref}>
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.35fr] lg:items-center">
          {/* Text */}
          <div className={`fade-rise ${inView ? "in" : ""}`}>
            <h2 className="h2" style={{ color: "#1A012C" }}>
              30 reports.
              <br />
              No spreadsheets.
            </h2>
            <p className="lede lede-light" style={{ marginTop: 18 }}>
              Profit trends, busiest hours, shift reconciliation and
              multi-branch view — all in one Control Tower. Your cashier's shift
              closes itself.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
                marginTop: 32,
              }}
            >
              {[
                ["30", "Ready-made reports"],
                ["Multi-branch", "Unified view"],
                ["Shift cash", "Auto-reconciliation"],
                ["Variance alerts", "Per shift"],
              ].map(([num, label]) => (
                <div
                  key={label}
                  style={{
                    borderRadius: 14,
                    border: "1px solid #e8e3ef",
                    padding: "16px 18px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: 800,
                      color: "#600010",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {num}
                  </div>
                  <div
                    style={{
                      fontSize: "12.5px",
                      color: "#7a6886",
                      marginTop: 2,
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <video
            src="/reporting.MOV"
            autoPlay
            loop
            muted
            className="rounded-2xl overflow-hidden shadow-2xl border border-[rgba(26,1,44,0.08)] bg-white"
          />
        </div>
      </div>
    </section>
  );
}
