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

  // 8 Flagship Partner Brands matching user's exact screenshot (4 Films + 4 Productions)
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
      id: "el-ghandour",
      name: "El-Ghandour Medical",
      tagline: "Medical Group & Specialized Clinics",
      badgeText: "MEDICAL GROUP",
      isFirstPartner: false,
      sector: "Healthcare & Specialized Clinics",
      house: "Devaj Productions",
      houseId: "productions",
      iconHouse: Clapperboard,
      projectTitle: "El-Ghandour Medical — Clinical Excellence & Compassionate Care",
      projectScope:
        "Sterile surgical suite cinematography, specialist physician profiles, patient recovery documentary stories, and health communications.",
      image: "/images/clients/elghandour-medical.jpg",
      videoUrl: "/videos/devaj-production.mp4",
      deliverables: [
        "Hospital & Clinical Suite Cinematic Brand Film",
        "Surgeon & Specialist High-Definition Profiles",
        "Patient Journey Narrative Docu-Series",
        "Public Awareness Medical Social Campaign",
      ],
      highlight: "Expanded digital patient trust and established authoritative clinical leadership across Egypt.",
      logoType: "ghandour",
    },
    {
      id: "clorox",
      name: "Clorox",
      tagline: "Global FMCG Commercial",
      badgeText: "CONSUMER",
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
    {
      id: "cpc",
      name: "CPC Industrial",
      tagline: "Building Products & Manufacturing",
      badgeText: "INDUSTRIAL",
      isFirstPartner: false,
      sector: "Industrial & Manufacturing",
      house: "Devaj Productions",
      houseId: "productions",
      iconHouse: Clapperboard,
      projectTitle: "CPC Industrial — Heavy Engineering & Building Systems",
      projectScope:
        "Heavy industrial facility cinematography, robotic manufacturing lines, supply chain logistics, and global investor film productions.",
      image: "/images/clients/eskan-misr.jpg",
      videoUrl: "/videos/hero-reel.mp4",
      deliverables: [
        "Enterprise Industrial Facility Showcase Film",
        "High-Precision Heavy Machinery Macro Cinematography",
        "Licensed 5.4K Aerial Drone Survey of Manufacturing Hubs",
        "Global Trade Fair & Investor Visual Reel",
      ],
      highlight: "Premiered at international industrial and building technology exhibitions.",
      logoType: "cpc",
    },
    {
      id: "schon",
      name: "Schön Clinics",
      tagline: "Precision Dental & Aesthetic Center",
      badgeText: "DENTAL CARE",
      isFirstPartner: false,
      sector: "Healthcare & Aesthetics",
      house: "Devaj Productions",
      houseId: "productions",
      iconHouse: Clapperboard,
      projectTitle: "Schön Clinics — Precision Medicine & Aesthetics",
      projectScope:
        "Human-centric healthcare storytelling, modern clinical suite cinematography, doctor profile videos, and aesthetic patient transformations.",
      image: "/images/clients/elghandour-medical.jpg",
      videoUrl: "/videos/devaj-film.mp4",
      deliverables: [
        "Brand Identity & Luxury Aesthetic Clinic Film",
        "Sterile Clinical Suite Cinematography",
        "Aesthetic Doctor Transformation Profiles",
        "High-Velocity Social Media Reel Suite",
      ],
      highlight: "Positioned Schön Clinics as Egypt's premier trusted destination for modern medicine and aesthetic care.",
      logoType: "schon",
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
              className={`filter-btn ${activeFilter === "productions" ? "active" : ""}`}
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
                  <Play size={10} fill="currentColor" strokeWidth={0} style={{ marginLeft: "2px" }} />
                </div>
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
                <div className="modal-header-brand-flex">
                  <div>
                    <span className="modal-eyebrow-red">{selectedBrand.tagline}</span>
                    <h3 className="modal-title-serif">{selectedBrand.name}</h3>
                  </div>
                  {/* Official Brand Logo Thumbnail in Modal */}
                  <div className="modal-brand-emblem-box">
                    {selectedBrand.logoType === "porsche" && (
                      <img
                        src="/images/clients/logos/porsche.png"
                        alt="Porsche Egypt"
                        className="modal-emblem-img modal-porsche-crest"
                      />
                    )}
                    {selectedBrand.logoType === "eskan" && (
                      <span className="modal-eskan-pill">Eskan Misr</span>
                    )}
                    {selectedBrand.logoType === "capital" && (
                      <img
                        src="/images/clients/logos/the-capital.png"
                        alt="The Capital"
                        className="modal-emblem-img modal-capital-badge"
                      />
                    )}
                    {selectedBrand.logoType === "abrag" && (
                      <img
                        src="/images/clients/logos/abrag.png"
                        alt="ABRAG Developments"
                        className="modal-emblem-img modal-abrag-badge"
                      />
                    )}
                    {selectedBrand.logoType === "ghandour" && (
                      <span className="modal-ghandour-pill">El-Ghandour</span>
                    )}
                    {selectedBrand.logoType === "clorox" && (
                      <img
                        src="/images/clients/logos/clorox.png"
                        alt="Clorox"
                        className="modal-emblem-img modal-clorox-mark"
                      />
                    )}
                    {selectedBrand.logoType === "cpc" && (
                      <img
                        src="/images/clients/logos/cpc.png"
                        alt="CPC"
                        className="modal-emblem-img modal-cpc-mark"
                      />
                    )}
                    {selectedBrand.logoType === "schon" && (
                      <img
                        src="/images/clients/logos/schon-clinics.png"
                        alt="Schön Clinics"
                        className="modal-emblem-img modal-schon-mark"
                      />
                    )}
                  </div>
                </div>
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
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
        }

        .brand-cinema-card:hover .card-static-bg {
          transform: scale(1.12);
          filter: blur(4px) brightness(0.32) contrast(1.15);
        }

        /* Dark Film Vignette */
        .card-gradient-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(11, 11, 11, 0.3) 0%, rgba(11, 11, 11, 0.88) 100%);
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

        /* Modal Brand Emblem Header */
        .modal-header-brand-flex {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 6px;
        }

        .modal-brand-emblem-box {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-emblem-img {
          display: block;
          object-fit: contain;
        }

        .modal-porsche-crest {
          height: 48px;
          width: auto;
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2));
        }

        .modal-capital-badge {
          height: 44px;
          width: 44px;
          object-fit: cover;
          border-radius: 6px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
        }

        .modal-abrag-badge {
          height: 44px;
          width: 44px;
          object-fit: cover;
          border-radius: 6px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
        }

        .modal-eskan-pill {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 1.15rem;
          font-weight: 700;
          color: #111111;
          letter-spacing: -0.01em;
        }

        .modal-ghandour-pill {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 1.15rem;
          font-weight: 700;
          color: #111111;
          letter-spacing: -0.01em;
        }

        .modal-schon-mark {
          height: 36px;
          width: auto;
          filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.12));
        }

        .modal-clorox-mark {
          height: 36px;
          width: auto;
          filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.15));
        }

        .modal-cpc-mark {
          height: 36px;
          width: auto;
          filter: drop-shadow(0 3px 8px rgba(0, 0, 0, 0.15));
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
          padding-right: 64px;
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
        @media (max-width: 1100px) {
          .brands-showcase-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 1024px) {
          .modal-white-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .modal-narrative-col {
            padding-right: 0;
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
