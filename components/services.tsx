import { ConsultationTrigger } from "@/components/consultation-trigger"
import { EditorialPhoto } from "@/components/editorial-photo"
import { ServiceMotion } from "@/components/service-motion"

const services = [
  {
    name: "Business development",
    layout: "opportunity",
    statement: "See where growth can come from before you commit.",
    description:
      "We help you test demand, understand the competitive field, and shape a plan your team can work from, with evidence behind the direction.",
    focusLabel: "How we support direction",
    focus: [
      "Who is likely to buy, and where demand looks real",
      "Where you stand against alternatives",
      "Options for the next market move",
    ],
    outcome: "A clearer growth choice, supported by research and analysis.",
  },
  {
    name: "Financial management",
    layout: "control",
    statement:
      "Connect budgets, forecasts, and costs to the decisions in front of you.",
    description:
      "We help link financial information to the questions leaders need to discuss now, not only after the period closes.",
    focusLabel: "What we often support",
    focus: [
      "Cash and forecast views you can explain in a meeting",
      "Costs tied to performance, not only the ledger",
      "Project accounts that show where money is going",
    ],
    outcome: "Stronger financial visibility to inform your next steps.",
  },
  {
    name: "Project management",
    layout: "delivery",
    statement: "Help keep delivery moving after the strategy conversation.",
    description:
      "We support ownership, sequencing, risk visibility, and a practical review rhythm around the work.",
    focusLabel: "How we support delivery",
    focus: [
      "Clarify owners and the sequence of work",
      "Align people and budget with the plan",
      "Surface risk early enough to act",
    ],
    outcome: "Initiatives with clearer accountability and rhythm.",
  },
  {
    name: "Project controls",
    layout: "control",
    statement:
      "Strengthen cost, schedule, and performance insight on complex work.",
    description:
      "We support financial management, project performance, and control strategies, including on large programmes in Sweden.",
    focusLabel: "Where this applies",
    focus: [
      "Cost and progress reporting leaders can use",
      "Controls aligned to programme scale",
      "Financial and delivery data brought together",
    ],
    outcome: "Project controls that support informed programme decisions.",
  },
] as const

export function Services() {
  return (
    <ServiceMotion className="services" id="services">
      <header className="services-intro">
        <h2 id="services-title">
          Services that work
          <br />
          <em>together.</em>
        </h2>
        <div className="services-intro-copy">
          <p>
            Growth, finance, and delivery influence each other. We help you look
            at them in one view so trade-offs are easier to see.
          </p>
          <span>Strategy · finance · delivery · controls</span>
        </div>
      </header>

      <EditorialPhoto
        src="/images/working-session.png"
        alt="Three colleagues reviewing printed project schedules and cost charts at a table"
        label="In practice"
        caption="Working sessions built around your numbers, your plan, and your people."
      />

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
          Not sure which area fits? Tell us about the decision or challenge you
          are weighing.
        </p>
        <ConsultationTrigger className="services-action">
          Start a conversation
        </ConsultationTrigger>
      </footer>
    </ServiceMotion>
  )
}
