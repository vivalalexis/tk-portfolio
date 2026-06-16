import { Shell, BackBar, Hero, Narrative, RoleGrid, ResultsGrid, Reflection } from '../casestudy-kit.jsx';

const RESULTS = [
  { stat: "70%", label: "Agency cost saving on the redesigned production model", highlight: true },
  { stat: "3×", label: "More AV and still assets for the same budget" },
  { stat: "50%", label: "Faster production timelines" },
  { stat: "Now standard", label: "The established way of working for the Wilkins portfolio" },
];

export default function CaseStudyProductionModel() {
  return (
    <Shell glow="bottom right" glowColor="rgba(255,92,26,0.06)">
      <BackBar category="Production Model Design" year="2026" />
      <Hero
        accent="#FF5C1A"
        title={<>The cost line was<br /><span style={{ color: "#FF5C1A" }}>an operating model</span><br />in disguise.</>}
        summary="The existing model was sequential, slow, and expensive, producing fewer assets each cycle for the same money. I treated it as a relationship and operating-model problem, not a cost problem, and rebuilt the workflow from the scope conversation up."
      />
      <Narrative
        labels={["The problem", "The move", "The redesign", "The principle"]}
        blocks={[
          { accent: "#FF5C1A", text: "Going into Wilkins 2026 planning, every project felt like it started from scratch. Sequential review gates meant production waited on feedback, feedback waited on revisions, and the same budget bought less each cycle. Cutting the rate card alone would have just bought worse work." },
          { text: "I worked upstream with agency partners to set clearer ways of working and tighter scope before any creative began. Then I took procurement a properly defined scope, which changed the cost conversation immediately. You can't negotiate well against a vague brief." },
          { accent: "#FF5C1A", text: "The biggest structural change: I redesigned the workflow from sequential review gates to parallel workstreams. Production, feedback, and revision ran simultaneously across asset types, without dropping review rigour. Removing the dependencies, not the quality, is what compressed the timeline." },
          { text: "Production cost problems are almost always operating-model problems wearing a budget costume. The cost line is downstream of the scope conversation, and the scope conversation is downstream of how closely the agency relationship is designed. Fix the upstream and the cost follows." },
        ]}
      />
      <RoleGrid
        accent="#FF5C1A"
        items={[
          { label: "Scope discipline", detail: "Defined scope upstream with agencies before creative development, so procurement negotiated against something real." },
          { label: "Workflow redesign", detail: "Moved from sequential review gates to parallel workstreams running production, feedback, and revision at once." },
          { label: "Vendor negotiation", detail: "Renegotiated contracts against a properly defined scope, which is where the real bargaining power sits." },
          { label: "Embedding the model", detail: "Made the redesigned model the established operating standard for the Wilkins portfolio, not a one-off." },
        ]}
      />
      <ResultsGrid accent="#FF5C1A" results={RESULTS} label="Results" />
      <Reflection accent="#FF5C1A" quote="It wasn't one blunt cost cut. It was scope discipline, upstream alignment, parallel workstreams, less iteration waste, and stronger negotiation. A system-level redesign, where the cost saving was the output, not the goal." />
    </Shell>
  );
}
