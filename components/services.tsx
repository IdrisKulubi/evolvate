import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"

import { ConsultationTrigger } from "@/components/consultation-trigger"
import { ServiceMotion } from "@/components/service-motion"

const services = [
  {
    name: "Business development",
    layout: "opportunity",
    statement: "Know where growth is coming from before you chase it.",
    description:
      "We test demand, map the competitive field, and turn the strongest opportunity into a plan your team can act on.",
    focusLabel: "How we find direction",
    focus: [
      "Who will buy, and where demand is real",
      "Where you stand against alternatives",
      "A plan for the next market move",
    ],
    outcome: "A growth choice with evidence behind it.",
  },
  {
    name: "Financial management",
    layout: "control",
    statement: "See the decision hiding inside the numbers.",
    description:
      "We connect budgets, forecasts, costs, and project accounts to the choices leaders need to make now, not after the quarter closes.",
    focusLabel: "What leaders usually need",
    focus: [
      "Cash and forecast you can defend in a meeting",
      "Costs tied to performance, not only the ledger",
      "Project accounts that show where money is going",
    ],
    outcome: "Financial control that changes what happens next.",
  },
  {
    name: "Project management",
    layout: "delivery",
    statement: "Keep the work moving after the strategy meeting ends.",
    description:
      "We establish ownership, sequence resources, surface risk, and build a practical review rhythm around delivery.",
    focusLabel: "How delivery stays on track",
    focus: [
      "Name owners and the sequence of work",
      "Match people and budget to the plan",
      "Review risk before it becomes delay",
    ],
    outcome: "Critical initiatives that stay accountable.",
  },
] as const

export function Services() {
  return (
    <ServiceMotion className="services">
      <header className="services-intro">
        <h2 id="services-title">
          Services that work
          <br />
          <em>together.</em>
        </h2>
        <div className="services-intro-copy">
          <p>
            A growth plan changes cash. A financial choice changes delivery. We
            connect all three before the gaps get expensive.
          </p>
          <span>One business view. Three connected disciplines.</span>
        </div>
      </header>

      <div className="services-register">
        {services.map((service) => (
          <article
            className={`service-row service-row-${service.layout}`}
            data-service-row
            key={service.name}
          >
            <span
              className="service-rule"
              data-service-rule
              aria-hidden="true"
            />
            <header className="service-heading" data-service-part>
              <h3>{service.name}</h3>
              <p className="service-dek">{service.statement}</p>
            </header>
            <div className="service-body" data-service-part>
              <p>{service.description}</p>
            </div>
            <div className="service-focus" data-service-part>
              <p className="service-focus-label">{service.focusLabel}</p>
              <ul
                className={
                  service.layout === "delivery"
                    ? "service-sequence"
                    : "service-ledger"
                }
              >
                {service.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <p className="service-outcome" data-service-part>
              {service.outcome}
            </p>
          </article>
        ))}
      </div>

      <footer className="services-footer">
        <p>
          Not sure which service fits? Start with the decision that is hardest
          to make.
        </p>
        <ConsultationTrigger className="services-action">
          Bring us the decision
          <ArrowUpRight size={18} weight="bold" aria-hidden="true" />
        </ConsultationTrigger>
      </footer>
    </ServiceMotion>
  )
}
