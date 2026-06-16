import { Shell, BackBar, Hero, Narrative, RoleGrid, ResultsGrid, Reflection } from '../casestudy-kit.jsx';

const RESULTS = [
  { stat: "$46M", label: "Modelled revenue opportunity at 10% adoption", highlight: true },
  { stat: "500K tablets", label: "~10,000 Metro Manila households over 12 months" },
  { stat: "$150K", label: "Seed ask to fund the pilot" },
  { stat: "1 tablet = 20L", label: "NaDCC purification in ~30 min, 5-year shelf life" },
];

export default function CaseStudyWaterTabletPilot() {
  return (
    <Shell glow="bottom left" glowColor="rgba(24,160,200,0.07)">
      <BackBar category="Intrapreneurship · Commercial Case" year="2025" />
      <Hero
        accent="#18A0C8"
        title={<>A social-impact idea<br /><span style={{ color: "#18A0C8" }}>with a P&L</span>.</>}
        summary="I identified a chance to pair water access with commercial growth in the Philippines using purification tablets, then built the full business case: a fundable pilot and a credible path from impact to scale, not a campaign."
      />
      <Narrative
        labels={["The opportunity", "The pilot", "The model", "The discipline"]}
        blocks={[
          { accent: "#18A0C8", text: "NaDCC purification tablets treat roughly 20 litres in about 30 minutes and last five years on the shelf. The proposition sat where public-health need meets a credible commercial venture, the kind of work that separates a brand leader from a communications specialist." },
          { text: "I designed a 12-month Metro Manila pilot: roughly 500,000 tablets across about 10,000 households, on an initial seed ask of around USD 150,000. Small enough to be fundable, structured enough to actually prove the bet rather than just demonstrate goodwill." },
          { accent: "#18A0C8", text: "Alongside it I built the scale case, sizing an opportunity of roughly USD 46M revenue and USD 5M profit at 10% adoption. Accessibility, social impact, and profitability lived in one model, treated as inputs that reinforce each other rather than competing goals." },
          { text: "A social-impact idea only earns investment when it carries a commercial model that's honest about adoption and economics. The discipline is sizing the opportunity without inflating it, then designing the smallest pilot that would genuinely prove the bet." },
        ]}
      />
      <RoleGrid
        accent="#18A0C8"
        items={[
          { label: "Opportunity identification", detail: "Spotted the intersection of water access and commercial growth, and the tablet mechanism that made it credible." },
          { label: "Pilot design", detail: "Scoped a 12-month Metro Manila test sized to prove the bet on a modest seed investment." },
          { label: "Commercial modelling", detail: "Built the scale case with honest adoption assumptions, revenue, and profit at 10% uptake." },
          { label: "Impact-to-P&L framing", detail: "Held accessibility, impact, and profitability in one model decision-makers could act on." },
        ]}
      />
      <ResultsGrid accent="#18A0C8" results={RESULTS} label="The case" />
      <Reflection accent="#18A0C8" quote="The work was building a case decision-makers could fund: a human-centred problem, a defined test, and a financial model honest enough to act on. Scale figures are illustrative; the discipline is in the modelling, not the precision." />
    </Shell>
  );
}
