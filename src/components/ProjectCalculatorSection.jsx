"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  Film,
  Clapperboard,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  X,
  CreditCard,
  ShieldCheck,
  Send,
  MessageSquare,
  Lock,
  Building,
  Calendar,
  Layers,
  Zap,
} from "lucide-react";

export default function ProjectCalculatorSection() {
  // 1. Calculator State
  const [selectedHouse, setSelectedHouse] = useState("productions"); // 'productions' | 'films'
  const [shootingDays, setShootingDays] = useState(2);
  const [deliverables, setDeliverables] = useState(4);
  const [quality, setQuality] = useState("low"); // STRICTLY 'low' | 'high' per user request (no middle)
  const [selectedPost, setSelectedPost] = useState(["color", "sound"]);

  // 2. Payment Modal State
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentStep, setPaymentStep] = useState("form"); // 'form' | 'processing' | 'success'
  const [paymentMethod, setPaymentMethod] = useState("card"); // 'card' | 'instapay' | 'deposit'
  const [clientForm, setClientForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [bookingRefNumber, setBookingRefNumber] = useState("DVJ-782194");

  // Lock body scroll when modal is open
  useEffect(() => {
    if (paymentModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [paymentModalOpen]);

  // Post-production add-ons definition
  const postOptions = [
    { id: "color", label: "Master Color Grade", price: 6500 },
    { id: "sound", label: "Sound Design & Foley", price: 5500 },
    { id: "vfx", label: "VFX & Motion Graphics", price: 11000 },
    { id: "vo", label: "Studio Voice-Over", price: 5000 },
    { id: "3d", label: "3D Product Modeling", price: 13500 },
    { id: "fast", label: "48h Rush Delivery", price: 9000 },
  ];

  const togglePostOption = (id) => {
    setSelectedPost((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // 3. Dynamic Calculation Engine in EGP
  const calculatedEstimate = useMemo(() => {
    let dayRate = 0;
    let deliverableRate = 0;

    if (selectedHouse === "productions") {
      // Agile commercial production
      dayRate = quality === "low" ? 22000 : 42000;
      deliverableRate = quality === "low" ? 3000 : 6000;
    } else {
      // Large-scale cinema films
      dayRate = quality === "low" ? 48000 : 88000;
      deliverableRate = quality === "low" ? 6500 : 13000;
    }

    const baseCost = dayRate * shootingDays;
    const deliverablesCost = deliverableRate * deliverables;
    const postCost = selectedPost.reduce((acc, id) => {
      const opt = postOptions.find((p) => p.id === id);
      return acc + (opt ? opt.price : 0);
    }, 0);

    return baseCost + deliverablesCost + postCost;
  }, [selectedHouse, shootingDays, deliverables, quality, selectedPost]);

  const formattedEstimate = useMemo(() => {
    return new Intl.NumberFormat("en-EG", {
      style: "currency",
      currency: "EGP",
      maximumFractionDigits: 0,
    }).format(calculatedEstimate);
  }, [calculatedEstimate]);

  // Handle Form Submission / Payment Confirmation
  const handleProceedToPayment = (e) => {
    e.preventDefault();
    setPaymentModalOpen(true);
    setPaymentStep("form");
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    setBookingRefNumber(`DVJ-${Math.floor(100000 + Math.random() * 900000)}`);
    setPaymentStep("processing");
    setTimeout(() => {
      setPaymentStep("success");
    }, 1400);
  };

  return (
    <section
      id="calculator"
      style={{
        backgroundColor: "#0d0d0d",
        color: "#eae8e4",
        position: "relative",
        zIndex: 24,
        marginTop: "-52px",
        borderTopLeftRadius: "52px",
        borderTopRightRadius: "52px",
        boxShadow: "0 -35px 80px rgba(0, 0, 0, 0.45), 0 -12px 30px rgba(0, 0, 0, 0.25)",
        padding: "115px 0 135px",
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
            "radial-gradient(circle, rgba(230, 57, 70, 0.08) 0%, rgba(230, 57, 70, 0.03) 35%, rgba(230, 57, 70, 0) 65%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: "1560px",
          margin: "0 auto",
          padding: "0 40px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* =================================================================== */}
        {/* 1. SECTION HEADLINE (Playfair Display Italic + Red Accent)          */}
        {/* =================================================================== */}
        <div style={{ marginBottom: "58px" }}>
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
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#E63946",
                boxShadow: "0 0 10px #E63946",
              }}
            />
            <span>Project Calculator</span>
            <span style={{ fontSize: "1.1rem" }}>•</span>
            <span style={{ color: "rgba(234, 232, 228, 0.5)", fontWeight: 600 }}>Instant Estimate</span>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "24px",
            }}
          >
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
              Which house fits your story
              <span style={{ color: "#E63946", fontStyle: "normal" }}>?</span>
            </h2>

            <p
              style={{
                fontFamily: "var(--font-jakarta), var(--font-sans)",
                fontSize: "clamp(0.98rem, 1.15vw, 1.15rem)",
                lineHeight: 1.6,
                color: "rgba(234, 232, 228, 0.65)",
                maxWidth: "520px",
                margin: 0,
              }}
            >
              Build a starting estimate, then talk to our producers. Every production is custom; this gives us a smarter place to begin.
            </p>
          </div>
        </div>

        {/* =================================================================== */}
        {/* 2. THE 3-COLUMN INTERACTIVE CALCULATOR ENGINE                        */}
        {/* =================================================================== */}
        <div className="calculator-layout-card reveal-scale">
          {/* COLUMN 1: Two Houses Selector (Devaj Productions vs Devaj Films) */}
          <div className="calc-col-houses reveal-from-left delay-100">
            <span className="col-eyebrow-label">Select Creative House</span>

            <div className="houses-toggle-stack">
              {/* Devaj Productions Card */}
              <button
                type="button"
                onClick={() => setSelectedHouse("productions")}
                className={`house-select-btn ${selectedHouse === "productions" ? "active" : "dimmed"}`}
              >
                <div className="house-btn-header">
                  <div className="house-brand-title">
                    <span className="brand-devaj">Devaj</span>
                    <span className="brand-suffix productions">Productions</span>
                  </div>
                  <div className="house-active-indicator">
                    <Clapperboard size={15} />
                  </div>
                </div>
                <p className="house-desc-text">
                  Fast, agile content for brands that need to move. High-velocity social reels, commercials & products.
                </p>
              </button>

              {/* Devaj Films Card */}
              <button
                type="button"
                onClick={() => setSelectedHouse("films")}
                className={`house-select-btn ${selectedHouse === "films" ? "active" : "dimmed"}`}
              >
                <div className="house-btn-header">
                  <div className="house-brand-title">
                    <span className="brand-devaj">Devaj</span>
                    <span className="brand-suffix films">Films</span>
                  </div>
                  <div className="house-active-indicator">
                    <Film size={15} />
                  </div>
                </div>
                <p className="house-desc-text">
                  Large-scale cinematic production with a full crew. Corporate documentaries, TVCs & brand films.
                </p>
              </button>
            </div>
          </div>

          {/* COLUMN 2: Parameters (Days, Deliverables, Quality [Low/High], Post) */}
          <div className="calc-col-params reveal-on-scroll delay-200">
            {/* Range 1: Shooting Days */}
            <div className="param-block">
              <div className="param-header-row">
                <span className="param-title">Shooting Days</span>
                <span className="param-value-badge">{shootingDays} {shootingDays === 1 ? "Day" : "Days"}</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={shootingDays}
                onChange={(e) => setShootingDays(Number(e.target.value))}
                className="calc-range-slider"
                aria-label="Select number of shooting days"
              />
              <div className="range-ticks-row">
                <span>1 Day</span>
                <span>5 Days</span>
                <span>10 Days</span>
              </div>
            </div>

            {/* Range 2: Final Deliverables */}
            <div className="param-block">
              <div className="param-header-row">
                <span className="param-title">Final Deliverables</span>
                <span className="param-value-badge">{deliverables} {deliverables === 1 ? "Deliverable" : "Deliverables"}</span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                step="1"
                value={deliverables}
                onChange={(e) => setDeliverables(Number(e.target.value))}
                className="calc-range-slider"
                aria-label="Select number of final deliverables"
              />
              <div className="range-ticks-row">
                <span>1 Cut</span>
                <span>7 Cuts</span>
                <span>15 Cuts</span>
              </div>
            </div>

            {/* Toggle 3: Production Quality (STRICTLY LOW & HIGH PER USER REQUEST) */}
            <div className="param-block">
              <div className="param-header-row">
                <span className="param-title">Production Quality Tier</span>
                <span className="param-sub-hint">Low & High Tiers</span>
              </div>
              <div className="quality-dual-grid">
                <button
                  type="button"
                  onClick={() => setQuality("low")}
                  className={`quality-btn ${quality === "low" ? "active" : ""}`}
                >
                  <div className="quality-header">
                    <span className="quality-name">STANDARD / AGILE</span>
                    <span className="quality-tag">LOW</span>
                  </div>
                  <span className="quality-desc">Lean crew, agile 4K setup & rapid delivery</span>
                </button>

                <button
                  type="button"
                  onClick={() => setQuality("high")}
                  className={`quality-btn ${quality === "high" ? "active" : ""}`}
                >
                  <div className="quality-header">
                    <span className="quality-name">CINEMA MASTER</span>
                    <span className="quality-tag">HIGH</span>
                  </div>
                  <span className="quality-desc">Arri/Red package, master anamorphics & full crew</span>
                </button>
              </div>
            </div>

            {/* Multi-Select: Post-Production Add-ons */}
            <div className="param-block" style={{ marginBottom: 0 }}>
              <div className="param-header-row">
                <span className="param-title">Post-Production Craft</span>
                <span className="param-sub-hint">Select Multiple</span>
              </div>
              <div className="post-pills-wrap">
                {postOptions.map((opt) => {
                  const isSelected = selectedPost.includes(opt.id);
                  return (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => togglePostOption(opt.id)}
                      className={`post-pill ${isSelected ? "selected" : ""}`}
                    >
                      <span className="pill-dot" />
                      <span>{opt.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* COLUMN 3: Starting Estimate & Booking Trigger */}
          <div className="calc-col-summary reveal-from-right delay-300">
            <span className="col-eyebrow-label">Starting Estimate</span>

            <div className="estimate-number-box">
              <span className="estimate-currency-val">{formattedEstimate}</span>
              <p className="estimate-disclaimer">
                Transparent starting estimate based on your parameters. Final quote calibrated in creative consultation.
              </p>
            </div>

            {/* Selected Summary Details */}
            <div className="estimate-breakdown-card">
              <div className="breakdown-row">
                <span>Selected House:</span>
                <strong>{selectedHouse === "productions" ? "Devaj Productions" : "Devaj Films"}</strong>
              </div>
              <div className="breakdown-row">
                <span>Shooting Schedule:</span>
                <strong>{shootingDays} {shootingDays === 1 ? "Day" : "Days"}</strong>
              </div>
              <div className="breakdown-row">
                <span>Deliverables:</span>
                <strong>{deliverables} Cuts</strong>
              </div>
              <div className="breakdown-row">
                <span>Quality Tier:</span>
                <strong>{quality === "low" ? "Standard (Low)" : "Cinema Master (High)"}</strong>
              </div>
            </div>

            {/* Action CTA Button */}
            <button
              type="button"
              onClick={handleProceedToPayment}
              className="calc-submit-btn"
            >
              <span>Proceed to Booking & Payment</span>
              <ArrowRight size={18} />
            </button>

            <a
              href={`https://wa.me/201014049339?text=${encodeURIComponent(
                `Hello Devaj Group, I ran the Project Calculator for ${
                  selectedHouse === "productions" ? "Devaj Productions" : "Devaj Films"
                }: ${shootingDays} Days, ${deliverables} Deliverables, ${quality.toUpperCase()} Quality. Estimate: ${formattedEstimate}. I would like to schedule a call.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="calc-whatsapp-btn"
            >
              <MessageSquare size={16} />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* 3. PAYMENT & BOOKING MODAL SCREEN (Screen للـ Payment)              */}
      {/* =================================================================== */}
      {paymentModalOpen && (
        <div
          className="payment-modal-backdrop"
          onClick={() => setPaymentModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="payment-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              type="button"
              className="payment-close-btn"
              onClick={() => setPaymentModalOpen(false)}
              aria-label="Close Payment Modal"
            >
              <X size={20} />
            </button>

            {paymentStep === "form" && (
              <div>
                {/* Header */}
                <div className="payment-modal-header">
                  <div className="payment-eyebrow">
                    <ShieldCheck size={16} color="#25D366" />
                    <span>Secure Booking & Project Deposit</span>
                  </div>
                  <h3 className="payment-modal-title">Lock Your Production Crew & Dates</h3>
                  <p className="payment-modal-sub">
                    Reserve production soundstages and camera crew packages for{" "}
                    <strong>{selectedHouse === "productions" ? "Devaj Productions" : "Devaj Films"}</strong>.
                  </p>
                </div>

                {/* Estimate Summary Pill */}
                <div className="payment-summary-pill">
                  <div>
                    <span className="summary-label">Estimated Total:</span>
                    <span className="summary-amount">{formattedEstimate}</span>
                  </div>
                  <span className="summary-details-chip">
                    {shootingDays} Days • {deliverables} Deliverables • {quality.toUpperCase()} Tier
                  </span>
                </div>

                {/* Booking Form */}
                <form onSubmit={handleConfirmBooking} className="payment-form">
                  <div className="form-fields-grid">
                    <div>
                      <label className="input-label">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tarek Mansour"
                        value={clientForm.name}
                        onChange={(e) => setClientForm({ ...clientForm, name: e.target.value })}
                        className="modal-text-input"
                      />
                    </div>

                    <div>
                      <label className="input-label">Company / Brand *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Porsche Egypt, Clorox, Brand X"
                        value={clientForm.company}
                        onChange={(e) => setClientForm({ ...clientForm, company: e.target.value })}
                        className="modal-text-input"
                      />
                    </div>

                    <div>
                      <label className="input-label">WhatsApp Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+20 10X XXX XXXX"
                        value={clientForm.phone}
                        onChange={(e) => setClientForm({ ...clientForm, phone: e.target.value })}
                        className="modal-text-input"
                      />
                    </div>

                    <div>
                      <label className="input-label">Business Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={clientForm.email}
                        onChange={(e) => setClientForm({ ...clientForm, email: e.target.value })}
                        className="modal-text-input"
                      />
                    </div>
                  </div>

                  {/* Payment Method Tabs */}
                  <div className="payment-methods-section">
                    <label className="input-label">Preferred Payment & Booking Channel:</label>
                    <div className="methods-tabs-grid">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("card")}
                        className={`method-tab-btn ${paymentMethod === "card" ? "active" : ""}`}
                      >
                        <CreditCard size={18} />
                        <span>Credit / Debit Card</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod("instapay")}
                        className={`method-tab-btn ${paymentMethod === "instapay" ? "active" : ""}`}
                      >
                        <Zap size={18} />
                        <span>InstaPay (Egypt)</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod("deposit")}
                        className={`method-tab-btn ${paymentMethod === "deposit" ? "active" : ""}`}
                      >
                        <Building size={18} />
                        <span>50% Wire Deposit</span>
                      </button>
                    </div>

                    {/* Method details card */}
                    <div className="method-details-panel">
                      {paymentMethod === "card" && (
                        <div className="card-payment-view">
                          <div className="card-inputs-row">
                            <input
                              type="text"
                              placeholder="Card Number: 4000 1234 5678 9010"
                              className="modal-text-input"
                              defaultValue="4152 •••• •••• 9821"
                            />
                            <div style={{ display: "flex", gap: "10px" }}>
                              <input
                                type="text"
                                placeholder="MM/YY"
                                className="modal-text-input"
                                defaultValue="08/28"
                              />
                              <input
                                type="text"
                                placeholder="CVV"
                                className="modal-text-input"
                                defaultValue="382"
                              />
                            </div>
                          </div>
                          <span className="security-notice">
                            <Lock size={12} />
                            <span>Encrypted 256-bit checkout through secure gateway</span>
                          </span>
                        </div>
                      )}

                      {paymentMethod === "instapay" && (
                        <div className="instapay-view">
                          <div className="instapay-badge-box">
                            <span className="instapay-label">Official InstaPay Address (IPA):</span>
                            <span className="instapay-address">devajgroup@instapay</span>
                          </div>
                          <p className="instapay-hint">
                            Instant confirmation upon sending receipt to our production desk.
                          </p>
                        </div>
                      )}

                      {paymentMethod === "deposit" && (
                        <div className="deposit-view">
                          <p className="deposit-text">
                            An official Devaj Group corporate pro-forma invoice will be generated for 50% deposit to confirm studio dates and crew call sheets.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <div className="modal-actions-footer">
                    <button type="submit" className="confirm-payment-btn">
                      <span>Confirm Booking & Send Brief</span>
                      <ArrowRight size={18} />
                    </button>
                    <span className="guarantee-text">No immediate charge without producer alignment.</span>
                  </div>
                </form>
              </div>
            )}

            {paymentStep === "processing" && (
              <div className="payment-processing-view">
                <div className="processing-spinner" />
                <h4 className="processing-title">Calibrating Production Brief...</h4>
                <p className="processing-sub">Routing estimate parameters to Devaj Executive Producers.</p>
              </div>
            )}

            {paymentStep === "success" && (
              <div className="payment-success-view">
                <div className="success-icon-badge">
                  <CheckCircle2 size={46} color="#25D366" />
                </div>
                <h3 className="success-title">Brief Confirmed & Scheduled!</h3>
                <span className="success-ref">Booking Ref: {bookingRefNumber}</span>
                <p className="success-desc">
                  Thank you, <strong>{clientForm.name || "Client"}</strong>. Your project parameters for{" "}
                  <strong>{clientForm.company || "Your Brand"}</strong> with{" "}
                  <strong>{selectedHouse === "productions" ? "Devaj Productions" : "Devaj Films"}</strong> have been logged.
                  An executive producer will reach out on WhatsApp ({clientForm.phone || "+20 101 404 9339"}) within 2 hours.
                </p>

                <div className="success-cta-row">
                  <a
                    href={`https://wa.me/201014049339?text=${encodeURIComponent(
                      `Hello Devaj Group, I just booked Ref ${bookingRefNumber} for ${
                        clientForm.company || "my company"
                      }. Looking forward to discussing the production.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="success-whatsapp-btn"
                  >
                    <MessageSquare size={18} />
                    <span>Open Instant WhatsApp Chat</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setPaymentModalOpen(false)}
                    className="success-done-btn"
                  >
                    <span>Back to Website</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =================================================================== */}
      {/* 4. COMPONENT STYLES & INTERACTIVE PHYSICS                           */}
      {/* =================================================================== */}
      <style jsx>{`
        /* Main 3-Column Glass Layout */
        .calculator-layout-card {
          display: grid;
          grid-template-columns: 340px 1fr 360px;
          gap: 32px;
          background: rgba(22, 22, 22, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 28px;
          padding: 36px;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
        }

        .col-eyebrow-label {
          display: block;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: rgba(234, 232, 228, 0.5);
          margin-bottom: 18px;
        }

        /* Column 1: Houses Toggle Stack */
        .houses-toggle-stack {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .house-select-btn {
          text-align: left;
          padding: 24px;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          outline: none;
        }

        /* Active House: Crisp, illuminated & distinct */
        .house-select-btn.active {
          background: #ffffff;
          color: #111111;
          border: 2px solid #E63946;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35), 0 0 20px rgba(230, 57, 70, 0.25);
          transform: scale(1.02);
          opacity: 1;
          filter: none;
        }

        /* Inactive House: Dimmed with frosted blur ("غشاوة بسيطة") */
        .house-select-btn.dimmed {
          background: rgba(255, 255, 255, 0.04);
          color: rgba(234, 232, 228, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.08);
          opacity: 0.38;
          filter: blur(0.4px);
        }

        .house-select-btn.dimmed:hover {
          opacity: 0.75;
          filter: none;
          background: rgba(255, 255, 255, 0.08);
        }

        .house-btn-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .house-brand-title {
          display: flex;
          align-items: baseline;
          gap: 6px;
          font-family: var(--font-jakarta), var(--font-sans);
        }

        .brand-devaj {
          font-size: 1.55rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .brand-suffix {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .house-select-btn.active .brand-suffix.productions {
          color: #E63946;
        }

        .house-select-btn.active .brand-suffix.films {
          color: #111111;
        }

        .house-active-indicator {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.06);
          color: #111111;
        }

        .house-select-btn.dimmed .house-active-indicator {
          background: rgba(255, 255, 255, 0.05);
          color: rgba(234, 232, 228, 0.4);
        }

        .house-desc-text {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.88rem;
          line-height: 1.5;
          margin: 0;
        }

        .house-select-btn.active .house-desc-text {
          color: rgba(21, 21, 21, 0.78);
        }

        /* Column 2: Parameters */
        .calc-col-params {
          border-left: 1px solid rgba(255, 255, 255, 0.08);
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0 32px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .param-block {
          display: flex;
          flex-direction: column;
        }

        .param-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .param-title {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.88rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #eae8e4;
        }

        .param-value-badge {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.95rem;
          font-weight: 800;
          color: #E63946;
          background: rgba(230, 57, 70, 0.12);
          padding: 4px 12px;
          border-radius: 9999px;
          border: 1px solid rgba(230, 57, 70, 0.3);
        }

        .param-sub-hint {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.75rem;
          color: rgba(234, 232, 228, 0.45);
          text-transform: uppercase;
        }

        /* Custom Slider Styling */
        .calc-range-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 6px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.12);
          outline: none;
          cursor: pointer;
          margin-bottom: 8px;
        }

        .calc-range-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #E63946;
          cursor: pointer;
          box-shadow: 0 0 12px #E63946, 0 2px 6px rgba(0, 0, 0, 0.4);
          transition: transform 0.15s ease;
        }

        .calc-range-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }

        .range-ticks-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.72rem;
          color: rgba(234, 232, 228, 0.35);
          font-family: var(--font-jakarta), var(--font-sans);
        }

        /* Quality Dual Grid: STRICTLY LOW & HIGH */
        .quality-dual-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .quality-btn {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          padding: 14px 16px;
          text-align: left;
          cursor: pointer;
          transition: all 0.25s ease;
          outline: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .quality-btn.active {
          background: rgba(230, 57, 70, 0.12);
          border-color: #E63946;
          box-shadow: 0 4px 18px rgba(230, 57, 70, 0.25);
        }

        .quality-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .quality-name {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: #ffffff;
        }

        .quality-tag {
          font-size: 0.68rem;
          font-weight: 800;
          padding: 2px 6px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.1);
          color: #eae8e4;
        }

        .quality-btn.active .quality-tag {
          background: #E63946;
          color: #ffffff;
        }

        .quality-desc {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.75rem;
          line-height: 1.4;
          color: rgba(234, 232, 228, 0.55);
        }

        /* Post-Production Pills */
        .post-pills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .post-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 14px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(234, 232, 228, 0.65);
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          outline: none;
        }

        .post-pill:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
        }

        .post-pill.selected {
          background: #E63946;
          border-color: #E63946;
          color: #ffffff;
          box-shadow: 0 3px 12px rgba(230, 57, 70, 0.35);
        }

        .pill-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: currentColor;
        }

        /* Column 3: Estimate & Actions */
        .calc-col-summary {
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
        }

        .estimate-number-box {
          margin-bottom: 24px;
        }

        .estimate-currency-val {
          display: block;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: clamp(2.3rem, 3.2vw, 3.1rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.03em;
          line-height: 1.08;
          margin-bottom: 12px;
        }

        .estimate-disclaimer {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.8rem;
          line-height: 1.5;
          color: rgba(234, 232, 228, 0.45);
          margin: 0;
        }

        .estimate-breakdown-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 16px;
          padding: 16px 18px;
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .breakdown-row {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.82rem;
          color: rgba(234, 232, 228, 0.6);
        }

        .breakdown-row strong {
          color: #eae8e4;
        }

        .calc-submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 24px;
          border-radius: 9999px;
          background: #E63946;
          color: #ffffff;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.95rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 28px rgba(230, 57, 70, 0.4);
          margin-bottom: 12px;
        }

        .calc-submit-btn:hover {
          background: #ff4757;
          transform: translateY(-2px);
          box-shadow: 0 14px 34px rgba(230, 57, 70, 0.55);
        }

        .calc-whatsapp-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 20px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #eae8e4;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .calc-whatsapp-btn:hover {
          background: rgba(37, 211, 102, 0.15);
          border-color: #25D366;
          color: #ffffff;
        }

        /* Payment Modal Screen */
        .payment-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.82);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: modalFadeIn 0.3s ease;
        }

        .payment-modal-card {
          position: relative;
          background: #141414;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 28px;
          max-width: 820px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.85), 0 0 40px rgba(230, 57, 70, 0.2);
          padding: 42px;
          animation: modalScaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .payment-close-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #eae8e4;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .payment-close-btn:hover {
          background: #E63946;
          border-color: #E63946;
          color: #ffffff;
        }

        .payment-modal-header {
          margin-bottom: 22px;
        }

        .payment-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #25D366;
          margin-bottom: 8px;
        }

        .payment-modal-title {
          font-family: var(--font-serif);
          font-size: 2.1rem;
          font-weight: 700;
          font-style: italic;
          color: #ffffff;
          margin: 0 0 8px 0;
        }

        .payment-modal-sub {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.95rem;
          color: rgba(234, 232, 228, 0.65);
          margin: 0;
        }

        .payment-modal-sub strong {
          color: #eae8e4;
        }

        .payment-summary-pill {
          display: flex;
          flex-wrap: wrap;
          justifyContent: space-between;
          align-items: center;
          gap: 14px;
          background: rgba(230, 57, 70, 0.09);
          border: 1px solid rgba(230, 57, 70, 0.25);
          border-radius: 16px;
          padding: 16px 20px;
          margin-bottom: 28px;
        }

        .summary-label {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.85rem;
          color: rgba(234, 232, 228, 0.7);
          margin-right: 10px;
        }

        .summary-amount {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 1.45rem;
          font-weight: 800;
          color: #ffffff;
        }

        .summary-details-chip {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.82rem;
          font-weight: 600;
          color: rgba(234, 232, 228, 0.7);
          background: rgba(0, 0, 0, 0.35);
          padding: 4px 12px;
          border-radius: 9999px;
        }

        .form-fields-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          margin-bottom: 24px;
        }

        .input-label {
          display: block;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.82rem;
          font-weight: 700;
          color: rgba(234, 232, 228, 0.8);
          margin-bottom: 8px;
        }

        .modal-text-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          padding: 13px 16px;
          color: #ffffff;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.92rem;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .modal-text-input:focus {
          border-color: #E63946;
          background: rgba(255, 255, 255, 0.08);
        }

        /* Payment Methods */
        .payment-methods-section {
          margin-bottom: 28px;
        }

        .methods-tabs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 16px;
        }

        .method-tab-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 14px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(234, 232, 228, 0.65);
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          outline: none;
        }

        .method-tab-btn.active {
          background: rgba(230, 57, 70, 0.15);
          border-color: #E63946;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(230, 57, 70, 0.2);
        }

        .method-details-panel {
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          padding: 18px 20px;
        }

        .card-inputs-row {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 10px;
        }

        .security-notice {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: rgba(234, 232, 228, 0.45);
        }

        .instapay-badge-box {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.06);
          padding: 10px 16px;
          border-radius: 10px;
          margin-bottom: 8px;
        }

        .instapay-label {
          font-size: 0.82rem;
          color: rgba(234, 232, 228, 0.65);
        }

        .instapay-address {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.95rem;
          font-weight: 800;
          color: #25D366;
        }

        .instapay-hint,
        .deposit-text {
          font-size: 0.82rem;
          color: rgba(234, 232, 228, 0.55);
          margin: 0;
          line-height: 1.5;
        }

        .modal-actions-footer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .confirm-payment-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 28px;
          border-radius: 9999px;
          background: #E63946;
          color: #ffffff;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 1rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 10px 30px rgba(230, 57, 70, 0.45);
        }

        .confirm-payment-btn:hover {
          background: #ff4757;
          transform: translateY(-2px);
          box-shadow: 0 14px 38px rgba(230, 57, 70, 0.6);
        }

        .guarantee-text {
          font-size: 0.78rem;
          color: rgba(234, 232, 228, 0.45);
        }

        /* Processing View */
        .payment-processing-view {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          text-align: center;
        }

        .processing-spinner {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 3px solid rgba(255, 255, 255, 0.1);
          border-top-color: #E63946;
          animation: spin 0.8s linear infinite;
          margin-bottom: 24px;
        }

        .processing-title {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 1.4rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 8px 0;
        }

        .processing-sub {
          font-size: 0.9rem;
          color: rgba(234, 232, 228, 0.55);
          margin: 0;
        }

        /* Success View */
        .payment-success-view {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 20px 10px;
        }

        .success-icon-badge {
          margin-bottom: 18px;
        }

        .success-title {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          font-weight: 700;
          font-style: italic;
          color: #ffffff;
          margin: 0 0 10px 0;
        }

        .success-ref {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #E63946;
          background: rgba(230, 57, 70, 0.12);
          padding: 4px 14px;
          border-radius: 9999px;
          border: 1px solid rgba(230, 57, 70, 0.3);
          margin-bottom: 18px;
        }

        .success-desc {
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.98rem;
          line-height: 1.65;
          color: rgba(234, 232, 228, 0.8);
          max-width: 540px;
          margin: 0 0 32px 0;
        }

        .success-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          justify-content: center;
        }

        .success-whatsapp-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 9999px;
          background: #25D366;
          color: #ffffff;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.35);
        }

        .success-whatsapp-btn:hover {
          transform: translateY(-2px);
          background: #22bf5b;
        }

        .success-done-btn {
          display: inline-flex;
          align-items: center;
          padding: 14px 26px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #eae8e4;
          font-family: var(--font-jakarta), var(--font-sans);
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .success-done-btn:hover {
          background: rgba(255, 255, 255, 0.14);
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
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
          .calculator-layout-card {
            grid-template-columns: 1fr;
            padding: 30px 24px;
          }
          .calc-col-params {
            border-left: none;
            border-right: none;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            padding: 28px 0;
          }
        }

        @media (max-width: 768px) {
          .form-fields-grid {
            grid-template-columns: 1fr;
          }
          .methods-tabs-grid {
            grid-template-columns: 1fr;
          }
          .payment-modal-card {
            padding: 28px 20px;
          }
          .payment-modal-title {
            font-size: 1.7rem;
          }
        }
      `}</style>
    </section>
  );
}
