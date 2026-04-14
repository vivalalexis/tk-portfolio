import { useState, useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';
import { FONTS, COLORS, FONT_IMPORT } from '../theme.js';

const CAREER = [
  {
    company: "The Coca-Cola Company",
    role: "Regional Senior Creative & Content Manager",
    period: "Jul 2024 — Present",
    location: "Sydney, AU",
    detail: "Leading regional creative and content strategy across ASEAN and South Pacific for Juice, Dairy and Hydration portfolios. Held expanded dual-role responsibility (Apr–Jun 2025) overseeing Hydration category strategy alongside core content leadership. Led Keri Pulp Friction — Keri to #1 juice brand in New Zealand (40% monthly vol share, first time in brand history). Redesigned production model from sequential to parallel workstreams — 70% agency cost savings, 3x asset output, 50% faster timelines.",
    tags: ["IMC", "Creative Strategy", "FMCG", "ASEAN & South Pacific"],
  },
  {
    company: "The Coca-Cola Company",
    role: "Regional Creative & Content Manager",
    period: "Sep 2021 — Jul 2024",
    location: "Sydney, AU",
    detail: "Led regional integrated creative and content strategy across Asia South Pacific. Navigated a global K-Wave reputational crisis — 85% negative sentiment on global launch, renegotiated a blanket global mandate, protected 80% of planned ASP campaign execution. Led Coke Music Promo across 3 cycles — 4M+ first-party data captures, 2x unique users vs prior year, 20% agency cost savings in Year 3. Coca-Cola Creations: 792M organic impressions, $710K earned media value, ASP ranked #2 globally.",
    tags: ["Regional IMC", "Brand Platforms", "Innovation", "Crisis Management"],
  },
  {
    company: "Deliveroo",
    role: "Social & CRM Content Manager",
    period: "Apr 2019 — Sep 2021",
    location: "Singapore",
    detail: "Rebuilt CRM architecture from zero in Braze — mapped the consumer lifecycle, designed segmented journeys, embedded A/B testing from day one. Delivered +17% open rates, 3x output volume. Engineered a full loyalty punch card mechanic entirely within the CRM platform — shipped months before the product team's roadmap feature. Conceived and executed the Animal Crossing x Deliveroo Crossing activation: $1.2M earned media, 700K engagements, 13M impressions, $0 spend. Spikes Asia Bronze 2021.",
    tags: ["CRM", "Braze", "Social", "Brand Activation"],
  },
  {
    company: "JET8",
    role: "Global Digital Marketing Manager",
    period: "Jul 2018 — Apr 2019",
    location: "Singapore",
    detail: "Led end-to-end digital strategy across social, CRM, and performance marketing. Managed a 24/7 community operation serving a global user and investor base. Partnered with global brands including P&G, Unilever, Nestlé, Coca-Cola, and McDonald's on commerce campaigns.",
    tags: ["Digital", "CRM", "Performance", "Global"],
  },
  {
    company: "Lazada — Alibaba Group",
    role: "Head of Social Media",
    period: "Nov 2015 — Jul 2018",
    location: "Singapore",
    detail: "Led social media strategy and execution during a high-growth phase. Originated K.PO — a Singlish-speaking fake smart speaker launched on April Fool's Day — zero-budget activation, live comment-to-conversion loop, concept to launch in two weeks. Drove viral Mother's Day campaign with organic pickup across regional publications and zero PR seeding. Delivered +78% Facebook growth, +858% Instagram followers, +144% engagement.",
    tags: ["Social", "Brand", "E-commerce", "ASEAN"],
  },
];

const PILLARS = [
  {
    label: "FMCG + Tech + Agency",
    body: "Three sectors that don't usually share the same CV. FMCG gave commercial rigour and market discipline. Hypergrowth tech gave speed and platform depth. Agency gave craft. Coca-Cola, Deliveroo, Lazada, JET8 — each one sharpened a different edge.",
    accent: "#00C4B4",
    index: "01",
  },
  {
    label: "APAC depth",
    body: "ASEAN and South Pacific across 10+ markets — Singapore, Malaysia, Philippines, New Zealand, Australia and beyond. OU-level programme management. Ran regional work without the luxury of a one-size-fits-all strategy and delivered market leadership across it. Wilkins to #1 in the Philippines. Keri to #1 in New Zealand.",
    accent: "#FF5C1A",
    index: "02",
  },
  {
    label: "Builder, not just briefer",
    body: "Built Deliveroo's CRM architecture from zero on Braze. Shipped a loyalty mechanic entirely within the platform before the product team's roadmap feature landed. Applied AI visual attention testing to redirect packaging investment. Redesigned production models from sequential to parallel — 70% cost savings, 3x output. The brief is the start, not the end.",
    accent: "#00C4B4",
    index: "03",
  },
];

const NUMBERS = [
  { stat: "792M", label: "organic impressions, Coca-Cola Creations ASP" },
  { stat: "4M+", label: "first-party data captures, Coke Music Promo" },
  { stat: "70%", label: "agency cost savings via production model redesign" },
  { stat: "$1.2M", label: "earned media, Animal Crossing x Deliveroo — $0 spend" },
  { stat: "+32%", label: "Keri value growth, Pulp Friction NZ" },
  { stat: "3x", label: "CRM output volume, Braze rebuild" },
];

const NAV_PATH = { Work: "/work", About: "/about", Contact: "/contact" };

export default function TKAbout() {
  const [loaded, setLoaded] = useState(false);
  const [activeNav, setActiveNav] = useState(null);
  const [expandedRole, setExpandedRole] = useState(null);

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
        position: "fixed", bottom: 0, left: 0, width: "50vw", height: "50vw",
        background: "radial-gradient(ellipse at bottom left, rgba(255,92,26,0.05) 0%, transparent 70%)",
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

      <main style={{ paddingTop: "140px", paddingBottom: "120px", position: "relative", zIndex: 1 }}>
        <div style={{ padding: "0 48px", marginBottom: "80px" }}>
          <div style={{
            borderTop: `0.5px solid rgba(240,237,232,0.1)`, paddingTop: "32px",
            display: "flex", alignItems: "baseline", justifyContent: "space-between",
            opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease 0.2s",
          }}>
            <span style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: COLORS.orange, fontFamily: FONTS.mono }}>About</span>
            <span style={{ fontSize: "10px", letterSpacing: "0.1em", color: "rgba(240,237,232,0.3)", fontFamily: FONTS.mono }}>Sydney, AU · Full working rights</span>
          </div>
        </div>

        {/* MANIFESTO */}
        <div style={{
          padding: "0 48px", marginBottom: "100px",
          opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
        }}>
          <div style={{ maxWidth: "920px" }}>
            <div style={{ width: loaded ? "60px" : "0px", height: "2px", background: COLORS.teal, marginBottom: "40px", transition: "width 0.8s ease 0.5s" }} />
            <h1 style={{
              fontSize: "clamp(36px, 6vw, 76px)", fontWeight: 400, lineHeight: 1.05,
              letterSpacing: "-0.03em", fontFamily: FONTS.display, margin: "0 0 40px", color: COLORS.text,
            }}>
              Most marketers can brief.<br />
              Fewer can <em style={{ color: COLORS.teal, fontStyle: "italic", fontWeight: 400 }}>build</em>.<br />
              I do <em style={{ color: COLORS.orange, fontStyle: "italic", fontWeight: 400 }}>both</em>.
            </h1>
            <p style={{ fontSize: "clamp(15px, 1.5vw, 18px)", color: "rgba(240,237,232,0.7)", lineHeight: 1.7, maxWidth: "640px", fontFamily: FONTS.body, fontWeight: 300, margin: "0 0 20px" }}>
              Trisha Kuek. Senior marketing leader with 12+ years across agencies, hypergrowth tech, and global FMCG. Based in Sydney with full working rights in Australia.
            </p>
            <p style={{ fontSize: "clamp(15px, 1.5vw, 18px)", color: "rgba(240,237,232,0.7)", lineHeight: 1.7, maxWidth: "640px", fontFamily: FONTS.body, fontWeight: 300, margin: "0 0 20px" }}>
              I operate at the intersection of creative strategy and commercial systems — not just developing the brief, but building the mechanism that makes it executable at scale across markets with different maturity levels, media landscapes, and commercial contexts.
            </p>
            <p style={{ fontSize: "clamp(15px, 1.5vw, 18px)", color: "rgba(240,237,232,0.7)", lineHeight: 1.7, maxWidth: "640px", fontFamily: FONTS.body, fontWeight: 300, margin: 0 }}>
              The gap between strategy and execution is where most work falls apart. I sit in that gap on purpose — and I leave capability behind, not just campaign outputs.
            </p>
          </div>
        </div>

        {/* NUMBERS */}
        <div style={{ padding: "0 48px", marginBottom: "100px", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.45s" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(240,237,232,0.06)" }}>
            {NUMBERS.map((n, i) => <NumberCard key={i} item={n} />)}
          </div>
        </div>

        {/* PILLARS */}
        <div style={{ padding: "0 48px", marginBottom: "100px", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.5s" }}>
          <div style={{ borderTop: `0.5px solid rgba(240,237,232,0.1)`, paddingTop: "32px", marginBottom: "40px" }}>
            <span style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: COLORS.teal, fontFamily: FONTS.mono }}>What makes me different</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(240,237,232,0.06)" }}>
            {PILLARS.map((p, i) => <PillarCard key={i} pillar={p} />)}
          </div>
        </div>

        {/* EXPERIENCE */}
        <div style={{ padding: "0 48px", marginBottom: "100px", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.6s" }}>
          <div style={{ borderTop: `0.5px solid rgba(240,237,232,0.1)`, paddingTop: "32px", marginBottom: "48px", display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
            <span style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: COLORS.teal, fontFamily: FONTS.mono }}>Experience</span>
            <span style={{ fontSize: "10px", color: "rgba(240,237,232,0.3)", fontFamily: FONTS.mono, letterSpacing: "0.1em" }}>Click to expand</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {CAREER.map((role, i) => (
              <RoleRow key={i} role={role} expanded={expandedRole === i} onToggle={() => setExpandedRole(expandedRole === i ? null : i)} isLast={i === CAREER.length - 1} />
            ))}
          </div>
          <div style={{ marginTop: "48px", paddingTop: "32px", borderTop: `0.5px solid rgba(240,237,232,0.06)`, display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,237,232,0.35)", fontFamily: FONTS.mono, marginBottom: "8px" }}>Singapore Management University</p>
              <p style={{ fontSize: "15px", color: "rgba(240,237,232,0.65)", fontFamily: FONTS.body, fontWeight: 400 }}>Bachelor of Business Management — Marketing & Corporate Communications</p>
            </div>
            <span style={{ fontSize: "11px", color: "rgba(240,237,232,0.25)", fontFamily: FONTS.mono, letterSpacing: "0.1em", whiteSpace: "nowrap", marginLeft: "48px" }}>2011 — 2015</span>
          </div>
        </div>

        {/* CONTACT STRIP */}
        <div style={{
          margin: "0 48px", padding: "48px", border: `0.5px solid rgba(240,237,232,0.1)`,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.8s",
        }}>
          <div>
            <p style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 400, letterSpacing: "-0.025em", fontFamily: FONTS.display, margin: "0 0 10px" }}>
              Let's work <em style={{ color: COLORS.teal, fontStyle: "italic", fontWeight: 400 }}>together</em>.
            </p>
            <p style={{ fontSize: "14px", color: "rgba(240,237,232,0.5)", fontFamily: FONTS.body, fontWeight: 300, margin: 0 }}>Open to senior marketing, growth, and IMC roles.</p>
          </div>
          <div style={{ display: "flex", gap: "16px", flexShrink: 0, marginLeft: "48px" }}>
            <a href="mailto:trishakuek@gmail.com" style={{
              background: "transparent", border: `1px solid ${COLORS.teal}`, color: COLORS.teal,
              fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase",
              padding: "14px 28px", textDecoration: "none", fontFamily: FONTS.mono,
              transition: "all 0.2s ease", display: "inline-block", whiteSpace: "nowrap",
            }}
              onMouseEnter={(e) => { e.target.style.background = COLORS.teal; e.target.style.color = COLORS.bg; }}
              onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.color = COLORS.teal; }}>
              Email me
            </a>
            <a href="https://linkedin.com/in/trishakuek" target="_blank" rel="noopener noreferrer" style={{
              background: "transparent", border: `1px solid rgba(240,237,232,0.2)`, color: "rgba(240,237,232,0.6)",
              fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase",
              padding: "14px 28px", textDecoration: "none", fontFamily: FONTS.mono,
              transition: "all 0.2s ease", display: "inline-block", whiteSpace: "nowrap",
            }}
              onMouseEnter={(e) => { e.target.style.borderColor = "rgba(240,237,232,0.5)"; e.target.style.color = COLORS.text; }}
              onMouseLeave={(e) => { e.target.style.borderColor = "rgba(240,237,232,0.2)"; e.target.style.color = "rgba(240,237,232,0.6)"; }}>
              LinkedIn
            </a>
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

