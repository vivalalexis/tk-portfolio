import { useState, useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';
import { FONTS, COLORS, FONT_IMPORT, THUMBS } from '../theme.js';

const CASE_STUDIES = [
  {
    id: 1,
    title: "Animal Crossing x Deliveroo",
    category: "Brand Activation",
    heroStat: "$1.2M earned media",
    heroStatSub: "$0 spend · 13M impressions · 700K engagements",
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
    heroStatSub: "+32% value · +5.5pp share · 2× GNMA nominated",
    year: "2024",
    award: "2× GNMA Nominated",
    description: "Reframed pulp preference as tribal identity, not rational product choice — and built a campaign platform around the tension.",
    slug: "keri-pulp-friction",
  },
  {
    id: 3,
    title: "Wilkins #1 Philippines",
    category: "Growth Marketing",
    heroStat: "#1 water brand in PH",
    heroStatSub: "23.1% vol share · +7pts vs PY",
    year: "2025",
    award: null,
    description: "Regional IMC strategy translated into sustained market leadership in APAC's most competitive hydration category.",
    slug: "wilkins",
  },
  {
    id: 15,
    title: "Wilkins Circle of Trust",
    category: "Route-to-Market · B2B2C",
    heroStat: "Trust, taken to the shelf",
    heroStatSub: "23.1% vol share · barangay-to-sari-sari journey",
    year: "2025",
    award: null,
    description: "Turned doctor-and-mother trust equity into a B2B2C operating system that ran from community health workers all the way to a sari-sari store sale.",
    slug: "wilkins-circle-of-trust",
  },
  {
    id: 16,
    title: "Production Model Redesign",
    category: "Production Model Design",
    heroStat: "70% agency cost saved",
    heroStatSub: "3× asset output · 50% faster timelines",
    year: "2026",
    award: null,
    description: "Rebuilt a slow, sequential production model into parallel workstreams, fixing the scope conversation upstream instead of cutting the rate card.",
    slug: "production-model",
  },
  {
    id: 17,
    title: "AI-Validated Visual Identity",
    category: "Data & AI · Visual Identity",
    heroStat: "Opinion → evidence",
    heroStatSub: "Full transition redirected to phased rollout",
    year: "2025",
    award: null,
    description: "Ran AI shelf-attention testing before production spend committed, and the data changed a region-wide packaging recommendation.",
    slug: "ai-shelf-testing",
  },
  {
    id: 4,
    title: "CRM Architecture — Braze",
    category: "CRM & Lifecycle",
    heroStat: "Built Deliveroo CRM from zero",
    heroStatSub: "+17% open rates · 3× output · loyalty shipped pre-roadmap",
    year: "2020",
    award: null,
    description: "Consumer lifecycle mapping, segmented journeys, A/B testing embedded from day one — then a loyalty mechanic shipped entirely within the platform.",
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
    description: "Regional IMC toolkit iterated across three cycles — enabling markets to localise without restarting from scratch.",
    slug: "coke-music-promo",
  },
  {
    id: 6,
    title: "Coca-Cola Creations — Y3000",
    category: "Innovation",
    heroStat: "792M organic impressions",
    heroStatSub: "$710K earned media · region #2 globally",
    year: "2023",
    award: null,
    description: "Pack, digital, and experiential stitched into one Gen Z platform — orchestrated end to end across the region.",
    slug: "coca-cola-creations",
  },
  {
    id: 7,
    title: "K-Wave — Leading Through Crisis",
    category: "Crisis Management",
    heroStat: "80% of execution protected",
    heroStatSub: "85% negative global sentiment · blanket mandate renegotiated",
    year: "2024",
    award: null,
    description: "Social listening evidence turned a global shutdown order into a tiered, market-calibrated response.",
    slug: "kwave-crisis",
  },
  {
    id: 8,
    title: "Coca-Cola Frozen",
    category: "Integrated Marketing",
    heroStat: "Summer's Better Frozen",
    heroStatSub: "ANZ summer platform · 3-product frozen range",
    year: "2022",
    award: null,
    description: "One platform idea for the frozen range — a point-of-sale format given brand-level storytelling.",
    slug: "coke-frozen",
  },
  {
    id: 18,
    title: "Water Purification Tablet Pilot",
    category: "Intrapreneurship",
    heroStat: "$46M opportunity modelled",
    heroStatSub: "12-mo Metro Manila pilot · $150K seed",
    year: "2025",
    award: null,
    description: "Paired water access with commercial growth in the Philippines, built as a fundable pilot with an honest path from social impact to scale.",
    slug: "water-tablet-pilot",
  },
  {
    id: 9,
    title: "Deliveroo $12 Value Meals",
    category: "Social & Content",
    heroStat: "Value made shareable",
    heroStatSub: "Food babies · platform-native commercial creative",
    year: "2020",
    award: null,
    description: "A hard commercial brief sold with a gag instead of a discount banner — brand voice intact.",
    slug: "deliveroo-value-meals",
  },
  {
    id: 10,
    title: "Lazada Mother's Day",
    category: "Social & Creative Risk",
    heroStat: "Viral in 5 markets",
    heroStatSub: "Zero PR seeding · zero paid · zero backlash",
    year: "2017",
    award: null,
    description: "A rapping mum told her kids to buy her some shit. The risk framework made the hard call an easy call.",
    slug: "lazada-mothers-day",
  },
  {
    id: 11,
    title: "Lazada K.PO",
    category: "Social Commerce",
    heroStat: "2 weeks to launch",
    heroStatSub: "$0 media · earned PR · live comment-to-conversion loop",
    year: "2017",
    award: null,
    description: "A fake Singlish smart speaker run in character from the comment section — every reply a product link.",
    slug: "lazada-kpo",
  },
  {
    id: 12,
    title: "Lazada Birthday Festival",
    category: "Campaign & Brand Voice",
    heroStat: "1.2M views",
    heroStatSub: "600+ flash deals · one irreverent brand voice",
    year: "2018",
    award: null,
    description: "The anti-sentimental voice built on stunts, tested against the biggest sale moment of the year.",
    slug: "lazada-birthday",
  },
  {
    id: 13,
    title: "Pawcast",
    category: "AI Build · Side Project",
    heroStat: "3 days to prototype",
    heroStatSub: "ML scheduling engine · overfitting survived",
    year: "2026",
    award: null,
    description: "A machine learning model that predicts a dog's potty schedule — and proves the build-depth claim.",
    slug: "pawcast",
  },
  {
    id: 14,
    title: "AI Show Trailer",
    category: "AI Build · Side Project",
    heroStat: "A show MVP'd in 1 day",
    heroStatSub: "60-sec satire-noir · Claude Code, ElevenLabs, Suno, Higgsfield",
    year: "2026",
    award: null,
    description: "AI 10x'd the execution. Taste — choosing the one variation that works — is still the job.",
    slug: "ai-show-trailer",
  },
  {
    id: 19,
    title: "Red Thread Blueprint",
    category: "AI Build · Product Venture",
    heroStat: "A whole business, built solo",
    heroStatSub: "Engine · brand · pricing · guardrails · 7 SKUs",
    year: "2026",
    award: null,
    description: "A rigour-first destiny-reading product where deterministic libraries do all the math and AI only interprets. Brand, catalogue, and GTM designed end to end.",
    slug: "red-thread-blueprint",
  },
  {
    id: 20,
    title: "Sports Edge Engine",
    category: "AI Build · Side Project",
    heroStat: "Built to doubt itself",
    heroStatSub: "CLV validation · reliability scoring · 6-tab pipeline",
    year: "2026",
    award: null,
    description: "Quant-trading principles applied to AU sports markets, where the real engineering was the governance: a system that distrusts its own outputs until evidence earns the confidence.",
    slug: "sports-edge-engine",
  },
  {
    id: 21,
    title: "Ghost Mode V2",
    category: "AI Build · Side Project",
    heroStat: "Where not to use AI",
    heroStatSub: "Deterministic teleprompter · rehearsal platform",
    year: "2026",
    award: null,
    description: "An interview teleprompter built around a high-pressure flow, where deterministic navigation deliberately beats AI cleverness.",
    slug: "ghost-mode",
  },
];

const NAV_PATH = { Work: "/work", About: "/about", Contact: "/contact" };

export default function TKWork() {
  const [loaded, setLoaded] = useState(false);
  const [activeNav, setActiveNav] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
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
        background: "radial-gradient(ellipse at top right, rgba(0,196,180,0.05) 0%, transparent 70%)",
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
          {["Work", "About", "Contact"].map((item) => (
            <NavLink key={item} to={NAV_PATH[item]}
              style={({ isActive }) => ({
                color: isActive ? COLORS.text : activeNav === item ? COLORS.teal : "rgba(240,237,232,0.5)",
                fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase",
                cursor: "pointer", transition: "color 0.2s ease", padding: "4px 0",
                fontFamily: FONTS.mono, textDecoration: "none", display: "inline-block",
              })}
              onMouseEnter={() => setActiveNav(item)}
              onMouseLeave={() => setActiveNav(null)}>{item}</NavLink>
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

      <main style={{ paddingTop: "140px", paddingBottom: "120px", position: "relative", zIndex: 1 }}>
        <div style={{ padding: "0 48px", marginBottom: "56px" }}>
          <div style={{
            borderTop: `0.5px solid rgba(240,237,232,0.1)`, paddingTop: "32px",
            opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease 0.2s",
          }}>
            <span style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: COLORS.teal, fontFamily: FONTS.mono, display: "block", marginBottom: "24px" }}>Work</span>
            <h1 style={{
              fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 400, lineHeight: 1.05,
              letterSpacing: "-0.03em", fontFamily: FONTS.display, margin: "0 0 20px",
              maxWidth: "960px",
            }}>
              Selected case studies. <em style={{ color: "rgba(240,237,232,0.35)", fontStyle: "italic", fontWeight: 400 }}>Real results.</em>
            </h1>
            <p style={{
              fontSize: "17px", color: "rgba(240,237,232,0.6)", lineHeight: 1.65,
              fontFamily: FONTS.body, fontWeight: 300, maxWidth: "620px", margin: 0,
            }}>
              Work across brand, growth, CRM, regional IMC, and hands-on AI builds. Each led end-to-end, from strategy through production to in-market results.
            </p>
          </div>
        </div>

        <div style={{
          padding: "0 48px",
          opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.4s",
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))",
            gap: "1px",
            background: "rgba(240,237,232,0.06)",
          }}>
            {CASE_STUDIES.map((cs, i) => (
              <CaseStudyCard
                key={cs.id}
                cs={cs}
                index={i}
                total={CASE_STUDIES.length}
                hovered={hoveredCard === cs.id}
                onHover={() => setHoveredCard(cs.id)}
                onLeave={() => setHoveredCard(null)}
              />
            ))}
          </div>
        </div>

        <div style={{
          padding: "80px 48px 0",
          opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.6s",
        }}>
          <div style={{ borderTop: `0.5px solid rgba(240,237,232,0.06)`, paddingTop: "48px", maxWidth: "980px" }}>
            <p style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(240,237,232,0.3)", fontFamily: FONTS.mono, marginBottom: "24px" }}>Disciplines across all work</p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {[
                "Integrated marketing", "Brand strategy", "CRM & lifecycle",
                "Creative strategy", "Regional IMC", "Content strategy",
                "Production model design", "First-party data", "Social & earned media",
                "Visual identity", "AI-enabled testing", "Agency management",
              ].map((tag) => (
                <span key={tag} style={{
                  fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase",
                  border: `0.5px solid rgba(240,237,232,0.12)`,
                  color: "rgba(240,237,232,0.35)",
                  padding: "6px 12px",
                  fontFamily: FONTS.mono,
                }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </main>

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
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0D0D0D; }
        ::-webkit-scrollbar-thumb { background: rgba(240,237,232,0.15); }
        :focus-visible { outline: 2px solid #00C4B4; outline-offset: 2px; }
      `}</style>
    </div>
  );
}

function CaseStudyCard({ cs, index, total, hovered, onHover, onLeave }) {
  const thumb = THUMBS[cs.slug];
  return (
    <Link to={`/work/${cs.slug}`} style={{ display: "block", textDecoration: "none", color: "inherit" }}>
      <div
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        style={{
          background: hovered ? COLORS.surface : COLORS.bg,
          cursor: "pointer", transition: "background 0.25s ease",
          position: "relative", overflow: "hidden",
          display: "flex", flexDirection: "column",
        }}
      >
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
                fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 600,
                color: thumb.fg, fontFamily: FONTS.display, letterSpacing: "-0.02em",
                lineHeight: 1, fontStyle: "italic",
              }}>{thumb.label}</div>
              <div style={{
                fontSize: "10px", letterSpacing: "0.22em",
                color: thumb.fg, opacity: 0.7, fontFamily: FONTS.mono,
                marginTop: "14px",
              }}>{thumb.sub}</div>
            </div>
          )}
          <div style={{
            position: "absolute", top: "16px", left: "20px",
            fontSize: "11px", letterSpacing: "0.15em",
            color: thumb?.type === "gradient" ? thumb.fg : "rgba(240,237,232,0.6)",
            opacity: 0.7, fontFamily: FONTS.mono,
          }}>{String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</div>
          <div style={{
            position: "absolute", inset: 0,
            background: hovered ? "rgba(13,13,13,0.15)" : "rgba(13,13,13,0)",
            transition: "background 0.3s ease",
          }} />
        </div>

        <div style={{ padding: "36px 40px 40px", position: "relative" }}>
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
                  padding: "2px 8px", fontFamily: FONTS.mono, whiteSpace: "nowrap",
                }}>{cs.award}</span>
              )}
              <span style={{ fontSize: "10px", color: "rgba(240,237,232,0.25)", fontFamily: FONTS.mono }}>{cs.year}</span>
            </div>
          </div>

          <div style={{
            fontSize: "clamp(24px, 2.6vw, 34px)", fontWeight: 500, lineHeight: 1.1,
            color: hovered ? COLORS.text : "rgba(240,237,232,0.92)",
            fontFamily: FONTS.display, letterSpacing: "-0.025em",
            marginBottom: "6px", transition: "color 0.25s",
          }}>{cs.heroStat}</div>
          <div style={{
            fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase",
            color: hovered ? COLORS.teal : "rgba(240,237,232,0.42)",
            fontFamily: FONTS.mono, marginBottom: "24px", transition: "color 0.25s",
          }}>{cs.heroStatSub}</div>

          <h2 style={{
            fontSize: "15px", fontWeight: 500, lineHeight: 1.4, marginBottom: "10px",
            fontFamily: FONTS.body,
            color: "rgba(240,237,232,0.82)",
          }}>{cs.title}</h2>
          <p style={{
            fontSize: "14px", color: "rgba(240,237,232,0.5)",
            lineHeight: 1.65, fontFamily: FONTS.body, fontWeight: 300,
            maxWidth: "420px",
          }}>{cs.description}</p>

          <div style={{
            marginTop: "28px", paddingTop: "16px",
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
