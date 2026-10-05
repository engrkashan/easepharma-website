import React, { useState } from "react";
import PosMockup from "./PosMockup";
import { links } from "../content";
import {
  Capsule3D,
  MoleculeLattice,
  HologramBadge,
  CyberGridBackground,
} from "./FuturisticObjects";

// When real screenshots are dropped into /public/screenshots/, swap out <PosMockup />
// with: <img src="/screenshots/pos-main.png" alt="Ease Pharma POS" className="w-full" />

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Normalized mouse coordinates from -1 to 1
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((clientY - rect.top) / rect.height - 0.5) * 2;
    setMouse({ x, y });
  };

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      className="hero-bg relative overflow-hidden"
      style={{
        paddingTop: "80px",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Cybernetic Particle Grid Background */}
      <CyberGridBackground />

      {/* Atmospheric Radial Glow Orbs — Oxblood #600010 & Deep Aubergine #1A012C */}
      <div
        className="hero-glow-orb animate-glow-breathe"
        style={{
          width: "780px",
          height: "560px",
          top: "-120px",
          left: "50%",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(ellipse, rgba(96,0,16,.60) 0%, rgba(26,1,44,.4) 50%, transparent 75%)",
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      <div
        className="hero-glow-orb"
        style={{
          width: "450px",
          height: "450px",
          bottom: "120px",
          right: "-100px",
          background:
            "radial-gradient(ellipse, rgba(122,19,37,.45) 0%, transparent 70%)",
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      <div
        className="hero-glow-orb"
        style={{
          width: "420px",
          height: "420px",
          top: "240px",
          left: "-100px",
          background:
            "radial-gradient(ellipse, rgba(46,12,64,.65) 0%, transparent 70%)",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* ─────────────────────────────────────────────────────────────
          FUTURISTIC 3D FLOATING OBJECTS (Inspired by candid.singles)
          Smoothly bobbing, rotating, and responding to mouse parallax
         ───────────────────────────────────────────────────────────── */}

      {/* 3D Floating Pill Capsule #1 (Top Left) */}
      <div
        className="hidden lg:block absolute pointer-events-none z-10 transition-transform duration-300 ease-out"
        style={{
          top: "16%",
          left: "7%",
          transform: `translate3d(${mouse.x * 28}px, ${mouse.y * 28}px, 0)`,
        }}
        aria-hidden="true"
      >
        <div className="animate-capsule-float-1">
          <Capsule3D size={64} tilt={24} />
        </div>
      </div>

      {/* 3D Rotating DRAP Molecular Compound Lattice (Top Right) */}
      <div
        className="hidden lg:block absolute pointer-events-none z-10 transition-transform duration-300 ease-out"
        style={{
          top: "18%",
          right: "8%",
          transform: `translate3d(${mouse.x * -24}px, ${mouse.y * -24}px, 0)`,
        }}
        aria-hidden="true"
      >
        <MoleculeLattice size={130} />
      </div>

      {/* 3D Floating Pill Capsule #2 (Mid-Right Foreground) */}
      <div
        className="hidden xl:block absolute pointer-events-none z-20 transition-transform duration-300 ease-out"
        style={{
          bottom: "24%",
          right: "4%",
          transform: `translate3d(${mouse.x * -35}px, ${mouse.y * -35}px, 0)`,
        }}
        aria-hidden="true"
      >
        <div className="animate-capsule-float-2">
          <Capsule3D size={58} tilt={-35} />
        </div>
      </div>

      {/* 3D Mini Floating Capsule #3 (Bottom Left near POS) */}
      <div
        className="hidden xl:block absolute pointer-events-none z-20 transition-transform duration-300 ease-out"
        style={{
          bottom: "22%",
          left: "4%",
          transform: `translate3d(${mouse.x * 32}px, ${mouse.y * 32}px, 0)`,
        }}
        aria-hidden="true"
      >
        <div className="animate-capsule-float-3">
          <Capsule3D size={44} tilt={45} />
        </div>
      </div>

      {/* Hero content */}
      <div className="wrap relative flex flex-1 flex-col" style={{ zIndex: 1 }}>
        {/* Text block — centered, large */}
        <div
          style={{
            paddingTop: "96px",
            paddingBottom: "52px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Futuristic Pill badge */}
          <div
            className="chip-ox hero-anim-1 backdrop-blur-md"
            style={{
              marginBottom: 26,
              background: "rgba(96,0,16,0.30)",
              borderColor: "rgba(255,77,109,0.35)",
              boxShadow: "0 0 20px rgba(96,0,16,0.4)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#ff4d6d] animate-ping-slow inline-block" />
            <span className="text-[#F7FCFF] font-semibold tracking-wide">
              Cloud POS for Pakistani Pharmacies
            </span>
          </div>

          {/* Giant headline */}
          <h1
            className="h1 hero-anim-2"
            style={{
              color: "#fff",
              maxWidth: "920px",
              background:
                "linear-gradient(175deg, #FFFFFF 25%, #F7FCFF 60%, rgba(247,252,255,0.7) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 20px 40px rgba(26,1,44,0.8)",
            }}
          >
            Never lose a sale,
            <br />a batch, or a rupee.
          </h1>

          {/* Subhead */}
          <p
            className="lede lede-dark hero-anim-3"
            style={{
              marginTop: 24,
              textAlign: "center",
              maxWidth: "52ch",
              fontSize: "18px",
              color: "rgba(247,252,255,0.75)",
            }}
          >
            Ease Pharma is the cloud POS and pharmacy management system built
            for Pakistan — fast barcode billing, expiry control, FBR e-invoicing
            and patient Khata, all in one place.
          </p>

          {/* CTAs */}
          <div
            className="hero-anim-3"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              justifyContent: "center",
              marginTop: 36,
            }}
          >
            <a
              href={links.demo}
              className="btn btn-primary"
              style={{
                padding: "15px 34px",
                fontSize: "16px",
                background: "#600010",
                boxShadow:
                  "0 10px 30px -5px rgba(96,0,16,0.8), 0 0 0 1px rgba(255,255,255,0.2) inset",
              }}
            >
              Book a live demo
            </a>
            {/* <a
              href="#pricing"
              className="btn btn-ghost-white"
              style={{
                padding: '15px 34px',
                fontSize: '16px',
                borderColor: 'rgba(255,255,255,0.25)',
              }}
            >
              See pricing
            </a> */}
          </div>

          {/* Trust line */}
          <p
            className="hero-anim-3"
            style={{
              marginTop: 20,
              fontSize: "13.5px",
              color: "rgba(247,252,255,0.45)",
              fontWeight: 500,
            }}
          >
            Works offline · Free migration from Candela RMS
          </p>
        </div>

        {/* Product screenshot / mockup — floats below text with 3D Holographic Badges */}
        <div
          className="hero-anim-4"
          style={{
            position: "relative",
            maxWidth: "1240px",
            margin: "0 auto",
            width: "100%",
            paddingBottom: "80px",
          }}
        >
          {/* Glow under the screenshot */}
          <div
            style={{
              position: "absolute",
              inset: "40px 60px -20px",
              background:
                "radial-gradient(ellipse at 50% 60%, rgba(96,0,16,.65) 0%, rgba(26,1,44,.8) 50%, transparent 75%)",
              filter: "blur(50px)",
              pointerEvents: "none",
              zIndex: 0,
            }}
            aria-hidden="true"
          />

          {/* Screenshot frame with browser chrome */}
          <div
            className="float-hero screen-frame"
            style={{
              position: "relative",
              zIndex: 1,
              borderColor: "rgba(255,255,255,0.14)",
              boxShadow:
                "0 25px 70px -15px rgba(26,1,44,0.95), 0 0 40px rgba(96,0,16,0.3)",
            }}
          >
            {/* Browser chrome bar */}
            <div className="browser-chrome">
              <span className="chrome-dot" style={{ background: "#ff5f57" }} />
              <span className="chrome-dot" style={{ background: "#febc2e" }} />
              <span className="chrome-dot" style={{ background: "#28c840" }} />
              <div
                style={{
                  flex: 1,
                  marginLeft: 10,
                  background: "rgba(255,255,255,.07)",
                  borderRadius: 6,
                  height: 22,
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 10,
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,.35)",
                    fontWeight: 500,
                  }}
                >
                  app.easepharma.store/pos
                </span>
              </div>
            </div>

            {/*
              REAL SCREENSHOT SLOT:
              Drop pos-main.png in /public/screenshots/ and replace the <PosMockup /> below with:
              <img src="/screenshots/pos-main.png" alt="Ease Pharma POS" style={{ width:'100%', display:'block' }} />
            */}
            <div style={{ background: "#fff" }}>
              {/* <PosMockup /> */}
              <img
                src="/screenshots/pos-main.png"
                alt="Ease Pharma POS"
                className="w-full"
              />
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              HOLOGRAPHIC FLOATING HUD CHIPS (Smooth Candid-style Badges)
             ───────────────────────────────────────────────────────────── */}

          {/* Left Floating Hologram: FBR Tier-1 e-Invoice status */}
          <div
            className="hidden md:block absolute -left-6 top-16 z-20 transition-transform duration-300 ease-out"
            style={{
              transform: `translate3d(${mouse.x * 16}px, ${mouse.y * 16}px, 0)`,
            }}
          >
            <div className="animate-hud-left">
              <HologramBadge
                variant="oxblood"
                tag="FBR Tier-1 Active"
                title="0.2s Fiscalized POS"
                subtitle="Instant QR · DRAP & FBR Verified"
                icon={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                }
              />
            </div>
          </div>

          {/* Right Floating Hologram: Raast Settlement & Live Revenue */}
          <div
            className="hidden md:block absolute -right-6 bottom-24 z-20 transition-transform duration-300 ease-out"
            style={{
              transform: `translate3d(${mouse.x * -16}px, ${mouse.y * -16}px, 0)`,
            }}
          >
            <div className="animate-hud-right">
              <HologramBadge
                variant="glass"
                tag="Raast P2M Settled"
                title="Rs 1,84,320 Today"
                subtitle="0% MDR Fee · Direct Account Credit"
                icon={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ff4d6d"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Compliance trust strip — at bottom of hero */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,.08)",
          background: "rgba(26,1,44,.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div
          className="wrap"
          style={{
            padding: "20px 0",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <p
            style={{
              fontSize: "13px",
              color: "rgba(247,252,255,.45)",
              fontWeight: 500,
            }}
          >
            Built around how Pakistani pharmacies are paid and regulated
          </p>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexWrap: "wrap",
              gap: "6px 20px",
              fontSize: "13px",
              fontWeight: 700,
              color: "rgba(247,252,255,.45)",
            }}
          >
            {[
              "FBR Tier-1 e-invoicing",
              "DRAP",
              "Raast",
              "PayPak / 1Link",
              "EasyPaisa",
              "JazzCash",
            ].map((t) => (
              <li
                key={t}
                className="hover:text-white transition-colors duration-200"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
