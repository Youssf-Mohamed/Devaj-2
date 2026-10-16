"use client";

import React, { useState } from "react";

export default function SectorsSection() {
  const [activeSector, setActiveSector] = useState(null);

  const row1 = [
    "Real Estate",
    "Restaurants and Cafés",
    "Healthcare",
    "Beauty and Fashion",
    "Automotive",
    "Education",
  ];

  const row2 = [
    "Tourism and Hotels",
    "Industry",
    "Banks and Fintech",
    "Technology",
    "Sports",
    "Entertainment",
  ];

  const row3 = [
    "Media",
    "Government",
    "Energy",
    "Retail",
    "Personal Brands",
    "Seasonal Campaigns",
  ];

  // Repeat each row enough times (4x) so that moving 50% guarantees a 100% seamless infinite loop on any screen resolution (up to 4K)
  const fullRow1 = [...row1, ...row1, ...row1, ...row1];
  const fullRow2 = [...row2, ...row2, ...row2, ...row2];
  const fullRow3 = [...row3, ...row3, ...row3, ...row3];

  return (
    <section
      id="sectors"
      style={{
        backgroundColor: "#ffffff",
        color: "#111111",
        position: "relative",
        zIndex: 26,
        marginTop: "-64px",
        borderTopLeftRadius: "52px",
        borderTopRightRadius: "52px",
        boxShadow: "0 -35px 80px rgba(0, 0, 0, 0.45), 0 -12px 30px rgba(0, 0, 0, 0.2)",
        borderTop: "1px solid rgba(0, 0, 0, 0.06)",
        padding: "120px 0 155px",
        overflow: "hidden",
      }}
    >
      {/* Subtle Ambient Glow for White Theme */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "900px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(230, 57, 70, 0.035) 0%, rgba(230, 57, 70, 0.01) 35%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* =================================================================== */}
      {/* 1. SECTION EDITORIAL HEADER                                        */}
      {/* =================================================================== */}
      <div
        style={{
          maxWidth: "1560px",
          margin: "0 auto",
          padding: "0 40px",
          marginBottom: "64px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "28px",
          }}
        >
          <div>
            <span
              style={{
                display: "inline-block",
                fontFamily: "var(--font-jakarta), var(--font-sans)",
                fontSize: "0.85rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "#E63946",
                marginBottom: "14px",
              }}
            >
              Devaj Group Expertise
            </span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.5rem, 4.5vw, 4.4rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "#111111",
                margin: 0,
                fontWeight: 700,
                fontStyle: "italic",
              }}
            >
              Sectors We Serve
              <span style={{ color: "#E63946", fontStyle: "normal" }}>.</span>
            </h2>
          </div>

          <p
            style={{
              fontFamily: "var(--font-jakarta), var(--font-sans)",
              fontSize: "clamp(1.02rem, 1.2vw, 1.15rem)",
              lineHeight: 1.65,
              color: "rgba(17, 17, 17, 0.72)",
              maxWidth: "540px",
              margin: 0,
            }}
          >
            From high-end cinematic advertising to agile real-time digital content — shaping stories that lead every industry.
          </p>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 2. DYNAMIC MOVING TICKERS (3 Continuous Rows in Alternate Directions)*/}
      {/* =================================================================== */}
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          padding: "16px 0 28px",
          overflow: "hidden",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        {/* ROW 1: Moves Left-to-Right */}
        <div className="marquee-wrapper">
          <div className="marquee-track track-right-1">
            {fullRow1.map((sector, idx) => {
              const isSelected = activeSector === sector;
              return (
                <button
                  type="button"
                  key={`r1-${idx}`}
                  onClick={() => setActiveSector(isSelected ? null : sector)}
                  className={`sector-capsule-pill ${isSelected ? "selected" : ""}`}
                >
                  <span className="sector-dot" />
                  <span>{sector}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ROW 2: Moves Right-to-Left (Opposite direction) */}
        <div className="marquee-wrapper">
          <div className="marquee-track track-left">
            {fullRow2.map((sector, idx) => {
              const isSelected = activeSector === sector;
              return (
                <button
                  type="button"
                  key={`r2-${idx}`}
                  onClick={() => setActiveSector(isSelected ? null : sector)}
                  className={`sector-capsule-pill ${isSelected ? "selected" : ""}`}
                >
                  <span className="sector-dot" />
                  <span>{sector}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ROW 3: Moves Left-to-Right */}
        <div className="marquee-wrapper">
          <div className="marquee-track track-right-2">
            {fullRow3.map((sector, idx) => {
              const isSelected = activeSector === sector;
              return (
                <button
                  type="button"
                  key={`r3-${idx}`}
                  onClick={() => setActiveSector(isSelected ? null : sector)}
                  className={`sector-capsule-pill ${isSelected ? "selected" : ""}`}
                >
                  <span className="sector-dot" />
                  <span>{sector}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 3. STYLES & SEAMLESS KEYFRAMES                                      */}
      {/* =================================================================== */}
      <style jsx>{`
        .marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: visible;
          display: flex;
          padding: 8px 0 16px;
        }

        .marquee-wrapper:hover {
          z-index: 10;
        }

        .marquee-track {
          display: flex;
          gap: 18px;
          width: max-content;
          will-change: transform;
          padding: 4px 0;
        }

        /* Row 1: Left-to-Right */
        .track-right-1 {
          animation: moveRight 44s linear infinite;
        }

        /* Row 2: Right-to-Left */
        .track-left {
          animation: moveLeft 48s linear infinite;
        }

        /* Row 3: Left-to-Right */
        .track-right-2 {
          animation: moveRight 42s linear infinite;
        }

        /* Pause on hover so user can easily read and click */
        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

        /* Keyframes for seamless 50% infinite sliding */
        @keyframes moveRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes moveLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* The Pill Capsule tailored for clean white background */
        .sector-capsule-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 34px;
          border-radius: 9999px;
          background-color: #f6f5f1;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
          font-family: var(--font-jakarta), var(--font-sans), sans-serif;
          font-size: clamp(0.98rem, 1.15vw, 1.15rem);
          font-weight: 700;
          color: #1a1a1a;
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          user-select: none;
          outline: none;
        }

        .sector-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.22);
          transition: all 0.3s ease;
          display: inline-block;
          flex-shrink: 0;
        }

        /* Hover: sleek obsidian pill with glowing red dot */
        .sector-capsule-pill:hover {
          position: relative;
          z-index: 20;
          background-color: #111111;
          color: #ffffff;
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
          border-color: #111111;
        }

        .sector-capsule-pill:hover .sector-dot {
          background-color: #E63946;
          box-shadow: 0 0 10px #E63946;
        }

        /* Selected: vibrant crimson pill */
        .sector-capsule-pill.selected {
          position: relative;
          z-index: 20;
          background-color: #E63946;
          color: #ffffff;
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 10px 26px rgba(230, 57, 70, 0.35);
          border-color: #E63946;
        }

        .sector-capsule-pill.selected .sector-dot {
          background-color: #ffffff;
          box-shadow: 0 0 10px #ffffff;
        }
      `}</style>
    </section>
  );
}
