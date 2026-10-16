"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, Film, Clapperboard, Camera, Radio, X, MessageSquare } from "lucide-react";

export default function StrategicOfferingsSection() {
  const [selectedOffering, setSelectedOffering] = useState(null);

  const offerings = [
    {
      id: "01",
      tag: "Devaj Films",
      icon: Film,
      title: "Cinematic & Narrative Films",
      subtitle: "Large-Scale Enterprise & Cultural Media",
      description: "Documentaries, corporate brand films, television commercials, and cinematic narratives engineered to build enduring market authority.",
      image: "/images/offerings/1.jpeg",
      deliverables: [
        "Documentary films & high-budget storytelling",
        "Corporate profile films for mega corporations & factories",
        "Television commercials (TVCs) & cinematic brand ads",
        "Comprehensive scriptwriting, storyboard & creative direction",
        "Cinematic Arri/Red camera setups & master color grading",
      ],
      targetAudience: "Major corporations, government institutions, mega factories, TV networks, and large ad agencies.",
    },
    {
      id: "02",
      tag: "Devaj Productions",
      icon: Clapperboard,
      title: "Commercial & Digital Content",
      subtitle: "Agile, Conversion-Driven Visuals",
      description: "Fast-turnaround commercials, high-converting social reels, and dynamic product stories designed to maximize direct brand sales and viral reach.",
      image: "/images/offerings/commercial-production.jpg",
      deliverables: [
        "Commercial & digital social campaigns (Instagram, TikTok, YouTube)",
        "High-retention Reels & Shorts with 3-second viral hooks",
        "Fast-turnaround product shoots & lifestyle commercials",
        "Fashion campaigns, clinic showcases, and restaurant promos",
        "Cross-platform aspect ratio optimization (9:16, 1:1, 16:9)",
      ],
      targetAudience: "Small & medium businesses, retail brands, clinics, restaurants, fashion brands, and content creators.",
    },
    {
      id: "03",
      tag: "Beyond The Camera",
      icon: Camera,
      title: "Commercial Photography",
      subtitle: "Precision Studio Lighting & Fine Retouching",
      description: "High-definition product, food, fashion, architectural, and corporate photography with state-of-the-art strobe lighting and meticulous retouching.",
      image: "/images/offerings/photography-studio.jpg",
      deliverables: [
        "Ultra-high resolution product & packaging photography",
        "Appetizing culinary & beverage commercial shoots",
        "Fashion, model catalog, and lookbook sessions",
        "Architectural, interior, and corporate office captures",
        "Advanced high-end digital retouching & skin/surface cleanup",
      ],
      targetAudience: "E-commerce stores, catalog publishers, food chains, real estate developers, and fashion houses.",
    },
    {
      id: "04",
      tag: "Special Media & Studio",
      icon: Radio,
      title: "Studio Rental & Special Media",
      subtitle: "Broadcast, Podcasts & Virtual Production",
      description: "Fully equipped soundproof studio rentals, multi-camera live broadcast setups, premium acoustic podcasts, aerial drone filming, and 3D VFX.",
      image: "/images/offerings/4.jpeg",
      deliverables: [
        "Multi-camera 4K podcast studio with acoustic wood treatment",
        "Live-streaming, conference broadcasts, and interactive webinars",
        "Licensed aerial drone cinematography for expansive sites",
        "Studio, cinema camera, audio, and lighting gear rental with crew",
        "VFX, 2D/3D motion graphics, and voice-over in multiple dialects",
      ],
      targetAudience: "Podcasters, event organizers, broadcasters, agencies needing studio space, and technical media teams.",
    },
  ];

  return (
    <section
      id="offerings"
      style={{
        backgroundColor: "#0d0d0d",
        color: "#eae8e4",
        position: "relative",
        zIndex: 10,
        padding: "80px 0 130px",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
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
          maxWidth: "1640px",
          margin: "0 auto",
          padding: "0 36px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* =================================================================== */}
        {/* 1. SECTION EDITORIAL CAPTION & HEADLINE                             */}
        {/* =================================================================== */}
        <div style={{ marginBottom: "70px", maxWidth: "1280px" }}>
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
            <span>Devaj Group Strategic Craft</span>
            <span style={{ fontSize: "1.1rem" }}>•</span>
            <span style={{ color: "rgba(234, 232, 228, 0.5)", fontWeight: 600 }}>Four Pillars of Impact</span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.3rem, 4.2vw, 4.1rem)",
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              fontWeight: 700,
              fontStyle: "italic",
              margin: 0,
            }}
          >
            Your trusted creative partner from first frame to final cut across four specialized offerings
            <span style={{ color: "#E63946", fontStyle: "normal" }}>:</span>
          </h2>
        </div>

        {/* =================================================================== */}
        {/* 2. THE FOUR CARDS GRID WITH DYNAMIC LIFT EFFECTS (Monks Exact Layout) */}
        {/* =================================================================== */}
        <div className="offerings-grid">
          {offerings.map((item, idx) => {
            const isSelected = selectedOffering?.id === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedOffering(item)}
                className={`offering-card card-col-${idx + 1} ${isSelected ? "selected" : ""} reveal-on-scroll delay-${(idx + 1) * 100}`}
              >
                {/* Top-Right Number Overlapping Image (01, 02, 03, 04) */}
                <div className="card-number-badge">
                  <span className="card-number-text">{item.id}</span>
                </div>

                {/* Card Main Body */}
                <div className="card-inner">
                  {/* Image Container with Smooth Zoom */}
                  <div className="card-image-box">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="card-image"
                    />

                    {/* Subtle Overlay Vignette */}
                    <div className="card-image-vignette" />
                  </div>

                  {/* Card Content Footer Matching Monks */}
                  <div className="card-content">
                    <span className="card-eyebrow">Solutions</span>

                    <div className="card-title-row">
                      <h3 className="card-title">{item.title}</h3>
                      <span className="card-arrow-circle">
                        <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                          <path d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L10.586 8H2a1 1 0 1 1 0-2h8.586L8.293 3.707a1 1 0 0 1 0-1.414z" />
                        </svg>
                      </span>
                    </div>

                    <p className="card-description">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =================================================================== */}
      {/* 3. INTERACTIVE DETAIL MODAL / DRAWER (Opens on Card Click)          */}
      {/* =================================================================== */}
      {selectedOffering && (
        <div
          className="offering-modal-backdrop"
          onClick={() => setSelectedOffering(null)}
        >
          <div
            className="offering-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => setSelectedOffering(null)}
              className="modal-close-btn"
              aria-label="Close details"
            >
              <X size={20} />
            </button>

            <div className="modal-grid">
              {/* Left Column: Image & Number */}
              <div className="modal-left">
                <div className="modal-image-wrap">
                  <img
                    src={selectedOffering.image}
                    alt={selectedOffering.title}
                    className="modal-image"
                  />
                  <div className="modal-number-badge">
                    {selectedOffering.id}
                  </div>
                </div>
                <div className="modal-pill-tag">
                  <selectedOffering.icon size={15} color="#E63946" />
                  <span>{selectedOffering.tag}</span>
                </div>
              </div>

              {/* Right Column: Full Scope from Devaj Sales Guide */}
              <div className="modal-right">
                <span className="modal-eyebrow">Detailed Service Scope</span>
                <h3 className="modal-title">{selectedOffering.title}</h3>
                <p className="modal-subtitle">{selectedOffering.subtitle}</p>
                <p className="modal-body">{selectedOffering.description}</p>

                <div className="modal-deliverables-box">
                  <h4 className="modal-deliverables-title">What We Deliver:</h4>
                  <ul className="modal-deliverables-list">
                    {selectedOffering.deliverables.map((item, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} color="#E63946" className="list-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-audience-box">
                  <span className="audience-label">Best Suited For: </span>
                  <span className="audience-text">{selectedOffering.targetAudience}</span>
                </div>

                {/* Direct Action: WhatsApp / Connect */}
                <div className="modal-cta-row">
                  <a
                    href="https://wa.me/201014049339?text=Hello%20Devaj%20Group,%20I%20am%20interested%20in%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-cta-btn primary"
                  >
                    <MessageSquare size={18} />
                    <span>Inquire via WhatsApp (+20 101 404 9339)</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedOffering(null)}
                    className="modal-cta-btn secondary"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* 4. COMPONENT CSS: MONKS LIFT EFFECTS, STYLING & RESPONSIVENESS     */}
      {/* =================================================================== */}
      <style jsx>{`
        .offerings-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 26px;
          align-items: start;
        }

        .offering-card {
          position: relative;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          user-select: none;
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Staggered alternating offset matching Monks */
        .card-col-2,
        .card-col-4 {
          margin-top: 44px;
        }

        /* Signature lift effect preserved as requested */
        .offering-card:hover,
        .offering-card.hovered {
          transform: translateY(-16px);
        }

        .offering-card.selected {
          transform: translateY(-22px) scale(1.01);
        }

        /* Number at top right corner overlapping image matching Monks */
        .card-number-badge {
          position: absolute;
          top: -34px;
          right: 14px;
          z-index: 4;
          pointer-events: none;
        }

        .card-number-text {
          font-family: var(--font-jakarta), var(--font-sans), sans-serif;
          font-size: clamp(3.4rem, 4.4vw, 4.8rem);
          font-weight: 800;
          line-height: 1;
          color: #E63946;
          letter-spacing: -0.04em;
          text-shadow: 0 4px 18px rgba(230, 57, 70, 0.28);
          transition: transform 0.4s ease, color 0.4s ease, text-shadow 0.4s ease;
          display: block;
        }

        .offering-card:hover .card-number-text {
          transform: translateY(-3px) scale(1.03);
          color: #ff4757;
          text-shadow: 0 8px 26px rgba(230, 57, 70, 0.5);
        }

        /* Card Inner Box */
        .card-inner {
          display: flex;
          flex-direction: column;
          height: 100%;
          background-color: transparent;
        }

        /* Card Image Box matching Monks rectangular ratio and corner radius */
        .card-image-box {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1.05;
          border-radius: 14px;
          overflow: hidden;
          background-color: #0e0e0e;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: box-shadow 0.4s ease, border-color 0.4s ease;
        }

        .offering-card:hover .card-image-box {
          box-shadow: 0 24px 50px -10px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(230, 57, 70, 0.35);
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
        }

        .offering-card:hover .card-image {
          transform: scale(1.05);
          filter: brightness(1.03);
        }

        .card-image-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.35) 100%);
          pointer-events: none;
        }

        /* Card Content Below Image matching Monks typography */
        .card-content {
          padding-top: 14px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-eyebrow {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.72rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: rgba(234, 232, 228, 0.5);
          margin-bottom: 6px;
        }

        .card-title-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
          flex-wrap: wrap;
        }

        .card-title {
          font-family: var(--font-jakarta), var(--font-sans), sans-serif;
          font-size: clamp(1.02rem, 1.22vw, 1.22rem);
          font-weight: 800;
          line-height: 1.25;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0;
          transition: color 0.3s ease;
        }

        .offering-card:hover .card-title {
          color: #E63946;
        }

        /* Monks signature inline arrow circle */
        .card-arrow-circle {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .offering-card:hover .card-arrow-circle {
          background-color: #E63946;
          transform: translateX(3px);
          box-shadow: 0 4px 12px rgba(230, 57, 70, 0.4);
        }

        .card-description {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.8rem;
          line-height: 1.48;
          color: rgba(234, 232, 228, 0.65);
          margin: 0;
          max-width: 300px;
        }

        /* Modal Styles */
        .offering-modal-backdrop {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.82);
          backdrop-filter: blur(14px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.3s ease;
        }

        .offering-modal-content {
          position: relative;
          background-color: #141414;
          color: #eae8e4;
          max-width: 960px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.85), 0 0 40px rgba(230, 57, 70, 0.2);
          padding: 44px;
          animation: scaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modal-close-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #eae8e4;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
          z-index: 10;
        }

        .modal-close-btn:hover {
          background-color: #E63946;
          border-color: #E63946;
          color: #ffffff;
        }

        .modal-grid {
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 36px;
          align-items: start;
        }

        .modal-left {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .modal-image-wrap {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          aspect-ratio: 1 / 1;
          box-shadow: 0 12px 30px rgba(0,0,0,0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .modal-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .modal-number-badge {
          position: absolute;
          bottom: 12px;
          right: 14px;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 2.4rem;
          font-weight: 800;
          color: #E63946;
          text-shadow: 0 4px 12px rgba(0,0,0,0.4);
        }

        .modal-pill-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 9999px;
          background-color: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.85rem;
          font-weight: 700;
          color: #eae8e4;
          width: fit-content;
        }

        .modal-right {
          display: flex;
          flex-direction: column;
        }

        .modal-eyebrow {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #E63946;
          margin-bottom: 6px;
        }

        .modal-title {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 1.85rem;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: #ffffff;
          margin: 0 0 6px 0;
        }

        .modal-subtitle {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.95rem;
          color: rgba(234, 232, 228, 0.55);
          font-weight: 600;
          margin: 0 0 16px 0;
        }

        .modal-body {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 1.02rem;
          line-height: 1.65;
          color: rgba(234, 232, 228, 0.8);
          margin: 0 0 24px 0;
        }

        .modal-deliverables-box {
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 20px 22px;
          margin-bottom: 20px;
        }

        .modal-deliverables-title {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #ffffff;
          margin: 0 0 14px 0;
        }

        .modal-deliverables-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .modal-deliverables-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.94rem;
          line-height: 1.5;
          color: rgba(234, 232, 228, 0.85);
        }

        .list-check {
          flex-shrink: 0;
          margin-top: 3px;
        }

        .modal-audience-box {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.92rem;
          line-height: 1.5;
          padding: 12px 16px;
          border-left: 3px solid #E63946;
          background-color: rgba(230, 57, 70, 0.08);
          border-radius: 0 10px 10px 0;
          margin-bottom: 28px;
        }

        .audience-label {
          font-weight: 700;
          color: #ffffff;
        }

        .audience-text {
          color: rgba(234, 232, 228, 0.75);
        }

        .modal-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .modal-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 9999px;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.92rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
          outline: none;
        }

        .modal-cta-btn.primary {
          background-color: #25D366;
          color: #ffffff;
          border: 1px solid #25D366;
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);
        }

        .modal-cta-btn.primary:hover {
          background-color: #22bf5b;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(37, 211, 102, 0.45);
        }

        .modal-cta-btn.secondary {
          background-color: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #eae8e4;
        }

        .modal-cta-btn.secondary:hover {
          background-color: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.3);
          color: #ffffff;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 1200px) {
          .offerings-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
          .card-col-2,
          .card-col-4 {
            margin-top: 0;
          }
        }

        @media (max-width: 768px) {
          .offerings-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .card-col-2,
          .card-col-4 {
            margin-top: 0;
          }
          .modal-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
