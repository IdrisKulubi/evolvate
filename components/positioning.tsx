import { ConsultationTrigger } from "@/components/consultation-trigger"

export function Positioning() {
  return (
    <section
      className="positioning"
      id="decision-points"
      aria-labelledby="positioning-title"
    >
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
            Before you spend, explore what the market will support.
          </h3>
          <p className="positioning-copy">
            We help test the market, sharpen the offer, and put numbers under
            the first year, so you start with evidence as well as conviction.
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
              The numbers should inform the next move.
            </p>
          </div>
          <h3 id="grow-title">Growth adds cost when the numbers lag behind.</h3>
          <p className="positioning-copy">
            We help growing businesses weigh where to invest, what to pause, and
            what the next stage requires.
          </p>
          <div
            className="growth-decisions"
            aria-label="Decisions Evolvate helps growing businesses make"
          >
            <div>
              <span>Invest</span>
              <p>The offers and markets that deserve more attention.</p>
            </div>
            <div>
              <span>Stop</span>
              <p>The work consuming margin without progress.</p>
            </div>
            <div>
              <span>Fund</span>
              <p>The people, capacity, and cash the next stage needs.</p>
            </div>
          </div>
          <ConsultationTrigger className="positioning-action positioning-action-light">
            Start a conversation
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
              Large initiatives often need alignment between strategy and
              execution.
            </h3>
            <p className="positioning-copy">
              We help bring the plan, ownership, financial control, and decision
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

      <div className="positioning-close">
        <p>Not sure where your challenge fits?</p>
        <ConsultationTrigger className="positioning-close-action">
          Start a conversation
        </ConsultationTrigger>
      </div>
    </section>
  )
}
