import Reveal from "./Reveal.jsx";
import { publicUrl } from "../lib/publicUrl.js";

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
          <img
            className="hero-logo"
            src={publicUrl("images/goleads-logo-hero.png")}
            alt="GoLeads"
          />
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
            thuisbatterijen, warmtepompen, laadpalen, bouwwerk aan huis en renovaties. Onafhankelijk advies
            voor een toekomstbestendige woning.
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
              src={publicUrl("images/woning-duurzaam.png")}
              alt="Duurzame woning met zonnepanelen en laadpaal"
            />
          </div>

          <div className="hero-floating" role="note" aria-label="Resultaten en tevredenheid">
            <div className="hf-block">
              <div className="hf-row">
                <div className="hf-avatar" aria-hidden="true" />
                <div className="hf-text">
                  <strong>4.9 / 5</strong>
                  <small>Tevreden klanten</small>
                </div>
              </div>
              <div className="hf-bar" aria-hidden="true">
                <span style={{ width: "98%" }} />
              </div>
            </div>

            <div className="hf-divider" aria-hidden="true" />

            <div className="hf-block hf-savings">
              <span className="hf-label" aria-hidden="true">Besparing</span>
              <strong>Tot 60% besparing</strong>
              <small>op uw energiefactuur</small>
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
