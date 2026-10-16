"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  ArrowUpRight,
  Play,
  Film,
  Clapperboard,
  Volume2,
  VolumeX,
} from "lucide-react";

export default function ClientsPartnersSection() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all"); // 'all' | 'productions' | 'films'
  const [activeMoment, setActiveMoment] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const videoRefs = useRef({});
  const mainVideoRef = useRef(null);
  const cinemaPlayerRef = useRef(null);

  // 8 Flagship Partner Brands matching user's exact specification
  const allBrands = [
    {
      id: "porsche",
      name: "Porsche Egypt",
      displayName: "Porsche",
      tagline: "First Official Partner",
      badgeText: "OUR FIRST PARTNER",
      isFirstPartner: true,
      sector: "Automotive & Luxury",
      house: "Devaj Films",
      houseId: "films",
      iconHouse: Film,
      narrative:
        "From the first production decision through the final grade, this project was shaped as one focused visual story.",
      image: "/images/clients/porsche-egypt.jpg",
      videoUrl: "/videos/hero-reel.mp4",
      logoType: "porsche",
    },
    {
      id: "eskan-misr",
      name: "Eskan Misr",
      displayName: "Eskan Misr",
      tagline: "National Real Estate Developer",
      badgeText: "REAL ESTATE",
      isFirstPartner: false,
      sector: "Real Estate & Mega Projects",
      house: "Devaj Films",
      houseId: "films",
      iconHouse: Film,
      narrative:
        "Showcasing vast architectural scale, heavy construction engineering, and the evolution of modern community living.",
      image: "/images/clients/eskan-misr.jpg",
      videoUrl: "/videos/devaj-film.mp4",
      logoType: "eskan",
    },
    {
      id: "the-capital",
      name: "The Capital",
      displayName: "The Capital",
      tagline: "Urban Development & Skyline",
      badgeText: "DEVELOPMENT",
      isFirstPartner: false,
      sector: "Architecture & Urban Planning",
      house: "Devaj Films",
      houseId: "films",
      iconHouse: Film,
      narrative:
        "Capturing iconic skyscrapers, interior design aesthetics, and the evolution of modern metropolitan living.",
      image: "/images/clients/the-capital.jpg",
      videoUrl: "/videos/sample-reel-1.mp4",
      logoType: "capital",
    },
    {
      id: "abrag",
      name: "ABRAG Development",
      displayName: "ABRAG",
      tagline: "Architectural Towers & Complexes",
      badgeText: "DEVELOPMENT",
      isFirstPartner: false,
      sector: "Real Estate & Hospitality",
      house: "Devaj Films",
      houseId: "films",
      iconHouse: Film,
      narrative:
        "Directing luxury residential tower walkthroughs, lifestyle cinematography, and high-velocity commercial campaigns.",
      image: "/images/offerings/cinematic-films.jpg",
      videoUrl: "/videos/monks-sizzle.mp4",
      logoType: "abrag",
    },
    {
      id: "el-ghandour",
      name: "El-Ghandour Medical",
      displayName: "El-Ghandour",
      tagline: "Medical Group & Specialized Clinics",
      badgeText: "MEDICAL GROUP",
      isFirstPartner: false,
      sector: "Healthcare & Specialized Clinics",
      house: "Devaj Productions",
      houseId: "productions",
      iconHouse: Clapperboard,
      narrative:
        "Clinical excellence, specialist physician profiles, and compassionate healthcare patient recovery stories.",
      image: "/images/clients/elghandour-medical.jpg",
      videoUrl: "/videos/devaj-production.mp4",
      logoType: "ghandour",
    },
    {
      id: "clorox",
      name: "Clorox",
      displayName: "Clorox",
      tagline: "Global FMCG Commercial",
      badgeText: "CONSUMER",
      isFirstPartner: false,
      sector: "FMCG & Consumer Goods",
      house: "Devaj Productions",
      houseId: "productions",
      iconHouse: Clapperboard,
      narrative:
        "High-speed phantom macro camera captures, dynamic liquid motion, visual effects, and prime-time broadcast commercials.",
      image: "/images/clients/clorox-commercial.jpg",
      videoUrl: "/videos/devaj-production.mp4",
      logoType: "clorox",
    },
    {
      id: "cpc",
      name: "CPC Industrial",
      displayName: "CPC Industrial",
      tagline: "Building Products & Manufacturing",
      badgeText: "INDUSTRIAL",
      isFirstPartner: false,
      sector: "Industrial & Manufacturing",
      house: "Devaj Productions",
      houseId: "productions",
      iconHouse: Clapperboard,
      narrative:
        "Heavy industrial facility cinematography, robotic manufacturing lines, supply chain logistics, and global investor visual reels.",
      image: "/images/clients/eskan-misr.jpg",
      videoUrl: "/videos/hero-reel.mp4",
      logoType: "cpc",
    },
    {
      id: "schon",
      name: "Schön Clinics",
      displayName: "Schön Clinics",
      tagline: "Precision Dental & Aesthetic Center",
      badgeText: "DENTAL CARE",
      isFirstPartner: false,
      sector: "Healthcare & Aesthetics",
      house: "Devaj Productions",
      houseId: "productions",
      iconHouse: Clapperboard,
      narrative:
        "Human-centric healthcare storytelling, sterile modern clinical environments, and aesthetic patient transformations.",
      image: "/images/clients/elghandour-medical.jpg",
      videoUrl: "/videos/devaj-film.mp4",
      logoType: "schon",
    },
  ];

  // Moments for selected brand (matching screenshot: 4 moments)
  const moments = selectedBrand
    ? [
        {
          id: "hero-film",
          label: "HERO FILM",
          image: "/images/moments/hero-film.jpg",
          video: selectedBrand.videoUrl,
        },
        {
          id: "cinematic-setup",
          label: "CINEMATIC SETUP",
          image: "/images/moments/cinematic-setup.jpg",
          video: "/videos/devaj-production.mp4",
        },
        {
          id: "behind-the-scenes",
          label: "BEHIND THE SCENES",
          image: "/images/moments/behind-the-scenes.jpg",
          video: "/videos/devaj-film.mp4",
        },
        {
          id: "soundstage",
          label: "SOUNDSTAGE",
          image: "/images/moments/soundstage.jpg",
          video: "/videos/monks-sizzle.mp4",
        },
      ]
    : [];

  const currentMomentVideo =
    moments[activeMoment]?.video || selectedBrand?.videoUrl;

  // Reset active moment & scroll to clients when brand is chosen
  useEffect(() => {
    setActiveMoment(0);
    if (selectedBrand) {
      const el = document.getElementById("clients");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [selectedBrand]);

  // Auto-play main video when active moment changes
  useEffect(() => {
    if (mainVideoRef.current) {
      mainVideoRef.current.currentTime = 0;
      const playPromise = mainVideoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, [activeMoment, selectedBrand]);

  // Close cinema view on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedBrand(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Fullscreen trigger for cinema video
  const handleFullscreen = () => {
    const el = cinemaPlayerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      if (el.requestFullscreen) {
        el.requestFullscreen();
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  // Filtered brands based on house selector
  const displayedBrands = allBrands.filter((b) => {
    if (activeFilter === "all") return true;
    return b.houseId === activeFilter;
  });

  // Handle Video Hover Physics on Grid Cards
  const handleMouseEnterCard = (brandId) => {
    const video = videoRefs.current[brandId];
    if (video) {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  };

  const handleMouseLeaveCard = (brandId) => {
    const video = videoRefs.current[brandId];
    if (video) {
      video.pause();
    }
  };

  return (
    <section
      id="clients"
      style={{
        backgroundColor: "#0d0d0d",
        color: "#eae8e4",
        position: "relative",
        zIndex: 27,
        marginTop: "-52px",
        borderTopLeftRadius: "52px",
        borderTopRightRadius: "52px",
        boxShadow: "0 -35px 80px rgba(0, 0, 0, 0.45), 0 -12px 30px rgba(0, 0, 0, 0.25)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        padding: selectedBrand ? "105px 0 90px" : "120px 0 135px",
        scrollMarginTop: "90px",
        overflow: "hidden",
        transition: "padding 0.35s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1560px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        {!selectedBrand ? (
          <>
            {/* =================================================================== */}
            {/* 1. SECTION EDITORIAL HEADER & HOUSE FILTERS (Matching Screenshot)   */}
            {/* =================================================================== */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: "28px",
                marginBottom: "46px",
              }}
            >
              <div>
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
                    marginBottom: "14px",
                  }}
                >
                  <span>Selected Works</span>
                  <span style={{ fontSize: "1.1rem" }}>•</span>
                  <span style={{ color: "rgba(234, 232, 228, 0.5)", fontWeight: 600 }}>
                    Brand Archive
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(2.4rem, 4.4vw, 4.2rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontStyle: "italic",
                    margin: 0,
                  }}
                >
                  Brands We Have Delivered For
                  <span style={{ color: "#E63946", fontStyle: "normal" }}>.</span>
                </h2>
              </div>

              {/* Filter Pills (Matching User Screenshot: 8 All, 4 Productions, 4 Films) */}
              <div className="filter-pills-row">
                <button
                  type="button"
                  onClick={() => setActiveFilter("all")}
                  className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
                >
                  <span>ALL WORK</span>
                  <span className="filter-count">8</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveFilter("productions")}
                  className={`filter-btn ${
                    activeFilter === "productions" ? "active" : ""
                  }`}
                >
                  <span>DEVAJ PRODUCTIONS</span>
                  <span className="filter-count">4</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveFilter("films")}
                  className={`filter-btn ${activeFilter === "films" ? "active" : ""}`}
                >
                  <span>DEVAJ FILMS</span>
                  <span className="filter-count">4</span>
                </button>
              </div>
            </div>

            {/* =================================================================== */}
            {/* 2. 4x2 ARCHITECTURAL BENTO SHOWCASE GRID (Matching User Screenshot) */}
            {/* =================================================================== */}
            <div className="brands-showcase-grid">
              {displayedBrands.map((brand) => (
                <div
                  key={brand.id}
                  onClick={() => setSelectedBrand(brand)}
                  onMouseEnter={() => handleMouseEnterCard(brand.id)}
                  onMouseLeave={() => handleMouseLeaveCard(brand.id)}
                  className="brand-cinema-card"
                  role="button"
                  tabIndex={0}
                  aria-label={`Open project details for ${brand.name}`}
                >
                  {/* 1. Background Video Preview (Fades in on hover) */}
                  <video
                    ref={(el) => (videoRefs.current[brand.id] = el)}
                    src={brand.videoUrl}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="card-hover-video"
                  />

                  {/* 2. Static Background Image (When not hovering) */}
                  <div
                    className="card-static-bg"
                    style={{ backgroundImage: `url(${brand.image})` }}
                  />

                  {/* 3. Dark Film Vignette / Gradient Overlay */}
                  <div className="card-gradient-vignette" />

                  {/* 4. Top Category Badge */}
                  <div className="card-top-bar">
                    <span className="card-badge-label">{brand.badgeText}</span>
                  </div>

                  {/* 5. Center: Distinct Brand Logo matching screenshot */}
                  <div className="card-center-logo-box">
                    {brand.logoType === "porsche" && (
                      <img
                        src="/images/clients/logos/porsche.png"
                        alt="Porsche Egypt"
                        className="porsche-crest-img"
                      />
                    )}

                    {brand.logoType === "eskan" && (
                      <span className="eskan-clean-text">Eskan Misr</span>
                    )}

                    {brand.logoType === "capital" && (
                      <img
                        src="/images/clients/logos/the-capital.png"
                        alt="The Capital"
                        className="capital-square-img"
                      />
                    )}

                    {brand.logoType === "abrag" && (
                      <img
                        src="/images/clients/logos/abrag.png"
                        alt="ABRAG Development"
                        className="abrag-square-img"
                      />
                    )}

                    {brand.logoType === "ghandour" && (
                      <span className="ghandour-clean-text">El-Ghandour</span>
                    )}

                    {brand.logoType === "clorox" && (
                      <img
                        src="/images/clients/logos/clorox.png"
                        alt="Clorox"
                        className="clorox-diamond-img"
                      />
                    )}

                    {brand.logoType === "cpc" && (
                      <img
                        src="/images/clients/logos/cpc.png"
                        alt="CPC"
                        className="cpc-logo-img"
                      />
                    )}

                    {brand.logoType === "schon" && (
                      <img
                        src="/images/clients/logos/schon-clinics.png"
                        alt="Schön Clinics"
                        className="schon-logo-img"
                      />
                    )}
                  </div>

                  {/* 6. Bottom Bar: OPEN PROJECT + Circle Arrow Button */}
                  <div className="card-bottom-bar">
                    <span className="open-project-text">OPEN PROJECT</span>
                    <div className="card-circle-arrow-btn">
                      <Play
                        size={10}
                        fill="currentColor"
                        strokeWidth={0}
                        style={{ marginLeft: "2px" }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* =================================================================== */
          /* 3. DARK CINEMA CASE STUDY VIEW (Matching media_1792175857610.png)   */
          /* =================================================================== */
          <div className="company-details-cinema-view">
            {/* Top Sub-Bar: ← ALL COMPANIES 🔴 & {HOUSE} • SELECTED WORK */}
            <div className="cinema-top-subbar">
              <button
                type="button"
                onClick={() => setSelectedBrand(null)}
                className="cinema-back-btn"
                aria-label="Back to all companies"
              >
                <span>← ALL COMPANIES</span>
                <span className="cinema-live-dot" />
              </button>

              <div className="cinema-house-label">
                {selectedBrand.house.toUpperCase()} • SELECTED WORK
              </div>
            </div>

            {/* 3-Column Cinema Stage Grid */}
            <div className="cinema-stage-grid">
              {/* Column 1: Main Video Player (~58% width) */}
              <div className="cinema-player-col" ref={cinemaPlayerRef}>
                <video
                  ref={mainVideoRef}
                  src={currentMomentVideo}
                  autoPlay
                  loop
                  playsInline
                  muted={isMuted}
                  className="cinema-main-video"
                />

                {/* Sound Mute/Unmute Pill */}
                <button
                  type="button"
                  onClick={() => setIsMuted((prev) => !prev)}
                  className="cinema-sound-toggle-btn"
                  title={isMuted ? "Unmute Sound" : "Mute Sound"}
                  aria-label={isMuted ? "Unmute Sound" : "Mute Sound"}
                >
                  {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                </button>

                {/* Bottom Right: VIEW FULLSCREEN ↗ */}
                <button
                  type="button"
                  onClick={handleFullscreen}
                  className="cinema-fullscreen-pill"
                  aria-label="View Fullscreen"
                >
                  <span>VIEW FULLSCREEN</span>
                  <ArrowUpRight size={13} strokeWidth={2.5} />
                </button>
              </div>

              {/* Column 2: Center Narrative Compartment (~23% width) */}
              <div className="cinema-narrative-col">
                <div className="cinema-narrative-top">
                  <span className="cinema-eyebrow-red">
                    {selectedBrand.badgeText}
                  </span>
                  <h2 className="cinema-brand-title">
                    {selectedBrand.displayName || selectedBrand.name}
                  </h2>
                  <p className="cinema-narrative-desc">
                    {selectedBrand.narrative}
                  </p>
                </div>

                <div className="cinema-narrative-bottom">
                  <span className="cinema-moments-label">4 PROJECT MOMENTS</span>
                </div>
              </div>

              {/* Column 3: 4 Project Moments (~19% width) */}
              <div className="cinema-moments-col">
                {moments.map((moment, idx) => (
                  <div
                    key={moment.id}
                    onClick={() => setActiveMoment(idx)}
                    className={`cinema-moment-card ${
                      activeMoment === idx ? "active" : ""
                    }`}
                    role="button"
                    tabIndex={0}
                    aria-label={`Select moment ${moment.label}`}
                  >
                    <div
                      className="moment-card-bg"
                      style={{ backgroundImage: `url(${moment.image})` }}
                    />
                    <div className="moment-card-vignette" />

                    <div className="moment-arrow-circle">
                      <ArrowUpRight size={12} strokeWidth={2.5} />
                    </div>

                    <div className="moment-card-bottom">
                      <span className="moment-label-text">{moment.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* =================================================================== */}
      {/* 4. COMPONENT STYLES & INTERACTIVE PHYSICS                           */}
      {/* =================================================================== */}
      <style jsx>{`
        /* Filter Pills Row (Matching Screenshot) */
        .filter-pills-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .filter-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: rgba(234, 232, 228, 0.7);
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.25s ease;
          outline: none;
        }

        .filter-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }

        .filter-btn.active {
          background: #ffffff;
          border-color: #ffffff;
          color: #111111;
          box-shadow: 0 4px 16px rgba(255, 255, 255, 0.2);
        }

        .filter-count {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.12);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 800;
        }

        .filter-btn.active .filter-count {
          background: #e63946;
          color: #ffffff;
        }

        /* 4x2 Seamless Grid from User Screenshot */
        .brands-showcase-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .brand-cinema-card {
          position: relative;
          aspect-ratio: 1 / 1;
          min-height: 270px;
          background-color: #0b0b0b;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 24px 26px;
          overflow: hidden;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .brand-cinema-card:hover {
          background-color: #121212;
        }

        /* Video on Hover */
        .card-hover-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
        }

        .brand-cinema-card:hover .card-hover-video {
          opacity: 0.45;
        }

        /* Static Background Image (subtle dark film texture) */
        .card-static-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center center;
          z-index: 0;
          filter: blur(8px) brightness(0.2) contrast(1.1);
          transform: scale(1.08);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
            filter 0.4s ease;
        }

        .brand-cinema-card:hover .card-static-bg {
          transform: scale(1.12);
          filter: blur(4px) brightness(0.32) contrast(1.15);
        }

        /* Dark Film Vignette */
        .card-gradient-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at center,
            rgba(11, 11, 11, 0.3) 0%,
            rgba(11, 11, 11, 0.88) 100%
          );
          z-index: 2;
          pointer-events: none;
        }

        /* Card Top Bar */
        .card-top-bar {
          position: relative;
          z-index: 3;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
        }

        .card-badge-label {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: rgba(255, 255, 255, 0.48);
        }

        /* Card Center Logo Box */
        .card-center-logo-box {
          position: relative;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .brand-cinema-card:hover .card-center-logo-box {
          transform: scale(1.05);
        }

        /* 1. Porsche Crest */
        .porsche-crest-img {
          height: 86px;
          width: auto;
          max-width: 120px;
          object-fit: contain;
          filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.85));
        }

        /* 2. Eskan Misr Clean Text */
        .eskan-clean-text {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 1.85rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: #ffffff;
          text-shadow: 0 4px 16px rgba(0, 0, 0, 0.9);
        }

        /* 3. The Capital Square Graphic */
        .capital-square-img {
          width: 125px;
          height: 125px;
          object-fit: cover;
          display: block;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.7);
        }

        /* 4. ABRAG Square Graphic */
        .abrag-square-img {
          width: 125px;
          height: 125px;
          object-fit: cover;
          display: block;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.7);
        }

        /* 5. El-Ghandour Clean Text */
        .ghandour-clean-text {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 1.85rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: #ffffff;
          text-shadow: 0 4px 16px rgba(0, 0, 0, 0.9);
        }

        /* 6. Clorox Diamond */
        .clorox-diamond-img {
          height: 68px;
          width: auto;
          max-width: 155px;
          object-fit: contain;
          filter: drop-shadow(0 6px 20px rgba(0, 0, 0, 0.7));
        }

        /* 7. CPC Logo */
        .cpc-logo-img {
          height: 66px;
          width: auto;
          max-width: 155px;
          object-fit: contain;
          filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.7));
        }

        /* 8. Schön Clinics */
        .schon-logo-img {
          height: 52px;
          width: auto;
          max-width: 185px;
          object-fit: contain;
          filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.85));
        }

        /* Card Bottom Bar (OPEN PROJECT + Circle Arrow Button) */
        .card-bottom-bar {
          position: relative;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .open-project-text {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.85);
          transition: color 0.25s ease;
        }

        .brand-cinema-card:hover .open-project-text {
          color: #ffffff;
        }

        .card-circle-arrow-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.5);
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .brand-cinema-card:hover .card-circle-arrow-btn {
          border-color: #ffffff;
          background: #ffffff;
          color: #0b0b0b;
          transform: scale(1.1);
          box-shadow: 0 4px 16px rgba(255, 255, 255, 0.3);
        }

        /* =================================================================== */
        /* 5. DARK CINEMA CASE STUDY STYLES (Matching media_1792175857610.png) */
        /* =================================================================== */
        .company-details-cinema-view {
          width: 100%;
          animation: cinemaFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Top Sub-Bar */
        .cinema-top-subbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 22px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 26px;
        }

        .cinema-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: none;
          border: none;
          color: #eae8e4;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          padding: 6px 0;
          transition: color 0.2s ease;
          outline: none;
        }

        .cinema-back-btn:hover {
          color: #ffffff;
        }

        .cinema-live-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #e63946;
          box-shadow: 0 0 10px rgba(230, 57, 70, 0.9);
          display: inline-block;
          animation: liveDotPulse 2s infinite ease-in-out;
        }

        .cinema-house-label {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(234, 232, 228, 0.55);
        }

        /* 3-Column Cinema Stage Grid */
        .cinema-stage-grid {
          display: grid;
          grid-template-columns: 58% 23% 19%;
          height: clamp(540px, 62vh, 660px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: #070707;
          overflow: hidden;
        }

        /* Column 1: Main Cinema Video Player */
        .cinema-player-col {
          position: relative;
          background: #000000;
          overflow: hidden;
          height: 100%;
        }

        .cinema-main-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .cinema-sound-toggle-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 5;
          transition: all 0.25s ease;
        }

        .cinema-sound-toggle-btn:hover {
          background: rgba(230, 57, 70, 0.9);
          border-color: #e63946;
          transform: scale(1.08);
        }

        .cinema-fullscreen-pill {
          position: absolute;
          bottom: 24px;
          right: 24px;
          background: #ffffff;
          color: #070707;
          border: none;
          border-radius: 9999px;
          padding: 10px 22px;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          z-index: 5;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
          transition: all 0.25s ease;
        }

        .cinema-fullscreen-pill:hover {
          transform: scale(1.04);
          background: #f1efe9;
          box-shadow: 0 10px 28px rgba(255, 255, 255, 0.2);
        }

        /* Column 2: Center Narrative Compartment */
        .cinema-narrative-col {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 44px 34px;
          background: #090909;
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          height: 100%;
        }

        .cinema-narrative-top {
          display: flex;
          flex-direction: column;
        }

        .cinema-eyebrow-red {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #e63946;
          margin-bottom: 22px;
          display: block;
        }

        .cinema-brand-title {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: clamp(2.4rem, 3.6vw, 3.5rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin: 0 0 24px 0;
        }

        .cinema-narrative-desc {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.95rem;
          line-height: 1.68;
          color: rgba(234, 232, 228, 0.72);
          margin: 0;
          max-width: 320px;
        }

        .cinema-narrative-bottom {
          padding-top: 32px;
        }

        .cinema-moments-label {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #ffffff;
        }

        /* Column 3: 4 Project Moments */
        .cinema-moments-col {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .cinema-moment-card {
          flex: 1;
          position: relative;
          cursor: pointer;
          overflow: hidden;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.25s ease;
        }

        .cinema-moment-card:last-child {
          border-bottom: none;
        }

        .cinema-moment-card.active {
          box-shadow: inset 3px 0 0 #e63946;
        }

        .moment-card-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease;
        }

        .cinema-moment-card:hover .moment-card-bg {
          transform: scale(1.08);
        }

        .moment-card-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.75) 100%
          );
          pointer-events: none;
        }

        .moment-arrow-circle {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.45);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          color: #111111;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
          z-index: 2;
        }

        .cinema-moment-card:hover .moment-arrow-circle {
          background: #ffffff;
          transform: scale(1.1);
        }

        .cinema-moment-card.active .moment-arrow-circle {
          background: #ffffff;
          color: #111111;
        }

        .moment-card-bottom {
          position: absolute;
          bottom: 12px;
          left: 14px;
          z-index: 2;
        }

        .moment-label-text {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #ffffff;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9);
        }

        /* Keyframes */
        @keyframes liveDotPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.25);
            opacity: 0.7;
          }
        }

        @keyframes cinemaFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Breakpoints */
        @media (max-width: 1100px) {
          .brands-showcase-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 1024px) {
          .cinema-stage-grid {
            grid-template-columns: 1fr;
            height: auto;
          }

          .cinema-player-col {
            aspect-ratio: 16 / 9;
            min-height: 300px;
          }

          .cinema-narrative-col {
            border-left: none;
            border-right: none;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding: 30px 22px;
          }

          .cinema-moments-col {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }

          .cinema-moment-card {
            min-height: 130px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            border-right: 1px solid rgba(255, 255, 255, 0.08);
          }
        }

        @media (max-width: 640px) {
          .brands-showcase-grid {
            grid-template-columns: 1fr;
          }

          .brand-cinema-card {
            min-height: 250px;
            padding: 20px 22px;
          }

          .cinema-moments-col {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
