// Shared case-study components for TK Portfolio.
// Same visual language as the original five case studies: Fraunces display,
// Inter body, DM Mono accents, 0.5px hairlines, hover-reveal accent lines.
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FONTS, FONT_IMPORT } from "./theme.js";

const NAV_PATH = { Work: "/work", About: "/about", Contact: "/contact" };

function useLoaded() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);
  return loaded;
}

export function Shell({ glow = "top right", glowColor = "rgba(0,196,180,0.05)", children }) {
  const loaded = useLoaded();
  const [activeNav, setActiveNav] = useState(null);
  return (
    <div style={{ background: "#0D0D0D", minHeight: "100vh", fontFamily: FONTS.body, color: "#F0EDE8", overflowX: "hidden", position: "relative" }}>
      <div style={{ position: "fixed", inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`, pointerEvents: "none", zIndex: 0, opacity: 0.6 }} />
      <div style={{ position: "fixed", ...(glow.includes("top") ? { top: 0 } : { bottom: 0 }), ...(glow.includes("right") ? { right: 0 } : { left: 0 }), width: "45vw", height: "45vw", background: `radial-gradient(ellipse at ${glow}, ${glowColor} 0%, transparent 70%)`, pointerEvents: "none", zIndex: 0 }} />
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "24px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "0.5px solid rgba(240,237,232,0.08)", backdropFilter: "blur(12px)", background: "rgba(13,13,13,0.85)", opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(-8px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
        <Link to="/" style={{ textDecoration: "none" }}><div style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "0.12em", color: "#F0EDE8", fontFamily: FONTS.mono, cursor: "pointer" }}>TK<span style={{ color: "#00C4B4", marginLeft: "2px" }}>.</span></div></Link>
        <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          {["Work", "About", "Contact"].map((item) => (
            <NavLink key={item} to={NAV_PATH[item]} style={({ isActive }) => ({ color: isActive ? "#F0EDE8" : activeNav === item ? "#00C4B4" : "rgba(240,237,232,0.5)", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", cursor: "pointer", transition: "color 0.2s ease", padding: "4px 0", fontFamily: FONTS.mono, textDecoration: "none", display: "inline-block" })} onMouseEnter={() => setActiveNav(item)} onMouseLeave={() => setActiveNav(null)}>{item}</NavLink>
          ))}
          <a href="mailto:trishakuek@gmail.com" style={{ background: "#00C4B4", color: "#0D0D0D", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", padding: "10px 20px", textDecoration: "none", fontWeight: "700", fontFamily: FONTS.mono, transition: "background 0.2s ease" }} onMouseEnter={(e) => e.target.style.background = "#FF5C1A"} onMouseLeave={(e) => e.target.style.background = "#00C4B4"}>Get in touch</a>
        </div>
      </nav>
      <main style={{ paddingTop: "140px", paddingBottom: "120px", position: "relative", zIndex: 1, opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.2s" }}>
        {children}
        <div style={{ padding: "0 48px" }}>
          <div style={{ maxWidth: "980px", borderTop: "0.5px solid rgba(240,237,232,0.08)", paddingTop: "48px" }}>
            <BackToWork />
          </div>
        </div>
      </main>
      <footer style={{ padding: "32px 48px", borderTop: "0.5px solid rgba(240,237,232,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 1 }}>
        <span style={{ fontSize: "11px", color: "rgba(240,237,232,0.2)", fontFamily: FONTS.mono, letterSpacing: "0.1em" }}>Trisha Kuek · {new Date().getFullYear()}</span>
        <div style={{ display: "flex", gap: "32px" }}>
          {[["Email", "mailto:trishakuek@gmail.com"], ["LinkedIn", "https://linkedin.com/in/trishakuek"]].map(([label, href]) => (
            <a key={label} href={href} {...(label === "LinkedIn" ? { target: "_blank", rel: "noopener noreferrer" } : {})} style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,237,232,0.25)", textDecoration: "none", fontFamily: FONTS.mono, transition: "color 0.2s" }} onMouseEnter={(e) => e.target.style.color = "#00C4B4"} onMouseLeave={(e) => e.target.style.color = "rgba(240,237,232,0.25)"}>{label}</a>
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

export function BackBar({ category, year, award }) {
  return (
    <div style={{ padding: "0 48px", marginBottom: "64px" }}>
      <div style={{ borderTop: "0.5px solid rgba(240,237,232,0.1)", paddingTop: "32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Link to="/work" style={{ color: "rgba(240,237,232,0.35)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: FONTS.mono, cursor: "pointer", transition: "color 0.2s", textDecoration: "none", display: "inline-block" }} onMouseEnter={(e) => e.currentTarget.style.color = "#00C4B4"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(240,237,232,0.35)"}>← Work</Link>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "rgba(240,237,232,0.25)", fontFamily: FONTS.mono }}>{category}</span>
          <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "rgba(240,237,232,0.25)", fontFamily: FONTS.mono }}>{year}</span>
          {award && <span style={{ fontSize: "8px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#FF5C1A", border: "0.5px solid #FF5C1A", padding: "3px 10px", fontFamily: FONTS.mono }}>{award}</span>}
        </div>
      </div>
    </div>
  );
}

export function Hero({ accent = "#00C4B4", title, summary }) {
  return (
    <div style={{ padding: "0 48px", marginBottom: "80px" }}>
      <div style={{ maxWidth: "900px" }}>
        <div style={{ width: "60px", height: "2px", background: accent, marginBottom: "40px" }} />
        <h1 style={{ fontSize: "clamp(28px, 5.5vw, 76px)", fontWeight: "400", lineHeight: 1.05, letterSpacing: "-0.03em", fontFamily: FONTS.display, margin: "0 0 32px", color: "#F0EDE8" }}>{title}</h1>
        <p style={{ fontSize: "clamp(15px, 1.6vw, 20px)", color: "rgba(240,237,232,0.5)", lineHeight: 1.7, maxWidth: "600px", fontFamily: FONTS.body }}>{summary}</p>
      </div>
    </div>
  );
}

export function VideoBlock({ id, title, caption }) {
  return (
    <div style={{ padding: "0 48px", marginBottom: "100px" }}>
      <div style={{ maxWidth: "1100px" }}>
        <div style={{ position: "relative", width: "100%", paddingTop: "56.25%", background: "#111", overflow: "hidden" }}>
          <iframe src={`https://www.youtube.com/embed/${id}`} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} />
        </div>
        {caption && <p style={{ fontSize: "10px", letterSpacing: "0.12em", color: "rgba(240,237,232,0.2)", fontFamily: FONTS.mono, marginTop: "12px" }}>{caption}</p>}
      </div>
    </div>
  );
}

export function ImageBlock({ src, alt, caption, maxWidth = "1100px", accent = "#00C4B4" }) {
  return (
    <div style={{ padding: "0 48px", marginBottom: "100px" }}>
      <div style={{ maxWidth }}>
        <div style={{ border: "0.5px solid rgba(240,237,232,0.1)", overflow: "hidden", background: "#0A0A0A" }}>
          <img src={src} alt={alt} loading="lazy" style={{ display: "block", width: "100%", height: "auto" }} />
        </div>
        {caption && <p style={{ fontSize: "10px", letterSpacing: "0.12em", color: "rgba(240,237,232,0.25)", fontFamily: FONTS.mono, marginTop: "12px", borderLeft: `2px solid ${accent}`, paddingLeft: "12px" }}>{caption}</p>}
      </div>
    </div>
  );
}

export function SectionLabel({ children, accent = "#00C4B4" }) {
  return (
    <div style={{ borderTop: "0.5px solid rgba(240,237,232,0.1)", paddingTop: "32px", marginBottom: "40px" }}>
      <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: accent, fontFamily: FONTS.mono }}>{children}</span>
    </div>
  );
}

