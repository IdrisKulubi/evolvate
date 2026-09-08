import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"

import { ConsultationTrigger } from "@/components/consultation-trigger"

export function Positioning() {
  return (
    <section className="positioning" aria-labelledby="positioning-title">
      <header className="positioning-intro">
        <p>Evolvate works where a business is changing</p>
        <h2 id="positioning-title">
          Three moments when
          <br />a clear decision matters.
        </h2>
      </header>

      <div className="positioning-editorial">
        <article className="positioning-start" aria-labelledby="start-title">
          <div className="positioning-chapter">
            <span>Start</span>
            <p>Startups &amp; founders</p>
          </div>
          <h3 id="start-title">
            Before you spend, prove what people will pay for.
          </h3>
          <p className="positioning-copy">
            We test the market, sharpen the offer, and put real numbers under
            the first year—so the business starts with evidence, not optimism
            alone.
          </p>
          <dl className="start-decisions">
            <div>
              <dt>Demand</dt>
              <dd>Who buys, and why</dd>
            </div>
            <div>
              <dt>Offer</dt>
              <dd>What earns the first sale</dd>
            </div>
            <div>
              <dt>Cash</dt>
              <dd>What the first year requires</dd>
            </div>
          </dl>
        </article>

        <article className="positioning-grow" aria-labelledby="grow-title">
          <div className="positioning-grow-heading">
            <div className="positioning-chapter positioning-chapter-light">
              <span>Grow</span>
              <p>Small &amp; medium businesses</p>
            </div>
            <p className="grow-side-note">
              The numbers should lead the next move.
            </p>
          </div>
          <h3 id="grow-title">
            Growth gets expensive when the numbers lag behind.
          </h3>
          <p className="positioning-copy">
            We help growing businesses decide where to invest, what to stop, and
            what the next stage will actually cost.
          </p>
          <div
            className="growth-decisions"
            aria-label="Decisions Evolvate helps growing businesses make"
          >
            <div>
              <span>Invest</span>
              <p>The offers and markets earning more attention.</p>
            </div>
            <div>
              <span>Stop</span>
              <p>The work consuming margin without moving the business.</p>
            </div>
            <div>
              <span>Fund</span>
              <p>The people, capacity, and cash the next stage needs.</p>
            </div>
          </div>
          <ConsultationTrigger className="positioning-action positioning-action-light">
            Talk through your next growth decision
            <ArrowUpRight size={18} weight="bold" aria-hidden="true" />
          </ConsultationTrigger>
        </article>

        <article
          className="positioning-advance"
          aria-labelledby="advance-title"
        >
          <div className="positioning-chapter">
            <span>Advance</span>
            <p>Established organizations</p>
          </div>
          <div className="advance-statement">
            <h3 id="advance-title">
              Big initiatives fail between strategy and execution.
            </h3>
            <p className="positioning-copy">
              We bring the plan, ownership, financial control, and decision
              structure into one operating rhythm.
            </p>
          </div>
          <ol
            className="operating-rhythm"
            aria-label="An operating rhythm for strategic initiatives"
          >
            <li>
              <span>Plan</span>
              <p>A sequence the organization can run</p>
            </li>
            <li>
              <span>Ownership</span>
              <p>Named people with clear decisions</p>
            </li>
            <li>
              <span>Control</span>
              <p>Resources, risk, and spend in view</p>
            </li>
            <li>
              <span>Review</span>
              <p>A cadence for acting on what changes</p>
            </li>
          </ol>
        </article>
      </div>
    </section>
  )
}
