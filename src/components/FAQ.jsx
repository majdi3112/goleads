import { useState } from "react";
import Reveal from "./Reveal.jsx";

const faqs = [
  {
    q: "Is het advies echt gratis en vrijblijvend?",
    a: "Ja. Onze eerste vergelijking en het advies zijn volledig gratis en vrijblijvend."
  },
  {
    q: "Werken jullie met gecontroleerde partners?",
    a: "Wij brengen u alleen in contact met betrouwbare en gecontroleerde leveranciers in België."
  },
  {
    q: "Welke regio bedienen jullie?",
    a: "Wij zijn actief in heel België. Met een sterk netwerk van lokale installateurs."
  },
  {
    q: "Hoe snel ontvang ik een reactie?",
    a: "Doorgaans nemen wij binnen 24 uur contact met u op om uw project te bespreken."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section section-light" id="faq">
      <div className="container">
        <Reveal className="section-head">
          <span className="kicker">FAQ</span>
          <h2>Veelgestelde vragen</h2>
          <p>Antwoorden op de vragen die we het meest krijgen.</p>
        </Reveal>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={i * 80}>
              <button
                className={`faq-item ${openIndex === i ? "is-open" : ""}`}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                aria-expanded={openIndex === i}
              >
                <span className="faq-q">
                  {item.q}
                  <span className="faq-toggle" aria-hidden="true">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </span>
                <span className="faq-a">{item.a}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
