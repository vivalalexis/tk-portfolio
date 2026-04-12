import { useState, useEffect, useRef } from "react";
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
  },
  {
    id: 2,
    title: "Keri Pulp Friction",
    category: "Brand Strategy",
    tags: ["Cultural Insight", "FMCG", "New Zealand"],
    result: "+32% value · +5.5pp share · #1 juice brand NZ · 2 GNMA nominations",
    year: "2024",
    award: null,
    description: "Identified that Kiwis treat pulp preference as tribal identity, not rational product choice. Built a campaign platform around that tension and delivered category-outperforming growth.",
  },
  {
    id: 3,
    title: "Wilkins #1 Philippines",
    category: "Growth Marketing",
    tags: ["Market Leadership", "Philippines", "FMCG"],
    result: "#1 water brand in the Philippines · 23.1% vol share · +7pts vs PY",
    year: "2025",
    award: null,
    description: "Owning a market in one of APAC's most competitive hydration categories. Regional IMC strategy translated into sustained market leadership.",
  },
  {
    id: 4,
    title: "CRM Architecture — Braze",
    category: "CRM & Lifecycle",
    tags: ["Braze", "CRM", "Lifecycle Design"],
    result: "+17% open rates · 3x output · loyalty mechanic shipped before product roadmap",
    year: "2020",
    award: null,
    description: "Built Deliveroo's CRM architecture from zero — consumer lifecycle mapping, segmented journeys, A/B testing embedded from day one. Then shipped a loyalty mechanic entirely within the platform.",
  },
  {
    id: 5,
    title: "Coke Music Promo — 3 Cycles",
    category: "Integrated Marketing",
    tags: ["Regional IMC", "First-Party Data", "ASEAN"],
    result: "4M+ first-party data · 2x unique users · 20% agency savings in Year 3",
    year: "2024",
    award: null,
    description: "Built and iterated a regional IMC toolkit across three cycles that enabled markets to localise efficiently without restarting from scratch. Each cycle compounded on the last.",
  },
];

const NAV_ITEMS = ["Work", "About", "Contact"];

const NAV_PATH = { Work: "/work", About: "/about", Contact: "/contact" };

