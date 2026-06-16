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
    type: "image",
    src: "https://i.ytimg.com/vi/piovBrm6AKE/maxresdefault.jpg",
    alt: "Keri Pulp Friction campaign — New Zealand",
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
    type: "image",
    src: "https://i.ytimg.com/vi/6oR9vJp5qSg/maxresdefault.jpg",
    alt: "Coke Music Promo — K-POP tour campaign",
  },
  "coca-cola-creations": {
    type: "gradient",
    bg: "linear-gradient(135deg, #2D1B4E 0%, #B23A8F 100%)",
    label: "Y3000",
    sub: "COCA-COLA CREATIONS",
    fg: "#F6E9FF",
  },
  "kwave-crisis": {
    type: "image",
    src: "https://i.ytimg.com/vi/t6bBDAlpQZs/maxresdefault.jpg",
    alt: "Coca-Cola K-Wave — Like Magic music video",
  },
  "coke-frozen": {
    type: "gradient",
    bg: "linear-gradient(135deg, #7B0A1E 0%, #C8102E 55%, #6EC9E8 100%)",
    label: "FROZEN",
    sub: "SUMMER'S BETTER FROZEN",
    fg: "#FFF1E6",
  },
  "deliveroo-value-meals": {
    type: "image",
    src: "https://i.ytimg.com/vi/Cw4n3k3-prQ/maxresdefault.jpg",
    alt: "Deliveroo $12 Value Meals campaign",
  },
  "lazada-mothers-day": {
    type: "image",
    src: "https://i.ytimg.com/vi/R8TTWD279HY/maxresdefault.jpg",
    alt: "Lazada Mother's Day rap campaign",
  },
  "lazada-kpo": {
    type: "image",
    src: "https://i.ytimg.com/vi/5fls5ssZkdo/maxresdefault.jpg",
    alt: "Lazada K.PO Singlish smart speaker",
  },
  "lazada-birthday": {
    type: "image",
    src: "https://i.ytimg.com/vi/z-YU1TiRBr0/maxresdefault.jpg",
    alt: "Lazada Birthday Festival campaign",
  },
  "pawcast": {
    type: "gradient",
    bg: "linear-gradient(135deg, #0F3B38 0%, #2E6F40 100%)",
    label: "PAWCAST",
    sub: "AI BUILD · ML ENGINE",
    fg: "#EAF7EE",
  },
  "ai-show-trailer": {
    type: "gradient",
    bg: "linear-gradient(135deg, #111111 0%, #3A3A52 100%)",
    label: "1 DAY",
    sub: "AI SHOW TRAILER · 60 SEC",
    fg: "#F0EDE8",
  },
  "wilkins-circle-of-trust": {
    type: "gradient",
    bg: "linear-gradient(135deg, #0A2A6B 0%, #2E8BC0 100%)",
    label: "CIRCLE",
    sub: "OF TRUST · B2B2C",
    fg: "#E6F2FF",
  },
  "production-model": {
    type: "gradient",
    bg: "linear-gradient(135deg, #2B1207 0%, #FF5C1A 110%)",
    label: "70%",
    sub: "AGENCY COST SAVED",
    fg: "#FFF1E6",
  },
  "ai-shelf-testing": {
    type: "gradient",
    bg: "linear-gradient(135deg, #0F1E3D 0%, #00C4B4 115%)",
    label: "SHELF",
    sub: "AI ATTENTION TESTING",
    fg: "#E6FBF8",
  },
  "water-tablet-pilot": {
    type: "gradient",
    bg: "linear-gradient(135deg, #06324A 0%, #18A0C8 100%)",
    label: "$46M",
    sub: "WATER ACCESS PILOT",
    fg: "#E6F6FF",
  },
  "red-thread-blueprint": {
    type: "gradient",
    bg: "linear-gradient(135deg, #0A2540 0%, #123A66 100%)",
    label: "RED THREAD",
    sub: "DESTINY, DRAFTED",
    fg: "#CFE3FF",
  },
  "sports-edge-engine": {
    type: "gradient",
    bg: "linear-gradient(135deg, #0C1E12 0%, #1E7A46 100%)",
    label: "CLV",
    sub: "MODEL VALIDATION",
    fg: "#E7F7EC",
  },
  "ghost-mode": {
    type: "gradient",
    bg: "linear-gradient(135deg, #111111 0%, #4A4A6A 100%)",
    label: "GHOST",
    sub: "TELEPROMPTER · REHEARSAL",
    fg: "#ECECF5",
  },
};
