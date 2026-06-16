import { Shell, BackBar, Hero, Narrative, RoleGrid, ResultsGrid, Reflection } from '../casestudy-kit.jsx';

const RESULTS = [
  { stat: "7 SKUs", label: "All generate end to end, from birth data to designed PDF", highlight: true },
  { stat: "$19–59", label: "Above-market pricing across the launch catalogue" },
  { stat: "0 math by AI", label: "Deterministic libraries compute every value; AI only interprets" },
  { stat: "Brand + GTM", label: "Identity, catalogue, pricing, and route to market, all built solo" },
];

export default function CaseStudyRedThreadBlueprint() {
  return (
    <Shell glow="top right" glowColor="rgba(18,58,102,0.12)">
      <BackBar category="AI Build · Product Venture" year="2026" />
      <Hero
        accent="#3D7DD6"
        title={<>Destiny,<br /><span style={{ color: "#3D7DD6" }}>drafted</span>.</>}
        summary="A real product business, not a prototype. In a category run on emoji mysticism, the bet is that a rigour-first destiny-reading product can win on deterministic accuracy, classical-text grounding, real design, and a careful writing contract. I built the engine, the brand, the pricing, and the guardrails."
      />
      <Narrative
        labels={["The bet", "The engine", "The brand", "The bright lines"]}
        blocks={[
          { accent: "#3D7DD6", text: "Chinese and Korean metaphysics, BaZi, Saju, Zi Wei Dou Shu, Qi Men Dun Jia, sold as designed PDF readings from an anonymous drafting house that issues precision documents. The positioning: computed, not channelled. The whole thesis is that rigour and craft can win a category that runs on vibes." },
          { text: "An automated pipeline turns birth data into a finished reading. Deterministic open-source libraries compute every chart value, the defining rule being that the model never does the math. Claude then interprets against a typed, structured schema, never freeform, and an HTML/CSS theme renders to PDF. True-solar-time correction is built in as a credibility feature competitors lack." },
          { accent: "#FF5C1A", text: "The report format is the brand. Cyanotype-blue blueprint covers, a drafting title block, charts drawn as architectural elevations and plans, and one continuous red thread as the only use of red. One rule, red appears only as the thread, generated the entire visual identity. I designed the catalogue, seven launch SKUs, and priced above market." },
          { text: "The hardest discipline wasn't the build, it was the bright lines: deciding what the AI is allowed to touch, then writing those rules down as constraints the system enforces. Deterministic math, a non-fatalistic writing contract, safety guardrails, a public-domain-only sourcing line, and validation gates from golden math tests to a guardrail red-team set." },
        ]}
      />
      <RoleGrid
        accent="#3D7DD6"
        items={[
          { label: "Engine & pipeline", detail: "Built the birth-data-to-PDF pipeline: deterministic math, typed interpretation schema, themed render, true-solar-time correction." },
          { label: "Brand system", detail: "Designed the blueprint-and-red-thread identity where the document format itself is the brand." },
          { label: "Catalogue & pricing", detail: "Defined 7 launch SKUs in drafting-house vocabulary, priced above market, with a two-lane Etsy-then-owned-site GTM." },
          { label: "Responsible-AI guardrails", detail: "Wrote the constraint stack and validation gates: math tests, writing-quality gate, red-team set, known-subject audit." },
        ]}
      />
      <ResultsGrid accent="#3D7DD6" results={RESULTS} label="The build" />
      <Reflection accent="#3D7DD6" quote="Brand can be a structural constraint, not a coat of paint. I designed the brand, wrote the pricing, built the engine, and set the guardrails. The whole business is the proof." />
    </Shell>
  );
}
