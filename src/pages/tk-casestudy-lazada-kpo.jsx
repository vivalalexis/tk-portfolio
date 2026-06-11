import { Shell, BackBar, Hero, VideoBlock, Narrative, RoleGrid, ResultsGrid, Reflection } from '../casestudy-kit.jsx';

const RESULTS = [
  { stat: "2 wks", label: "Concept to launch", highlight: true },
  { stat: "$0", label: "Media budget — entirely organic" },
  { stat: "Earned", label: "Unpaid PR coverage including HardwareZone" },
  { stat: "Live", label: "Comment-to-conversion loop — every reply carried a real product link" },
];

export default function CaseStudyLazadaKPO() {
  return (
    <Shell glow="top right" glowColor="rgba(0,196,180,0.05)">
      <BackBar category="Social Commerce" year="2017" />
      <Hero
        accent="#00C4B4"
        title={<>K.PO. The smart speaker<br /><span style={{ color: "#00C4B4" }}>that speaks Singlish</span>.</>}
        summary="An April Fool's prank engineered as a social commerce machine. A fake Singlish-speaking shopping assistant, a fake product page that felt real, and a comment section that quietly converted."
      />
      <VideoBlock id="5fls5ssZkdo" title="Lazada's Knowledgeable Purchasing Officer [ K.PO ]" caption="Lazada's Knowledgeable Purchasing Officer [K.PO] — April Fool's Day, Singapore 2017" />
      <Narrative
        labels={["The insight", "The build", "The performance", "The conversion"]}
        blocks={[
          { accent: "#00C4B4", text: "April Fool's Day is crowded with brand gimmicks that are entertaining but forgettable. The sharper opening was a real consumer frustration: smart speakers like Alexa and Siri were gaining traction, and none of them understood colloquial Singlish. K.PO — a familiar Singlish term for a nosy busybody — had local recognition baked in before a single asset shipped." },
          { text: "K.PO launched as the Knowledgeable Purchasing Officer: a fake Singlish-speaking smart speaker shopping assistant, complete with a fake product listing page at S$49.90 so the idea felt genuinely purchasable rather than performative. Concept to launch in two weeks." },
          { accent: "#FF5C1A", text: "The activation lived in the comment section. I handled incoming comments personally, in character, in colloquial Singlish — turning each exchange into a personalised product recommendation with a real link. The prank wasn't the video. The prank was a shopping assistant that actually assisted." },
          { text: "Strong engagement, organic PR coverage including HardwareZone, and direct product recommendations driving real purchases. The conversion loop lived inside the comment thread itself — the brand never needed to push people anywhere." },
        ]}
      />
      <RoleGrid
        accent="#00C4B4"
        items={[
          { label: "Concept & insight", detail: "Originated K.PO from the gap between how tech is marketed to Singaporeans and how Singaporeans actually talk. The name did half the work." },
          { label: "Product fiction", detail: "Built the fake listing page so the prank felt purchasable — commitment to the bit is what earned the coverage." },
          { label: "Live community performance", detail: "Ran the comment section in character, in Singlish, converting banter into product recommendations with real links." },
          { label: "Speed", detail: "Concept to launch in two weeks, fitted around an immovable April 1 deadline." },
        ]}
      />
      <ResultsGrid accent="#00C4B4" results={RESULTS} />
      <Reflection accent="#00C4B4" quote="A culturally precise insight, executed quickly and run interactively, can do the work of a paid campaign. Singaporeans are deeply fluent in the gap between how things are marketed to them and how they actually talk — the most resonant creative plays directly into that gap." />
    </Shell>
  );
}
