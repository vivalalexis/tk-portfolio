import { Shell, BackBar, Hero, Narrative, RoleGrid, Reflection } from '../casestudy-kit.jsx';

export default function CaseStudyFrozen() {
  return (
    <Shell glow="top right" glowColor="rgba(0,196,180,0.06)">
      <BackBar category="Integrated Marketing" year="2022" />
      <Hero
        accent="#00C4B4"
        title={<>Coca-Cola Frozen.<br /><span style={{ color: "#00C4B4" }}>Summer's better frozen</span>.</>}
        summary="An ANZ summer platform for the frozen range — Frozen Coke, Frozen Coke No Sugar, Frozen Fanta Raspberry — turning a fountain-format product into a branded summer ritual."
      />
      <Narrative
        labels={["The category", "The platform", "The execution"]}
        blocks={[
          { accent: "#00C4B4", text: "Frozen beverages are a summer impulse buy that lives at the point of sale — a format consumers love but rarely associate with brand-level storytelling. In ANZ, the frozen range sat across Coca-Cola, Coca-Cola No Sugar, and Fanta Raspberry, with summer as the entire commercial window." },
          { text: "'Summer's Better Frozen' gave the range a single platform idea: not three products, one summer behaviour. The creative leaned into the sensory promise of the format — the visual language of frost, beach, and heat relief — built to work as hard on an outdoor panel as on a cup in hand." },
          { accent: "#FF5C1A", text: "As part of the regional creative and content remit, the work spanned campaign creative and content strategy for the ANZ rollout, aligned to the masterbrand while giving the frozen format its own distinct summer identity." },
        ]}
      />
      <RoleGrid
        accent="#00C4B4"
        items={[
          { label: "Campaign creative", detail: "Shaped the 'Summer's Better Frozen' platform and its visual language across the three-product frozen range." },
          { label: "Content strategy", detail: "Built the content approach for the ANZ summer window, connecting brand-level creative to point-of-sale reality." },
          { label: "Portfolio coherence", detail: "One platform across Coca-Cola, No Sugar, and Fanta Raspberry — distinct enough to own summer, aligned enough to serve the masterbrand." },
          { label: "Regional delivery", detail: "Carried the platform through the ANZ market rollout as part of the regional creative and content role." },
        ]}
      />
      <Reflection accent="#00C4B4" quote="Formats like frozen live or die at the fridge and the fountain. The job of the brand platform is to do the remembering for the consumer — so that when summer hits, the choice is already made." />
    </Shell>
  );
}
