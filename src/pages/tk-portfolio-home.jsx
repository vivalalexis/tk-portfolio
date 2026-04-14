import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from 'react-router-dom';
import { FONTS, COLORS, FONT_IMPORT, THUMBS } from '../theme.js';

const CASE_STUDIES = [
  {
    id: 1,
    title: "Animal Crossing x Deliveroo",
    category: "Brand Activation",
    heroStat: "$1.2M earned media",
    heroStatSub: "$0 spend · 13M impressions",
    year: "2021",
    award: "Spikes Asia Bronze",
    description: "A cultural moment built on a video game trend, executed with zero paid media.",
    slug: "animal-crossing",
  },
  {
    id: 2,
    title: "Keri Pulp Friction",
    category: "Brand Strategy",
    heroStat: "#1 juice brand in NZ",
    heroStatSub: "+32% value · +5.5pp share",
    year: "2024",
    award: "2× GNMA Nominated",
    description: "Reframed pulp preference as tribal identity, not rational product choice.",
    slug: "keri-pulp-friction",
  },
  {
    id: 3,
    title: "Wilkins #1 Philippines",
    category: "Growth Marketing",
    heroStat: "#1 water brand PH",
    heroStatSub: "23.1% vol share · +7pts vs PY",
    year: "2025",
    award: null,
    description: "Regional IMC strategy translated into sustained market leadership in APAC's most competitive hydration category.",
    slug: "wilkins",
  },
  {
    id: 4,
    title: "CRM Architecture — Braze",
    category: "CRM & Lifecycle",
    heroStat: "Built Deliveroo CRM from zero",
    heroStatSub: "+17% open rates · 3× output",
    year: "2020",
    award: null,
    description: "Consumer lifecycle mapping, segmented journeys, A/B testing embedded from day one.",
    slug: "crm-braze",
  },
  {
    id: 5,
    title: "Coke Music Promo — 3 Cycles",
    category: "Integrated Marketing",
    heroStat: "4M+ first-party data records",
    heroStatSub: "2× unique users · 20% agency savings Y3",
    year: "2024",
    award: null,
    description: "Regional IMC toolkit iterated across three cycles — each compounding on the last.",
    slug: "coke-music-promo",
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
      background: COLORS.bg, minHeight: "100vh",
      fontFamily: FONTS.body,
      color: COLORS.text, overflowX: "hidden", position: "relative",
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
        borderBottom: `0.5px solid ${COLORS.border}`,
        backdropFilter: "blur(12px)", background: "rgba(13,13,13,0.85)",
        opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(-8px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "0.12em", color: COLORS.text, fontFamily: FONTS.mono, cursor: "pointer" }}>
            TK<span style={{ color: COLORS.teal, marginLeft: "2px" }}>.</span>
          </div>
        </Link>
        <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          {NAV_ITEMS.map((item) => (
            <NavLink key={item} to={NAV_PATH[item]} style={({ isActive }) => ({
              color: isActive ? COLORS.text : activeNav === item ? COLORS.teal : "rgba(240,237,232,0.5)",
              fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase",
              cursor: "pointer", transition: "color 0.2s ease", padding: "4px 0",
              fontFamily: FONTS.mono, textDecoration: "none", display: "inline-block",
            })} onMouseEnter={() => setActiveNav(item)} onMouseLeave={() => setActiveNav(null)}>{item}</NavLink>
          ))}
          <a href="mailto:trishakuek@gmail.com" style={{
            background: COLORS.teal, color: COLORS.bg, fontSize: "11px", letterSpacing: "0.18em",
            textTransform: "uppercase", padding: "10px 20px", textDecoration: "none",
            fontWeight: "700", fontFamily: FONTS.mono, transition: "background 0.2s ease",
          }}
            onMouseEnter={(e) => e.target.style.background = COLORS.orange}
            onMouseLeave={(e) => e.target.style.background = COLORS.teal}>
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
          fontFamily: FONTS.display, fontStyle: "italic",
        }}>TK</div>

        <div style={{ width: loaded ? "80px" : "0px", height: "2px", background: COLORS.teal, marginBottom: "32px", transition: "width 0.8s ease 0.3s" }} />

        <span style={{
          fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase",
          color: COLORS.teal, fontFamily: FONTS.mono, display: "block", marginBottom: "20px",
          opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease 0.35s",
        }}>
          Trisha Kuek — Senior Marketing Leader
        </span>

        <h1 style={{
          fontSize: "clamp(34px, 5.4vw, 76px)", fontWeight: "400", lineHeight: 1.08,
          margin: "0 0 32px", maxWidth: "900px", letterSpacing: "-0.025em",
          fontFamily: FONTS.display,
          opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
        }}>
          Strategic enough to shape the brief.<br />
          Creative enough to{" "}
          <em style={{ color: COLORS.orange, fontStyle: "italic", fontWeight: 400, whiteSpace: "nowrap" }}>make it land</em>.
        </h1>

        <p style={{
          fontSize: "clamp(15px, 1.4vw, 19px)", color: "rgba(240,237,232,0.65)",
          maxWidth: "620px", lineHeight: 1.6, margin: "0 0 48px", letterSpacing: "0.005em",
          fontFamily: FONTS.body, fontWeight: 300,
          opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(16px)",
          transition: "opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s",
        }}>
          Twelve years across FMCG, hypergrowth tech, and agencies — closing the gap between strategy and execution, at speed, across markets, without losing the creative.
        </p>

        <div style={{
          display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap",
          opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.8s ease 0.8s, transform 0.8s ease 0.8s",
        }}>
          <Link to="/work" style={{
            background: COLORS.teal, color: COLORS.bg,
            fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase",
            padding: "14px 28px", textDecoration: "none", fontFamily: FONTS.mono,
            fontWeight: 700, transition: "background 0.2s ease", display: "inline-block",
          }}
            onMouseEnter={(e) => e.target.style.background = COLORS.orange}
            onMouseLeave={(e) => e.target.style.background = COLORS.teal}>
            See the work →
          </Link>
          <a href="mailto:trishakuek@gmail.com" style={{
            background: "transparent", border: `1px solid rgba(240,237,232,0.2)`, color: "rgba(240,237,232,0.6)",
            fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase",
            padding: "14px 28px", textDecoration: "none", fontFamily: FONTS.mono,
            transition: "all 0.2s ease", display: "inline-block",
          }}
            onMouseEnter={(e) => { e.target.style.borderColor = "rgba(240,237,232,0.5)"; e.target.style.color = COLORS.text; }}
            onMouseLeave={(e) => { e.target.style.borderColor = "rgba(240,237,232,0.2)"; e.target.style.color = "rgba(240,237,232,0.6)"; }}>
            Email
          </a>
        </div>

        {/* Brand logo strip — proof above the fold */}
        <div style={{
          marginTop: "80px", paddingTop: "32px",
          borderTop: `0.5px solid ${COLORS.border}`,
          display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap",
          opacity: loaded ? 0.8 : 0, transition: "opacity 1s ease 1s",
        }}>
          <span style={{ fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(240,237,232,0.35)", fontFamily: FONTS.mono }}>
            Work shipped with
          </span>
          <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", alignItems: "center" }}>
            {["Coca-Cola", "Minute Maid", "Deliveroo", "Lazada", "Keri", "Wilkins", "Pump", "Braze"].map((brand) => (
              <span key={brand} style={{
                fontSize: "14px", fontFamily: FONTS.display, fontWeight: 500,
                color: "rgba(240,237,232,0.55)", letterSpacing: "0.01em",
              }}>{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* WORK SECTION */}
      <section style={{ padding: "120px 48px", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "flex", alignItems: "baseline", justifyContent: "space-between",
          marginBottom: "48px", borderTop: `0.5px solid rgba(240,237,232,0.1)`, paddingTop: "32px",
        }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "24px" }}>
            <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: COLORS.teal, fontFamily: FONTS.mono }}>Selected work</span>
            <span style={{ fontSize: "10px", letterSpacing: "0.1em", color: "rgba(240,237,232,0.3)", fontFamily: FONTS.mono }}>{CASE_STUDIES.length} case studies</span>
          </div>
          <Link to="/work" style={{
            color: "rgba(240,237,232,0.4)", fontSize: "11px", letterSpacing: "0.15em",
            textTransform: "uppercase", fontFamily: FONTS.mono,
            transition: "color 0.2s", textDecoration: "none", display: "inline-block",
          }}
            onMouseEnter={(e) => e.target.style.color = COLORS.orange}
            onMouseLeave={(e) => e.target.style.color = "rgba(240,237,232,0.4)"}>
            View all →
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: "1px", background: "rgba(240,237,232,0.06)" }}>
          {CASE_STUDIES.map((cs) => (
            <CaseStudyCard key={cs.id} cs={cs} hovered={hoveredCard === cs.id} onHover={() => setHoveredCard(cs.id)} onLeave={() => setHoveredCard(null)} />
          ))}
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section style={{ padding: "80px 48px 120px", position: "relative", zIndex: 1, borderTop: `0.5px solid ${COLORS.border}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "80px", alignItems: "start", maxWidth: "1200px" }}>
          <div>
            <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: COLORS.orange, fontFamily: FONTS.mono, display: "block", marginBottom: "24px" }}>About</span>
            <h2 style={{ fontSize: "clamp(32px, 4.5vw, 56px)", fontWeight: 400, lineHeight: 1.05, margin: "0 0 24px", letterSpacing: "-0.025em", fontFamily: FONTS.display }}>
              12 years.<br />
              <em style={{ color: COLORS.teal, fontStyle: "italic", fontWeight: 400 }}>Strategy to ship.</em><br />
              No gap.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: "17px", color: "rgba(240,237,232,0.7)", lineHeight: 1.65, margin: "0 0 20px", fontFamily: FONTS.body, fontWeight: 300 }}>
              Senior marketing leader across FMCG, hypergrowth tech and agencies. Most recently leading integrated marketing communications across Coca-Cola's Stills portfolio for ASEAN and South Pacific.
            </p>
            <p style={{ fontSize: "17px", color: "rgba(240,237,232,0.7)", lineHeight: 1.65, margin: "0 0 36px", fontFamily: FONTS.body, fontWeight: 300 }}>
              I build things as well as brief them — from CRM architecture to production model redesigns to AI-enabled creative validation. Strategy and execution, without the gap.
            </p>
            <Link to="/about" style={{
              color: COLORS.teal, fontSize: "11px",
              letterSpacing: "0.18em", textTransform: "uppercase", cursor: "pointer",
              fontFamily: FONTS.mono, transition: "color 0.2s",
              textDecoration: "none", display: "inline-block",
            }}
              onMouseEnter={(e) => e.target.style.color = COLORS.orange}
              onMouseLeave={(e) => e.target.style.color = COLORS.teal}>
              Full story →
            </Link>
          </div>
        </div>
      </section>

      <footer style={{
        padding: "32px 48px", borderTop: `0.5px solid ${COLORS.border}`,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        position: "relative", zIndex: 1,
      }}>
        <span style={{ fontSize: "11px", color: "rgba(240,237,232,0.2)", fontFamily: FONTS.mono, letterSpacing: "0.1em" }}>Trisha Kuek · {new Date().getFullYear()}</span>
        <div style={{ display: "flex", gap: "32px" }}>
          {[["Email", "mailto:trishakuek@gmail.com"], ["LinkedIn", "https://linkedin.com/in/trishakuek"]].map(([label, href]) => (
            <a key={label} href={href} {...(label === "LinkedIn" ? { target: "_blank", rel: "noopener noreferrer" } : {})} style={{
              fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase",
              color: "rgba(240,237,232,0.25)", textDecoration: "none",
              fontFamily: FONTS.mono, transition: "color 0.2s",
            }}
              onMouseEnter={(e) => e.target.style.color = COLORS.teal}
              onMouseLeave={(e) => e.target.style.color = "rgba(240,237,232,0.25)"}>
              {label}
            </a>
          ))}
        </div>
      </footer>

      <style>{`
        ${FONT_IMPORT}
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
  const thumb = THUMBS[cs.slug];
  return (
    <Link to={`/work/${cs.slug}`} style={{ display: "block", textDecoration: "none", color: "inherit" }}>
      <div onMouseEnter={onHover} onMouseLeave={onLeave} style={{
        background: hovered ? COLORS.surface : COLORS.bg,
        cursor: "pointer", transition: "background 0.25s ease",
        position: "relative", overflow: "hidden",
        display: "flex", flexDirection: "column",
      }}>
        {/* Thumbnail */}
        <div style={{
          aspectRatio: "16/10",
          background: thumb?.type === "gradient" ? thumb.bg : COLORS.bg,
          backgroundImage: thumb?.type === "image" ? `url(${thumb.src})` : undefined,
          backgroundSize: "cover", backgroundPosition: "center",
          position: "relative", overflow: "hidden",
          display: "flex", alignItems: "center", justifyContent: "center",
          borderBottom: `0.5px solid rgba(240,237,232,0.08)`,
        }}>
          {thumb?.type === "gradient" && (
            <div style={{ textAlign: "center", padding: "20px" }}>
              <div style={{
                fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 600,
                color: thumb.fg, fontFamily: FONTS.display, letterSpacing: "-0.02em",
                lineHeight: 1, fontStyle: "italic",
              }}>{thumb.label}</div>
              <div style={{
                fontSize: "10px", letterSpacing: "0.22em",
                color: thumb.fg, opacity: 0.7, fontFamily: FONTS.mono,
                marginTop: "12px",
              }}>{thumb.sub}</div>
            </div>
          )}
          {/* Hover overlay */}
          <div style={{
            position: "absolute", inset: 0,
            background: hovered ? "rgba(13,13,13,0.15)" : "rgba(13,13,13,0)",
            transition: "background 0.3s ease",
          }} />
        </div>

        {/* Content */}
        <div style={{ padding: "32px 36px 36px", position: "relative" }}>
          <div style={{
            position: "absolute", top: 0, left: 0,
            width: hovered ? "100%" : "0%", height: "1px",
            background: `linear-gradient(to right, ${COLORS.teal}, transparent)`,
            transition: "width 0.4s ease",
          }} />

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
            <span style={{
              fontSize: "9px", letterSpacing: "0.22em", textTransform: "uppercase",
              color: hovered ? COLORS.teal : "rgba(240,237,232,0.35)",
              fontFamily: FONTS.mono, transition: "color 0.25s",
            }}>{cs.category}</span>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              {cs.award && (
                <span style={{
                  fontSize: "8px", letterSpacing: "0.12em", textTransform: "uppercase",
                  color: COLORS.orange, border: `0.5px solid ${COLORS.orange}`,
                  padding: "2px 8px", fontFamily: FONTS.mono,
                }}>{cs.award}</span>
              )}
              <span style={{ fontSize: "10px", color: "rgba(240,237,232,0.25)", fontFamily: FONTS.mono }}>{cs.year}</span>
            </div>
          </div>

          {/* Hero stat — leads */}
          <div style={{
            fontSize: "clamp(22px, 2.4vw, 30px)", fontWeight: 500, lineHeight: 1.15,
            color: hovered ? COLORS.text : "rgba(240,237,232,0.92)",
            fontFamily: FONTS.display, letterSpacing: "-0.02em",
            marginBottom: "4px", transition: "color 0.25s",
          }}>{cs.heroStat}</div>
          <div style={{
            fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase",
            color: hovered ? COLORS.teal : "rgba(240,237,232,0.4)",
            fontFamily: FONTS.mono, marginBottom: "20px", transition: "color 0.25s",
          }}>{cs.heroStatSub}</div>

          <h3 style={{
            fontSize: "14px", fontWeight: 500, lineHeight: 1.4, marginBottom: "10px",
            fontFamily: FONTS.body,
            color: "rgba(240,237,232,0.8)",
          }}>{cs.title}</h3>

          <p style={{
            fontSize: "13.5px", color: "rgba(240,237,232,0.5)", lineHeight: 1.6,
            fontFamily: FONTS.body, fontWeight: 300, maxWidth: "380px",
          }}>{cs.description}</p>

          <div style={{
            marginTop: "24px", paddingTop: "16px",
            borderTop: `0.5px solid rgba(240,237,232,0.07)`,
            display: "flex", alignItems: "center", justifyContent: "flex-end",
          }}>
            <span style={{
              fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase",
              color: hovered ? COLORS.orange : "rgba(240,237,232,0.4)",
              fontFamily: FONTS.mono, transition: "color 0.25s",
            }}>Read case study <span style={{ marginLeft: "8px", display: "inline-block", transform: hovered ? "translateX(4px)" : "translateX(0)", transition: "transform 0.25s" }}>→</span></span>
          </div>
        </div>
      </div>
    </Link>
  );
}
