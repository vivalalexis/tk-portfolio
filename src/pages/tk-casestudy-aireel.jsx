import { Shell, BackBar, Hero, Narrative, RoleGrid, ResultsGrid, Reflection, LinkOut } from '../casestudy-kit.jsx';

const RESULTS = [
  { stat: "1 day", label: "Morning coffee to dinner — concept to finished trailer", highlight: true },
  { stat: "60 sec", label: "Satire-noir show trailer, fully AI-produced" },
  { stat: "4", label: "Tools in the stack: Claude Code, ElevenLabs, Suno, Higgsfield" },
  { stat: "1", label: "Person. No crew, no studio, no production budget." },
];

export default function CaseStudyAIReel() {
  return (
    <Shell glow="bottom left" glowColor="rgba(0,196,180,0.05)">
      <BackBar category="AI Build · Side Project" year="2026" />
      <Hero
        accent="#00C4B4"
        title={<>A show, MVP'd<br /><span style={{ color: "#00C4B4" }}>in a day</span>.</>}
        summary="Sixty seconds of satire-noir, produced solo between morning coffee and dinner: Claude Code, ElevenLabs, Suno, Higgsfield. AI 10x'd the execution. It didn't touch the part that's still the job."
      />
      <Narrative
        labels={["The experiment", "The stack", "The thesis", "The bigger idea"]}
        blocks={[
          { accent: "#00C4B4", text: "Could one marketer with no video production background MVP a show in a day? That was the whole experiment. The answer was a 60-second satire-noir trailer — script, voice, score, and footage — produced solo in the hours between morning coffee and dinner." },
          { text: "Claude Code ran the build and the writing room. ElevenLabs voiced it. Suno scored it. Higgsfield shot it. Every tool produced multiple variations of every asset — which is exactly where the real work started." },
          { accent: "#FF5C1A", text: "AI 10x'd execution. It didn't touch taste. The tools hand you five competent options for every shot, line, and music cue; only one is the one, and knowing which is still the job. Posting the result publicly — 'I genuinely don't know if this is good' — was part of the point: execution is cheap now, judgment isn't." },
          { text: "The trailer carries a bigger idea: a series ecosystem where brand partnerships are native to the story — the interactive territory Bandersnatch opened, applied to branded entertainment. The MVP exists to test whether the rest of it should." },
        ]}
      />
      <LinkOut href="https://www.linkedin.com/feed/update/urn:li:activity:7458289567000055808/" label="Watch the trailer on LinkedIn" accent="#00C4B4" />
      <RoleGrid
        accent="#00C4B4"
        items={[
          { label: "Concept & writing", detail: "Premise, world, and script for a satire-noir show — the creative decisions AI can execute but not originate." },
          { label: "AI production direction", detail: "Ran a four-tool stack as a one-person studio: build, voice, score, and footage, each curated from multiple generated variations." },
          { label: "Taste as the filter", detail: "The job was selection: which voice read, which cue, which cut. Execution was abundant; judgment was the scarce input." },
          { label: "Format thinking", detail: "Designed the trailer as the MVP of a branded-entertainment series format, not a one-off content piece." },
        ]}
      />
      <ResultsGrid accent="#00C4B4" results={RESULTS} label="The build" />
      <Reflection accent="#00C4B4" quote="AI made every visible marketing skill cheaper. Copy, design, video, code. What it can't generate is the judgment to choose between two competent options and know which is better in context. That's the skill worth compounding now." />
    </Shell>
  );
}
