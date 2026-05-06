import Reveal from "./Reveal.jsx";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="orb orb-a" />
        <span className="orb orb-b" />
        <span className="orb orb-c" />
      </div>

      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <span className="eyebrow">
            <span className="dot" />
            Uw partner in verduurzaming
          </span>
          <h1>
            Bespaar Slim, <br />
            <span className="text-gradient">Woon Beter</span>
          </h1>
          <p>
            Wij begeleiden u van A tot Z bij het kiezen van de juiste leverancier voor zonnepanelen,
            warmtepompen, laadpalen en renovaties. Onafhankelijk advies voor een toekomstbestendige woning.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">Vraag gratis advies aan</a>
            <a className="btn btn-ghost" href="#diensten">Bekijk diensten</a>
          </div>

          <ul className="hero-trust">
            <li>
              <CheckIcon />
              Onafhankelijke vergelijking
            </li>
            <li>
              <CheckIcon />
              Betrouwbare partners
            </li>
            <li>
              <CheckIcon />
              Persoonlijk advies op maat
            </li>
          </ul>
        </Reveal>

        <Reveal delay={150} className="hero-visual">
          <div className="hero-image-card">
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
              alt="Zonnepanelen op een woning"
            />
            <div className="hero-image-tag">
              <span className="tag-icon">⚡</span>
              <div>
                <strong>Tot 60% besparing</strong>
                <small>op uw energiefactuur</small>
              </div>
            </div>
          </div>

          <div className="hero-floating">
            <div className="hf-row">
              <div className="hf-avatar" />
              <div className="hf-text">
                <strong>4.9 / 5</strong>
                <small>Tevreden klanten</small>
              </div>
            </div>
            <div className="hf-bar">
              <span style={{ width: "94%" }} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12.5l4 4 10-10"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
