import Reveal from "./Reveal.jsx";

export default function CTA() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="cta-banner">
          <div>
            <span className="kicker on-dark">Klaar voor de toekomst?</span>
            <h2>Wacht niet langer met verduurzamen</h2>
            <p>
              Ontvang onafhankelijk advies op maat en vind de beste leverancier voor uw zonnepanelen,
              warmtepomp, laadpaal of renovatie.
            </p>
          </div>
          <a className="btn btn-light" href="#contact">Vraag gratis advies aan</a>
        </Reveal>
      </div>
    </section>
  );
}
