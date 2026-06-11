import { Shell, BackBar, Hero, VideoBlock, Narrative, RoleGrid, Reflection } from '../casestudy-kit.jsx';

export default function CaseStudyDeliveroo12() {
  return (
    <Shell glow="bottom right" glowColor="rgba(0,196,180,0.05)">
      <BackBar category="Social & Content" year="2020" />
      <Hero
        accent="#00C4B4"
        title={<>$12 Value Meals.<br /><span style={{ color: "#00C4B4" }}>Food babies</span>.</>}
        summary="Value messaging is where brand voice usually goes to die. This campaign turned a price point into a punchline — family-sized meals from $12, sold with a gag instead of a discount banner."
      />
      <VideoBlock id="Cw4n3k3-prQ" title="$12 Value Meals for the Family" caption="$12 Value Meals for the Family — Deliveroo Singapore" />
      <Narrative
        labels={["The brief", "The creative", "The principle"]}
        blocks={[
          { accent: "#00C4B4", text: "Value campaigns come with a built-in trap: the louder you shout the price, the more the brand sounds like a catalogue. Deliveroo Singapore needed to land family value meals from $12 — a commercial message with zero inherent entertainment value — on social feeds built to skip exactly that." },
          { text: "The answer was to make the outcome the joke, not the price. 'We're giving birth to... food babies' — the campaign sold the after-meal state everyone recognises, with the $12 mechanic riding along instead of leading. Platform-native, self-aware, and built for the feed rather than adapted to it." },
          { accent: "#FF5C1A", text: "It's the same principle that ran through the whole Deliveroo social remit: commercial messages earn attention when they behave like content people already share. Price points are forgettable. Food babies are not." },
        ]}
      />
      <RoleGrid
        accent="#00C4B4"
        items={[
          { label: "Content strategy", detail: "Owned social content strategy and execution across Deliveroo Singapore's channels — value campaigns included, no tonal exceptions." },
          { label: "Creative direction", detail: "Steered commercial briefs toward platform-native humour the feed would actually carry." },
          { label: "Channel execution", detail: "Delivered the campaign across organic and paid social as part of the integrated social and CRM remit." },
          { label: "Brand voice", detail: "Kept Deliveroo's playful voice intact under a hard commercial brief — the discount never got to flatten the tone." },
        ]}
      />
      <Reflection accent="#00C4B4" quote="The commercial brief isn't the enemy of good creative. Treating it like one is. The discipline is finding the human truth inside the price point — there's always one — and letting that carry the message." />
    </Shell>
  );
}
