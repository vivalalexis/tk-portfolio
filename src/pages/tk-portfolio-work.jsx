import { useState, useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';

const CASE_STUDIES = [
  {
    id: 1,
    title: "Animal Crossing x Deliveroo",
    category: "Brand Activation",
    tags: ["Social", "Gaming", "Zero Budget"],
    result: "$1.2M earned media · 700K engagements · 13M impressions · $0 spend",
    year: "2021",
    award: "Spikes Asia Bronze",
    description: "A cultural moment built on a video game trend, executed with zero paid media. Pure creative instinct meeting platform behaviour.",
    slug: "animal-crossing",
  },
  {
    id: 2,
    title: "Keri Pulp Friction",
    category: "Brand Strategy",
    tags: ["Cultural Insight", "FMCG", "New Zealand"],
    result: "+32% value · +5.5pp share · #1 juice brand NZ · 2 GNMA nominations",
    year: "2024",
    award: "2× GNMA Nominated",
    description: "Identified that Kiwis treat pulp preference as tribal identity, not rational product choice. Built a campaign platform around that tension.",
    slug: "keri-pulp-friction",
  },
  {
    id: 3,
    title: "Wilkins #1 Philippines",
    category: "Growth Marketing",
    tags: ["Market Leadership", "Philippines", "FMCG"],
    result: "#1 water brand · 23.1% vol share · +7pts vs PY",
    year: "2025",
    award: null,
    description: "Owning a market in one of APAC's most competitive hydration categories. Regional IMC strategy translated into sustained market leadership.",
    slug: "wilkins",
  },
  {
    id: 4,
    title: "CRM Architecture — Braze",
    category: "CRM & Lifecycle",
    tags: ["Braze", "CRM", "Lifecycle Design"],
    result: "+17% open rates · 3x output · loyalty mechanic shipped pre-roadmap",
    year: "2020",
    award: null,
    description: "Built Deliveroo's CRM architecture from zero — lifecycle mapping, segmented journeys, A/B testing embedded from day one.",
    slug: "crm-braze",
  },
  {
    id: 5,
    title: "Coke Music Promo — 3 Cycles",
    category: "Integrated Marketing",
    tags: ["Regional IMC", "First-Party Data", "ASEAN"],
    result: "4M+ first-party data · 2x unique users · 20% agency savings Y3",
    year: "2024",
    award: null,
    description: "Built and iterated a regional IMC toolkit across three cycles — each one compounding on the last.",
    slug: "coke-music-promo",
  },
];

const FILTERS = ["All", "Brand Activation", "Brand Strategy", "Growth Marketing", "CRM & Lifecycle", "Integrated Marketing"];

const NAV_PATH = { Work: "/work", About: "/about", Contact: "/contact" };

export default function TKWork() {
  const [loaded, setLoaded] = useState(false);
  const [activeNav, setActiveNav] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const filtered = activeFilter === "All"
    ? CASE_STUDIES
    : CASE_STUDIES.filter((cs) => cs.category === activeFilter);

  return (
    <div style={{
      background: "#0D0D0D", minHeight: "100vh",
      fontFamily: "'DM Mono', 'Courier New', monospace",
      color: "#F0EDE8", overflowX: "hidden", position: "relative",
    }}>

      {/* Grain */}
      <div style={{
        position: "fixed", inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
        pointerEvents: "none", zIndex: 0, opacity: 0.6,
      }} />

      {/* Teal glow — top right */}
      <div style={{
        position: "fixed", top: 0, right: 0, width: "40vw", height: "40vw",
        background: "radial-gradient(ellipse at top right, rgba(0,196,180,0.05) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "24px 48px", display: "flex", alignItems: "center", justifyContent: "space-between",
        borderBottom: "0.5px solid rgba(240,237,232,0.08)",
        backdropFilter: "blur(12px)", background: "rgba(13,13,13,0.85)",
        opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(-8px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "0.12em", color: "#F0EDE8", fontFamily: "'DM Mono', monospace", cursor: "pointer" }}>
            TK<span style={{ color: "#00C4B4", marginLeft: "2px" }}>.</span>
          </div>
        </Link>
        <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          {["Work", "About", "Contact"].map((item) => (
            <NavLink key={item} to={NAV_PATH[item]}
              style={({ isActive }) => ({
                color: isActive ? "#F0EDE8" : activeNav === item ? "#00C4B4" : "rgba(240,237,232,0.5)",
                fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase",
                cursor: "pointer", transition: "color 0.2s ease", padding: "4px 0",
                fontFamily: "'DM Mono', monospace", textDecoration: "none", display: "inline-block",
              })}
              onMouseEnter={() => setActiveNav(item)}
              onMouseLeave={() => setActiveNav(null)}>{item}</NavLink>
          ))}
          <a href="mailto:trishakuek@gmail.com" style={{
            background: "#00C4B4", color: "#0D0D0D", fontSize: "11px", letterSpacing: "0.18em",
            textTransform: "uppercase", padding: "10px 20px", textDecoration: "none",
            fontWeight: "700", fontFamily: "'DM Mono', monospace", transition: "background 0.2s ease",
          }}
            onMouseEnter={(e) => e.target.style.background = "#FF5C1A"}
            onMouseLeave={(e) => e.target.style.background = "#00C4B4"}>
            Get in touch
          </a>
        </div>
      </nav>

      <main style={{ paddingTop: "140px", paddingBottom: "120px", position: "relative", zIndex: 1 }}>

        {/* PAGE HEADER */}
        <div style={{ padding: "0 48px", marginBottom: "64px" }}>
          <div style={{
            borderTop: "0.5px solid rgba(240,237,232,0.1)", paddingTop: "32px",
            opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease 0.2s",
          }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px" }}>
              <div>
                <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#00C4B4", fontFamily: "'DM Mono', monospace", display: "block", marginBottom: "20px" }}>Work</span>
                <h1 style={{
                  fontSize: "clamp(32px, 5vw, 64px)", fontWeight: "400", lineHeight: 1.1,
                  letterSpacing: "-0.03em", fontFamily: "'DM Mono', monospace", margin: 0,
                }}>
                  Selected case studies.<br />
                  <span style={{ color: "rgba(240,237,232,0.3)" }}>Real results.</span>
                </h1>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "48px" }}>
                <p style={{ fontSize: "10px", letterSpacing: "0.1em", color: "rgba(240,237,232,0.2)", fontFamily: "'DM Mono', monospace", marginBottom: "4px" }}>
                  {filtered.length} of {CASE_STUDIES.length} shown
                </p>

              </div>
            </div>

            {/* FILTER BAR */}
            <div style={{ display: "flex", gap: "0px", flexWrap: "wrap", borderTop: "0.5px solid rgba(240,237,232,0.08)", paddingTop: "0" }}>
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  style={{
                    background: activeFilter === filter ? "#00C4B4" : "none",
                    border: "none",
                    borderRight: "0.5px solid rgba(240,237,232,0.08)",
                    color: activeFilter === filter ? "#0D0D0D" : "rgba(240,237,232,0.35)",
                    fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase",
                    padding: "14px 20px", cursor: "pointer",
                    fontFamily: "'DM Mono', monospace",
                    transition: "all 0.2s ease",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    if (activeFilter !== filter) e.target.style.color = "#F0EDE8";
                  }}
                  onMouseLeave={(e) => {
                    if (activeFilter !== filter) e.target.style.color = "rgba(240,237,232,0.35)";
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* GRID */}
        <div style={{
          padding: "0 48px",
          opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.4s",
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
            gap: "1px",
            background: filtered.length > 0 ? "rgba(240,237,232,0.06)" : "transparent",
          }}>
            {filtered.map((cs, i) => (
              <CaseStudyCard
                key={cs.id}
                cs={cs}
                index={i}
                hovered={hoveredCard === cs.id}
                onHover={() => setHoveredCard(cs.id)}
                onLeave={() => setHoveredCard(null)}
              />
            ))}

            {/* Empty state */}
            {filtered.length === 0 && (
              <div style={{ padding: "80px 40px", gridColumn: "1 / -1" }}>
                <p style={{ fontSize: "13px", color: "rgba(240,237,232,0.2)", fontFamily: "'DM Mono', monospace" }}>No case studies in this category yet.</p>
              </div>
            )}

          </div>
        </div>

        {/* DISCIPLINE TAGS STRIP */}
        <div style={{
          padding: "80px 48px 0",
          opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.6s",
        }}>
          <div style={{ borderTop: "0.5px solid rgba(240,237,232,0.06)", paddingTop: "48px", maxWidth: "980px" }}>
            <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,237,232,0.2)", fontFamily: "'DM Mono', monospace", marginBottom: "24px" }}>Disciplines across all work</p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {[
                "Integrated marketing", "Brand strategy", "CRM & lifecycle",
                "Creative strategy", "Regional IMC", "Content strategy",
                "Production model design", "First-party data", "Social & earned media",
                "Visual identity", "AI-enabled testing", "Agency management",
              ].map((tag) => (
                <span key={tag} style={{
                  fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase",
                  border: "0.5px solid rgba(240,237,232,0.1)",
                  color: "rgba(240,237,232,0.25)",
                  padding: "6px 12px",
                  fontFamily: "'DM Mono', monospace",
                }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

      </main>

      {/* FOOTER */}
      <footer style={{
        padding: "32px 48px", borderTop: "0.5px solid rgba(240,237,232,0.08)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        position: "relative", zIndex: 1,
      }}>
        <span style={{ fontSize: "11px", color: "rgba(240,237,232,0.2)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em" }}>Trisha Kuek · {new Date().getFullYear()}</span>
        <div style={{ display: "flex", gap: "32px" }}>
          {[["Email", "mailto:trishakuek@gmail.com"], ["LinkedIn", "https://linkedin.com/in/trishakuek"]].map(([label, href]) => (
            <a key={label} href={href} {...(label === "LinkedIn" ? { target: "_blank", rel: "noopener noreferrer" } : {})} style={{
              fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase",
              color: "rgba(240,237,232,0.25)", textDecoration: "none",
              fontFamily: "'DM Mono', monospace", transition: "color 0.2s",
            }}
              onMouseEnter={(e) => e.target.style.color = "#00C4B4"}
              onMouseLeave={(e) => e.target.style.color = "rgba(240,237,232,0.25)"}>
              {label}
            </a>
          ))}
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0D0D0D; }
        ::-webkit-scrollbar-thumb { background: rgba(240,237,232,0.15); }
        :focus-visible { outline: 2px solid #00C4B4; outline-offset: 2px; }
      `}</style>
    </div>
  );
}

function CaseStudyCard({ cs, index, hovered, onHover, onLeave }) {
  return (
    <Link to={`/work/${cs.slug}`} style={{ display: "block", textDecoration: "none", color: "inherit" }}>
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        background: hovered ? "#1A1A1A" : "#0D0D0D",
        padding: "40px", cursor: "pointer",
        transition: "background 0.25s ease",
        position: "relative", overflow: "hidden",
        minHeight: "280px", display: "flex",
        flexDirection: "column", justifyContent: "space-between",
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: "absolute", top: 0, left: 0,
        width: hovered ? "100%" : "0%", height: "1px",
        background: "linear-gradient(to right, #00C4B4, transparent)",
        transition: "width 0.4s ease",
      }} />

      {/* Index number */}
      <div style={{
        position: "absolute", bottom: "32px", right: "32px",
        fontSize: "64px", fontWeight: "700", letterSpacing: "-0.05em",
        color: hovered ? "rgba(240,237,232,0.04)" : "rgba(240,237,232,0.03)",
        fontFamily: "'DM Mono', monospace", userSelect: "none",
        lineHeight: 1, transition: "color 0.25s",
        pointerEvents: "none",
      }}>
        {String(index + 1).padStart(2, "0")}
      </div>

      <div>
        {/* Category + Year + Award */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "24px", gap: "12px" }}>
          <span style={{
            fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase",
            color: hovered ? "#00C4B4" : "rgba(240,237,232,0.3)",
            fontFamily: "'DM Mono', monospace", transition: "color 0.25s",
            paddingTop: "2px",
          }}>{cs.category}</span>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px", flexShrink: 0 }}>
            {cs.award && (
              <span style={{
                fontSize: "8px", letterSpacing: "0.1em", textTransform: "uppercase",
                color: "#FF5C1A", border: "0.5px solid #FF5C1A",
                padding: "2px 8px", fontFamily: "'DM Mono', monospace",
                whiteSpace: "nowrap",
              }}>{cs.award}</span>
            )}
            <span style={{ fontSize: "10px", color: "rgba(240,237,232,0.2)", fontFamily: "'DM Mono', monospace" }}>{cs.year}</span>
          </div>
        </div>

        {/* Title */}
        <h2 style={{
          fontSize: "clamp(17px, 1.8vw, 22px)", fontWeight: "500", lineHeight: 1.25,
          marginBottom: "14px", letterSpacing: "-0.01em",
          fontFamily: "'DM Mono', monospace",
          color: hovered ? "#F0EDE8" : "rgba(240,237,232,0.85)",
          transition: "color 0.25s",
        }}>{cs.title}</h2>

        {/* Description */}
        <p style={{
          fontSize: "13px", color: "rgba(240,237,232,0.35)",
          lineHeight: 1.7, fontFamily: "'DM Mono', monospace",
          maxWidth: "360px",
        }}>{cs.description}</p>
      </div>

      {/* Result + Arrow */}
      <div style={{
        marginTop: "32px", paddingTop: "20px",
        borderTop: "0.5px solid rgba(240,237,232,0.07)",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px",
      }}>
        <span style={{
          fontSize: "11px",
          color: hovered ? "#00C4B4" : "rgba(240,237,232,0.3)",
          fontFamily: "'DM Mono', monospace", letterSpacing: "0.02em",
          transition: "color 0.25s", lineHeight: 1.5,
        }}>{cs.result}</span>
        <span style={{
          fontSize: "18px", color: hovered ? "#FF5C1A" : "rgba(240,237,232,0.15)",
          transition: "color 0.25s, transform 0.25s",
          transform: hovered ? "translateX(4px)" : "translateX(0)",
          display: "inline-block", flexShrink: 0,
        }}>→</span>
      </div>
    </div>
    </Link>
  );
}
