import RotatingHeadline from "@/components/RotatingHeadline";
import Ticker from "@/components/Ticker";
import Faq from "@/components/Faq";
import { site, whatsappUrl } from "@/lib/site";

const problems = [
  ["People judge in seconds", "Your site, your ads and your socials are read as one story. If it feels inconsistent, trust drops before anyone talks to you."],
  ["Channels run in silos", "SEO, paid and social each chase their own numbers while the customer sees a disjointed brand."],
  ["Reports without direction", "Dashboards full of vanity metrics don't tell you what to do next."],
];

const services = [
  ["Brand & identity", "A clear voice and look that holds up on every screen."],
  ["Web design & build", "Fast, accessible sites designed to convert."],
  ["SEO & content", "Be found by people already looking for you."],
  ["Paid media", "Search and social campaigns tied to real revenue."],
  ["Social & community", "Consistent presence that people actually follow."],
  ["Analytics & CRM", "Measurement that points to the next decision."],
];

const steps = [
  ["01", "Listen", "We learn your customers, numbers and constraints."],
  ["02", "Plan", "A focused plan with clear priorities and owners."],
  ["03", "Launch", "We ship quickly and test in the open."],
  ["04", "Improve", "Monthly reviews turn results into the next move."],
];

const principles = [
  ["Clarity over cleverness", "If a customer has to decode it, it isn't working."],
  ["Proof, not promises", "We agree on measures up front and report them plainly."],
  ["Small team, senior hands", "The people you meet are the people doing the work."],
];

export default function Home() {
  return (
    <>
      <div className="tfi-masthead bg-paper">
        <p>Digital marketing agency</p>
        <p>Strategy · Creative · Performance</p>
      </div>

      <section className="tfi-hero bg-ink">
        <div className="tfi-hero__inner">
          <RotatingHeadline
            lead="Your customers decide in seconds."
            line="Make your first impression"
            words={site.rotatingWords}
          />
          <p className="tfi-hero__lede">
            We design and run the marketing that makes people remember you, from brand to build to growth.
          </p>
          <div className="btn-row">
            <a className="btn" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Start a project</a>
            <a className="btn btn--outline" href="#work">See the work</a>
          </div>
        </div>
      </section>

      <Ticker />

      <section className="tfi-section bg-paper">
        <div className="wrap tfi-grid-2">
          <p className="tfi-pullquote tfi-reveal">Most marketing fails in the first few seconds.</p>
          <div className="tfi-reveal">
            {problems.map(([h, p]) => (
              <div className="tfi-problem__item" key={h}>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="tfi-section bg-sand">
        <div className="wrap">
          <p className="tfi-eyebrow">Services</p>
          <h2 style={{ margin: ".75rem 0 3rem" }}>What we do</h2>
          <div>
            {services.map(([t, d], i) => (
              <div className="tfi-service-row tfi-reveal" key={t}>
                <p className="tfi-service-row__num">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="tfi-service-row__title"><a href={whatsappUrl(`Hi, I'm interested in ${t}.`)} target="_blank" rel="noopener noreferrer">{t}</a></h3>
                <p className="tfi-service-row__desc">{d}</p>
                <p className="tfi-service-row__arrow" aria-hidden="true">→</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="tfi-section bg-paper">
        <div className="wrap">
          <p className="tfi-eyebrow">Process</p>
          <h2 style={{ margin: ".75rem 0 3rem" }}>How we work</h2>
          <div className="tfi-grid-4">
            {steps.map(([n, t, d]) => (
              <div className="tfi-step tfi-reveal" key={n}>
                <p className="tfi-step__num">{n}</p>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="tfi-section bg-ink">
        <div className="wrap">
          <p className="tfi-eyebrow">The work</p>
          <h2 style={{ margin: ".75rem 0 3rem" }}>Recent stories</h2>
          <div className="tfi-work__grid">
            <article className="tfi-story tfi-story--feature tfi-reveal">
              <p className="tfi-label">Case study</p>
              <h3><a href="#work">Placeholder: a rebrand that doubled enquiries</a></h3>
              <p className="tfi-story__note">Replace with a real client story.</p>
            </article>
            <div className="tfi-work__side">
              <article className="tfi-story tfi-reveal">
                <p className="tfi-label">Case study</p>
                <h3><a href="#work">Placeholder: local SEO for a clinic chain</a></h3>
              </article>
              <article className="tfi-story tfi-reveal">
                <p className="tfi-label">Case study</p>
                <h3><a href="#work">Placeholder: paid social for a D2C launch</a></h3>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="tfi-section bg-paper">
        <div className="wrap">
          <p className="tfi-eyebrow">Principles</p>
          <h2 style={{ margin: ".75rem 0 3rem" }}>What we believe</h2>
          <div className="tfi-grid-3">
            {principles.map(([t, d]) => (
              <div className="tfi-principle tfi-reveal" key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq />

      <section className="tfi-section tfi-cta bg-signal on-signal">
        <div className="wrap">
          <h2>Ready to make it memorable?</h2>
          <p>Tell us what you&apos;re working on. We&apos;ll reply within one working day.</p>
          <div className="btn-row">
            <a className="btn btn--dark" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>
            <a className="btn btn--outline" href={`mailto:${site.email}`}>Email us</a>
          </div>
        </div>
      </section>
    </>
  );
}
