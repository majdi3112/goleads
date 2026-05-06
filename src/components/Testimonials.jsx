import Reveal from "./Reveal.jsx";

const items = [
  {
    quote:
      "Dankzij het onafhankelijke advies van GoLeads hebben we de perfecte zonnepanelen gevonden. De besparing op onze energierekening was direct merkbaar.",
    name: "Pieter de Bruin",
    role: "Woningeigenaar, Antwerpen"
  },
  {
    quote:
      "Het vergelijken van warmtepompen was voor ons een doolhof. GoLeads nam alle zorgen uit handen en koppelde ons aan een zeer betrouwbare installateur.",
    name: "Annelies Janssens",
    role: "Renovatieproject, Gent"
  },
  {
    quote:
      "Eindelijk een bedrijf dat echt meedenkt. Geen agressieve verkoop, maar eerlijk advies over wat het beste past bij onze specifieke woonsituatie.",
    name: "Marc Verhoeven",
    role: "Duurzaam wonen, Leuven"
  },
  {
    quote:
      "Van de eerste aanvraag tot de uiteindelijke installatie van onze laadpaal: de begeleiding was top. Een absolute aanrader voor iedereen die wil verduurzamen.",
    name: "Sophie Maes",
    role: "Energiebesparing, Brugge"
  }
];

export default function Testimonials() {
  return (
    <section className="section section-light" id="reviews">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">Reviews</span>
          <h2>Wat klanten zeggen</h2>
          <p>Echte ervaringen van klanten die we begeleidden naar een duurzamere woning.</p>
        </Reveal>

        <div className="review-grid">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 110}>
              <article className="review-card">
                <div className="review-stars">★★★★★</div>
                <p>"{t.quote}"</p>
                <footer>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