function NumberCard({ item }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{
      background: hovered ? COLORS.surface : COLORS.bg, padding: "36px 40px",
      transition: "background 0.25s ease", position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: hovered ? "100%" : "0%", height: "1px", background: `linear-gradient(to right, ${COLORS.teal}, transparent)`, transition: "width 0.4s ease" }} />
      <p style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 500, letterSpacing: "-0.03em", color: hovered ? COLORS.teal : COLORS.text, fontFamily: FONTS.display, margin: "0 0 12px", transition: "color 0.25s" }}>{item.stat}</p>
      <p style={{ fontSize: "12px", color: "rgba(240,237,232,0.45)", fontFamily: FONTS.mono, lineHeight: 1.6, letterSpacing: "0.04em" }}>{item.label}</p>
    </div>
  );
}

function PillarCard({ pillar }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{
      background: hovered ? COLORS.surface : COLORS.bg, padding: "48px 40px",
      transition: "background 0.25s ease", position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: hovered ? "100%" : "0%", height: "1px", background: `linear-gradient(to right, ${pillar.accent}, transparent)`, transition: "width 0.4s ease" }} />
      <span style={{ fontSize: "9px", letterSpacing: "0.22em", color: "rgba(240,237,232,0.25)", fontFamily: FONTS.mono, display: "block", marginBottom: "28px" }}>{pillar.index}</span>
      <h3 style={{ fontSize: "22px", fontWeight: 500, letterSpacing: "-0.015em", lineHeight: 1.2, color: hovered ? pillar.accent : COLORS.text, fontFamily: FONTS.display, marginBottom: "20px", transition: "color 0.25s" }}>{pillar.label}</h3>
      <p style={{ fontSize: "14px", color: "rgba(240,237,232,0.6)", lineHeight: 1.7, fontFamily: FONTS.body, fontWeight: 300 }}>{pillar.body}</p>
    </div>
  );
}

