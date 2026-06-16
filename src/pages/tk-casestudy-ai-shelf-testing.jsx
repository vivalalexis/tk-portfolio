import { Shell, BackBar, Hero, Narrative, RoleGrid, ResultsGrid, Reflection } from '../casestudy-kit.jsx';

const RESULTS = [
  { stat: "Full → phased", label: "Rollout recommendation changed before spend committed", highlight: true },
  { stat: "Pre-production", label: "Validated against shelf attention, not internal opinion" },
  { stat: "Region-wide", label: "Mainstream water, the portfolio's largest volume category" },
  { stat: "Recognition kept", label: "Preserved distinct brand assets a full switch would have risked" },
];

export default function CaseStudyAIShelfTesting() {
  return (
    <Shell glow="top right" glowColor="rgba(0,196,180,0.07)">
      <BackBar category="Data & AI · Visual Identity" year="2025" />
      <Hero
        accent="#00C4B4"
        title={<>The packaging call<br />was being made on opinion.<br /><span style={{ color: "#00C4B4" }}>I made it on evidence</span>.</>}
        summary="A new visual identity for mainstream water was heading toward a full transition, decided on internal preference. I ran AI shelf-attention testing before production spend committed, and the data changed the recommendation."
      />
      <Narrative
        labels={["The risk", "The method", "The finding", "The lesson"]}
        blocks={[
          { accent: "#00C4B4", text: "A region-wide visual identity change was being weighed for mainstream water, the portfolio's biggest volume category, in a low-media environment. The decision was running on opinion rather than evidence, and the category hadn't seen creative investment in years. A wrong call would be expensive and hard to reverse." },
          { text: "I ran AI-enabled shelf impact testing across simulated retail environments, evaluating the new packaging against the existing design and competitors. The point was to test for attention and recognition in the place the decision actually plays out, the shelf, before any spend was locked." },
          { accent: "#FF5C1A", text: "The findings changed the market recommendation from a full transition to a phased rollout. A clean-sheet switch would have stripped out recognition anchors consumers used to find the brand, in a category where that recognition was doing quiet commercial work." },
          { text: "AI shelf testing is most valuable upstream of production, not after. Used early, it turns a political debate into an evidence-based conversation. Used late, it just explains what already happened." },
        ]}
      />
      <RoleGrid
        accent="#00C4B4"
        items={[
          { label: "Testing design", detail: "Ran AI visual-attention and shelf analytics across simulated retail, benchmarking new packaging against current and competitors." },
          { label: "Evidence over opinion", detail: "Reframed a preference-led decision as a data question answered before production spend committed." },
          { label: "Influence without authority", detail: "Used the findings to shift a region-wide recommendation across global and market stakeholders." },
          { label: "Risk protection", detail: "Steered a full transition into a phased rollout, protecting brand recognition in a low-media category." },
        ]}
      />
      <ResultsGrid accent="#00C4B4" results={RESULTS} label="Results" />
      <Reflection accent="#00C4B4" quote="A number you can't trace to a clean method isn't a result, it's a guess with a decimal point. Tested early, the same number is a decision tool. Tested late, it's just a post-mortem." />
    </Shell>
  );
}
