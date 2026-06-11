import { Shell, BackBar, Hero, VideoBlock, Narrative, RoleGrid, ResultsGrid, Reflection } from '../casestudy-kit.jsx';

const RESULTS = [
  { stat: "Viral", label: "Organic pickup across SG, MY, PH, TH, ID — zero PR seeding", highlight: true },
  { stat: "$0", label: "Paid media behind the launch" },
  { stat: "0", label: "Negative backlash incidents — risk framework held" },
  { stat: "+144%", label: "Engagement growth across Lazada social during tenure" },
];

export default function CaseStudyLazadaMothersDay() {
  return (
    <Shell glow="bottom left" glowColor="rgba(255,92,26,0.05)">
      <BackBar category="Social & Creative Risk" year="2017" />
      <Hero
        accent="#FF5C1A"
        title={<>Mother's Day.<br /><span style={{ color: "#FF5C1A" }}>Buy her some shit</span>.</>}
        summary="Every brand fights for the same sentimental space on Mother's Day. Lazada sent in a rapping mum who told her kids to skip the card and buy her things. It went viral across five markets with zero PR seeding."
      />
      <VideoBlock id="R8TTWD279HY" title="Lazada Mother's Day: Buy Me..." caption="Lazada Mother's Day: Buy Me... — Singapore, 2017" />
      <Narrative
        labels={["The cliché", "The pivot", "The risk", "The payoff"]}
        blocks={[
          { accent: "#FF5C1A", text: "Mother's Day is one of the most cluttered brand moments of the year — almost entirely formulaic, sentimental territory. Every brand competing for the same predictable emotional space, saying the same thing: what mums really want is love and attention. Cutting through meant refusing to play." },
          { text: "The creative deliberately set up the familiar sentimental tone — soft lighting, a mum on a couch, a gentle interview format — then pivoted abruptly into a full rap music video about what she actually wants: for her kids to buy her some shit. The closing line was the internal point of tension. Softening it would have kept the risk but killed the impact." },
          { accent: "#00C4B4", text: "Provocative creative doesn't get senior sign-off on charm. It gets sign-off on a plan. I built the full creative risk framework around the line: pre-drafted response scenarios, pull thresholds, escalation protocols. That converted a deliberately provocative creative decision into a commercially responsible one." },
          { text: "Launched organically with no paid spend and no PR seeding. The video went viral across Singapore, Malaysia, the Philippines, Thailand, and Indonesia, picked up by multiple publications on its own momentum. Strong engagement. Zero negative backlash — the framework never had to fire." },
        ]}
      />
      <RoleGrid
        accent="#FF5C1A"
        items={[
          { label: "Creative direction", detail: "Pushed to preserve the provocative closing line when softening it was the easy path — the edge was the idea, not a garnish on it." },
          { label: "Risk management", detail: "Built the full risk framework: pre-drafted response scenarios, pull thresholds, escalation protocols. Made the hard call an easy call for senior stakeholders." },
          { label: "Stakeholder sign-off", detail: "Secured senior approval for deliberately provocative creative by pairing the risk with a plan, not an apology." },
          { label: "Launch strategy", detail: "Organic-first release with no PR seeding — the work had to earn its own attention, and did." },
        ]}
      />
      <ResultsGrid accent="#FF5C1A" results={RESULTS} />
      <Reflection accent="#FF5C1A" quote="The creative edge is often exactly what gives the work its power. Senior sign-off isn't blocked by risk itself — it's blocked by the absence of a plan for the risk. Build the guardrails and the hard call becomes an easier call." />
    </Shell>
  );
}
