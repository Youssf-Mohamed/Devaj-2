"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Minimal, streamlined navigation items without clutter
  const menuItems = [
    { number: "01", label: "Who We Are", href: "#about" },
    { number: "02", label: "Strategic Capabilities", href: "#offerings" },
    { number: "03", label: "The Creative Houses", href: "#houses" },
    { number: "04", label: "Selected Work", href: "#clients" },
    { number: "05", label: "Project Calculator", href: "#calculator" },
    { number: "06", label: "Sectors We Serve", href: "#sectors" },
    { number: "07", label: "Start A Project", href: "#connect", isCta: true },
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
          zIndex: 70,
          transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          backgroundColor: menuOpen
            ? "transparent"
            : scrolled
            ? "rgba(13, 13, 13, 0.92)"
            : "transparent",
          backdropFilter: menuOpen || !scrolled ? "none" : "blur(16px)",
          WebkitBackdropFilter: menuOpen || !scrolled ? "none" : "blur(16px)",
          borderBottom: menuOpen || !scrolled
            ? "1px solid transparent"
            : "1px solid rgba(255, 255, 255, 0.08)",
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
              zIndex: 75,
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
              <span className="menu-eyebrow">Devaj Group</span>
              <span className="menu-press-esc">Press ESC or choose a section</span>
            </div>

            {/* Clean, simple in-page navigation links */}
            <ul className="menu-nav-list">
              {menuItems.map((item) => (
                <li key={item.number} className="menu-item-row">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`menu-item-link ${item.isCta ? "is-cta-link" : ""}`}
                  >
                    <div className="menu-left-meta">
                      <span className="menu-item-number">{item.number}</span>
                      <span className="menu-item-label">{item.label}</span>
                    </div>
                    <div className="menu-arrow-icon">
                      <ArrowUpRight size={17} strokeWidth={2.2} />
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            {/* Clean, minimal footer bar */}
            <div className="menu-footer-bar">
              <span className="footer-item">Cairo, Egypt</span>
              <a href="mailto:contact@devajgroup.com" className="footer-item link">
                contact@devajgroup.com
              </a>
              <a
                href="https://wa.me/201014049339"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-item link whatsapp-highlight"
              >
                +20 101 404 9339
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Fullscreen Menu Overlay: Solid Deep Black to prevent page bleed */
        .fullscreen-menu-overlay {
          position: fixed;
          inset: 0;
          z-index: 55;
          background-color: #080808;
          color: #eae8e4;
          padding: 100px 32px 32px;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          animation: menuFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .menu-container {
          max-width: 900px;
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
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          margin-bottom: 16px;
        }

        .menu-eyebrow {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #e63946;
        }

        .menu-press-esc {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.72rem;
          color: rgba(234, 232, 228, 0.38);
          letter-spacing: 0.04em;
        }

        .menu-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0;
          margin: 0;
          padding: 0;
        }

        .menu-item-row {
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          transition: border-color 0.2s ease;
        }

        .menu-item-row:hover {
          border-bottom-color: rgba(230, 57, 70, 0.4);
        }

        .menu-item-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 8px;
          text-decoration: none;
          color: #eae8e4;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s ease;
          border-radius: 8px;
        }

        .menu-item-link:hover {
          transform: translateX(8px);
          background: rgba(255, 255, 255, 0.025);
        }

        .menu-left-meta {
          display: flex;
          align-items: baseline;
          gap: 16px;
        }

        .menu-item-number {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.78rem;
          font-weight: 700;
          color: #e63946;
          letter-spacing: 0.08em;
          min-width: 22px;
        }

        .menu-item-label {
          font-family: var(--font-serif);
          font-size: clamp(1.35rem, 2.4vw, 1.95rem);
          font-weight: 700;
          font-style: italic;
          letter-spacing: -0.02em;
          color: #ffffff;
          line-height: 1.25;
          transition: color 0.2s ease;
        }

        .menu-item-link:hover .menu-item-label {
          color: #ffffff;
        }

        .menu-arrow-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(234, 232, 228, 0.4);
          transition: all 0.25s ease;
          flex-shrink: 0;
        }

        .menu-item-link:hover .menu-arrow-icon {
          background: #e63946;
          border-color: #e63946;
          color: #ffffff;
          transform: scale(1.06);
        }

        .is-cta-link .menu-arrow-icon {
          background: rgba(230, 57, 70, 0.15);
          border-color: rgba(230, 57, 70, 0.35);
          color: #e63946;
        }

        .is-cta-link:hover .menu-arrow-icon {
          background: #e63946;
          color: #ffffff;
        }

        /* Menu Footer */
        .menu-footer-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          padding-top: 20px;
          margin-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.82rem;
          color: rgba(234, 232, 228, 0.5);
        }

        .footer-item.link {
          color: rgba(234, 232, 228, 0.65);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-item.link:hover {
          color: #ffffff;
        }

        .footer-item.whatsapp-highlight {
          color: #25d366;
          font-weight: 600;
        }

        @keyframes menuFadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
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
            height: 64px !important;
          }
          .fullscreen-menu-overlay {
            padding: 90px 20px 24px;
          }
          .menu-item-link {
            padding: 11px 4px;
          }
          .menu-item-label {
            font-size: 1.25rem;
          }
          .menu-arrow-icon {
            width: 28px;
            height: 28px;
          }
          .menu-footer-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            font-size: 0.78rem;
          }
        }
      `}</style>
    </>
  );
}
