import { useState, useEffect } from "react";
import { Link, NavLink } from 'react-router-dom';

const NAV_PATH = { Work: "/work", About: "/about", Contact: "/contact" };

export default function TKContact() {
  const [loaded, setLoaded] = useState(false);
  const [activeNav, setActiveNav] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

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

      {/* Teal glow — bottom right */}
      <div style={{
        position: "fixed", bottom: 0, right: 0, width: "55vw", height: "55vw",
        background: "radial-gradient(ellipse at bottom right, rgba(0,196,180,0.06) 0%, transparent 65%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* Orange glow — top left */}
      <div style={{
        position: "fixed", top: 0, left: 0, width: "35vw", height: "35vw",
        background: "radial-gradient(ellipse at top left, rgba(255,92,26,0.04) 0%, transparent 70%)",
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

      <main style={{ paddingTop: "140px", paddingBottom: "120px", position: "relative", zIndex: 1 }}>

        {/* PAGE LABEL */}
        <div style={{ padding: "0 48px", marginBottom: "80px" }}>
          <div style={{
            borderTop: "0.5px solid rgba(240,237,232,0.1)", paddingTop: "32px",
            display: "flex", alignItems: "baseline", justifyContent: "space-between",
            opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease 0.2s",
          }}>
            <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#00C4B4", fontFamily: "'DM Mono', monospace" }}>Contact</span>
            <span style={{ fontSize: "10px", letterSpacing: "0.1em", color: "rgba(240,237,232,0.2)", fontFamily: "'DM Mono', monospace" }}>Sydney, AU · GMT+10</span>
          </div>
        </div>

        {/* HERO STATEMENT */}
        <div style={{
          padding: "0 48px", marginBottom: "100px",
          opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
        }}>
          <div style={{ maxWidth: "820px" }}>
            <div style={{ width: loaded ? "60px" : "0px", height: "2px", background: "#FF5C1A", marginBottom: "40px", transition: "width 0.8s ease 0.5s" }} />
            <h1 style={{
              fontSize: "clamp(28px, 5vw, 72px)", fontWeight: "400", lineHeight: 1.1,
              letterSpacing: "-0.03em", fontFamily: "'DM Mono', monospace", margin: "0 0 32px", color: "#F0EDE8",
            }}>
              Let's make<br />
              something<br />
              <span style={{ color: "#00C4B4" }}>worth shipping</span>.
            </h1>
            <p style={{
              fontSize: "clamp(14px, 1.5vw, 17px)", color: "rgba(240,237,232,0.45)",
              lineHeight: 1.8, maxWidth: "500px", fontFamily: "'DM Mono', monospace",
            }}>
              Open to senior marketing, growth, and integrated marketing roles. Based in Sydney — available for in-person, hybrid, and remote.
            </p>
          </div>
        </div>

        {/* CONTACT BLOCKS */}
        <div style={{
          padding: "0 48px", marginBottom: "80px",
          opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.5s",
        }}>
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: "1px", background: "rgba(240,237,232,0.06)", maxWidth: "860px",
          }}>

            {/* Email block */}
            <ContactBlock
              label="Email"
              index="01"
              accent="#00C4B4"
              body="The fastest way to reach me. I respond within 24 hours."
              action={
                <a href="mailto:trishakuek@gmail.com" style={{
                  background: "#00C4B4", color: "#0D0D0D",
                  fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase",
                  padding: "12px 24px", textDecoration: "none",
                  fontFamily: "'DM Mono', monospace", transition: "background 0.2s",
                  display: "inline-block", alignSelf: "flex-start",
                }}
                  onMouseEnter={(e) => e.target.style.background = "#FF5C1A"}
                  onMouseLeave={(e) => e.target.style.background = "#00C4B4"}>
                  Send an email →
                </a>
              }
            />

            {/* LinkedIn block */}
            <ContactBlock
              label="LinkedIn"
              index="02"
              accent="#FF5C1A"
              body="Work history, recommendations, and the full professional picture."
              action={
                <a href="https://linkedin.com/in/trishakuek" target="_blank" rel="noreferrer" style={{
                  background: "transparent", border: "1px solid #FF5C1A", color: "#FF5C1A",
                  fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase",
                  padding: "12px 24px", textDecoration: "none",
                  fontFamily: "'DM Mono', monospace", transition: "all 0.2s",
                  display: "inline-block", alignSelf: "flex-start",
                }}
                  onMouseEnter={(e) => { e.target.style.background = "#FF5C1A"; e.target.style.color = "#0D0D0D"; }}
                  onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.color = "#FF5C1A"; }}>
                  View profile →
                </a>
              }
            />
          </div>
        </div>

        {/* FINE PRINT */}
        <div style={{
          padding: "0 48px",
          opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.7s",
        }}>
          <div style={{
            maxWidth: "860px", borderTop: "0.5px solid rgba(240,237,232,0.06)",
            paddingTop: "32px",
          }}>
            <p style={{
              fontSize: "12px", color: "rgba(240,237,232,0.25)",
              fontFamily: "'DM Mono', monospace", lineHeight: 1.8, maxWidth: "420px",
            }}>
              Based in Sydney, Australia. Available for roles across Sydney, remote, and hybrid. APAC timezone preferred but not required.
            </p>
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

function ContactBlock({ label, index, accent, body, action }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{
      background: hovered ? "#1A1A1A" : "#0D0D0D",
      padding: "48px 40px", transition: "background 0.25s ease",
      position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column", gap: "20px",
    }}>
      <div style={{
        position: "absolute", top: 0, left: 0,
        width: hovered ? "100%" : "0%", height: "1px",
        background: `linear-gradient(to right, ${accent}, transparent)`,
        transition: "width 0.4s ease",
      }} />
      <span style={{ fontSize: "9px", letterSpacing: "0.2em", color: "rgba(240,237,232,0.2)", fontFamily: "'DM Mono', monospace" }}>{index}</span>
      <span style={{
        fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase",
        color: hovered ? accent : "rgba(240,237,232,0.35)",
        fontFamily: "'DM Mono', monospace", transition: "color 0.25s",
      }}>{label}</span>
      <p style={{ fontSize: "13px", color: "rgba(240,237,232,0.4)", fontFamily: "'DM Mono', monospace", lineHeight: 1.7 }}>{body}</p>
      {action}
    </div>
  );
}
