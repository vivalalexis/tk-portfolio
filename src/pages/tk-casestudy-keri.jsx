import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from 'react-router-dom';

const RESULTS = [
  { stat: "+32%", label: "Keri value growth" },
  { stat: "+55%", label: "Keri Pulpy value growth" },
  { stat: "+5.5pp", label: "Category share gain" },
  { stat: "1 month", label: "Sampling fully dispersed — 3-month plan" },
  { stat: "#1", label: "Juice brand in New Zealand — first time in brand history" },
  { stat: "2×", label: "Global Networked Marketing Awards nominations" },
];


const NAV_PATH = { Work: "/work", About: "/about", Contact: "/contact" };
export default function CaseStudyKeri() {
  const [loaded, setLoaded] = useState(false);
  const [activeNav, setActiveNav] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const pct = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(isNaN(pct) ? 0 : pct);
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pct * videoRef.current.duration;
  };

  const handleEnded = () => setPlaying(false);

  return (
    <div style={{ background: "#0D0D0D", minHeight: "100vh", fontFamily: "'DM Mono', 'Courier New', monospace", color: "#F0EDE8", overflowX: "hidden", position: "relative" }}>

      <div style={{ position: "fixed", inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`, pointerEvents: "none", zIndex: 0, opacity: 0.6 }} />
      <div style={{ position: "fixed", bottom: 0, left: 0, width: "50vw", height: "50vw", background: "radial-gradient(ellipse at bottom left, rgba(255,92,26,0.05) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

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
              <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "rgba(240,237,232,0.25)", fontFamily: "'DM Mono', monospace" }}>Brand Strategy</span>
              <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "rgba(240,237,232,0.25)", fontFamily: "'DM Mono', monospace" }}>2024</span>
              <span style={{ fontSize: "8px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#FF5C1A", border: "0.5px solid #FF5C1A", padding: "3px 10px", fontFamily: "'DM Mono', monospace" }}>2× GNMA Nominated</span>
            </div>
          </div>
        </div>

        {/* HERO */}
        <div style={{ padding: "0 48px", marginBottom: "80px", opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(24px)", transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s" }}>
          <div style={{ maxWidth: "900px" }}>
            <div style={{ width: loaded ? "60px" : "0px", height: "2px", background: "#FF5C1A", marginBottom: "40px", transition: "width 0.8s ease 0.5s" }} />
            <h1 style={{ fontSize: "clamp(28px, 5.5vw, 76px)", fontWeight: "400", lineHeight: 1.05, letterSpacing: "-0.03em", fontFamily: "'DM Mono', monospace", margin: "0 0 32px", color: "#F0EDE8" }}>
              Keri<br /><span style={{ color: "#FF5C1A" }}>Pulp Friction</span>.
            </h1>
            <p style={{ fontSize: "clamp(15px, 1.6vw, 20px)", color: "rgba(240,237,232,0.5)", lineHeight: 1.7, maxWidth: "600px", fontFamily: "'DM Mono', monospace" }}>
              How a tribal argument about pulp turned Keri into New Zealand's #1 juice brand — for the first time in the brand's history.
            </p>
          </div>
        </div>

        {/* VIDEO PLAYER */}
        <div style={{ padding: "0 48px", marginBottom: "100px", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.45s" }}>
          <div style={{ maxWidth: "1100px" }}>
            <div style={{ position: "relative", background: "#111", overflow: "hidden" }}>
              <video
                ref={videoRef}
                src="/KERI_Pulp_Friction_301025b.mp4"
                muted
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleEnded}
                style={{ width: "100%", display: "block", maxHeight: "620px", objectFit: "cover" }}
              />

              {/* Play overlay — shows when paused */}
              {!playing && (
                <div
                  onClick={togglePlay}
                  style={{
                    position: "absolute", inset: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(13,13,13,0.45)", cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "rgba(13,13,13,0.3)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "rgba(13,13,13,0.45)"}
                >
                  <div style={{
                    width: "72px", height: "72px",
                    border: "1px solid #FF5C1A",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "background 0.2s",
                  }}>
                    <div style={{ width: 0, height: 0, borderTop: "14px solid transparent", borderBottom: "14px solid transparent", borderLeft: "22px solid #FF5C1A", marginLeft: "6px" }} />
                  </div>
                </div>
              )}

              {/* Controls bar */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: "16px 20px 14px",
                background: "linear-gradient(to top, rgba(13,13,13,0.9) 0%, transparent 100%)",
                display: "flex", flexDirection: "column", gap: "10px",
              }}>
                {/* Progress bar */}
                <div
                  onClick={handleSeek}
                  style={{ height: "2px", background: "rgba(240,237,232,0.15)", cursor: "pointer", position: "relative" }}
                >
                  <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: `${progress}%`, background: "#FF5C1A", transition: "width 0.1s linear" }} />
                </div>

                {/* Control buttons */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <button onClick={togglePlay} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}>
                    {playing ? (
                      <div style={{ display: "flex", gap: "3px" }}>
                        <div style={{ width: "3px", height: "14px", background: "#FF5C1A" }} />
                        <div style={{ width: "3px", height: "14px", background: "#FF5C1A" }} />
                      </div>
                    ) : (
                      <div style={{ width: 0, height: 0, borderTop: "7px solid transparent", borderBottom: "7px solid transparent", borderLeft: "12px solid #FF5C1A", marginLeft: "2px" }} />
                    )}
                  </button>

                  <button onClick={toggleMute} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                    <span style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: muted ? "rgba(240,237,232,0.3)" : "#FF5C1A", fontFamily: "'DM Mono', monospace", transition: "color 0.2s" }}>
                      {muted ? "Unmute" : "Mute"}
                    </span>
                  </button>

                  <span style={{ fontSize: "9px", letterSpacing: "0.1em", color: "rgba(240,237,232,0.3)", fontFamily: "'DM Mono', monospace", marginLeft: "auto" }}>
                    Keri Pulp Friction — Hype Reel
                  </span>
                </div>
              </div>
            </div>

            <p style={{ fontSize: "10px", letterSpacing: "0.12em", color: "rgba(240,237,232,0.2)", fontFamily: "'DM Mono', monospace", marginTop: "12px" }}>
              Campaign hype reel — Keri Pulp Friction, New Zealand 2024
            </p>
          </div>
        </div>

        {/* NARRATIVE */}
        <div style={{ padding: "0 48px", marginBottom: "100px", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.5s" }}>
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "80px", maxWidth: "980px" }}>
            <div>
              <div style={{ position: "sticky", top: "120px", display: "flex", flexDirection: "column", gap: "180px" }}>
                {["The insight", "The tension", "The platform", "The result"].map((label) => (
                  <span key={label} style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,237,232,0.2)", fontFamily: "'DM Mono', monospace", display: "block" }}>{label}</span>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
              <NarrativeBlock accent="#FF5C1A">Most juice briefs start in the same place: taste, freshness, natural ingredients. The rational territory everyone fights over. The insight for Keri started somewhere different — in the arguments Kiwis were already having. Not about juice. About pulp.</NarrativeBlock>
              <NarrativeBlock>In New Zealand, pulp preference isn't a product attribute. It's a personality marker. People don't just prefer pulpy or smooth — they have opinions. Strong ones. They judge people who drink the wrong one. It's the kind of low-stakes, high-conviction debate that lives on social feeds and spills into real conversations. The insight: pulp preference is tribal identity, not rational product choice.</NarrativeBlock>
              <NarrativeBlock accent="#00C4B4">Pulp Friction was built around that tension. A campaign platform that invited New Zealanders to declare their side — pulp or no pulp — and turned a product feature into a cultural flashpoint. The creative didn't try to resolve the debate. It amplified it. Keri didn't take a side. It owned the conversation.</NarrativeBlock>
              <NarrativeBlock>The platform landed across TVC, digital, social, and in-store. Sampling — planned across three months — dispersed within one. Category share moved 5.5 points. Keri reached #1 juice brand in New Zealand by the end of 2025, the first time in the brand's history. The campaign earned two Global Networked Marketing Awards nominations.</NarrativeBlock>
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
                { label: "Insight development", detail: "Identified the cultural behaviour — that pulp preference operates as tribal identity in New Zealand — and reframed it as the strategic foundation for the platform." },
                { label: "Platform development", detail: "Built the Pulp Friction campaign platform from brief to presentation. Defined the creative territory, the tone, and the way the debate mechanic would function across channels." },
                { label: "Agency leadership", detail: "Led the agency relationship through development — ran briefing workshops that embedded the insight upstream so creative responses came back sharper and with less revision." },
                { label: "Cross-market rollout", detail: "Managed alignment across Coca-Cola's internal stakeholders, bottler partners, and market teams to ensure the platform launched coherently and at speed." },
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
              {RESULTS.map((r, i) => <ResultCard key={i} result={r} highlight={i === 4} />)}
            </div>
          </div>
        </div>

        {/* REFLECTION */}
        <div style={{ padding: "0 48px", marginBottom: "100px", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.75s" }}>
          <div style={{ maxWidth: "980px" }}>
            <div style={{ borderTop: "0.5px solid rgba(240,237,232,0.1)", paddingTop: "32px", marginBottom: "40px" }}>
              <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,237,232,0.3)", fontFamily: "'DM Mono', monospace" }}>On reflection</span>
            </div>
            <blockquote style={{ fontSize: "clamp(16px, 2vw, 24px)", fontWeight: "400", lineHeight: 1.55, letterSpacing: "-0.015em", color: "rgba(240,237,232,0.6)", fontFamily: "'DM Mono', monospace", margin: 0, maxWidth: "720px", borderLeft: "2px solid #FF5C1A", paddingLeft: "32px" }}>
              The work that lands hardest is almost never about the product. It's about the thing people already believe — and the courage to build a platform around a tension rather than resolve it.
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

function NarrativeBlock({ children, accent }) {
  return (
    <div style={{ position: "relative", paddingLeft: accent ? "24px" : "0" }}>
      {accent && <div style={{ position: "absolute", left: 0, top: "4px", width: "2px", height: "calc(100% - 4px)", background: accent }} />}
      <p style={{ fontSize: "clamp(15px, 1.5vw, 18px)", color: accent ? "rgba(240,237,232,0.75)" : "rgba(240,237,232,0.45)", lineHeight: 1.85, fontFamily: "'DM Mono', monospace" }}>{children}</p>
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
      <p style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: "500", letterSpacing: "-0.03em", color: hovered ? (highlight ? "#FF5C1A" : "#00C4B4") : "#F0EDE8", fontFamily: "'DM Mono', monospace", margin: "0 0 10px", transition: "color 0.25s" }}>{result.stat}</p>
      <p style={{ fontSize: "11px", color: "rgba(240,237,232,0.35)", fontFamily: "'DM Mono', monospace", lineHeight: 1.6, letterSpacing: "0.02em" }}>{result.label}</p>
    </div>
  );
}

function BackToWork() {
  const [hovered, setHovered] = useState(false);
  return (
    <button onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
      <span style={{ fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: "400", letterSpacing: "-0.02em", color: hovered ? "#00C4B4" : "rgba(240,237,232,0.5)", fontFamily: "'DM Mono', monospace", transition: "color 0.25s" }}>← Back to all work</span>
    </button>
  );
}