export function Narrative({ labels, blocks }) {
  return (
    <div style={{ padding: "0 48px", marginBottom: "100px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "80px", maxWidth: "980px" }}>
        <div>
          <div style={{ position: "sticky", top: "120px", display: "flex", flexDirection: "column", gap: "168px" }}>
            {labels.map((label) => <span key={label} style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,237,232,0.2)", fontFamily: FONTS.mono, display: "block" }}>{label}</span>)}
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

export function RoleGrid({ accent = "#00C4B4", items, label = "My role" }) {
  return (
    <div style={{ padding: "0 48px", marginBottom: "100px" }}>
      <div style={{ maxWidth: "980px" }}>
        <SectionLabel accent={accent}>{label}</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "rgba(240,237,232,0.06)" }}>
          {items.map((item, i) => <RoleBlock key={i} item={item} accent={accent} />)}
        </div>
      </div>
    </div>
  );
}

function RoleBlock({ item, accent }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ background: hovered ? "#1A1A1A" : "#0D0D0D", padding: "36px 32px", transition: "background 0.25s ease", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: hovered ? "100%" : "0%", height: "1px", background: `linear-gradient(to right, ${accent}, transparent)`, transition: "width 0.4s ease" }} />
      <p style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: hovered ? accent : "rgba(240,237,232,0.3)", fontFamily: FONTS.mono, marginBottom: "16px", transition: "color 0.25s" }}>{item.label}</p>
      <p style={{ fontSize: "13px", color: "rgba(240,237,232,0.45)", lineHeight: 1.75, fontFamily: FONTS.mono }}>{item.detail}</p>
    </div>
  );
}

