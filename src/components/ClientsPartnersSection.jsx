"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  ArrowUpRight,
  Play,
  Pause,
  X,
  Film,
  Clapperboard,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  Plus,
} from "lucide-react";

export default function ClientsPartnersSection() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all"); // 'all' | 'productions' | 'films'
  const videoRefs = useRef({});

  // Close modal on ESC key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedBrand(null);
      }
    };
    if (selectedBrand) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedBrand]);

  // 6 Flagship Partner Brands matching user's exact screenshot & portfolio
  const allBrands = [
    {
      id: "porsche",
      name: "Porsche Egypt",
      tagline: "First Official Partner",
      badgeText: "OUR FIRST PARTNER",
      isFirstPartner: true,
      sector: "Automotive & Luxury",
      house: "Devaj Films",
      houseId: "films",
      iconHouse: Film,
      projectTitle: "Porsche Egypt — The Electric Pulse & 911 Heritage",
      projectScope:
        "High-speed automotive cinematography, dynamic tracking vehicle shoots, TVC launch film, and sound design celebrating engineering precision.",
      image: "/images/clients/porsche-egypt.jpg",
      videoUrl: "/videos/hero-reel.mp4",
      deliverables: [
        "60s Cinema Launch Film (Arri LF & Master Anamorphic)",
        "Precision Russian Arm dynamic vehicle tracking at twilight",
        "4x 9:16 High-Velocity Instagram Reels",
        "Master DTS Sound Mixing & Color Grading in ACES",
      ],
      highlight: "Marked the official launch campaign for Porsche's next-generation EV presence in Egypt.",
      logoType: "porsche",
    },
    {
      id: "eskan-misr",
      name: "Eskan Misr",
      tagline: "National Real Estate Developer",
      badgeText: "REAL ESTATE",
      isFirstPartner: false,
      sector: "Real Estate & Mega Projects",
      house: "Devaj Films",
      houseId: "films",
      iconHouse: Film,
      projectTitle: "Eskan Misr — Building Nations Enterprise Documentary",
      projectScope:
        "Comprehensive corporate documentary film showcasing vast architectural scale, heavy construction engineering, and future community living.",
      image: "/images/clients/eskan-misr.jpg",
      videoUrl: "/videos/devaj-film.mp4",
      deliverables: [
        "90s Corporate Enterprise Documentary & Investor Film",
        "Licensed 5.4K Heavy-Lift Drone Aerial Cinematography",
        "Time-lapse infrastructure motion over 12 project sites",
        "Multi-speaker executive interviews in studio lighting",
      ],
      highlight: "Premiered at Egypt's premier annual real estate development summits.",
      logoType: "eskan",
    },
    {
      id: "the-capital",
      name: "The Capital",
      tagline: "Urban Development & Skyline",
      badgeText: "DEVELOPMENT",
      isFirstPartner: false,
      sector: "Architecture & Urban Planning",
      house: "Devaj Films",
      houseId: "films",
      iconHouse: Film,
      projectTitle: "The Capital — The New Urban Horizon",
      projectScope:
        "Architectural visual story capturing iconic skyscrapers, interior design aesthetics, and the evolution of modern metropolitan living.",
      image: "/images/clients/the-capital.jpg",
      videoUrl: "/videos/sample-reel-1.mp4",
      deliverables: [
        "Cinematic Architectural Showcase Film",
        "Twilight Golden Hour Lighting & Steadicam Walkthroughs",
        "3D Architectural Pre-visualization Integration",
        "Executive Social Campaign for High-Net-Worth Buyers",
      ],
      highlight: "Targeted digital and cinematic launch for flagship residential and business towers.",
      logoType: "capital",
    },
    {
      id: "abrag",
      name: "ABRAG Development",
      tagline: "Architectural Towers & Complexes",
      badgeText: "DEVELOPMENT",
      isFirstPartner: false,
      sector: "Real Estate & Hospitality",
      house: "Devaj Films",
      houseId: "films",
      iconHouse: Film,
      projectTitle: "ABRAG Development — Crafting Luxury Spaces",
      projectScope:
        "High-end residential tower walkthroughs, lifestyle cinematography, and premium commercial advertising.",
      image: "/images/offerings/cinematic-films.jpg",
      videoUrl: "/videos/monks-sizzle.mp4",
      deliverables: [
        "Luxury Tower Launch Campaign Film",
        "Interior Design & Material Texture Macro Shoots",
        "Social Reel series featuring architectural details",
        "Interactive digital showroom visuals",
      ],
      highlight: "Sold out initial phase within weeks of campaign rollout.",
      logoType: "abrag",
    },
    {
      id: "elghandour",
      name: "El-Ghandour Medical",
      tagline: "Healthcare Group",
      badgeText: "MEDICAL GROUP",
      isFirstPartner: false,
      sector: "Healthcare & Medicine",
      house: "Devaj Productions",
      houseId: "productions",
      iconHouse: Clapperboard,
      projectTitle: "El-Ghandour Medical Group — Compassion in Every Frame",
      projectScope:
        "Human-centric healthcare storytelling, sterile surgical suite filming, patient care narratives, and doctor profile videos.",
      image: "/images/clients/elghandour-medical.jpg",
      videoUrl: "/videos/devaj-production.mp4",
      deliverables: [
        "Brand Identity & Corporate Hospital Film",
        "Medical Operating Room Safe-Capture Cinematography",
        "Patient Testimonial Docu-Stories",
        "Full Social Media Video Suite for Clinics & Specialists",
      ],
      highlight: "Positioned the medical group as a premier trusted healthcare destination.",
      logoType: "ghandour",
    },
    {
      id: "clorox",
      name: "Clorox",
      tagline: "Global FMCG Commercial",
      badgeText: "CONSUMER GOODS",
      isFirstPartner: false,
      sector: "FMCG & Consumer Goods",
      house: "Devaj Productions",
      houseId: "productions",
      iconHouse: Clapperboard,
      projectTitle: "Clorox — Pure Impact Commercial Campaign",
      projectScope:
        "High-speed phantom macro camera captures, dynamic liquid motion, visual effects, and prime-time broadcast television commercials.",
      image: "/images/clients/clorox-commercial.jpg",
      videoUrl: "/videos/devaj-production.mp4",
      deliverables: [
        "30s Prime-Time Broadcast TV Commercial",
        "High-Speed Phantom Flex 4K Liquid Macro Filming",
        "VFX Cleanups, 3D Product Renders & Motion Graphics",
        "Multi-Dialect Master Voiceover Recording & Studio Audio",
      ],
      highlight: "High-retention commercial campaign broadcasted across major television networks.",
      logoType: "clorox",
    },
  ];

  // Filtered brands based on house selector
  const displayedBrands = allBrands.filter((b) => {
    if (activeFilter === "all") return true;
    return b.houseId === activeFilter;
  });

  // Handle Video Hover Physics
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
        zIndex: 26,
        padding: "110px 0 135px",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1560px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
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
              <span style={{ color: "rgba(234, 232, 228, 0.5)", fontWeight: 600 }}>Brand Archive</span>
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

          {/* Filter Pills (Matching User Screenshot) */}
          <div className="filter-pills-row">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
            >
              <span>ALL WORK</span>
              <span className="filter-count">6</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter("productions")}
              className={`filter-btn ${activeFilter === "productions" ? "active" : ""}`}
            >
              <span>DEVAJ PRODUCTIONS</span>
              <span className="filter-count">2</span>
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
        {/* 2. LOGO-CENTERED CARDS GRID WITH VIDEO ON HOVER                     */}
        {/* =================================================================== */}
        <div className="brands-showcase-grid">
          {displayedBrands.map((brand, idx) => (
            <div
              key={brand.id}
              onClick={() => setSelectedBrand(brand)}
              onMouseEnter={() => handleMouseEnterCard(brand.id)}
              onMouseLeave={() => handleMouseLeaveCard(brand.id)}
              className={`brand-cinema-card reveal-on-scroll delay-${(idx + 1) * 100}`}
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

                {/* 4. Top Category / Partner Badge */}
                <div className="card-top-bar">
                  <span className="card-badge-label">{brand.badgeText}</span>
                  {brand.isFirstPartner && (
                    <span className="first-partner-glow-dot" title="First Official Partner" />
                  )}
                </div>

                {/* 5. Center: Distinct Brand Logo */}
                <div className="card-center-logo-box">
                  {/* Porsche Crest */}
                  {brand.logoType === "porsche" && (
                    <div className="logo-porsche-wrap">
                      <svg viewBox="0 0 80 100" width="62" height="78" className="porsche-crest-svg">
                        <defs>
                          <linearGradient id="porscheGold" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#d4af37" />
                            <stop offset="50%" stopColor="#f3e5ab" />
                            <stop offset="100%" stopColor="#aa7c11" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M40 4 C62 4, 76 16, 76 34 C76 64, 40 96, 40 96 C40 96, 4 64, 4 34 C4 16, 18 4, 40 4 Z"
                          fill="url(#porscheGold)"
                          stroke="#111111"
                          strokeWidth="2"
                        />
                        <path d="M40 8 L40 92" stroke="#111111" strokeWidth="1.5" />
                        <path d="M12 36 L68 36" stroke="#111111" strokeWidth="1.5" />
                        <rect x="22" y="16" width="36" height="8" rx="2" fill="#111111" />
                        <text
                          x="40"
                          y="22"
                          fill="#d4af37"
                          fontSize="6"
                          fontWeight="bold"
                          textAnchor="middle"
                          letterSpacing="0.8"
                        >
                          PORSCHE
                        </text>
                        {/* Red and Black stripes */}
                        <rect x="14" y="42" width="22" height="5" fill="#E63946" />
                        <rect x="14" y="52" width="22" height="5" fill="#111111" />
                        <rect x="44" y="42" width="22" height="5" fill="#111111" />
                        <rect x="44" y="52" width="22" height="5" fill="#E63946" />
                      </svg>
                      <span className="porsche-sub-text">PORSCHE EGYPT</span>
                    </div>
                  )}

                  {/* Eskan Misr Logo */}
                  {brand.logoType === "eskan" && (
                    <div className="logo-eskan-wrap">
                      <span className="eskan-main-text">Eskan Misr</span>
                      <span className="eskan-arabic-text">إسـكـان مـصـر</span>
                    </div>
                  )}

                  {/* The Capital Logo */}
                  {brand.logoType === "capital" && (
                    <div className="logo-capital-box">
                      <div className="capital-feather-mark">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="#c4a962">
                          <path d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z" />
                        </svg>
                      </div>
                      <span className="capital-title">THE CAPITAL</span>
                      <span className="capital-subtitle">ذا كابيتال</span>
                    </div>
                  )}

                  {/* ABRAG Logo */}
                  {brand.logoType === "abrag" && (
                    <div className="logo-abrag-box">
                      <div className="abrag-emblem">
                        <svg viewBox="0 0 40 40" width="38" height="38" fill="none">
                          <path
                            d="M20 4L4 36H14L20 22L26 36H36L20 4Z"
                            fill="#ffffff"
                          />
                          <rect x="18" y="27" width="4" height="4" fill="#E63946" />
                        </svg>
                      </div>
                      <span className="abrag-text">ABRAG</span>
                      <span className="abrag-sub">DEVELOPMENTS</span>
                    </div>
                  )}

                  {/* El-Ghandour Medical Logo */}
                  {brand.logoType === "ghandour" && (
                    <div className="logo-ghandour-box">
                      <div className="ghandour-cross">
                        <svg viewBox="0 0 32 32" width="30" height="30" fill="none">
                          <rect x="13" y="4" width="6" height="24" rx="2" fill="#25D366" />
                          <rect x="4" y="13" width="24" height="6" rx="2" fill="#25D366" />
                        </svg>
                      </div>
                      <span className="ghandour-title">EL-GHANDOUR</span>
                      <span className="ghandour-sub">MEDICAL GROUP</span>
                    </div>
                  )}

                  {/* Clorox Logo */}
                  {brand.logoType === "clorox" && (
                    <div className="logo-clorox-box">
                      <div className="clorox-diamond-badge">
                        <span className="clorox-text">CLOROX</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* 6. Bottom Bar: OPEN PROJECT (+) */}
                <div className="card-bottom-bar">
                  <div className="open-project-btn">
                    <span className="open-text">OPEN PROJECT</span>
                    <span className="plus-circle-icon">
                      <Plus size={13} strokeWidth={2.5} />
                    </span>
                  </div>

                  <span className="card-house-micro">
                    {brand.house === "Devaj Films" ? "Devaj Films" : "Devaj Productions"}
                  </span>
                </div>
              </div>
          ))}
        </div>
      </div>

      {/* =================================================================== */}
      {/* 3. LIGHT THEME WORK SCREEN MODAL (User: سكرول بالثيم الأبيض)        */}
      {/* =================================================================== */}
      {selectedBrand && (
        <div
          className="brand-modal-backdrop"
          onClick={() => setSelectedBrand(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="brand-modal-white-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              type="button"
              className="white-modal-close-btn"
              onClick={() => setSelectedBrand(null)}
              aria-label="Close project showcase"
            >
              <X size={20} />
            </button>

            {/* Modal Content - Elegant Light Editorial Theme */}
            <div className="modal-white-grid">
              {/* Left Column: Visual Film Player & Stills */}
              <div className="modal-player-col">
                <div className="modal-film-frame">
                  <video
                    src={selectedBrand.videoUrl}
                    controls
                    autoPlay
                    playsInline
                    className="modal-film-video"
                    poster={selectedBrand.image}
                  />
                  <div className="modal-house-pill-tag">
                    {selectedBrand.house === "Devaj Films" ? (
                      <Film size={13} style={{ display: "inline-block", marginRight: "6px" }} />
                    ) : (
                      <Clapperboard size={13} style={{ display: "inline-block", marginRight: "6px" }} />
                    )}
                    <span>{selectedBrand.house}</span>
                  </div>
                </div>

                {/* Production Stills & Metadata */}
                <div className="modal-quick-meta-box">
                  <div className="meta-stat-item">
                    <span className="stat-label">Client / Partner</span>
                    <strong className="stat-value">{selectedBrand.name}</strong>
                  </div>
                  <div className="meta-stat-item">
                    <span className="stat-label">Industry</span>
                    <strong className="stat-value">{selectedBrand.sector}</strong>
                  </div>
                  <div className="meta-stat-item">
                    <span className="stat-label">Creative House</span>
                    <strong className="stat-value">{selectedBrand.house}</strong>
                  </div>
                  <div className="meta-stat-item">
                    <span className="stat-label">Headquarters</span>
                    <strong className="stat-value">Cairo, Egypt</strong>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative, Deliverables & Actions */}
              <div className="modal-narrative-col">
                <span className="modal-eyebrow-red">{selectedBrand.tagline}</span>
                <h3 className="modal-title-serif">{selectedBrand.name}</h3>
                <h4 className="modal-project-subhead">{selectedBrand.projectTitle}</h4>

                <p className="modal-body-copy">{selectedBrand.projectScope}</p>

                {/* Campaign Impact Highlight */}
                <div className="modal-impact-banner">
                  <span className="impact-lead">Campaign Result: </span>
                  <span>{selectedBrand.highlight}</span>
                </div>

                {/* Master Deliverables Checklist */}
                <div className="modal-deliverables-box">
                  <span className="deliverables-heading">Scope & Master Deliverables:</span>
                  <ul className="deliverables-bullet-list">
                    {selectedBrand.deliverables.map((item, i) => (
                      <li key={i}>
                        <CheckCircle2 size={16} color="#E63946" className="list-check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA Buttons */}
                <div className="modal-cta-buttons-row">
                  <a
                    href={`https://wa.me/201014049339?text=${encodeURIComponent(
                      `Hello Devaj Group, I reviewed your work for ${selectedBrand.name} on the website and would like to discuss a project brief for our company.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-whatsapp-cta"
                  >
                    <MessageSquare size={17} />
                    <span>Inquire About Similar Production</span>
                    <span>→</span>
                  </a>

                  <a
                    href="#calculator"
                    onClick={() => setSelectedBrand(null)}
                    className="modal-calculator-cta"
                  >
                    <span>Run Project Calculator</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
          background: #E63946;
          color: #ffffff;
        }

        /* 3x2 Grid for 6 Brands */
        .brands-showcase-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        /* Brand Cinema Card (Exact Geometry from User Screenshot) */
        .brand-cinema-card {
          position: relative;
          height: 440px;
          border-radius: 18px;
          overflow: hidden;
          background-color: #121212;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          padding: 24px 26px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .brand-cinema-card:hover {
          transform: translateY(-8px);
          border-color: rgba(230, 57, 70, 0.65);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(230, 57, 70, 0.2);
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
          opacity: 0.88;
        }

        /* Static Background Image */
        .card-static-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center center;
          z-index: 0;
          filter: brightness(0.4) contrast(1.1);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
        }

        .brand-cinema-card:hover .card-static-bg {
          transform: scale(1.06);
          filter: brightness(0.6) contrast(1.15);
        }

        /* Dark Film Vignette */
        .card-gradient-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(10, 10, 10, 0.65) 0%,
            rgba(10, 10, 10, 0.2) 40%,
            rgba(10, 10, 10, 0.7) 75%,
            rgba(10, 10, 10, 0.95) 100%
          );
          z-index: 2;
          pointer-events: none;
        }

        /* Card Top Bar */
        .card-top-bar {
          position: relative;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .card-badge-label {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: rgba(234, 232, 228, 0.6);
        }

        .first-partner-glow-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #E63946;
          box-shadow: 0 0 10px #E63946;
        }

        /* Card Center Logo Box */
        .card-center-logo-box {
          position: relative;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .brand-cinema-card:hover .card-center-logo-box {
          transform: scale(1.06);
        }

        /* Logo Typographic Wrappers */
        .logo-porsche-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .porsche-sub-text {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.88rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          color: #ffffff;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
        }

        .logo-eskan-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .eskan-main-text {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 2.1rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #ffffff;
          text-shadow: 0 4px 18px rgba(0, 0, 0, 0.9);
        }

        .eskan-arabic-text {
          font-size: 1.05rem;
          font-weight: 700;
          color: rgba(234, 232, 228, 0.7);
          letter-spacing: 0.05em;
        }

        .logo-capital-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(38, 56, 42, 0.85);
          border: 1px solid rgba(196, 169, 98, 0.3);
          border-radius: 12px;
          padding: 22px 28px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
        }

        .capital-title {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 1.05rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #ffffff;
          margin-top: 6px;
        }

        .capital-subtitle {
          font-size: 0.82rem;
          color: #c4a962;
          font-weight: 700;
        }

        .logo-abrag-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .abrag-text {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 1.6rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          color: #ffffff;
          text-shadow: 0 3px 12px rgba(0, 0, 0, 0.8);
        }

        .abrag-sub {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          color: rgba(234, 232, 228, 0.6);
        }

        .logo-ghandour-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .ghandour-title {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 1.35rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #ffffff;
          text-shadow: 0 3px 12px rgba(0, 0, 0, 0.8);
        }

        .ghandour-sub {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #25D366;
        }

        .logo-clorox-box {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .clorox-diamond-badge {
          background: #0033a0;
          padding: 16px 28px;
          border-radius: 8px;
          border: 2px solid #ffffff;
          box-shadow: 0 8px 24px rgba(0, 51, 160, 0.5);
          transform: rotate(-3deg);
        }

        .clorox-text {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 1.5rem;
          font-weight: 900;
          letter-spacing: 0.04em;
          color: #ffffff;
          display: block;
        }

        /* Card Bottom Bar (OPEN PROJECT +) */
        .card-bottom-bar {
          position: relative;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .open-project-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(234, 232, 228, 0.8);
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          transition: all 0.25s ease;
        }

        .plus-circle-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.25);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }

        .brand-cinema-card:hover .open-project-btn {
          color: #ffffff;
        }

        .brand-cinema-card:hover .plus-circle-icon {
          background: #E63946;
          border-color: #E63946;
          color: #ffffff;
          transform: rotate(90deg);
        }

        .card-house-micro {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.72rem;
          font-weight: 600;
          color: rgba(234, 232, 228, 0.45);
        }

        /* =================================================================== */
        /* LIGHT THEME WORK SCREEN MODAL STYLES (User Specified: ثيم أبيض)     */
        /* =================================================================== */
        .brand-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 28px;
          animation: modalFadeIn 0.3s ease;
        }

        .brand-modal-white-card {
          position: relative;
          background: #ffffff;
          color: #151515;
          border-radius: 28px;
          max-width: 1080px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.45);
          padding: 44px;
          animation: modalScaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .white-modal-close-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #f1efe9;
          border: 1px solid rgba(0, 0, 0, 0.08);
          color: #151515;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
          z-index: 10;
        }

        .white-modal-close-btn:hover {
          background: #111111;
          color: #ffffff;
          transform: rotate(90deg);
        }

        .modal-white-grid {
          display: grid;
          grid-template-columns: 480px 1fr;
          gap: 42px;
          align-items: start;
        }

        .modal-player-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .modal-film-frame {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 16 / 10;
          background: #000000;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
        }

        .modal-film-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .modal-house-pill-tag {
          position: absolute;
          top: 14px;
          left: 14px;
          display: inline-flex;
          align-items: center;
          background: rgba(18, 18, 18, 0.85);
          backdrop-filter: blur(8px);
          color: #ffffff;
          padding: 5px 12px;
          border-radius: 9999px;
          font-size: 0.78rem;
          font-weight: 700;
          font-family: var(--font-jakarta), var(--font-sans);
        }

        .modal-quick-meta-box {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          background: #f7f6f2;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 16px;
          padding: 16px 18px;
        }

        .meta-stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-label {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          color: rgba(21, 21, 21, 0.5);
          font-family: var(--font-jakarta), var(--font-sans);
        }

        .stat-value {
          font-size: 0.88rem;
          font-weight: 700;
          color: #111111;
          font-family: var(--font-jakarta), var(--font-sans);
        }

        .modal-narrative-col {
          display: flex;
          flex-direction: column;
        }

        .modal-eyebrow-red {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.82rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #E63946;
          margin-bottom: 6px;
        }

        .modal-title-serif {
          font-family: var(--font-serif);
          font-size: 2.3rem;
          font-weight: 700;
          font-style: italic;
          color: #111111;
          margin: 0 0 6px 0;
          letter-spacing: -0.02em;
        }

        .modal-project-subhead {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 1.05rem;
          font-weight: 700;
          color: rgba(21, 21, 21, 0.75);
          margin: 0 0 16px 0;
        }

        .modal-body-copy {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 1rem;
          line-height: 1.65;
          color: rgba(21, 21, 21, 0.78);
          margin: 0 0 20px 0;
        }

        .modal-impact-banner {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.92rem;
          line-height: 1.5;
          padding: 14px 18px;
          border-left: 3px solid #E63946;
          background: rgba(230, 57, 70, 0.05);
          border-radius: 0 12px 12px 0;
          margin-bottom: 22px;
          color: rgba(21, 21, 21, 0.85);
        }

        .impact-lead {
          font-weight: 800;
          color: #111111;
        }

        .modal-deliverables-box {
          background: #faf9f6;
          border: 1px solid rgba(0, 0, 0, 0.07);
          border-radius: 16px;
          padding: 18px 20px;
          margin-bottom: 26px;
        }

        .deliverables-heading {
          display: block;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.82rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #111111;
          margin-bottom: 12px;
        }

        .deliverables-bullet-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .deliverables-bullet-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.94rem;
          line-height: 1.48;
          color: rgba(21, 21, 21, 0.85);
        }

        .list-check-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .modal-cta-buttons-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .modal-whatsapp-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 28px;
          border-radius: 9999px;
          background: #111111;
          color: #ffffff;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.94rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .modal-whatsapp-cta:hover {
          background: #25D366;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(37, 211, 102, 0.35);
        }

        .modal-calculator-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 15px 24px;
          border-radius: 9999px;
          background: #f1efe9;
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: #151515;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.94rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .modal-calculator-cta:hover {
          background: #e5e3dc;
        }

        @keyframes modalFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modalScaleUp {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        /* Responsive Breakpoints */
        @media (max-width: 1200px) {
          .brands-showcase-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 1024px) {
          .modal-white-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }

        @media (max-width: 768px) {
          .brands-showcase-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }
          .brand-cinema-card {
            height: 380px;
          }
          .brand-modal-white-card {
            padding: 28px 20px;
          }
          .modal-title-serif {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
}
