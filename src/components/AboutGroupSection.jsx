"use client";

import React from "react";
import { ArrowUpRight, Film, Clapperboard, Award, Sparkles, CheckCircle2 } from "lucide-react";

export default function AboutGroupSection() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#0d0d0d",
        color: "#eae8e4",
        position: "relative",
        zIndex: 20,
        marginTop: "-64px",
        borderTopLeftRadius: "52px",
        borderTopRightRadius: "52px",
        boxShadow: "0 -35px 80px rgba(0, 0, 0, 0.75), 0 -12px 30px rgba(0, 0, 0, 0.45)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        padding: "125px 0 70px",
        overflow: "hidden",
      }}
    >
      {/* Ambient Red Glow - Perfectly Circular & Feathered (Zero Edge Clipping) */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "1000px",
          height: "1000px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(230, 57, 70, 0.07) 0%, rgba(230, 57, 70, 0.025) 35%, rgba(230, 57, 70, 0) 65%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          maxWidth: "1560px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        {/* =================================================================== */}
        {/* TWO-COLUMN EDITORIAL SPLIT (Who We Are Narrative + Studio Visual)  */}
        {/* =================================================================== */}
        <div className="about-split-grid">
          {/* Left Column: Brand Story & Manifesto */}
          <div className="about-content-col">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-jakarta), var(--font-sans)",
                fontSize: "0.85rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "#E63946",
                marginBottom: "18px",
              }}
            >
              <span>Devaj Group Identity</span>
              <span style={{ fontSize: "1.1rem" }}>•</span>
              <span style={{ color: "rgba(234, 232, 228, 0.5)", fontWeight: 600 }}>Who We Are</span>
            </div>

            <h2 className="about-headline">
              One group, two creative houses united under one cinematic vision
              <span style={{ color: "#E63946", fontStyle: "normal" }}>.</span>
            </h2>

            {/* Three Brand Pillars */}
            <div className="about-pillars-grid">
              <div className="about-pillar-card">
                <div className="pillar-icon-box">
                  <Film size={18} color="#E63946" />
                </div>
                <div>
                  <h4 className="pillar-title">Two Specialized Houses</h4>
                  <p className="pillar-desc">
                    Devaj Productions for agile commercial reels & Devaj Films for enterprise cinema.
                  </p>
                </div>
              </div>

              <div className="about-pillar-card">
                <div className="pillar-icon-box">
                  <Clapperboard size={18} color="#E63946" />
                </div>
                <div>
                  <h4 className="pillar-title">End-to-End Delivery</h4>
                  <p className="pillar-desc">
                    Complete pipeline: scriptwriting, casting, cinematography, master color grading & audio.
                  </p>
                </div>
              </div>

              <div className="about-pillar-card">
                <div className="pillar-icon-box">
                  <Award size={18} color="#E63946" />
                </div>
                <div>
                  <h4 className="pillar-title">Proven Market Trust</h4>
                  <p className="pillar-desc">
                    Trusted partner to industry leaders including Porsche Egypt, Clorox, and Eskan Misr.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="about-cta-row">
              <a href="#houses" className="about-cta-primary">
                <span>Explore The Two Houses</span>
                <ArrowUpRight size={17} />
              </a>
              <a href="#offerings" className="about-cta-secondary">
                <span>View Capabilities</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero White Devaj Logo (2x scale, no card, no badges) */}
          <div className="about-visual-col">
            <div className="about-logo-hero-wrap">
              <img
                src="/images/devaj-logo.png"
                alt="Devaj Group"
                className="about-hero-logo-img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* COMPONENT STYLES                                                    */}
      {/* =================================================================== */}
      <style jsx>{`
        .about-split-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 64px;
          align-items: center;
        }

        .about-headline {
          font-family: var(--font-serif);
          font-size: clamp(2.3rem, 4vw, 3.8rem);
          line-height: 1.14;
          letter-spacing: -0.025em;
          color: #ffffff;
          font-weight: 700;
          font-style: italic;
          margin: 0 0 36px 0;
        }

        .about-lead-paragraph {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: clamp(1.05rem, 1.25vw, 1.2rem);
          line-height: 1.65;
          color: rgba(234, 232, 228, 0.85);
          margin-bottom: 18px;
        }

        .about-lead-paragraph strong {
          color: #ffffff;
          font-weight: 700;
        }

        .about-lead-paragraph em {
          color: #E63946;
          font-style: italic;
          font-weight: 600;
        }

        .about-body-paragraph {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: clamp(0.98rem, 1.1vw, 1.05rem);
          line-height: 1.65;
          color: rgba(234, 232, 228, 0.65);
          margin-bottom: 34px;
        }

        .about-pillars-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 40px;
        }

        .about-pillar-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 16px 20px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .about-pillar-card:hover {
          transform: translateX(6px);
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(230, 57, 70, 0.45);
          box-shadow: 0 10px 24px rgba(230, 57, 70, 0.15);
        }

        .pillar-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(230, 57, 70, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pillar-title {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.98rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 4px 0;
        }

        .pillar-desc {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.88rem;
          line-height: 1.5;
          color: rgba(234, 232, 228, 0.65);
          margin: 0;
        }

        .about-cta-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 16px;
        }

        .about-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 32px;
          border-radius: 9999px;
          background-color: #E63946;
          color: #ffffff;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 8px 24px rgba(230, 57, 70, 0.35);
        }

        .about-cta-primary:hover {
          background-color: #ff4757;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(230, 57, 70, 0.5);
        }

        .about-cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 15px 28px;
          border-radius: 9999px;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #eae8e4;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .about-cta-secondary:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.35);
          color: #ffffff;
        }

        /* Right Column Hero Logo (No card, 2x bigger, pure white) */
        .about-visual-col {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .about-logo-hero-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 24px 0;
          position: relative;
        }

        .about-logo-hero-wrap::before {
          content: "";
          position: absolute;
          width: 480px;
          height: 260px;
          background: radial-gradient(circle, rgba(230, 57, 70, 0.12) 0%, rgba(255, 255, 255, 0.04) 40%, transparent 70%);
          filter: blur(40px);
          pointer-events: none;
          z-index: 0;
        }

        .about-hero-logo-img {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 680px;
          height: auto;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 15px 45px rgba(0, 0, 0, 0.85));
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease;
        }

        .about-hero-logo-img:hover {
          transform: scale(1.035);
          filter: drop-shadow(0 20px 55px rgba(230, 57, 70, 0.25));
        }

        @media (max-width: 1024px) {
          .about-split-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .about-hero-logo-img {
            max-width: 500px;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .about-headline {
            font-size: 2.1rem;
          }
          .about-hero-logo-img {
            max-width: 360px;
          }
        }
      `}</style>
    </section>
  );
}
