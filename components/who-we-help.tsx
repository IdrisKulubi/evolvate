import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"

import { BorderGlow } from "@/components/border-glow"
import { ConsultationTrigger } from "@/components/consultation-trigger"

const audiences = [
  {
    stage: "Start",
    audience: "Startups & founders",
    title: "Turn the idea into a business case.",
    body: "Before the first major investment, we help you test demand, sharpen the offer, and understand what the first year will require.",
    focus: ["Market evidence", "Commercial model", "First-year cash"],
    moment: "When conviction needs evidence",
  },
  {
    stage: "Grow",
    audience: "Small & medium businesses",
    title: "Choose what deserves the next investment.",
    body: "When growth adds complexity, we show where margin is being made, what is consuming capacity, and what the next stage will cost.",
    focus: ["Growth priorities", "Cost visibility", "Scaling capacity"],
    moment: "When momentum needs control",
  },
  {
    stage: "Advance",
    audience: "Established organizations",
    title: "Bring control to work that crosses the organization.",
    body: "For strategic initiatives with many moving parts, we connect the plan, financial control, ownership, and review cadence.",
    focus: ["Program direction", "Clear ownership", "Delivery control"],
    moment: "When ambition needs alignment",
  },
] as const

export function WhoWeHelp() {
  return (
    <section
      className="audiences"
      id="who-we-help"
      aria-labelledby="audiences-title"
    >
      <header className="audiences-intro">
        <div>
          <p>Who we help</p>
          <h2 id="audiences-title">Different stages. Different decisions.</h2>
        </div>
        <p>
          Evolvate meets the business where it is—and brings the clarity its
          next move demands.
        </p>
      </header>

      <div className="audience-grid">
        {audiences.map((item, index) => (
          <BorderGlow
            className="audience-glow-card"
            edgeSensitivity={38}
            glowRadius={38}
            glowIntensity={1.15}
            backgroundColor={index === 1 ? "#29443a" : "#23372f"}
            colors={
              index === 1
                ? ["#a8d8b4", "#f8ffe9", "#91c2b5"]
                : ["#83b495", "#f8ffe9", "#8bb5ba"]
            }
            animated={index === 1}
            key={item.audience}
          >
            <article className="audience-card">
              <div className="audience-card-heading">
                <span>{item.stage}</span>
                <p>{item.audience}</p>
              </div>
              <h3>{item.title}</h3>
              <p className="audience-card-copy">{item.body}</p>
              <ul>
                {item.focus.map((focus) => (
                  <li key={focus}>{focus}</li>
                ))}
              </ul>
              <p className="audience-card-moment">{item.moment}</p>
            </article>
          </BorderGlow>
        ))}
      </div>

      <div className="audiences-close">
        <p>Not sure where your challenge fits?</p>
        <ConsultationTrigger className="audiences-action">
          Tell us what is changing
          <ArrowUpRight size={18} weight="bold" aria-hidden="true" />
        </ConsultationTrigger>
      </div>
    </section>
  )
}
