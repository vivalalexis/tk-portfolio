import { Shell, BackBar, Hero, VideoBlock, Narrative, RoleGrid, ResultsGrid, Reflection } from '../casestudy-kit.jsx';

const RESULTS = [
  { stat: "80%", label: "Of planned regional campaign execution protected", highlight: true },
  { stat: "85%", label: "Negative sentiment on global launch — the starting position" },
  { stat: "Tiered", label: "Market-by-market proposal replaced a blanket global shutdown" },
  { stat: "Dual", label: "Role held throughout — category leadership on top of content remit" },
];

export default function CaseStudyKWave() {
  return (
    <Shell glow="bottom left" glowColor="rgba(0,196,180,0.05)">
      <BackBar category="Crisis Management" year="2024" />
      <Hero
        accent="#00C4B4"
        title={<>K-Wave. Leading through<br /><span style={{ color: "#00C4B4" }}>a global storm</span>.</>}
        summary="Coca-Cola Creations' K-POP drop launched into 85% negative global sentiment. The mandate from global was to shut everything down. The region kept 80% of its campaign running — because the response was structured, not hopeful."
      />
      <VideoBlock id="t6bBDAlpQZs" title='J.Y. Park, Stray Kids, ITZY, NMIXX — "Like Magic" M/V' caption='"Like Magic" — J.Y. Park, Stray Kids, ITZY, NMIXX for Coca-Cola K-Wave, 2024' />
      <Narrative
        labels={["The launch", "The crisis", "The renegotiation", "The hold"]}
        blocks={[
          { accent: "#00C4B4", text: "Coca-Cola K-Wave celebrated K-POP fandom — a Creations drop launched in Seoul with JYP Entertainment and a collaboration single, 'Like Magic', bringing Stray Kids, ITZY, and NMIXX together. For ASEAN and South Pacific, home to some of the most committed K-POP audiences in the world, it was a natural fit with major campaign plans behind it." },
          { text: "Then the global launch hit 85% negative sentiment, centred on the AI-generated music video. A blanket global mandate followed: shut down all markets. I was dual-hatting at the time — category leadership for Innovations on top of my core content role — which put me at the centre of the regional response." },
          { accent: "#FF5C1A", text: "A blanket shutdown treats every market as the epicentre. The data said otherwise. I used social listening to build an evidence-based case that sentiment in our markets diverged sharply from the global picture, and developed a tiered proposal — calibrated by market — as the alternative to the mandate. Then renegotiated with global stakeholders." },
          { text: "The region protected 80% of planned campaign execution. Just as important was what happened below the line: first-line managers kept operating through the uncertainty because pressure was absorbed upward and what came down was a concrete path, not noise. Campaign momentum and stakeholder confidence held." },
        ]}
      />
      <RoleGrid
        accent="#00C4B4"
        items={[
          { label: "Crisis leadership", detail: "Led the regional risk mitigation and narrative reframing through the most acute phase of the global backlash — while holding a dual role." },
          { label: "Evidence-based renegotiation", detail: "Built the social listening case showing regional sentiment diverged from global, and converted a blanket mandate into a tiered, market-calibrated response." },
          { label: "Stakeholder management", detail: "Renegotiated directly with global teams under pressure, holding the line on what the region's data actually supported." },
          { label: "Protecting the team", detail: "Absorbed pressure upward so first-line managers could keep their markets operating — structure handed down, noise held back." },
        ]}
      />
      <ResultsGrid accent="#00C4B4" results={RESULTS} />
      <Reflection accent="#00C4B4" quote="In a crisis, the protective layer isn't optimism — it's structure. Teams can operate through enormous ambiguity if they have a concrete path. My job was to absorb the noise and hand down clarity." />
    </Shell>
  );
}
