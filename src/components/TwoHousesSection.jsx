"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowUpRight, Film, Clapperboard, Sparkles, ChevronDown, Camera, Award, Flame, Play } from "lucide-react";

export default function TwoHousesSection() {
  const [activeHouse, setActiveHouse] = useState(null); // null | 'production' | 'film'
  const [headerVisible, setHeaderVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  const headerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const productionVideoRef = useRef(null);
  const filmVideoRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    };

    const headerObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHeaderVisible(true);
      }
    }, observerOptions);

    const cardsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setCardsVisible(true);
      }
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

    if (headerRef.current) headerObserver.observe(headerRef.current);
    if (cardsContainerRef.current) cardsObserver.observe(cardsContainerRef.current);

    return () => {
      headerObserver.disconnect();
      cardsObserver.disconnect();
    };
  }, []);

  const handleMouseEnter = (house) => {
    setActiveHouse(house);
    if (house === "production" && productionVideoRef.current) {
      productionVideoRef.current.play().catch(() => {});
    } else if (house === "film" && filmVideoRef.current) {
      filmVideoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setActiveHouse(null);
  };

  const scrollToHouse = (houseId) => {
    const el = document.getElementById(houseId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="houses"
      style={{
        backgroundColor: "#0d0d0d",
        color: "#eae8e4",
        position: "relative",
        zIndex: 24,
        marginTop: "-64px",
        borderTopLeftRadius: "52px",
        borderTopRightRadius: "52px",
        boxShadow: "0 -35px 80px rgba(0, 0, 0, 0.45), 0 -12px 30px rgba(0, 0, 0, 0.25)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        padding: "120px 0 140px",
        overflow: "hidden",
      }}
    >
      {/* Subtle Ambient Background Glow - Perfectly Circular & Feathered (Zero Edge Clipping) */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "1000px",
          height: "1000px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(230, 57, 70, 0.06) 0%, rgba(230, 57, 70, 0.02) 35%, rgba(230, 57, 70, 0) 65%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* =================================================================== */}
      {/* 1. SECTION EDITORIAL HEADER                                        */}
      {/* =================================================================== */}
      <div
        ref={headerRef}
        style={{
          maxWidth: "1560px",
          margin: "0 auto",
          padding: "0 40px",
          marginBottom: "60px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "36px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.4rem, 4.4vw, 4.4rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#eae8e4",
              margin: 0,
              maxWidth: "840px",
              fontWeight: 700,
              fontStyle: "italic",
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(45px)",
              transition: "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            One Group, Two Creative
            <br />
            Houses<span style={{ color: "#E63946", fontStyle: "normal" }}>.</span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "clamp(1.02rem, 1.22vw, 1.18rem)",
              lineHeight: 1.72,
              color: "rgba(234, 232, 228, 0.8)",
              maxWidth: "680px",
              margin: 0,
              fontWeight: 400,
              letterSpacing: "0.01em",
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(35px)",
              transition: "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
            }}
          >
            Devaj Group is a creative production group built around two specialised companies.
            Together they cover the complete journey of visual content, from the first idea to
            final delivery, for brands of every size.
          </p>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 2. DUAL INTERACTIVE SPLIT SCREEN (Devaj Productions vs Devaj Films) */}
      {/* =================================================================== */}
      <div
        ref={cardsContainerRef}
        style={{
          maxWidth: "1680px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 2,
          overflow: "hidden",
        }}
      >
        <div
          className="houses-dual-container"
          style={{
            display: "flex",
            gap: "24px",
            minHeight: "720px",
            height: "78vh",
            maxHeight: "860px",
            width: "100%",
            borderRadius: "18px",
          }}
        >
          {/* --------------------------------------------------------------- */}
          {/* HOUSE 01: DEVAJ PRODUCTIONS (Left Card - Slides from Left)       */}
          {/* --------------------------------------------------------------- */}
          <div
            onClick={() => scrollToHouse("devaj-production")}
            onMouseEnter={() => handleMouseEnter("production")}
            onMouseLeave={handleMouseLeave}
            className="house-split-card"
            style={{
              flex: activeHouse === "production" ? "1.4" : activeHouse === "film" ? "0.65" : "1",
              opacity: cardsVisible ? 1 : 0,
              transform: cardsVisible ? "translateX(0)" : "translateX(-90px)",
              transition: "flex 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease",
              position: "relative",
              overflow: "hidden",
              borderRadius: "16px",
              cursor: "pointer",
              backgroundColor: "#0d0d0d",
              border: activeHouse === "production" ? "1px solid rgba(230, 57, 70, 0.65)" : "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: activeHouse === "production" ? "0 20px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(230, 57, 70, 0.2)" : "0 10px 40px rgba(0, 0, 0, 0.4)",
            }}
          >
            {/* Background Video */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
                overflow: "hidden",
              }}
            >
              <video
                ref={productionVideoRef}
                src="/videos/devaj-production.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  transform: activeHouse === "production" ? "scale(1.06)" : "scale(1)",
                  transition: "transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.5s ease",
                  filter: activeHouse === "film" ? "grayscale(40%) brightness(0.35)" : "brightness(0.72)",
                }}
              />
              {/* Cinematic Vignette Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.45) 45%, rgba(10,10,10,0.92) 100%)",
                  zIndex: 2,
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Content Overlay */}
            <div
              style={{
                position: "relative",
                zIndex: 5,
                height: "100%",
                padding: "48px 44px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Top Tag & Index */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "7px 16px",
                    borderRadius: "9999px",
                    backgroundColor: "rgba(15, 15, 15, 0.75)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.16)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#eae8e4",
                  }}
                >
                  <Clapperboard size={14} color="#E63946" />
                  <span>HOUSE 01 // PRODUCTION</span>
                </div>

                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.5rem",
                    fontStyle: "italic",
                    color: "rgba(234, 232, 228, 0.45)",
                  }}
                >
                  01
                </span>
              </div>

              {/* Bottom Information */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#E63946",
                    marginBottom: "14px",
                  }}
                >
                  Commercial & Production House
                </p>

                {/* Devaj Productions Official Logo */}
                <div
                  style={{
                    marginBottom: "22px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/images/devaj-productions-logo.png"
                    alt="Devaj Productions"
                    style={{
                      height: "clamp(54px, 5.5vw, 76px)",
                      width: "auto",
                      maxWidth: "85%",
                      objectFit: "contain",
                      display: "block",
                      filter: "drop-shadow(0 4px 18px rgba(0, 0, 0, 0.7))",
                      transition: "transform 0.4s ease",
                      transform: activeHouse === "production" ? "scale(1.03)" : "scale(1)",
                    }}
                  />
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1.05rem",
                    lineHeight: 1.6,
                    color: "rgba(234, 232, 228, 0.92)",
                    maxWidth: "520px",
                    marginBottom: "16px",
                    fontWeight: 400,
                  }}
                >
                  Agile creative production for small and medium-sized businesses and commercial brands.
                </p>

                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.92rem",
                    lineHeight: 1.6,
                    color: "#E63946",
                    fontWeight: 600,
                    maxWidth: "520px",
                    marginBottom: "28px",
                    letterSpacing: "0.01em",
                  }}
                >
                  Fast-turnaround projects · Reels and social content · Product shoots · Fashion · Podcasts
                </p>

                {/* Action Link Pill */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "14px 28px",
                    borderRadius: "9999px",
                    backgroundColor: activeHouse === "production" ? "#eae8e4" : "rgba(255, 255, 255, 0.12)",
                    color: activeHouse === "production" ? "#151515" : "#eae8e4",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    backdropFilter: "blur(14px)",
                    border: "1px solid rgba(255, 255, 255, 0.22)",
                    transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    boxShadow: activeHouse === "production" ? "0 8px 24px rgba(0,0,0,0.4)" : "none",
                  }}
                >
                  <span>Enter Devaj Production</span>
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          </div>

          {/* --------------------------------------------------------------- */}
          {/* HOUSE 02: DEVAJ FILMS (Right Card - Slides from Right)           */}
          {/* --------------------------------------------------------------- */}
          <div
            onClick={() => scrollToHouse("devaj-film")}
            onMouseEnter={() => handleMouseEnter("film")}
            onMouseLeave={handleMouseLeave}
            className="house-split-card"
            style={{
              flex: activeHouse === "film" ? "1.4" : activeHouse === "production" ? "0.65" : "1",
              opacity: cardsVisible ? 1 : 0,
              transform: cardsVisible ? "translateX(0)" : "translateX(90px)",
              transition: "flex 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, border-color 0.4s ease, box-shadow 0.4s ease",
              position: "relative",
              overflow: "hidden",
              borderRadius: "16px",
              cursor: "pointer",
              backgroundColor: "#0d0d0d",
              border: activeHouse === "film" ? "1px solid rgba(230, 57, 70, 0.65)" : "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: activeHouse === "film" ? "0 20px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(230, 57, 70, 0.2)" : "0 10px 40px rgba(0, 0, 0, 0.4)",
            }}
          >
            {/* Background Video */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
                overflow: "hidden",
              }}
            >
              <video
                ref={filmVideoRef}
                src="/videos/devaj-film.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  transform: activeHouse === "film" ? "scale(1.06)" : "scale(1)",
                  transition: "transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.5s ease",
                  filter: activeHouse === "production" ? "grayscale(40%) brightness(0.35)" : "brightness(0.72)",
                }}
              />
              {/* Cinematic Vignette Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.45) 45%, rgba(10,10,10,0.92) 100%)",
                  zIndex: 2,
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Content Overlay */}
            <div
              style={{
                position: "relative",
                zIndex: 5,
                height: "100%",
                padding: "48px 44px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Top Tag & Index */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "7px 16px",
                    borderRadius: "9999px",
                    backgroundColor: "rgba(15, 15, 15, 0.75)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.16)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#eae8e4",
                  }}
                >
                  <Film size={14} color="#E63946" />
                  <span>HOUSE 02 // CINEMA</span>
                </div>

                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.5rem",
                    fontStyle: "italic",
                    color: "rgba(234, 232, 228, 0.45)",
                  }}
                >
                  02
                </span>
              </div>

              {/* Bottom Information */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#E63946",
                    marginBottom: "14px",
                  }}
                >
                  Cinema & Narrative House
                </p>

                {/* Devaj Films Official Logo */}
                <div
                  style={{
                    marginBottom: "22px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/images/devaj-films-logo.png"
                    alt="Devaj Films"
                    style={{
                      height: "clamp(58px, 6vw, 84px)",
                      width: "auto",
                      maxWidth: "85%",
                      objectFit: "contain",
                      display: "block",
                      filter: "drop-shadow(0 4px 18px rgba(0, 0, 0, 0.7))",
                      transition: "transform 0.4s ease",
                      transform: activeHouse === "film" ? "scale(1.03)" : "scale(1)",
                    }}
                  />
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "1.05rem",
                    lineHeight: 1.6,
                    color: "rgba(234, 232, 228, 0.92)",
                    maxWidth: "520px",
                    marginBottom: "16px",
                    fontWeight: 400,
                  }}
                >
                  Large-scale cinematic production for major corporations and institutions.
                </p>

                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.92rem",
                    lineHeight: 1.6,
                    color: "#E63946",
                    fontWeight: 600,
                    maxWidth: "520px",
                    marginBottom: "28px",
                    letterSpacing: "0.01em",
                  }}
                >
                  Documentaries · Corporate films · Music videos · TV commercials
                </p>

                {/* Action Link Pill */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "14px 28px",
                    borderRadius: "9999px",
                    backgroundColor: activeHouse === "film" ? "#eae8e4" : "rgba(255, 255, 255, 0.12)",
                    color: activeHouse === "film" ? "#151515" : "#eae8e4",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    backdropFilter: "blur(14px)",
                    border: "1px solid rgba(255, 255, 255, 0.22)",
                    transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    boxShadow: activeHouse === "film" ? "0 8px 24px rgba(0,0,0,0.4)" : "none",
                  }}
                >
                  <span>Enter Devaj Film</span>
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ambient Dark Transition Base */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "180px",
          background: "linear-gradient(180deg, transparent 0%, rgba(10, 10, 10, 0.95) 70%, #0d0d0d 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Responsive Stacking Style */}
      <style jsx>{`
        @media (max-width: 900px) {
          :global(.houses-dual-container) {
            flex-direction: column !important;
            height: auto !important;
            min-height: auto !important;
          }
          :global(.house-split-card) {
            flex: none !important;
            height: 520px !important;
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
