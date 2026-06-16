import { Shell, BackBar, Hero, Narrative, RoleGrid, ResultsGrid, Reflection } from '../casestudy-kit.jsx';

const RESULTS = [
  { stat: "#1 in PH", label: "Water brand by end-2025, as part of a broader transformation", highlight: true },
  { stat: "23.1%", label: "Volume share, +7pts vs prior year" },
  { stat: "B2B2C", label: "Trust equity connected to everyday grassroots purchase" },
  { stat: "Plug-and-play", label: "Toolkit aligning category, market, agency, commercial, bottler" },
];

export default function CaseStudyWilkinsCircleOfTrust() {
  return (
    <Shell glow="top right" glowColor="rgba(30,107,184,0.08)">
      <BackBar category="Route-to-Market · B2B2C" year="2025" />
      <Hero
        accent="#1E6BB8"
        title={<>Trust that ends<br /><span style={{ color: "#1E6BB8" }}>at the shelf</span>.</>}
        summary="Wilkins had deep trust equity, the doctor-and-mother kind, but it lived in mass communications, not at the point of purchase. Circle of Trust turned that equity into an operating system that runs all the way to a sari-sari store sale."
      />
      <Narrative
        labels={["The gap", "The insight", "The build", "The shift"]}
        blocks={[
          { accent: "#1E6BB8", text: "Wilkins was trusted, especially for babies and mothers, but the trust sat in advertising and endorsements. Awareness wasn't converting to purchase, and regulation meant doctors couldn't directly endorse the product. The job was to turn trust into trial and repeat purchase across the whole family, not just maternal care." },
          { text: "Trust doesn't travel directly from brand to consumer. It moves through relationships. So I co-led an ecosystem around the shopper: health experts and Wilkins Health Circle content establish credibility, barangay health workers translate it into personal guidance and sampling, mothers experience and share it, and nearby sari-sari stores make the purchase easy." },
          { accent: "#FF5C1A", text: "I structured the journey across Discover, Engage, Purchase, Advocate, defined each partner's role at every stage, and wired in route-to-market and tailored point-of-sale so trial actually converted to sale. Measurement loops fed back into content and activation. The whole thing was packaged as a pilot-then-scale toolkit." },
          { text: "It brought commercial and route-to-market logic into what could have stayed a brand activation. Built to lean on sampling, POS, and community partnerships instead of incremental paid media, and to align the category, market, agency, commercial, and bottler partners needed to run it." },
        ]}
      />
      <RoleGrid
        accent="#1E6BB8"
        items={[
          { label: "Commercialisation roadmap", detail: "Co-led the B2B2C model connecting trust equity to grassroots purchase across the full family, not just maternal care." },
          { label: "Journey architecture", detail: "Mapped Discover, Engage, Purchase, Advocate and defined each partner's job at every stage of the loop." },
          { label: "Route-to-market", detail: "Integrated tailored point-of-sale and nearby sari-sari retail so sampling and education converted into a sale." },
          { label: "Toolkit & alignment", detail: "Packaged a plug-and-play, pilot-then-scale system and aligned category, market, agency, commercial, and bottler partners." },
        ]}
      />
      <ResultsGrid accent="#1E6BB8" results={RESULTS} label="Results" />
      <Reflection accent="#1E6BB8" quote="Route-to-market is part of the consumer experience, not a workstream that happens after the campaign. Trust only becomes commercial when you build the final metre to purchase." />
    </Shell>
  );
}
