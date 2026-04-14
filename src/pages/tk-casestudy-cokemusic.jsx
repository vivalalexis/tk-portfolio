import { useState, useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';
import { FONTS, COLORS, FONT_IMPORT } from '../theme.js';

const RESULTS = [
  { stat: "4M+", label: "First-party data captures across 3 cycles" },
  { stat: "2x", label: "Unique users vs prior year" },
  { stat: "20%", label: "Agency cost savings in Year 3" },
  { stat: "40%", label: "Lower cost per experience winner — K-POP concert IP negotiation" },
  { stat: "3", label: "Cycles — each compounding on the last" },
  { stat: "80%", label: "ASP campaign execution protected through K-Wave crisis" },
];


const NAV_PATH = { Work: "/work", About: "/about", Contact: "/contact" };
export default function CaseStudyCokeMusic() {
  const [loaded, setLoaded] = useState(false);
  const [activeNav, setActiveNav] = useState(null);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ background: "#0D0D0D", minHeight: "100vh", fontFamily: FONTS.body, color: "#F0EDE8", overflowX: "hidden", position: "relative" }}>

      <div style={{ position: "fixed", inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`, pointerEvents: "none", zIndex: 0, opacity: 0.6 }} />
      <div style={{ position: "fixed", top: 0, left: 0, width: "50vw", height: "50vw", background: "radial-gradient(ellipse at top left, rgba(255,92,26,0.04) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "24px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "0.5px solid rgba(240,237,232,0.08)", backdropFilter: "blur(12px)", background: "rgba(13,13,13,0.85)", opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(-8px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}>
        <Link to="/" style={{ textDecoration: "none" }}><div style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "0.12em", color: "#F0EDE8", fontFamily: "'DM Mono', monospace", cursor: "pointer" }}>TK<span style={{ color: "#00C4B4", marginLeft: "2px" }}>.</span></div></Link>
        <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          {["Work", "About", "Contact"].map((item) => (
            <NavLink key={item} to={NAV_PATH[item]} style={({ isActive }) => ({ color: isActive ? "#F0EDE8" : activeNav === item ? "#00C4B4" : "rgba(240,237,232,0.5)", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", cursor: "pointer", transition: "color 0.2s ease", padding: "4px 0", fontFamily: "'DM Mono', monospace", textDecoration: "none", display: "inline-block" })} onMouseEnter={() => setActiveNav(item)} onMouseLeave={() => setActiveNav(null)}>{item}</NavLink>
          ))}
          <a href="mailto:trishakuek@gmail.com" style={{ background: "#00C4B4", color: "#0D0D0D", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", padding: "10px 20px", textDecoration: "none", fontWeight: "700", fontFamily: "'DM Mono', monospace", transition: "background 0.2s ease" }} onMouseEnter={(e) => e.target.style.background = "#FF5C1A"} onMouseLeave={(e) => e.target.style.background = "#00C4B4"}>Get in touch</a>
        </div>
      </nav>

      <main style={{ paddingTop: "140px", paddingBottom: "120px", position: "relative", zIndex: 1 }}>

        {/* BACK + META */}
        <div style={{ padding: "0 48px", marginBottom: "64px" }}>
          <div style={{ borderTop: "0.5px solid rgba(240,237,232,0.1)", paddingTop: "32px", display: "flex", alignItems: "center", justifyContent: "space-between", opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease 0.2s" }}>
            <Link to="/work" style={{ color: "rgba(240,237,232,0.35)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace", cursor: "pointer", transition: "color 0.2s", textDecoration: "none", display: "inline-block" }} onMouseEnter={(e) => e.currentTarget.style.color = "#00C4B4"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(240,237,232,0.35)"}>← Work</Link>
            <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
              <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "rgba(240,237,232,0.25)", fontFamily: "'DM Mono', monospace" }}>Integrated Marketing</span>
              <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "rgba(240,237,232,0.25)", fontFamily: "'DM Mono', monospace" }}>2021 — 2024</span>
            </div>
          </div>
        </div>

        {/* HERO */}
        <div style={{ padding: "0 48px", marginBottom: "80px", opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s" }}>
          <div style={{ maxWidth: "900px" }}>
            <div style={{ width: loaded ? "60px" : "0px", height: "2px", background: "#FF5C1A", marginBottom: "40px", transition: "width 0.8s ease 0.5s" }} />
            <h1 style={{ fontSize: "clamp(28px, 5.5vw, 76px)", fontWeight: "400", lineHeight: 1.05, letterSpacing: "-0.03em", fontFamily: FONTS.display, margin: "0 0 32px", color: "#F0EDE8" }}>
              Coke Music Promo<br /><span style={{ color: "#FF5C1A" }}>— 3 Cycles</span>.
            </h1>
            <p style={{ fontSize: "clamp(15px, 1.6vw, 20px)", color: "rgba(240,237,232,0.5)", lineHeight: 1.7, maxWidth: "600px", fontFamily: FONTS.body }}>
              A regional IMC programme built to compound — more efficient, more effective, and more ambitious with each cycle. 4M+ first-party data captures. A crisis navigated mid-run.
            </p>
          </div>
        </div>

        {/* VIDEO */}
        <div style={{ padding: "0 48px", marginBottom: "100px", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.45s" }}>
          <div style={{ maxWidth: "1100px" }}>
            <div style={{ position: "relative", width: "100%", paddingTop: "56.25%", background: "#111", overflow: "hidden" }}>
              <iframe
                src="https://www.youtube.com/embed/6oR9vJp5qSg"
                title="Coke Music Promo — Campaign Hype Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
              />
            </div>
            <p style={{ fontSize: "10px", letterSpacing: "0.12em", color: "rgba(240,237,232,0.2)", fontFamily: "'DM Mono', monospace", marginTop: "12px" }}>Campaign hype reel — Coke Music Promo, ASP 2021–2024</p>
          </div>
        </div>

        {/* NARRATIVE */}
        <div style={{ padding: "0 48px", marginBottom: "100px", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.5s" }}>
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "80px", maxWidth: "980px" }}>
            <div>
              <div style={{ position: "sticky", top: "120px", display: "flex", flexDirection: "column", gap: "160px" }}>
                {["The programme", "Year one", "The crisis", "Years two and three"].map((label) => (
                  <span key={label} style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,237,232,0.2)", fontFamily: "'DM Mono', monospace", display: "block" }}>{label}</span>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
              <NarrativeBlock accent="#FF5C1A">The Coke Music Promo ran across Asia South Pacific for three consecutive cycles — a K-POP-anchored promotional platform built around concert experience prizes, first-party data capture, and in-market localisation. The challenge wasn't the first cycle. It was building a toolkit that markets could actually use — localising efficiently without restarting from scratch each time.</NarrativeBlock>
              <NarrativeBlock>Year one established the architecture: regional toolkit, market playbooks, IP partnerships. I negotiated the K-POP concert IP and SBS Inkigayo partnership at 40% lower cost per experience winner than the initial ask. First-party data capture was built in from the start — not bolted on. The cycle closed with 4M+ data captures and 2x unique users versus prior year.</NarrativeBlock>
              <NarrativeBlock accent="#00C4B4">Mid-programme, a global reputational crisis hit — 85% negative sentiment on the global launch of a related K-Wave property. The default position from global was a blanket mandate to pull all ASP campaign execution. I renegotiated it. Built the evidence case for why our market context was different, why the creative wasn't implicated, and what we'd lose commercially if we stopped. Protected 80% of planned ASP campaign execution.</NarrativeBlock>
              <NarrativeBlock>Years two and three applied a parallel-workstream briefing model refined across each cycle — the same approach that cut production costs on Wilkins applied here. Agency cost savings of 20% in Year 3. The programme compounded: each cycle's learnings built into the next brief, each data set informing the next audience strategy. By Year 3, the toolkit practically ran itself.</NarrativeBlock>
            </div>
          </div>
        </div>

        {/* MY ROLE */}
        <div style={{ padding: "0 48px", marginBottom: "100px", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.6s" }}>
          <div style={{ maxWidth: "980px" }}>
            <div style={{ borderTop: "0.5px solid rgba(240,237,232,0.1)", paddingTop: "32px", marginBottom: "40px" }}>
              <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#00C4B4", fontFamily: "'DM Mono', monospace" }}>My role</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "rgba(240,237,232,0.06)" }}>
              {[
                { label: "Programme architecture", detail: "Built the regional IMC toolkit — market playbooks, asset frameworks, and localisation guidelines that enabled markets to execute at speed without restarting from scratch each cycle." },
                { label: "IP negotiation", detail: "Negotiated K-POP concert IP and SBS Inkigayo partnership at 40% lower cost per experience winner than the initial ask. Deal structure protected budget for in-market execution." },
                { label: "Crisis management", detail: "Navigated a global K-Wave reputational crisis mid-run — 85% negative sentiment on global launch. Renegotiated a blanket pull mandate and protected 80% of ASP campaign execution." },
                { label: "Compounding efficiency", detail: "Applied parallel-workstream briefing model across Years 2 and 3 — delivering 20% agency cost savings in Year 3 while increasing output quality and market relevance." },
              ].map((item, i) => <RoleBlock key={i} item={item} />)}
            </div>
          </div>
        </div>

        {/* RESULTS */}
        <div style={{ padding: "0 48px", marginBottom: "100px", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.7s" }}>
          <div style={{ maxWidth: "980px" }}>
            <div style={{ borderTop: "0.5px solid rgba(240,237,232,0.1)", paddingTop: "32px", marginBottom: "40px" }}>
              <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF5C1A", fontFamily: "'DM Mono', monospace" }}>Results</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1px", background: "rgba(240,237,232,0.06)" }}>
              {RESULTS.map((r, i) => <ResultCard key={i} result={r} highlight={i === 5} />)}
            </div>
          </div>
        </div>

        {/* REFLECTION */}
        <div style={{ padding: "0 48px", marginBottom: "100px", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.75s" }}>
          <div style={{ maxWidth: "980px" }}>
            <div style={{ borderTop: "0.5px solid rgba(240,237,232,0.1)", paddingTop: "32px", marginBottom: "40px" }}>
              <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,237,232,0.3)", fontFamily: "'DM Mono', monospace" }}>On reflection</span>
            </div>
            <blockquote style={{ fontSize: "clamp(16px, 2vw, 24px)", fontWeight: "400", lineHeight: 1.55, letterSpacing: "-0.015em", color: "rgba(240,237,232,0.6)", fontFamily: FONTS.body, margin: 0, maxWidth: "720px", borderLeft: "2px solid #FF5C1A", paddingLeft: "32px" }}>
              The crisis was the test. Anyone can run a clean programme. What matters is what you do when the mandate changes overnight and the default answer is to stop. The answer isn't to stop. It's to build the case for why you shouldn't.
            </blockquote>
          </div>
        </div>

        {/* BACK */}
        <div style={{ padding: "0 48px", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.85s" }}>
          <div style={{ maxWidth: "980px", borderTop: "0.5px solid rgba(240,237,232,0.08)", paddingTop: "48px" }}>
            <BackToWork />
          </div>
        </div>

      </main>

      <footer style={{ padding: "32px 48px", borderTop: "0.5px solid rgba(240,237,232,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 1 }}>
        <span style={{ fontSize: "11px", color: "rgba(240,237,232,0.2)", fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em" }}>Trisha Kuek · {new Date().getFullYear()}</span>
        <div style={{ display: "flex", gap: "32px" }}>
          {[["Email", "mailto:trishakuek@gmail.com"], ["LinkedIn", "https://linkedin.com/in/trishakuek"]].map(([label, href]) => (
            <a key={label} href={href} {...(label === "LinkedIn" ? { target: "_blank", rel: "noopener noreferrer" } : {})} style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,237,232,0.25)", textDecoration: "none", fontFamily: "'DM Mono', monospace", transition: "color 0.2s" }} onMouseEnter={(e) => e.target.style.color = "#00C4B4"} onMouseLeave={(e) => e.target.style.color = "rgba(240,237,232,0.25)"}>{label}</a>
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

function NarrativeBlock({ children, accent }) {
  return (
    <div style={{ position: "relative", paddingLeft: accent ? "24px" : "0" }}>
      {accent && <div style={{ position: "absolute", left: 0, top: "4px", width: "2px", height: "calc(100% - 4px)", background: accent }} />}
      <p style={{ fontSize: "clamp(15px, 1.5vw, 18px)", color: accent ? "rgba(240,237,232,0.75)" : "rgba(240,237,232,0.45)", lineHeight: 1.85, fontFamily: FONTS.body }}>{children}</p>
    </div>
  );
}

function RoleBlock({ item }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ background: hovered ? "#1A1A1A" : "#0D0D0D", padding: "36px 32px", transition: "background 0.25s ease", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: hovered ? "100%" : "0%", height: "1px", background: "linear-gradient(to right, #FF5C1A, transparent)", transition: "width 0.4s ease" }} />
      <p style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: hovered ? "#FF5C1A" : "rgba(240,237,232,0.3)", fontFamily: "'DM Mono', monospace", marginBottom: "16px", transition: "color 0.25s" }}>{item.label}</p>
      <p style={{ fontSize: "13px", color: "rgba(240,237,232,0.45)", lineHeight: 1.75, fontFamily: "'DM Mono', monospace" }}>{item.detail}</p>
    </div>
  );
}

function ResultCard({ result, highlight }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ background: hovered ? "#1A1A1A" : "#0D0D0D", padding: "36px 32px", transition: "background 0.25s ease", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: hovered ? "100%" : "0%", height: "1px", background: `linear-gradient(to right, ${highlight ? "#FF5C1A" : "#00C4B4"}, transparent)`, transition: "width 0.4s ease" }} />
      <p style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: "500", letterSpacing: "-0.03em", color: hovered ? (highlight ? "#FF5C1A" : "#00C4B4") : "#F0EDE8", fontFamily: FONTS.display, margin: "0 0 10px", transition: "color 0.25s" }}>{result.stat}</p>
      <p style={{ fontSize: "11px", color: "rgba(240,237,232,0.35)", fontFamily: "'DM Mono', monospace", lineHeight: 1.6, letterSpacing: "0.02em" }}>{result.label}</p>
    </div>
  );
}

function BackToWork() {
  const [hovered, setHovered] = useState(false);
  return (
    <button onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
      <span style={{ fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: "400", letterSpacing: "-0.02em", color: hovered ? "#00C4B4" : "rgba(240,237,232,0.5)", fontFamily: FONTS.display, transition: "color 0.25s" }}>← Back to all work</span>
    </button>
  );
}
