import { Shell, BackBar, Hero, Narrative, RoleGrid, ResultsGrid, Reflection, LinkOut } from '../casestudy-kit.jsx';

const RESULTS = [
  { stat: "3 days", label: "Idea to functional prototype, using AI as a build partner", highlight: true },
  { stat: "3", label: "Core variables: feeding, activity, potty behaviour" },
  { stat: "ML", label: "Predictive scheduling engine that learns from logged behaviour" },
  { stat: "Live", label: "The model is still learning. The dog remains unbothered." },
];

export default function CaseStudyPawcast() {
  return (
    <Shell glow="top right" glowColor="rgba(255,92,26,0.04)">
      <BackBar category="AI Build · Side Project" year="2026" />
      <Hero
        accent="#FF5C1A"
        title={<>Pawcast. A weather report<br /><span style={{ color: "#FF5C1A" }}>for my dog's bladder</span>.</>}
        summary="A marketer built a machine learning model to predict a dog's potty schedule. The absurd premise was the point: prove the build-depth positioning with a working artefact, not a talking point."
      />
      <Narrative
        labels={["The premise", "The build", "The mistake", "The lesson"]}
        blocks={[
          { accent: "#FF5C1A", text: "'Builds as well as briefs' is an easy claim to make and a hard one to prove. Pawcast was the proof: a pet care app with a predictive potty scheduling engine that learns from logged behaviour data. Functional prototype in three days, built with AI as the build partner." },
          { text: "The model started honest: three variables — feeding times, walks and play, potty behaviour. And it worked. Then ambition kicked in: sleep cycles, rest patterns, activity intensity, all piled in at once without giving the model time to test against new inputs. The accuracy numbers stayed respectable while the model quietly stopped adapting to the present." },
          { accent: "#00C4B4", text: "That's overfitting — the model memorised the past instead of learning from it. And it doesn't look like failure while it's happening. The fix was subtraction, not addition: strip back, let it breathe against new data, check it was responding to the world in front of it rather than the world it had memorised." },
          { text: "Marketing has the same disease under a different name. A campaign that worked gets replicated with more budget, more channels, more layers — and underperforms, because the original insight got buried before anyone understood what was driving the result. We don't call it overfitting. We call it scaling too fast." },
        ]}
      />
      <LinkOut href="https://www.linkedin.com/feed/update/urn:li:activity:7432967717252407296/" label="Read the full build story on LinkedIn" accent="#FF5C1A" />
      <RoleGrid
        accent="#FF5C1A"
        items={[
          { label: "Problem framing", detail: "Defined a real, testable prediction problem from messy household data — the part AI can't do for you." },
          { label: "Hands-on build", detail: "Built the app and the scheduling engine end to end with AI as build partner. No engineering team, no handoffs." },
          { label: "Model discipline", detail: "Diagnosed the overfitting failure, fixed it by subtraction, and now adds variables only after the model proves itself against new data." },
          { label: "Transferable judgment", detail: "Applied the same discipline to marketing instincts: understand what's driving the result before adding layers on top." },
        ]}
      />
      <ResultsGrid accent="#FF5C1A" results={RESULTS} label="The build" />
      <Reflection accent="#FF5C1A" quote="AI doesn't replace judgment — it collapses the cost of trying. The build cycle used to be the bottleneck between having an idea and testing it. Now the bottleneck is the quality of the problem framing." />
    </Shell>
  );
}
