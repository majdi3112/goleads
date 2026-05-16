import Reveal from "./Reveal.jsx";

const steps = [
  {
    n: "01",
    title: "Vrijblijvende aanvraag",
    text: "Deel uw wensen voor woningverbetering via ons eenvoudige formulier voor een eerste analyse."
  },
  {
    n: "02",
    title: "Persoonlijk advies",
    text: "Onze experts vergelijken onafhankelijk de beste leveranciers op basis van uw specifieke situatie."
  },
  {
    n: "03",
    title: "De juiste match",
    text: "Wij brengen u in contact met gecontroleerde partners die de hoogste kwaliteit en service bieden."
  },
  {
    n: "04",
    title: "Start uw besparing",
    text: "Geniet van een vakkundige installatie en begin direct met het verlagen van uw energiekosten."
  }
];

export default function Process() {
  return (
    <section className="section section-light" id="werkwijze">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">Onze werkwijze</span>
          <h2>De Weg naar Besparing</h2>
          <p>
            Van zonnepanelen en thuisbatterijen tot warmtepompen en bouwwerk aan huis: wij begeleiden u van A tot Z
            naar een duurzamere woning met de beste leveranciers van België.
          </p>
        </Reveal>

        <div className="process-grid">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 120}>
              <article className="process-card">
                <span className="process-num">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} className="process-cta">
          <a className="btn btn-primary" href="#contact">Vraag gratis advies aan</a>
        </Reveal>
      </div>
    </section>
  );
}
