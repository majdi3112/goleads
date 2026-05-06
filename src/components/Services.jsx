import Reveal from "./Reveal.jsx";

const services = [
  {
    title: "Zonnepanelen",
    text:
      "Maximaliseer uw energie-onafhankelijkheid met hoogwaardige zonnepanelen. Wij vergelijken de beste installateurs voor uw specifieke dak en budget.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Warmtepompen",
    text:
      "Verwarm uw woning duurzaam en bespaar fors op uw gasrekening. Ontdek welke warmtepompoplossing het meest efficiënt is voor uw woonsituatie.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Laadpalen",
    text:
      "Klaar voor elektrisch rijden? Wij helpen u bij het kiezen van de juiste laadpaal voor thuis, inclusief professionele installatie en slimme sturing.",
    image:
      "https://images.pexels.com/photos/9800010/pexels-photo-9800010.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Dakrenovatie",
    text:
      "Werk samen met gecontroleerde vakmensen voor een sterk en duurzaam resultaat. Onafhankelijk advies voor uw dakproject.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Woningverbeteringen",
    text:
      "Van isolatie tot algemene renovaties: wij helpen u kiezen tussen de beste partners voor uw project.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
  }
];

export default function Services() {
  return (
    <section className="section" id="diensten">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">Onze diensten</span>
          <h2>Onze Groene Oplossingen</h2>
          <p>Wij selecteren alleen leveranciers die passen bij uw situatie en budget.</p>
        </Reveal>

        <div className="services-grid">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 90}>
              <article className="service-card">
                <div className="service-media">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
                <div className="service-body">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a className="service-link" href="#contact">
                    Meer info
                    <ArrowIcon />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
