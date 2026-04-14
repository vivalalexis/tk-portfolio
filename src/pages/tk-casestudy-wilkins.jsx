import { useState, useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';
import { FONTS, COLORS, FONT_IMPORT } from '../theme.js';

const RESULTS = [
  { stat: "#1", label: "Water brand in the Philippines", highlight: true },
  { stat: "23.1%", label: "Volume share — category leadership" },
  { stat: "+7pts", label: "Volume share gain vs prior year" },
  { stat: "10+", label: "Markets managed across ASEAN & South Pacific" },
];


const NAV_PATH = { Work: "/work", About: "/about", Contact: "/contact" };
export default function CaseStudyWilkins() {
  const [loaded, setLoaded] = useState(false);
  const [activeNav, setActiveNav] = useState(null);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 100); return () => clearTimeout(t); }, []);

  return (
    <div style={{ background: "#0D0D0D", minHeight: "100vh", fontFamily: "'DM Mono', monospace", color: "#F0EDE8", overflowX: "hidden", position: "relative" }}>
      <div style={{ position: "fixed", inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`, pointerEvents: "none", zIndex: 0, opacity: 0.6 }} />
      <div style={{ position: "fixed", top: 0, right: 0, width: "45vw", height: "45vw", background: "radial-gradient(ellipse at top right, rgba(0,196,180,0.05) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      <Nav loaded={loaded} activeNav={activeNav} setActiveNav={setActiveNav} />
      <main style={{ paddingTop: "140px", paddingBottom: "120px", position: "relative", zIndex: 1 }}>
        <BackBar loaded={loaded} category="Growth Marketing" year="2025" />
        <Hero loaded={loaded} accentColor="#00C4B4" title={<>Wilkins<br /><span style={{ color: "#00C4B4" }}>#1 Philippines</span>.</>} summary="From category contender to market leader in one of APAC's most competitive hydration markets. Regional IMC strategy that held at scale and delivered 23.1% volume share — +7 points on prior year." />
        <ContextStrip loaded={loaded} items={[{ label: "Brand", value: "Wilkins Water" }, { label: "Market", value: "Philippines" }, { label: "Scope", value: "Regional IMC, in-market co-execution" }]} />
        <Narrative loaded={loaded} labels={["The market", "The challenge", "The approach", "The outcome"]} blocks={[
          { accent: "#00C4B4", text: "The Philippines hydration market is intensely competitive — multiple well-funded local and international players, a price-sensitive consumer base, and fragmented retail across both modern trade and traditional channels. Wilkins had strong brand recognition but needed to convert awareness into sustained purchase preference at volume." },
          { accent: null, text: "The challenge was two-fold: building a regional IMC framework that markets could execute with local relevance, while maintaining brand consistency and commercial discipline across a complex bottler and agency structure. Most frameworks fail because they're either too rigid to localise or too loose to compound." },
          { accent: "#FF5C1A", text: "The approach centred on deep in-market co-execution — working closely with local commercial and marketing teams rather than directing from regional. IQVIA data was used to interrogate and optimise budget allocation, redirecting spend from legacy activity that had never been performance-tested. Production was redesigned to be faster and cheaper, freeing up investment for in-market activation that moved sales." },
          { accent: null, text: "By end of 2025, Wilkins had reached 23.1% volume share — the #1 position in the Philippines hydration category, up 7 percentage points on the prior year. The result was a product of strategy that was commercially grounded from the start, not campaign metrics retrofitted to a business outcome." },
        ]} />
        <RoleGrid loaded={loaded} accentColor="#00C4B4" items={[
          { label: "Regional IMC lead", detail: "Set the integrated marketing communications framework — brand platform, channel strategy, and toolkit — that markets executed locally without restarting from scratch." },
          { label: "Budget optimisation", detail: "Applied IQVIA data to interrogate legacy spend and redirect investment toward activity with proven commercial impact. Removed budget from channels that had never been performance-tested." },
          { label: "In-market co-execution", detail: "Worked closely alongside Philippines marketing and commercial teams — building the brief and execution together to ensure local market reality was embedded from the start." },
          { label: "Production model", detail: "Redesigned production workflows to reduce cost and timeline, freeing up budget reallocation to high-impact in-market activation without increasing total investment." },
        ]} />
        <ResultsGrid loaded={loaded} results={RESULTS} accentColor="#FF5C1A" />
        <Reflection loaded={loaded} accentColor="#00C4B4" quote="Market leadership isn't won in a single campaign. It's built by making better decisions than your competitors across every spend allocation, every brief, every production cycle — until the cumulative advantage becomes structural." />
        <BackButton loaded={loaded} />
      </main>
      <Footer />
      <style>{`${FONT_IMPORT} * { box-sizing: border-box; margin: 0; padding: 0; } ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: #0D0D0D; } ::-webkit-scrollbar-thumb { background: rgba(240,237,232,0.15); }
        :focus-visible { outline: 2px solid #00C4B4; outline-offset: 2px; }`}</style>
    </div>
  );
}

// ── Shared components ────────────────────────────────────────────────────────

function Nav({ loaded, activeNav, setActiveNav }) {
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "24px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "0.5px solid rgba(240,237,232,0.08)", backdropFilter: "blur(12px)", background: "rgba(13,13,13,0.85)", opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(-8px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
      <Link to="/" style={{ textDecoration: "none" }}><div style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "0.12em", color: "#F0EDE8", fontFamily: "'DM Mono', monospace", cursor: "pointer" }}>TK<span style={{ color: "#00C4B4", marginLeft: "2px" }}>.</span></div></Link>
      <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
        {["Work", "About", "Contact"].map((item) => (<NavLink key={item} to={NAV_PATH[item]} style={({ isActive }) => ({ color: isActive ? "#F0EDE8" : activeNav === item ? "#00C4B4" : "rgba(240,237,232,0.5)", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", cursor: "pointer", transition: "color 0.2s ease", padding: "4px 0", fontFamily: "'DM Mono', monospace", textDecoration: "none", display: "inline-block" })} onMouseEnter={() => setActiveNav(item)} onMouseLeave={() => setActiveNav(null)}>{item}</NavLink>))}
        <a href="mailto:trishakuek@gmail.com" style={{ background: "#00C4B4", color: "#0D0D0D", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", padding: "10px 20px", textDecoration: "none", fontWeight: "700", fontFamily: "'DM Mono', monospace", transition: "background 0.2s ease" }} onMouseEnter={(e) => e.target.style.background = "#FF5C1A"} onMouseLeave={(e) => e.target.style.background = "#00C4B4"}>Get in touch</a>
      </div>
    </nav>
  );
}

function BackBar({ loaded, category, year, award }) {
  return (
    <div style={{ padding: "0 48px", marginBottom: "64px" }}>
      <div style={{ borderTop: "0.5px solid rgba(240,237,232,0.1)", paddingTop: "32px", display: "flex", alignItems: "center", justifyContent: "space-between", opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease 0.2s" }}>
        <Link to="/work" style={{ color: "rgba(240,237,232,0.35)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace", cursor: "pointer", transition: "color 0.2s", textDecoration: "none", display: "inline-block" }} onMouseEnter={(e) => e.currentTarget.style.color = "#00C4B4"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(240,237,232,0.35)"}>← Work</Link>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "rgba(240,237,232,0.25)", fontFamily: "'DM Mono', monospace" }}>{category}</span>
          <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "rgba(240,237,232,0.25)", fontFamily: "'DM Mono', monospace" }}>{year}</span>
          {award && <span style={{ fontSize: "8px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#FF5C1A", border: "0.5px solid #FF5C1A", padding: "3px 10px", fontFamily: "'DM Mono', monospace" }}>{award}</span>}
        </div>
      </div>
    </div>
  );
}

function Hero({ loaded, accentColor, title, summary }) {
  return (
    <div style={{ padding: "0 48px", marginBottom: "100px", opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s" }}>
      <div style={{ maxWidth: "900px" }}>
        <div style={{ width: loaded ? "60px" : "0px", height: "2px", background: accentColor, marginBottom: "40px", transition: "width 0.8s ease 0.5s" }} />
        <h1 style={{ fontSize: "clamp(28px, 5.5vw, 76px)", fontWeight: "400", lineHeight: 1.05, letterSpacing: "-0.03em", fontFamily: FONTS.display, margin: "0 0 32px", color: "#F0EDE8" }}>{title}</h1>
        <p style={{ fontSize: "clamp(15px, 1.6vw, 20px)", color: "rgba(240,237,232,0.5)", lineHeight: 1.7, maxWidth: "600px", fontFamily: FONTS.body }}>{summary}</p>
      </div>
    </div>
  );
}

function ContextStrip({ loaded, items }) {
  return (
    <div style={{ padding: "0 48px", marginBottom: "100px", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.45s" }}>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${items.length}, 1fr)`, gap: "1px", background: "rgba(240,237,232,0.06)", maxWidth: "980px" }}>
        {items.map((item) => (
          <div key={item.label} style={{ background: "#0D0D0D", padding: "28px 32px" }}>
            <p style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,237,232,0.25)", fontFamily: "'DM Mono', monospace", marginBottom: "8px" }}>{item.label}</p>
            <p style={{ fontSize: "14px", color: "rgba(240,237,232,0.7)", fontFamily: "'DM Mono', monospace" }}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Narrative({ loaded, labels, blocks }) {
  return (
    <div style={{ padding: "0 48px", marginBottom: "100px", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.5s" }}>
      <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "80px", maxWidth: "980px" }}>
        <div>
          <div style={{ position: "sticky", top: "120px", display: "flex", flexDirection: "column", gap: "168px" }}>
            {labels.map((label) => <span key={label} style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,237,232,0.2)", fontFamily: "'DM Mono', monospace", display: "block" }}>{label}</span>)}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
          {blocks.map((block, i) => (
            <div key={i} style={{ position: "relative", paddingLeft: block.accent ? "24px" : "0" }}>
              {block.accent && <div style={{ position: "absolute", left: 0, top: "4px", width: "2px", height: "calc(100% - 4px)", background: block.accent }} />}
              <p style={{ fontSize: "clamp(15px, 1.5vw, 18px)", color: block.accent ? "rgba(240,237,232,0.75)" : "rgba(240,237,232,0.45)", lineHeight: 1.85, fontFamily: FONTS.body }}>{block.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RoleGrid({ loaded, accentColor, items }) {
  return (
    <div style={{ padding: "0 48px", marginBottom: "100px", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.6s" }}>
      <div style={{ maxWidth: "980px" }}>
        <div style={{ borderTop: "0.5px solid rgba(240,237,232,0.1)", paddingTop: "32px", marginBottom: "40px" }}>
          <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: accentColor, fontFamily: "'DM Mono', monospace" }}>My role</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "rgba(240,237,232,0.06)" }}>
          {items.map((item, i) => <RoleBlock key={i} item={item} accentColor={accentColor} />)}
        </div>
      </div>
    </div>
  );
}

function RoleBlock({ item, accentColor }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ background: hovered ? "#1A1A1A" : "#0D0D0D", padding: "36px 32px", transition: "background 0.25s ease", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: hovered ? "100%" : "0%", height: "1px", background: `linear-gradient(to right, ${accentColor}, transparent)`, transition: "width 0.4s ease" }} />
      <p style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: hovered ? accentColor : "rgba(240,237,232,0.3)", fontFamily: "'DM Mono', monospace", marginBottom: "16px", transition: "color 0.25s" }}>{item.label}</p>
      <p style={{ fontSize: "13px", color: "rgba(240,237,232,0.45)", lineHeight: 1.75, fontFamily: "'DM Mono', monospace" }}>{item.detail}</p>
    </div>
  );
}

function ResultsGrid({ loaded, results, accentColor }) {
  return (
    <div style={{ padding: "0 48px", marginBottom: "100px", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.7s" }}>
      <div style={{ maxWidth: "980px" }}>
        <div style={{ borderTop: "0.5px solid rgba(240,237,232,0.1)", paddingTop: "32px", marginBottom: "40px" }}>
          <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: accentColor, fontFamily: "'DM Mono', monospace" }}>Results</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1px", background: "rgba(240,237,232,0.06)" }}>
          {results.map((r, i) => {
            const [hovered, setHovered] = useState(false);
            const color = r.highlight ? "#00C4B4" : accentColor;
            return (
              <div key={i} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ background: hovered ? "#1A1A1A" : "#0D0D0D", padding: "36px 32px", transition: "background 0.25s ease", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: hovered ? "100%" : "0%", height: "1px", background: `linear-gradient(to right, ${color}, transparent)`, transition: "width 0.4s ease" }} />
                <p style={{ fontSize: "clamp(22px, 3vw, 38px)", fontWeight: "500", letterSpacing: "-0.03em", color: hovered ? color : "#F0EDE8", fontFamily: FONTS.display, margin: "0 0 10px", transition: "color 0.25s" }}>{r.stat}</p>
                <p style={{ fontSize: "11px", color: "rgba(240,237,232,0.35)", fontFamily: "'DM Mono', monospace", lineHeight: 1.6, letterSpacing: "0.02em" }}>{r.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Reflection({ loaded, accentColor, quote }) {
  return (
    <div style={{ padding: "0 48px", marginBottom: "100px", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.75s" }}>
      <div style={{ maxWidth: "980px" }}>
        <div style={{ borderTop: "0.5px solid rgba(240,237,232,0.1)", paddingTop: "32px", marginBottom: "40px" }}>
          <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,237,232,0.3)", fontFamily: "'DM Mono', monospace" }}>On reflection</span>
        </div>
        <blockquote style={{ fontSize: "clamp(16px, 2vw, 24px)", fontWeight: "400", lineHeight: 1.55, letterSpacing: "-0.015em", color: "rgba(240,237,232,0.6)", fontFamily: "'DM Mono', monospace", margin: 0, maxWidth: "720px", borderLeft: `2px solid ${accentColor}`, paddingLeft: "32px" }}>{quote}</blockquote>
      </div>
    </div>
  );
}

function BackButton({ loaded }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ padding: "0 48px", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.85s" }}>
      <div style={{ maxWidth: "980px", borderTop: "0.5px solid rgba(240,237,232,0.08)", paddingTop: "48px" }}>
        <button onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
          <span style={{ fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: "400", letterSpacing: "-0.02em", color: hovered ? "#00C4B4" : "rgba(240,237,232,0.5)", fontFamily: FONTS.display, transition: "color 0.25s" }}>← Back to all work</span>
        </button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ padding: "32px 48px", borderTop: "0.5px solid rgba(240,237,232,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 1 }}>
      <span style={{ fontSize: "11px", color: "rgba(240,237,232,0.2)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em" }}>Trisha Kuek · {new Date().getFullYear()}</span>
      <div style={{ display: "flex", gap: "32px" }}>
        {[["Email", "mailto:trishakuek@gmail.com"], ["LinkedIn", "https://linkedin.com/in/trishakuek"]].map(([label, href]) => (
          <a key={label} href={href} {...(label === "LinkedIn" ? { target: "_blank", rel: "noopener noreferrer" } : {})} style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,237,232,0.25)", textDecoration: "none", fontFamily: "'DM Mono', monospace", transition: "color 0.2s" }} onMouseEnter={(e) => e.target.style.color = "#00C4B4"} onMouseLeave={(e) => e.target.style.color = "rgba(240,237,232,0.25)"}>{label}</a>
        ))}
      </div>
    </footer>
  );
}