export default function TKPortfolio() {
  const [activeNav, setActiveNav] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      background: "#0D0D0D", minHeight: "100vh",
      fontFamily: "'DM Mono', 'Courier New', monospace",
      color: "#F0EDE8", overflowX: "hidden", position: "relative",
    }}>
      <div style={{
        position: "fixed", inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
        pointerEvents: "none", zIndex: 0, opacity: 0.6,
      }} />
      <div style={{
        position: "fixed", top: 0, right: 0, width: "40vw", height: "40vw",
        background: "radial-gradient(ellipse at top right, rgba(0,196,180,0.06) 0%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

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
          {NAV_ITEMS.map((item) => (
            <NavLink key={item} to={NAV_PATH[item]} style={({ isActive }) => ({
              color: isActive ? "#F0EDE8" : activeNav === item ? "#00C4B4" : "rgba(240,237,232,0.5)",
              fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase",
              cursor: "pointer", transition: "color 0.2s ease", padding: "4px 0",
              fontFamily: "'DM Mono', monospace", textDecoration: "none", display: "inline-block",
            })} onMouseEnter={() => setActiveNav(item)} onMouseLeave={() => setActiveNav(null)}>{item}</NavLink>
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

      {/* HERO */}
      <section ref={heroRef} style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "flex-end", padding: "0 48px 80px",
        position: "relative", zIndex: 1,
      }}>
        <div style={{
          position: "absolute", top: "50%", left: "48px",
          transform: "translateY(-50%)",
          fontSize: "clamp(120px, 22vw, 320px)", fontWeight: "900",
          letterSpacing: "-0.05em", color: "rgba(240,237,232,0.03)",
          lineHeight: 1, userSelect: "none", pointerEvents: "none",
          fontFamily: "'DM Mono', monospace",
        }}>TK</div>

        <div style={{ width: loaded ? "80px" : "0px", height: "2px", background: "#00C4B4", marginBottom: "32px", transition: "width 0.8s ease 0.3s" }} />

        <h1 style={{
          fontSize: "clamp(28px, 4.5vw, 64px)", fontWeight: "400", lineHeight: 1.15,
          margin: "0 0 24px", maxWidth: "820px", letterSpacing: "-0.02em",
          fontFamily: "'DM Mono', monospace",
          opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
        }}>
          Strategic enough to{" "}
          <span style={{ color: "#00C4B4" }}>shape the brief</span>
          {", "}creative enough to{" "}
          <span style={{ color: "#FF5C1A" }}>make it land</span>.
        </h1>

        <p style={{
          fontSize: "clamp(13px, 1.4vw, 17px)", color: "rgba(240,237,232,0.5)",
          maxWidth: "560px", lineHeight: 1.7, margin: "0 0 12px", letterSpacing: "0.01em",
          fontFamily: "'DM Mono', monospace",
          opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s",
        }}>
          Trisha Kuek. Senior marketing leader across FMCG, hypergrowth tech, and agencies.
        </p>

        <p style={{
          fontSize: "clamp(13px, 1.4vw, 17px)", color: "rgba(240,237,232,0.4)",
          maxWidth: "560px", lineHeight: 1.7, margin: "0 0 48px", letterSpacing: "0.01em",
          fontFamily: "'DM Mono', monospace",
          opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.8s ease 0.65s, transform 0.8s ease 0.65s",
        }}>
          I close the gap between strategy and execution — at speed, across markets, without losing the creative.
        </p>

        <div style={{
          display: "flex", gap: "16px", alignItems: "center",
          opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.8s ease 0.8s, transform 0.8s ease 0.8s",
        }}>
          <a href="mailto:trishakuek@gmail.com" style={{
            background: "transparent", border: "1px solid #00C4B4", color: "#00C4B4",
            fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase",
            padding: "14px 28px", textDecoration: "none", fontFamily: "'DM Mono', monospace",
            transition: "all 0.2s ease", display: "inline-block",
          }}
            onMouseEnter={(e) => { e.target.style.background = "#00C4B4"; e.target.style.color = "#0D0D0D"; }}
            onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.color = "#00C4B4"; }}>
            Email me
          </a>
          <a href="https://linkedin.com/in/trishakuek" target="_blank" rel="noopener noreferrer" style={{
            background: "transparent", border: "1px solid rgba(240,237,232,0.2)", color: "rgba(240,237,232,0.6)",
            fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase",
            padding: "14px 28px", textDecoration: "none", fontFamily: "'DM Mono', monospace",
            transition: "all 0.2s ease", display: "inline-block",
          }}
            onMouseEnter={(e) => { e.target.style.borderColor = "rgba(240,237,232,0.5)"; e.target.style.color = "#F0EDE8"; }}
            onMouseLeave={(e) => { e.target.style.borderColor = "rgba(240,237,232,0.2)"; e.target.style.color = "rgba(240,237,232,0.6)"; }}>
            LinkedIn
          </a>
        </div>

        <div style={{
          position: "absolute", bottom: "40px", right: "48px",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
          opacity: loaded ? 0.3 : 0, transition: "opacity 1s ease 1.2s",
        }}>
          <div style={{ width: "1px", height: "60px", background: "linear-gradient(to bottom, transparent, #F0EDE8)", animation: "pulse 2s ease-in-out infinite" }} />
          <span style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", writingMode: "vertical-rl" }}>Scroll</span>
        </div>
      </section>

      {/* WORK SECTION */}
      <section style={{ padding: "120px 48px", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "flex", alignItems: "baseline", justifyContent: "space-between",
          marginBottom: "64px", borderTop: "0.5px solid rgba(240,237,232,0.1)", paddingTop: "32px",
        }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "24px" }}>
            <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#00C4B4", fontFamily: "'DM Mono', monospace" }}>Selected work</span>
            <span style={{ fontSize: "10px", letterSpacing: "0.1em", color: "rgba(240,237,232,0.3)", fontFamily: "'DM Mono', monospace" }}>{CASE_STUDIES.length} case studies</span>
          </div>
          <Link to="/work" style={{
            color: "rgba(240,237,232,0.4)", fontSize: "11px", letterSpacing: "0.15em",
            textTransform: "uppercase", fontFamily: "'DM Mono', monospace",
            transition: "color 0.2s", textDecoration: "none", display: "inline-block",
          }}
            onMouseEnter={(e) => e.target.style.color = "#FF5C1A"}
            onMouseLeave={(e) => e.target.style.color = "rgba(240,237,232,0.4)"}>
            View all →
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "1px", background: "rgba(240,237,232,0.06)" }}>
          {CASE_STUDIES.map((cs) => (
            <CaseStudyCard key={cs.id} cs={cs} hovered={hoveredCard === cs.id} onHover={() => setHoveredCard(cs.id)} onLeave={() => setHoveredCard(null)} />
          ))}

        </div>
      </section>

      {/* ABOUT TEASER */}
      <section style={{ padding: "80px 48px 120px", position: "relative", zIndex: 1, borderTop: "0.5px solid rgba(240,237,232,0.08)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start", maxWidth: "1100px" }}>
          <div>
            <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF5C1A", fontFamily: "'DM Mono', monospace", display: "block", marginBottom: "24px" }}>About</span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 40px)", fontWeight: "400", lineHeight: 1.2, margin: "0 0 24px", letterSpacing: "-0.02em", fontFamily: "'DM Mono', monospace" }}>
              12 years.<br />No handoffs.<br />No gap.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: "15px", color: "rgba(240,237,232,0.55)", lineHeight: 1.8, margin: "0 0 16px", fontFamily: "'DM Mono', monospace" }}>
              Senior marketing leader across FMCG, hypergrowth tech and agencies. Most recently leading integrated marketing communications across Coca-Cola's Stills portfolio for ASEAN and South Pacific.
            </p>
            <p style={{ fontSize: "15px", color: "rgba(240,237,232,0.55)", lineHeight: 1.8, margin: "0 0 32px", fontFamily: "'DM Mono', monospace" }}>
              I build things as well as brief them — from CRM architecture to production model redesigns to AI-enabled creative validation. Strategy and execution, without the gap.
            </p>
            <Link to="/about" style={{
              color: "#00C4B4", fontSize: "11px",
              letterSpacing: "0.18em", textTransform: "uppercase", cursor: "pointer",
              fontFamily: "'DM Mono', monospace", transition: "color 0.2s",
              textDecoration: "none", display: "inline-block",
            }}
              onMouseEnter={(e) => e.target.style.color = "#FF5C1A"}
              onMouseLeave={(e) => e.target.style.color = "#00C4B4"}>
              Full story →
            </Link>
          </div>
        </div>
      </section>

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
        @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0D0D0D; }
        ::-webkit-scrollbar-thumb { background: rgba(240,237,232,0.15); }
        :focus-visible { outline: 2px solid #00C4B4; outline-offset: 2px; }
      `}</style>
    </div>
  );
}

function CaseStudyCard({ cs, hovered, onHover, onLeave }) {
  return (
    <Link to={`/work/${cs.slug}`} style={{ display: "block", textDecoration: "none", color: "inherit" }}>
    <div onMouseEnter={onHover} onMouseLeave={onLeave} style={{
      background: hovered ? "#1A1A1A" : "#0D0D0D", padding: "40px",
      cursor: "pointer", transition: "background 0.25s ease",
      position: "relative", overflow: "hidden", minHeight: "240px",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
    }}>
      <div style={{
        position: "absolute", top: 0, left: 0,
        width: hovered ? "100%" : "0%", height: "1px",
        background: "linear-gradient(to right, #00C4B4, transparent)",
        transition: "width 0.4s ease",
      }} />

      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
          <span style={{
            fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase",
            color: hovered ? "#00C4B4" : "rgba(240,237,232,0.3)",
            fontFamily: "'DM Mono', monospace", transition: "color 0.25s",
          }}>{cs.category}</span>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {cs.award && (
              <span style={{
                fontSize: "8px", letterSpacing: "0.12em", textTransform: "uppercase",
                color: "#FF5C1A", border: "0.5px solid #FF5C1A",
                padding: "2px 8px", fontFamily: "'DM Mono', monospace",
              }}>{cs.award}</span>
            )}
            <span style={{ fontSize: "10px", color: "rgba(240,237,232,0.2)", fontFamily: "'DM Mono', monospace" }}>{cs.year}</span>
          </div>
        </div>

        <h3 style={{
          fontSize: "18px", fontWeight: "500", lineHeight: 1.3, marginBottom: "12px",
          letterSpacing: "-0.01em", fontFamily: "'DM Mono', monospace",
          color: hovered ? "#F0EDE8" : "rgba(240,237,232,0.85)", transition: "color 0.25s",
        }}>{cs.title}</h3>

        <p style={{ fontSize: "13px", color: "rgba(240,237,232,0.35)", lineHeight: 1.65, fontFamily: "'DM Mono', monospace", maxWidth: "340px" }}>{cs.description}</p>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "28px", paddingTop: "20px", borderTop: "0.5px solid rgba(240,237,232,0.07)" }}>
        <span style={{
          fontSize: "11px", color: hovered ? "#00C4B4" : "rgba(240,237,232,0.35)",
          fontFamily: "'DM Mono', monospace", letterSpacing: "0.02em", transition: "color 0.25s",
        }}>{cs.result}</span>
        <span style={{
          fontSize: "16px", color: hovered ? "#FF5C1A" : "rgba(240,237,232,0.2)",
          transition: "color 0.25s, transform 0.25s",
          transform: hovered ? "translateX(4px)" : "translateX(0)", display: "inline-block",
        }}>→</span>
      </div>
    </div>
    </Link>
  );
}