export function ResultsGrid({ accent = "#FF5C1A", results, label = "Results" }) {
  return (
    <div style={{ padding: "0 48px", marginBottom: "100px" }}>
      <div style={{ maxWidth: "980px" }}>
        <SectionLabel accent={accent}>{label}</SectionLabel>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1px", background: "rgba(240,237,232,0.06)" }}>
          {results.map((r, i) => <ResultCard key={i} result={r} />)}
        </div>
      </div>
    </div>
  );
}

function ResultCard({ result }) {
  const [hovered, setHovered] = useState(false);
  const color = result.highlight ? "#FF5C1A" : "#00C4B4";
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ background: hovered ? "#1A1A1A" : "#0D0D0D", padding: "36px 32px", transition: "background 0.25s ease", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: hovered ? "100%" : "0%", height: "1px", background: `linear-gradient(to right, ${color}, transparent)`, transition: "width 0.4s ease" }} />
      <p style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: "500", letterSpacing: "-0.03em", color: hovered ? color : "#F0EDE8", fontFamily: FONTS.display, margin: "0 0 10px", transition: "color 0.25s" }}>{result.stat}</p>
      <p style={{ fontSize: "11px", color: "rgba(240,237,232,0.35)", fontFamily: FONTS.mono, lineHeight: 1.6, letterSpacing: "0.02em" }}>{result.label}</p>
    </div>
  );
}

export function Reflection({ accent = "#00C4B4", quote }) {
  return (
    <div style={{ padding: "0 48px", marginBottom: "100px" }}>
      <div style={{ maxWidth: "980px" }}>
        <SectionLabel accent="rgba(240,237,232,0.3)">On reflection</SectionLabel>
        <blockquote style={{ fontSize: "clamp(16px, 2vw, 24px)", fontWeight: "400", lineHeight: 1.55, letterSpacing: "-0.015em", color: "rgba(240,237,232,0.6)", fontFamily: FONTS.body, margin: 0, maxWidth: "720px", borderLeft: `2px solid ${accent}`, paddingLeft: "32px" }}>{quote}</blockquote>
      </div>
    </div>
  );
}

export function LinkOut({ href, label, accent = "#00C4B4" }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ padding: "0 48px", marginBottom: "100px" }}>
      <a href={href} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ display: "inline-block", marginLeft: 0, border: `1px solid ${hovered ? "#FF5C1A" : accent}`, color: hovered ? "#FF5C1A" : accent, background: "transparent", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", padding: "14px 28px", textDecoration: "none", fontFamily: FONTS.mono, transition: "all 0.2s ease" }}>{label} →</a>
    </div>
  );
}

function BackToWork() {
  const [hovered, setHovered] = useState(false);
  return (
    <Link to="/work" style={{ textDecoration: "none" }}>
      <span onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: "400", letterSpacing: "-0.02em", color: hovered ? "#00C4B4" : "rgba(240,237,232,0.5)", fontFamily: FONTS.display, transition: "color 0.25s", cursor: "pointer" }}>← Back to all work</span>
    </Link>
  );
}
