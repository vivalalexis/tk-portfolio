import { Shell, BackBar, Hero, Narrative, RoleGrid, ResultsGrid, Reflection } from '../casestudy-kit.jsx';

const RESULTS = [
  { stat: "Shipped", label: "Working interview teleprompter and rehearsal platform", highlight: true },
  { stat: "Deterministic", label: "Manual navigation over AI control in the core flow, by design" },
  { stat: "CSV / JSON", label: "Question-and-answer import, rehearsal mode, cheat sheets" },
  { stat: "1 use case", label: "Built around high-stakes prep where predictability beats cleverness" },
];

export default function CaseStudyGhostMode() {
  return (
    <Shell glow="top left" glowColor="rgba(74,74,106,0.12)">
      <BackBar category="AI Build · Side Project" year="2026" />
      <Hero
        accent="#8B8BB5"
        title={<>The smartest AI<br />decision is knowing<br /><span style={{ color: "#8B8BB5" }}>where not to use it</span>.</>}
        summary="I turned a personal frustration, high-pressure interview and presentation prep, into a structured product. An interview teleprompter and rehearsal platform, built around a flow where predictability matters more than cleverness."
      />
      <Narrative
        labels={["The frustration", "The product", "The choice", "The lesson"]}
        blocks={[
          { accent: "#8B8BB5", text: "High-stakes prep is its own kind of stress: the right notes, in the right order, without scrambling mid-answer. I wanted a tool built for that exact moment, not a general note app bent into the shape of one." },
          { text: "I scoped and built it with project and session management, a pop-out teleprompter, question-and-answer importing via CSV and JSON, rehearsal mode, resizable layouts, and interview cheat sheets. A working tool, not a concept." },
          { accent: "#8B8BB5", text: "The deliberate design choice was manual, deterministic navigation rather than AI-driven control, with AI matching held as an optional later layer. I evaluated where AI added value and where it introduced unwanted unpredictability, and chose reliability over novelty in the core flow." },
          { text: "The interesting AI decision is often where not to use it. In a live, high-pressure flow, deterministic behaviour beats a model that might surprise you. Knowing that boundary is part of AI fluency, not a lack of it." },
        ]}
      />
      <RoleGrid
        accent="#8B8BB5"
        items={[
          { label: "Product scoping", detail: "Defined the tool around one high-stakes use case rather than a general-purpose note app." },
          { label: "UX architecture", detail: "Built session management, a pop-out teleprompter, rehearsal mode, resizable layouts, and cheat sheets." },
          { label: "Data import", detail: "Added question-and-answer importing via CSV and JSON so prep content loads cleanly." },
          { label: "Judgement on AI", detail: "Chose deterministic navigation in the core flow, holding AI matching as an optional later layer." },
        ]}
      />
      <ResultsGrid accent="#8B8BB5" results={RESULTS} label="The build" />
      <Reflection accent="#8B8BB5" quote="Predictability beat cleverness, on purpose. In a live, high-pressure flow, a model that might surprise you is a liability. Choosing reliability there is the fluency, not the gap in it." />
    </Shell>
  );
}
