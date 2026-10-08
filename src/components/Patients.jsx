import useInView from "../hooks/useInView";

const ledger = [
  { date: "25 Sep", item: "Augmentin 625mg × 2", amount: 1224, type: "debit" },
  { date: "22 Sep", item: "Payment received", amount: 2000, type: "credit" },
  { date: "18 Sep", item: "Glucophage 500mg × 3", amount: 570, type: "debit" },
  { date: "14 Sep", item: "Panadol Extra × 5", amount: 260, type: "debit" },
];
const fmt = (n) => "Rs\u00a0" + n.toLocaleString("en-PK");

export default function Patients() {
  const [ref, inView] = useInView();
  const balance = 3280,
    limit = 5000;

  return (
    <section id="patients" className="section section-ice" ref={ref}>
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.9fr] lg:items-center">
          <video
            src="/khata.MOV"
            autoPlay
            loop
            muted
            className="rounded-2xl overflow-hidden shadow-2xl border border-[rgba(26,1,44,0.08)] bg-white"
          />

          {/* Text */}
          <div
            className={`fade-rise ${inView ? "in" : ""}`}
            style={{ animationDelay: "100ms" }}
          >
            <h2 className="h2" style={{ color: "#1A012C" }}>
              Patient Khata.
              <br />
              Built for trust.
            </h2>
            <p className="lede lede-light" style={{ marginTop: 18 }}>
              Every regular patient gets a card with a credit limit, a running
              ledger and WhatsApp refill reminders — no paper notebook, no
              missed collections.
            </p>
            <ul
              style={{
                marginTop: 32,
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              {[
                [
                  "Credit limit with live balance bar",
                  "Set per patient. The counter shows remaining credit at checkout.",
                ],
                [
                  "Full transaction ledger",
                  "Every sale and payment recorded, timestamped and searchable.",
                ],
                [
                  "Chronic refill reminders",
                  "One tap sends a personalised WhatsApp message when a prescription is due.",
                ],
                [
                  "Loyalty tiers",
                  "Reward your best customers — tier and discount rules you control.",
                ],
              ].map(([title, body]) => (
                <li key={title} style={{ display: "flex", gap: 14 }}>
                  <span
                    style={{
                      marginTop: 3,
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "#600010",
                      color: "#fff",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 12,
                      fontWeight: 900,
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  <div>
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: 700,
                        color: "#1A012C",
                      }}
                    >
                      {title}
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#7a6886",
                        marginTop: 2,
                      }}
                    >
                      {body}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
