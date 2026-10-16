"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      id: "houses",
      label: "Our Houses",
      hasSubmenu: true,
      subitems: [
        { label: "Devaj Production", href: "#houses" },
        { label: "Devaj Film", href: "#houses" },
      ],
    },
    {
      id: "marketing",
      label: "Marketing Services",
      hasSubmenu: true,
      subitems: [
        { label: "Brand", href: "#services" },
        { label: "Social", href: "#services" },
        { label: "Media", href: "#services" },
        { label: "Data", href: "#services" },
        { label: "Experience", href: "#services" },
        { label: "Studio", href: "#services" },
        { label: "Platforms", href: "#services" },
        { label: "Commerce", href: "#services" },
        { label: "Artificial Intelligence", href: "#services" },
      ],
    },
    { id: "tech", label: "Technology Services", hasSubmenu: false, href: "#services" },
    { id: "work", label: "Work", hasSubmenu: false, href: "#clients" },
    {
      id: "about",
      label: "About Us",
      hasSubmenu: true,
      subitems: [
        { label: "What We Do", href: "#about" },
        { label: "Partners", href: "#clients" },
        { label: "Thinking", href: "#about" },
        { label: "Events", href: "#about" },
        { label: "Careers", href: "#about" },
      ],
    },
    { id: "connect", label: "Connect", hasSubmenu: false, href: "#connect" },
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
          borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid transparent",
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
            aria-label="Devaj Group"
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

          {/* Right Action: Monks 3-Line Menu Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close the menu" : "Open the menu"}
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

      {/* Monks Fullscreen Menu Overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 49,
            backgroundColor: "#2d2d2d",
            color: "#eae8e4",
            padding: "120px 48px 60px",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
            animation: "fadeIn 0.25s ease-out",
          }}
        >
          <div
            style={{
              maxWidth: "1440px",
              width: "100%",
              margin: "0 auto",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.85rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(234, 232, 228, 0.5)",
                marginBottom: "40px",
              }}
            >
              Menu
            </p>

            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "28px",
              }}
            >
              {menuItems.map((item) => (
                <li key={item.id} style={{ borderBottom: "1px solid rgba(234, 232, 228, 0.1)", paddingBottom: "24px" }}>
                  <div
                    onClick={() => {
                      if (item.hasSubmenu) {
                        setOpenSubmenu(openSubmenu === item.id ? null : item.id);
                      } else {
                        setMenuOpen(false);
                      }
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                      <span
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: "#eae8e4",
                          display: "inline-block",
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                          fontWeight: 500,
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {item.label}
                      </span>
                    </div>

                    {item.hasSubmenu ? (
                      <span
                        style={{
                          fontSize: "1.5rem",
                          transform: openSubmenu === item.id ? "rotate(180deg)" : "none",
                          transition: "transform 0.2s ease",
                        }}
                      >
                        ↓
                      </span>
                    ) : (
                      <span style={{ fontSize: "1.5rem" }}>→</span>
                    )}
                  </div>

                  {/* Submenu expansion */}
                  {item.hasSubmenu && openSubmenu === item.id && (
                    <div
                      style={{
                        paddingLeft: "24px",
                        marginTop: "18px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                      }}
                    >
                      {item.subitems.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setMenuOpen(false)}
                          style={{
                            color: "rgba(234, 232, 228, 0.75)",
                            textDecoration: "none",
                            fontSize: "1.15rem",
                            fontFamily: "var(--font-sans)",
                            transition: "color 0.2s ease",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(234, 232, 228, 0.75)")}
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
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
            height: 68px !important;
          }
        }
      `}</style>
    </>
  );
}