function RoleRow({ role, expanded, onToggle, isLast }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ borderTop: `0.5px solid ${COLORS.border}`, borderBottom: isLast ? `0.5px solid ${COLORS.border}` : "none" }}>
      <div onClick={onToggle} style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: "32px", alignItems: "center", padding: "32px 0", cursor: "pointer" }}>
        <div>
          <p style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: hovered ? COLORS.teal : "rgba(240,237,232,0.4)", fontFamily: FONTS.mono, marginBottom: "10px", transition: "color 0.2s" }}>{role.company}</p>
          <p style={{ fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 500, letterSpacing: "-0.015em", color: COLORS.text, fontFamily: FONTS.display }}>{role.role}</p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p style={{ fontSize: "11px", color: "rgba(240,237,232,0.4)", fontFamily: FONTS.mono, letterSpacing: "0.1em", marginBottom: "4px" }}>{role.period}</p>
          <p style={{ fontSize: "10px", color: "rgba(240,237,232,0.3)", fontFamily: FONTS.mono, letterSpacing: "0.08em" }}>{role.location}</p>
        </div>
        <div style={{ fontSize: "18px", color: expanded ? COLORS.orange : "rgba(240,237,232,0.3)", transition: "color 0.2s, transform 0.3s", transform: expanded ? "rotate(45deg)" : "rotate(0deg)", width: "24px", textAlign: "center", userSelect: "none" }}>+</div>
      </div>
      <div style={{ overflow: "hidden", maxHeight: expanded ? "500px" : "0px", transition: "max-height 0.4s ease" }}>
        <div style={{ paddingBottom: "36px", paddingRight: "80px" }}>
          <p style={{ fontSize: "15px", color: "rgba(240,237,232,0.65)", lineHeight: 1.75, fontFamily: FONTS.body, fontWeight: 300, marginBottom: "20px" }}>{role.detail}</p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {role.tags.map((tag) => (
              <span key={tag} style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", border: `0.5px solid rgba(240,237,232,0.18)`, color: "rgba(240,237,232,0.45)", padding: "4px 10px", fontFamily: FONTS.mono }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
