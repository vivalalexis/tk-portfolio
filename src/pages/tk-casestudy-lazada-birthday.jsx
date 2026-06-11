import { Shell, BackBar, Hero, VideoBlock, Narrative, RoleGrid, ResultsGrid, Reflection } from '../casestudy-kit.jsx';

const RESULTS = [
  { stat: "1.2M", label: "Views on the launch film", highlight: true },
  { stat: "600+", label: "Flash deals across the festival window" },
  { stat: "2", label: "Films carrying one anti-sentimental brand voice" },
  { stat: "3 days", label: "Festival window — 24 to 26 April" },
];

export default function CaseStudyLazadaBirthday() {
  return (
    <Shell glow="bottom right" glowColor="rgba(255,92,26,0.05)">
      <BackBar category="Campaign & Brand Voice" year="2018" />
      <Hero
        accent="#FF5C1A"
        title={<>Birthday Festival.<br /><span style={{ color: "#FF5C1A" }}>Not the thought that counts</span>.</>}
        summary="Lazada's biggest sale moment of the year, carried by the same irreverent brand voice built on Mother's Day and K.PO: skip the sentiment, bring the deals."
      />
      <VideoBlock id="z-YU1TiRBr0" title="It's NOT the thought that counts this Birthday Sale..." caption="It's NOT the thought that counts this Birthday Sale... — Lazada Singapore, 2018" />
      <Narrative
        labels={["The moment", "The voice", "The system", "The scale"]}
        blocks={[
          { accent: "#FF5C1A", text: "A birthday sale is a retail fixture — every e-commerce platform has one, and they all sound the same: balloons, gratitude, discounts. Lazada's Birthday Festival was the biggest commercial moment on the calendar outside of Singles' Day, which made it exactly the wrong place for interchangeable creative." },
          { text: "By 2018 Lazada Singapore's social channels had a recognisable voice: anti-sentimental, culturally fluent, in on its own joke. The birthday creative ran the same play — 'It's NOT the thought that counts' subverted the politeness of gifting the way the Mother's Day rap had a year earlier. A brand voice is only an asset if it survives the big commercial moments, not just the stunts." },
          { accent: "#00C4B4", text: "The campaign was a system, not a film: a hero spot carrying the attitude, a launch film driving the mechanics — 24 to 26 April, 600+ flash deals, up to 90% off, vouchers up to $120 — and social channels converting attention into sale traffic. Creative and commerce ran as one loop." },
          { text: "The launch film alone reached 1.2M views. The festival window concentrated three days of traffic against 600+ deals, with the social team directing influencer and agency partnerships built through Singles' Day and the year's mega sales." },
        ]}
      />
      <RoleGrid
        accent="#FF5C1A"
        items={[
          { label: "Brand voice stewardship", detail: "Carried the irreverent voice built on Mother's Day and K.PO into Lazada's biggest commercial moment — proving it could sell, not just entertain." },
          { label: "Social campaign delivery", detail: "Owned the social layer of the festival: content strategy, community management, and the channels converting attention into sale traffic." },
          { label: "Influencer & agency direction", detail: "Directed the partner ecosystem developed across Singles' Day and mega sales toward the birthday window." },
          { label: "Creative consistency", detail: "Kept one recognisable attitude across hero film, launch film, and feed content — system over one-offs." },
        ]}
      />
      <ResultsGrid accent="#FF5C1A" results={RESULTS} />
      <Reflection accent="#FF5C1A" quote="Stunts build a brand voice. Sale moments test whether it's real. The birthday campaign mattered because the same attitude that earned attention in April Fool's comment threads held up under the weight of the year's biggest commercial target." />
    </Shell>
  );
}
