import useInView from "../hooks/useInView";

export default function Counter() {
  const [ref, inView] = useInView();

  return (
    <section id="counter" className="section section-ice" ref={ref}>
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.45fr] lg:items-center">
          {/* Text */}
          <div className={`fade-rise ${inView ? "in" : ""}`}>
            <h2 className="h2" style={{ color: "#1A012C" }}>
              Keyboard-first billing.
              <br />
              Zero wasted seconds.
            </h2>
            <p className="lede lede-light" style={{ marginTop: 18 }}>
              Three letters to find a medicine, Enter to add it, F12 to collect
              payment. The nearest-expiry batch is always picked first —
              automatically.
            </p>
            <ul
              style={{
                marginTop: 32,
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {[
                ["Ctrl K", "Open global search from anywhere on screen"],
                ["Alt U", "Switch box ↔ strip — price prorates automatically"],
                ["F5 / F6", "Hold a bill and resume it instantly"],
                ["F12", "Collect payment — cash, Raast, or Khata"],
              ].map(([k, v]) => (
                <li
                  key={k}
                  style={{ display: "flex", alignItems: "center", gap: 12 }}
                >
                  <span className="kbd" style={{ flexShrink: 0 }}>
                    {k}
                  </span>
                  <span style={{ fontSize: "14.5px", color: "#7a6886" }}>
                    {v}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Video demo */}
          <div
            className={`fade-rise ${inView ? "in" : ""}`}
            style={{ animationDelay: "100ms" }}
          >
            <div className="rounded-2xl border-4 border-white overflow-hidden shadow-2xl">
              <video
                src="/Keyboard-first billing.MOV"
                autoPlay
                muted
                loop
                playsInline
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
