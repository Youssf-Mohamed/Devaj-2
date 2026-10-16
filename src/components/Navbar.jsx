"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState("houses"); // open by default

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when fullscreen menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // In-page smooth navigation without page reloads or opening new tabs
  const handleNavClick = (e, href) => {
    if (e) e.preventDefault();
    setMenuOpen(false);
    if (!href) return;

    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      } else {
        window.location.hash = href;
      }
    } else {
      window.location.href = href;
    }
  };

  // Only real, active sections on the page — all unused/dummy buttons removed
  const menuItems = [
    {
      id: "about",
      number: "01",
      label: "Who We Are",
      href: "#about",
      tagline: "Devaj Group Identity & Core Vision",
      hasSubmenu: false,
    },
    {
      id: "offerings",
      number: "02",
      label: "Strategic Capabilities",
      href: "#offerings",
      tagline: "Four Pillars of Production Craft",
      hasSubmenu: false,
    },
    {
      id: "houses",
      number: "03",
      label: "The Creative Houses",
      href: "#houses",
      tagline: "Two Autonomous Media Houses",
      hasSubmenu: true,
      subitems: [
        { label: "Devaj Productions — Agile Commercials & Reels", href: "#houses" },
        { label: "Devaj Films — Enterprise Cinema & TVCs", href: "#houses" },
      ],
    },
    {
      id: "clients",
      number: "04",
      label: "Selected Work",
      href: "#clients",
      tagline: "Brand Archive & Flagship Partners",
      hasSubmenu: false,
    },
    {
      id: "calculator",
      number: "05",
      label: "Project Calculator",
      href: "#calculator",
      tagline: "Instant Production Estimate",
      hasSubmenu: false,
    },
    {
      id: "sectors",
      number: "06",
      label: "Sectors We Serve",
      href: "#sectors",
      tagline: "Industry-Specific Storytelling",
      hasSubmenu: false,
    },
    {
      id: "connect",
      number: "07",
      label: "Start A Project",
      href: "#connect",
      tagline: "Inquire, Brief & Collaborate",
      hasSubmenu: false,
      isCta: true,
    },
  ];

  return (
    <>
      <nav
        aria-label="Primary navigation"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          backgroundColor: scrolled ? "rgba(13, 13, 13, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255, 255, 255, 0.08)"
            : "1px solid transparent",
          padding: scrolled ? "1rem 3.5rem" : "1.6rem 3.5rem",
          color: "#eae8e4",
        }}
      >
        <div
          style={{
            maxWidth: "1560px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Devaj Group Official Logo */}
          <a
            href="/"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            aria-label="Devaj Group Homepage"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              transition: "transform 0.25s ease, opacity 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.9";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img
              src="/images/devaj-logo.png"
              alt="Devaj Group"
              className="navbar-brand-logo"
              style={{
                height: scrolled ? "82px" : "108px",
                width: "auto",
                display: "block",
                objectFit: "contain",
                transition: "height 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            />
          </a>

          {/* Right Action: 3-Line Menu Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
              gap: "6px",
              width: "48px",
              height: "40px",
              color: "#eae8e4",
              zIndex: 51,
            }}
          >
            <span
              style={{
                display: "block",
                height: "1.5px",
                backgroundColor: "#eae8e4",
                transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                width: menuOpen ? "28px" : "36px",
                transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                height: "1.5px",
                backgroundColor: "#eae8e4",
                transition: "all 0.2s ease",
                width: "28px",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                height: "1.5px",
                backgroundColor: "#eae8e4",
                transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                width: menuOpen ? "28px" : "32px",
                transform: menuOpen ? "rotate(-45deg) translate(6px, -6px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Fullscreen In-Page Navigation Menu Overlay */}
      {menuOpen && (
        <div
          className="fullscreen-menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          <div className="menu-container">
            {/* Header info bar inside menu */}
            <div className="menu-header-bar">
              <span className="menu-eyebrow">Devaj Group Navigation</span>
              <span className="menu-press-esc">Press ESC or click any item to scroll</span>
            </div>

            {/* In-page navigation links list */}
            <ul className="menu-nav-list">
              {menuItems.map((item) => (
                <li key={item.id} className="menu-item-row">
                  <div className="menu-item-content">
                    {/* Main Nav Anchor */}
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="menu-item-link"
                    >
                      <div className="menu-label-group">
                        <span className="menu-item-number">{item.number}</span>
                        <span className="menu-item-label">{item.label}</span>
                        <span className="menu-item-tagline">{item.tagline}</span>
                      </div>
                      <div className="menu-arrow-icon">
                        <ArrowUpRight size={22} strokeWidth={2} />
                      </div>
                    </a>

                    {/* Submenu toggle if applicable */}
                    {item.hasSubmenu && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenSubmenu(openSubmenu === item.id ? null : item.id);
                        }}
                        className="menu-sub-toggle-btn"
                        aria-label="Toggle house links"
                      >
                        <ChevronDown
                          size={18}
                          style={{
                            transform: openSubmenu === item.id ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.25s ease",
                          }}
                        />
                      </button>
                    )}
                  </div>

                  {/* Submenu links (both navigate smoothly in-page) */}
                  {item.hasSubmenu && openSubmenu === item.id && (
                    <div className="submenu-container">
                      {item.subitems.map((sub, sIdx) => (
                        <a
                          key={sIdx}
                          href={sub.href}
                          onClick={(e) => handleNavClick(e, sub.href)}
                          className="submenu-link"
                        >
                          <span className="sub-red-dot" />
                          <span>{sub.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Quick contact / direct connection footer inside menu */}
            <div className="menu-footer-bar">
              <div className="menu-contact-col">
                <span className="footer-label">Headquarters</span>
                <span className="footer-val">Cairo, Egypt</span>
              </div>
              <div className="menu-contact-col">
                <span className="footer-label">Direct Briefing</span>
                <a href="mailto:hello@devajgroup.com" className="footer-val link">
                  hello@devajgroup.com
                </a>
              </div>
              <div className="menu-contact-col">
                <span className="footer-label">Direct WhatsApp</span>
                <a
                  href="https://wa.me/201014049339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-val link"
                >
                  +20 101 404 9339
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Fullscreen Menu Overlay */
        .fullscreen-menu-overlay {
          position: fixed;
          inset: 0;
          z-index: 49;
          background-color: rgba(9, 9, 9, 0.97);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          color: #eae8e4;
          padding: 130px 48px 50px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          animation: menuFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .menu-container {
          max-width: 1440px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          min-height: 100%;
          justify-content: space-between;
        }

        .menu-header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          margin-bottom: 32px;
        }

        .menu-eyebrow {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #e63946;
        }

        .menu-press-esc {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.75rem;
          color: rgba(234, 232, 228, 0.45);
          letter-spacing: 0.06em;
        }

        .menu-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin: 0;
          padding: 0;
        }

        .menu-item-row {
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding: 14px 0 16px;
          transition: border-color 0.25s ease;
        }

        .menu-item-row:hover {
          border-bottom-color: rgba(230, 57, 70, 0.35);
        }

        .menu-item-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .menu-item-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex: 1;
          text-decoration: none;
          color: #eae8e4;
          transition: transform 0.25s ease, color 0.25s ease;
        }

        .menu-item-link:hover {
          color: #ffffff;
          transform: translateX(8px);
        }

        .menu-label-group {
          display: flex;
          align-items: baseline;
          gap: 20px;
          flex-wrap: wrap;
        }

        .menu-item-number {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.85rem;
          font-weight: 800;
          color: #e63946;
          letter-spacing: 0.1em;
        }

        .menu-item-label {
          font-family: var(--font-serif);
          font-size: clamp(1.8rem, 3.2vw, 2.7rem);
          font-weight: 700;
          font-style: italic;
          letter-spacing: -0.02em;
          color: #ffffff;
        }

        .menu-item-tagline {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.85rem;
          color: rgba(234, 232, 228, 0.45);
          font-style: normal;
          letter-spacing: 0.02em;
        }

        .menu-arrow-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(234, 232, 228, 0.6);
          transition: all 0.25s ease;
          flex-shrink: 0;
        }

        .menu-item-link:hover .menu-arrow-icon {
          background: #e63946;
          border-color: #e63946;
          color: #ffffff;
          transform: scale(1.08);
        }

        .menu-sub-toggle-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #eae8e4;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .menu-sub-toggle-btn:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        /* Submenu container */
        .submenu-container {
          padding: 16px 0 6px 36px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .submenu-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: rgba(234, 232, 228, 0.7);
          text-decoration: none;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 1.05rem;
          font-weight: 600;
          transition: all 0.2s ease;
          width: fit-content;
        }

        .submenu-link:hover {
          color: #ffffff;
          transform: translateX(6px);
        }

        .sub-red-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #e63946;
          display: inline-block;
        }

        /* Menu Footer */
        .menu-footer-bar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding-top: 36px;
          margin-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .menu-contact-col {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .footer-label {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: rgba(234, 232, 228, 0.45);
        }

        .footer-val {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.95rem;
          color: #ffffff;
          font-weight: 600;
        }

        .footer-val.link {
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-val.link:hover {
          color: #e63946;
        }

        @keyframes menuFadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          nav {
            padding: 1rem 1.5rem !important;
          }
          .navbar-brand-logo {
            height: 68px !important;
          }
          .fullscreen-menu-overlay {
            padding: 110px 24px 40px;
          }
          .menu-label-group {
            gap: 10px;
          }
          .menu-item-tagline {
            display: none;
          }
          .menu-footer-bar {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </>
  );
}
