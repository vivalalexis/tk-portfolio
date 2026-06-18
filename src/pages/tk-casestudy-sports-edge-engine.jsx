import { Shell, BackBar, Hero, Narrative, ImageBlock, RoleGrid, ResultsGrid, Reflection } from '../casestudy-kit.jsx';

const RESULTS = [
  { stat: "CLV", label: "Closing line value as the validation signal, not short-term profit", highlight: true },
  { stat: "6-tab", label: "Scan, Research, Predict, Risk, Log, Review pipeline" },
  { stat: "Paper-first", label: "Validates its own edge before any money is risked" },
  { stat: "Self-sceptical", label: "Reliability scoring discounts edge when the evidence is weak" },
];

export default function CaseStudySportsEdgeEngine() {
  return (
    <Shell glow="bottom right" glowColor="rgba(30,122,70,0.08)">
      <BackBar category="AI Build · Side Project" year="2026" />
      <Hero
        accent="#2E9E5B"
        title={<>A system built<br /><span style={{ color: "#2E9E5B" }}>to doubt itself</span>.</>}
        summary="A second, more technically demanding build to back the 'I build, not just brief' claim. The brief I set myself: apply quantitative trading principles to Australian sports markets. The hard part wasn't finding apparent value, it was building something that could tell me whether its own recommendations deserved trust."
      />
      <Narrative
        labels={["The brief", "The pipeline", "The evidence loop", "The lesson"]}
        blocks={[
          { accent: "#2E9E5B", text: "The public framing is an AI value bot. The honest mechanism is positive expected-value betting validated by closing line value, not guaranteed arbitrage. I wanted a build where the interesting engineering was the governance, not the prediction." },
          { text: "A six-tab pipeline in React/TypeScript on Supabase. Scan pulls live odds across AU bookmakers; Research uses the Claude API for injury, form, and conditions adjustments; Predict combines sport-specific models, Elo for AFL and NRL, Poisson for EPL, surface-adjusted Elo for tennis, with that research signal to flag value against a threshold." },
          { accent: "#2E9E5B", text: "The part I'm proudest of is the evidence loop. A scheduled job captures closing odds around match start, measures CLV, and scores segment-level reliability that discounts raw edge when sample, calibration, or data quality is weak. Conservative five-tier stake guidance, and guidance versioning so historical recommendations are never silently rewritten." },
          { text: "Confidence should be earned, not asserted, and operational quality corrupts analytical conclusions if you don't monitor it. The same discipline maps straight onto marketing measurement: a result you can't trace to clean inputs and a stable method is a guess with a decimal point." },
        ]}
      />
      <ImageBlock
        src="/tk-see-scan.jpg"
        alt="Sports Edge Engine Scan tab — live odds across AU bookmakers with best price and implied probability"
        caption="SCAN — LIVE ODDS ACROSS AU BOOKMAKERS, BEST PRICE AND IMPLIED PROBABILITY FLAGGED"
        accent="#2E9E5B"
      />
      <ImageBlock
        src="/tk-see-review.jpg"
        alt="Sports Edge Engine Review tab — CLV, close capture, and reliability breakdowns by sport, odds band, and edge band"
        caption="REVIEW — THE EVIDENCE LOOP: CLV, CLOSE CAPTURE, AND RELIABILITY SCORED BY SEGMENT"
        accent="#2E9E5B"
      />
      <RoleGrid
        accent="#2E9E5B"
        items={[
          { label: "Pipeline architecture", detail: "Built the six-tab Scan-to-Review flow end to end on React/TypeScript and Supabase." },
          { label: "Probability modelling", detail: "Combined sport-specific base models with a Claude API research signal to flag value against a threshold." },
          { label: "Evidence & governance", detail: "Automated closing-odds capture, CLV measurement, reliability scoring, and conservative staged stake guidance." },
          { label: "Build depth", detail: "Edge functions, scheduled jobs, row-level security, and the calculation modules, with AI as the build partner." },
        ]}
      />
      <ResultsGrid accent="#2E9E5B" results={RESULTS} label="The build" />
      <Reflection accent="#2E9E5B" quote="The interesting engineering wasn't the prediction, it was the scepticism around it. I built a system whose main job is to distrust its own outputs until the evidence earns the confidence." />
    </Shell>
  );
}
