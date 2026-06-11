import { Shell, BackBar, Hero, Narrative, RoleGrid, ResultsGrid, Reflection } from '../casestudy-kit.jsx';

const RESULTS = [
  { stat: "792M", label: "Organic impressions across the region", highlight: true },
  { stat: "$710K", label: "USD earned media value" },
  { stat: "#2", label: "Region ranked globally on the platform" },
  { stat: "Gen Z", label: "Strategic remit: revitalise the masterbrand for younger audiences" },
];

export default function CaseStudyCreations() {
  return (
    <Shell glow="top right" glowColor="rgba(255,92,26,0.04)">
      <BackBar category="Innovation" year="2023" />
      <Hero
        accent="#FF5C1A"
        title={<>Coca-Cola Creations.<br /><span style={{ color: "#FF5C1A" }}>792M impressions</span>.</>}
        summary="A global innovation platform built to win Gen Z — limited-edition drops like Y3000, the future-flavoured Coke co-created with AI. My job was the connective tissue: making pack, digital, and experiential compound instead of running in parallel."
      />
      <Narrative
        labels={["The platform", "The problem", "The orchestration", "The result"]}
        blocks={[
          { accent: "#FF5C1A", text: "Coca-Cola Creations was the company's play to revitalise the masterbrand and win Gen Z: limited-edition flavour drops, each wrapped in culture — music, gaming, AI, space. Y3000 was the flagship of its generation, a flavour 'from the year 3000' co-created with artificial intelligence, with packaging that unlocked digital experiences." },
          { text: "Global innovation programmes fail at regional scale in a predictable way: pack ships on one timeline, the digital experience on another, experiential gets scoped market by market, and each piece dilutes the others. Someone has to own the connective tissue. In ASEAN and South Pacific, that was me." },
          { accent: "#00C4B4", text: "I orchestrated the consumer engagement end to end: pack-triggered digital mechanics that turned every can into an entry point, AI-driven experiences carried through regional channels, and experiential moments that gave Y3000 a physical footprint. Compliance ran as an early-stage collaborator, not a late-stage gate — assets submitted early and in batches, so nothing sat ready but unapproved." },
          { text: "The region earned 792M organic impressions and USD $710K in earned media value, ranking #2 globally on the platform. Stitched together, pack, digital, and experiential compounded — exactly the outcome the programme design was built to force." },
        ]}
      />
      <RoleGrid
        accent="#FF5C1A"
        items={[
          { label: "Regional orchestration", detail: "Owned end-to-end consumer engagement across ASEAN and South Pacific — the layer connecting global platform design to market execution." },
          { label: "Pack-to-digital mechanics", detail: "Integrated pack-triggered digital experiences so the product itself recruited consumers into the platform." },
          { label: "Experiential moments", detail: "Delivered regional experiential for Y3000, giving a digital-first platform physical presence in market." },
          { label: "Compliance workflow", detail: "Built early-batch creative review with legal and compliance — never had an asset ready to deploy but stuck in approval." },
        ]}
      />
      <ResultsGrid accent="#FF5C1A" results={RESULTS} />
      <Reflection accent="#FF5C1A" quote="Global innovation programmes only work at regional scale if someone takes ownership of the connective tissue between pack, digital, and experiential. Left to run in parallel, they dilute each other. Stitched together, they compound." />
    </Shell>
  );
}
