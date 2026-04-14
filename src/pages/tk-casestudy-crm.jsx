import { useState, useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';
import { FONTS, COLORS, FONT_IMPORT } from '../theme.js';

const RESULTS = [
  { stat: "+17%", label: "Email open rates post-rebuild" },
  { stat: "3x", label: "CRM output volume — same resource" },
  { stat: "0", label: "Product features required to ship the loyalty mechanic" },
  { stat: "Live", label: "Architecture still running post-departure" },
  { stat: "1PD", label: "CNY activation drove redemption above plan — zero new data acquired" },
];


const NAV_PATH = { Work: "/work", About: "/about", Contact: "/contact" };
export default function CaseStudyCRM() {
  const [loaded, setLoaded] = useState(false);
  const [activeNav, setActiveNav] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ background: "#0D0D0D", minHeight: "100vh", fontFamily: FONTS.body, color: "#F0EDE8", overflowX: "hidden", position: "relative" }}>

      <div style={{ position: "fixed", inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`, pointerEvents: "none", zIndex: 0, opacity: 0.6 }} />
      <div style={{ position: "fixed", bottom: 0, right: 0, width: "45vw", height: "45vw", background: "radial-gradient(ellipse at bottom right, rgba(0,196,180,0.05) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

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

        <div style={{ padding: "0 48px", marginBottom: "64px" }}>
          <div style={{ borderTop: "0.5px solid rgba(240,237,232,0.1)", paddingTop: "32px", display: "flex", alignItems: "center", justifyContent: "space-between", opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease 0.2s" }}>
            <Link to="/work" style={{ color: "rgba(240,237,232,0.35)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace", cursor: "pointer", transition: "color 0.2s", textDecoration: "none", display: "inline-block" }} onMouseEnter={(e) => e.currentTarget.style.color = "#00C4B4"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(240,237,232,0.35)"}>← Work</Link>
            <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
              <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "rgba(240,237,232,0.25)", fontFamily: "'DM Mono', monospace" }}>CRM & Lifecycle</span>
              <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "rgba(240,237,232,0.25)", fontFamily: "'DM Mono', monospace" }}>2019 — 2021</span>
            </div>
          </div>
        </div>

        <div style={{ padding: "0 48px", marginBottom: "100px", opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s" }}>
          <div style={{ maxWidth: "900px" }}>
            <div style={{ width: loaded ? "60px" : "0px", height: "2px", background: "#00C4B4", marginBottom: "40px", transition: "width 0.8s ease 0.5s" }} />
            <h1 style={{ fontSize: "clamp(28px, 5.5vw, 76px)", fontWeight: "400", lineHeight: 1.05, letterSpacing: "-0.03em", fontFamily: FONTS.display, margin: "0 0 32px", color: "#F0EDE8" }}>
              CRM Architecture<br /><span style={{ color: "#00C4B4" }}>— Braze</span>.
            </h1>
            <p style={{ fontSize: "clamp(15px, 1.6vw, 20px)", color: "rgba(240,237,232,0.5)", lineHeight: 1.7, maxWidth: "600px", fontFamily: FONTS.body }}>
              How Deliveroo's CRM went from zero to a fully architected lifecycle system — and how a loyalty mechanic shipped months before the product team's roadmap feature.
            </p>
          </div>
        </div>

        <div style={{ padding: "0 48px", marginBottom: "100px", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.5s" }}>
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "80px", maxWidth: "980px" }}>
            <div>
              <div style={{ position: "sticky", top: "120px", display: "flex", flexDirection: "column", gap: "180px" }}>
                {["The starting point", "The build", "The workaround", "The compounding"].map((label) => (
                  <span key={label} style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,237,232,0.2)", fontFamily: "'DM Mono', monospace", display: "block" }}>{label}</span>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
              <NarrativeBlock accent="#00C4B4">
                When I joined Deliveroo Singapore, there was no CRM architecture. There were email lists and occasional sends — no lifecycle logic, no segmentation, no testing framework. The platform was Braze. The brief was blank. Build the system.
              </NarrativeBlock>
              <NarrativeBlock>
                I started with the consumer lifecycle — mapping every meaningful moment from first order to lapsed user, identifying where engagement either deepened or dropped off. From there: segmented journey design, behaviour triggers, a modular content system that could be A/B tested from day one. The system was built to learn — every send informed the next. Open rates moved +17%. Output scaled 3x without proportional resource increase. The architecture was still running after I left.
              </NarrativeBlock>
              <NarrativeBlock accent="#FF5C1A">
                The loyalty punch card mechanic is the part I'm most proud of. Deliveroo's product team had a repeat purchase retention feature on their roadmap — but it was months out. We needed it now. I engineered the full mechanic entirely within Braze — journey logic, behaviour triggers, progress communications, automated reward fulfilment. Not a feature. A workflow. It shipped months before the product team's version, closing a gap that would otherwise have cost a full planning cycle of repeat purchase opportunity.
              </NarrativeBlock>
              <NarrativeBlock>
                The same first-party data logic applied to a CNY surprise-and-delight activation — using existing purchase behaviour to personalise at scale without acquiring a single new data point. Voucher redemption above plan. Organic social sharing at zero media cost. The system compounded continuously because it was built to.
              </NarrativeBlock>
            </div>
          </div>
        </div>

        <div style={{ padding: "0 48px", marginBottom: "100px", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.6s" }}>
          <div style={{ maxWidth: "980px" }}>
            <div style={{ borderTop: "0.5px solid rgba(240,237,232,0.1)", paddingTop: "32px", marginBottom: "40px" }}>
              <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#00C4B4", fontFamily: "'DM Mono', monospace" }}>My role</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "rgba(240,237,232,0.06)" }}>
              {[
                { label: "Architecture design", detail: "Mapped the full consumer lifecycle from scratch. Designed segmented journeys, behaviour triggers, and a modular content system with A/B testing embedded from day one." },
                { label: "Platform build", detail: "Built everything in Braze — no dev dependency, no product team involvement. If the platform supported it, I could build it. And I did." },
                { label: "Loyalty mechanic", detail: "Engineered a full punch card loyalty mechanic entirely within CRM infrastructure. Journey logic, progress comms, automated reward fulfilment — shipped months before the product roadmap feature." },
                { label: "1PD activation", detail: "Applied first-party data logic to a CNY activation — personalisation at scale using existing purchase behaviour, zero new data acquisition. Above-plan redemption, zero media cost." },
              ].map((item, i) => <RoleBlock key={i} item={item} />)}
            </div>
          </div>
        </div>

        <div style={{ padding: "0 48px", marginBottom: "100px", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.7s" }}>
          <div style={{ maxWidth: "980px" }}>
            <div style={{ borderTop: "0.5px solid rgba(240,237,232,0.1)", paddingTop: "32px", marginBottom: "40px" }}>
              <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF5C1A", fontFamily: "'DM Mono', monospace" }}>Results</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1px", background: "rgba(240,237,232,0.06)" }}>
              {RESULTS.map((r, i) => <ResultCard key={i} result={r} highlight={i === 2} />)}
            </div>
          </div>
        </div>

        <div style={{ padding: "0 48px", marginBottom: "100px", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.75s" }}>
          <div style={{ maxWidth: "980px" }}>
            <div style={{ borderTop: "0.5px solid rgba(240,237,232,0.1)", paddingTop: "32px", marginBottom: "40px" }}>
              <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,237,232,0.3)", fontFamily: "'DM Mono', monospace" }}>On reflection</span>
            </div>
            <blockquote style={{ fontSize: "clamp(16px, 2vw, 24px)", fontWeight: "400", lineHeight: 1.55, letterSpacing: "-0.015em", color: "rgba(240,237,232,0.6)", fontFamily: FONTS.body, margin: 0, maxWidth: "720px", borderLeft: "2px solid #00C4B4", paddingLeft: "32px" }}>
              The product team had a roadmap. I had a platform and a problem to solve. Waiting wasn't an option — building inside constraints is just building. The gap between "we need a feature for that" and "we can build that now" is mostly a mindset problem.
            </blockquote>
          </div>
        </div>

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
      <div style={{ position: "absolute", top: 0, left: 0, width: hovered ? "100%" : "0%", height: "1px", background: "linear-gradient(to right, #00C4B4, transparent)", transition: "width 0.4s ease" }} />
      <p style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: hovered ? "#00C4B4" : "rgba(240,237,232,0.3)", fontFamily: "'DM Mono', monospace", marginBottom: "16px", transition: "color 0.25s" }}>{item.label}</p>
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
