// Shared theme tokens for TK Portfolio
// Typography hierarchy: Fraunces (editorial serif for headlines), Inter (sans for body), DM Mono (accent only)

export const FONTS = {
  display: "'Fraunces', 'Times New Roman', serif",
  body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  mono: "'DM Mono', 'Courier New', monospace",
};

export const COLORS = {
  bg: "#0D0D0D",
  surface: "#1A1A1A",
  text: "#F0EDE8",
  textMuted: "rgba(240,237,232,0.55)",
  textDim: "rgba(240,237,232,0.3)",
  teal: "#00C4B4",
  orange: "#FF5C1A",
  border: "rgba(240,237,232,0.08)",
};

// Google Fonts import — include in every page's <style> block.
// Fraunces has optical sizing for editorial feel. Inter is workhorse sans.
export const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,400&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Inter:wght@300;400;500;600&display=swap');`;

// Per-case-study thumbnail treatment (used when real imagery isn't available)
export const THUMBS = {
  "animal-crossing": {
    type: "image",
    src: "/ac-deliveroo-island.png",
    alt: "Animal Crossing x Deliveroo island",
  },
  "keri-pulp-friction": {
    type: "gradient",
    bg: "linear-gradient(135deg, #E8541C 0%, #F49A1E 100%)",
    label: "KERI",
    sub: "PULP FRICTION",
    fg: "#FFF7EC",
  },
  "wilkins": {
    type: "gradient",
    bg: "linear-gradient(135deg, #0A2A6B 0%, #1E6BB8 100%)",
    label: "WILKINS",
    sub: "#1 PHILIPPINES",
    fg: "#E6F2FF",
  },
  "crm-braze": {
    type: "gradient",
    bg: "linear-gradient(135deg, #0F3B38 0%, #00C4B4 100%)",
    label: "CRM",
    sub: "BRAZE · LIFECYCLE",
    fg: "#F0EDE8",
  },
  "coke-music-promo": {
    type: "gradient",
    bg: "linear-gradient(135deg, #C8102E 0%, #7B0A1E 100%)",
    label: "COKE",
    sub: "MUSIC · 3 CYCLES",
    fg: "#FFF1E6",
  },
};
