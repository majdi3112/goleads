const { useMemo, useState, useEffect, useRef } = React;

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  const style = { transitionDelay: `${delay}ms` };
  return (
    <div
      ref={ref}
      style={style}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

function CountUp({ end, suffix = "", duration = 1400 }) {
  const [ref, visible] = useReveal();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let raf;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [visible, end, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

function App() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const services = [
    {
      title: "Zonnepanelen",
      text: "Vergelijk installateurs en haal maximaal rendement uit je dak.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Laadpalen",
      text: "Slim laden thuis met betrouwbare partners en duidelijk advies.",
      image: "https://images.unsplash.com/photo-1593941707882-a56bbc8df5a3?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Warmtepompen",
      text: "Vind het juiste systeem voor comfort en lagere energiekosten.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Dakrenovatie",
      text: "Kies gecontroleerde vakmensen voor een duurzaam resultaat.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Woningverbetering",
      text: "Van renovatie tot energiebesparing: alles onder begeleiding.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const reasons = [
    "Onafhankelijke vergelijking van leveranciers",
    "Persoonlijk advies op maat",
    "Volledige begeleiding van begin tot eind",
    "Focus op besparen en duurzaamheid"
  ];

  const steps = [
    { id: "1", title: "Vrijblijvende aanvraag", text: "Jij deelt je plannen, wij doen een eerste analyse." },
    { id: "2", title: "Onafhankelijke vergelijking", text: "Wij vergelijken de beste leveranciers voor jouw situatie." },
    { id: "3", title: "Persoonlijk advies", text: "Je ontvangt helder advies met de beste match." },
    { id: "4", title: "Start met besparen", text: "Je kiest de partner en maakt je woning toekomstklaar." }
  ];

  const testimonials = [
    { name: "Pieter", city: "Antwerpen", quote: "Snelle begeleiding en direct de juiste partij gevonden voor onze zonnepanelen." },
    { name: "Annelies", city: "Gent", quote: "Geen gedoe met offertes vergelijken. Alles werd duidelijk uitgelegd." },
    { name: "Sophie", city: "Brugge", quote: "Heel professioneel en persoonlijk. We besparen nu merkbaar op energiekosten." }
  ];

  const faqs = [
    {
      q: "Is het advies echt gratis?",
      a: "Ja, het eerste advies en de vergelijking zijn gratis en vrijblijvend."
    },
    {
      q: "Werken jullie met gecontroleerde partners?",
      a: "Ja, wij brengen je alleen in contact met betrouwbare en gecontroleerde leveranciers."
    },
    {
      q: "Voor welke regio zijn jullie actief?",
      a: "Wij focussen op Belgie en begeleiden klanten in verschillende regio's."
    }
  ];

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const subject = encodeURIComponent(`Aanvraag advies - ${formData.service || "Dus GoLeads"}`);
    const body = encodeURIComponent(
      `Naam: ${formData.name}\nE-mail: ${formData.email}\nInteresse: ${formData.service}\n\nBericht:\n${formData.message}`
    );
    window.location.href = `mailto:info@goleads.be?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <div className="page-bg">
        <span className="blob one"></span>
        <span className="blob two"></span>
        <span className="blob three"></span>
      </div>

      <header className="header">
        <div className="container header-inner">
          <a className="brand" href="#top">Dus GoLeads</a>
          <nav className="nav">
            <a href="#diensten">Diensten</a>
            <a href="#waarom">Waarom wij</a>
            <a href="#werkwijze">Werkwijze</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn btn-primary" href="#contact">Gratis advies</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <Reveal>
              <span className="eyebrow">Vergelijken - Adviseren - Begeleiden</span>
              <h1>Bespaar slim en geef je woning een duurzame upgrade</h1>
              <p>
                Dus GoLeads helpt je de juiste leverancier kiezen voor zonnepanelen,
                laadpalen, warmtepompen en renovaties. Modern, betrouwbaar en volledig op maat.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contact">Vraag gratis advies aan</a>
                <a className="btn btn-outline" href="#diensten">Bekijk diensten</a>
              </div>
            </Reveal>

            <Reveal delay={150} className="glass-card-wrap">
              <aside className="glass-card">
                <h3>Jouw project, onze begeleiding</h3>
                <p>
                  Van eerste vergelijking tot contact met de juiste partner:
                  wij nemen je mee van A tot Z.
                </p>
                <div className="stats">
                  <div className="stat">
                    <strong><CountUp end={100} suffix="%" /></strong>
                    <span>Onafhankelijk advies</span>
                  </div>
                  <div className="stat">
                    <strong><CountUp end={5} suffix="+" /></strong>
                    <span>Duurzame diensten</span>
                  </div>
                  <div className="stat">
                    <strong>1 doel</strong>
                    <span>Lager energieverbruik</span>
                  </div>
                  <div className="stat">
                    <strong>A tot Z</strong>
                    <span>Persoonlijke opvolging</span>
                  </div>
                </div>
              </aside>
            </Reveal>
          </div>
          <Reveal delay={120} className="container hero-image-wrap">
            <img
              className="hero-image"
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1800&q=80"
              alt="Professioneel energieadvies voor woningverbetering"
            />
          </Reveal>
        </section>

        <section className="section" id="diensten">
          <div className="container">
            <Reveal>
              <h2>Onze Groene Oplossingen</h2>
              <p>Wij kiezen alleen leveranciers die passen bij jouw situatie.</p>
            </Reveal>
            <div className="services-grid">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={index * 90}>
                  <article className="service-card">
                    <img src={service.image} alt={service.title} />
                    <div className="service-card-content">
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="waarom">
          <div className="container">
            <Reveal>
              <h2>Waarom Dus GoLeads</h2>
            </Reveal>
            <div className="why-grid">
              {reasons.map((reason, index) => (
                <Reveal key={reason} delay={index * 100}>
                  <article className="panel">
                    <h3>{reason.split(" ")[0]}</h3>
                    <p>{reason}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="werkwijze">
          <div className="container">
            <Reveal>
              <h2>De Weg naar Besparing</h2>
              <p>In vier duidelijke stappen naar de juiste leverancier.</p>
            </Reveal>
            <div className="timeline">
              {steps.map((step, index) => (
                <Reveal key={step.id} delay={index * 130}>
                  <article className="timeline-item">
                    <span className="timeline-badge">{step.id}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="cijfers">
          <div className="container metrics">
            <Reveal className="metric-card">
              <strong><CountUp end={250} suffix="+" /></strong>
              <span>Aanvragen begeleid</span>
            </Reveal>
            <Reveal delay={120} className="metric-card">
              <strong><CountUp end={40} suffix="+" /></strong>
              <span>Vergeleken leveranciers</span>
            </Reveal>
            <Reveal delay={240} className="metric-card">
              <strong><CountUp end={98} suffix="%" /></strong>
              <span>Tevredenheid</span>
            </Reveal>
          </div>
        </section>

        <section className="section" id="reviews">
          <div className="container">
            <Reveal>
              <h2>Wat Klanten Zeggen</h2>
            </Reveal>
            <div className="reviews-grid">
              {testimonials.map((item, index) => (
                <Reveal key={item.name} delay={index * 120}>
                  <article className="review-card panel">
                    <p>"{item.quote}"</p>
                    <strong>{item.name}</strong>
                    <span>{item.city}</span>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projecten">
          <div className="container project-grid">
            <Reveal className="panel project-text">
              <h2>Professioneel advies, zichtbaar resultaat</h2>
              <p>
                Onze aanpak combineert technische kennis, onafhankelijke vergelijking en
                persoonlijke opvolging. Zo maak je met vertrouwen de juiste investering.
              </p>
              <p>
                Van eerste intake tot finale plaatsing: je hebt een duidelijk plan,
                betrouwbare partners en een betere woningwaarde.
              </p>
              <a className="btn btn-primary" href="#contact">Plan je gratis adviesgesprek</a>
            </Reveal>
            <Reveal delay={150}>
              <img
                className="project-image"
                src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1600&q=80"
                alt="Duurzame woning met moderne renovatie"
              />
            </Reveal>
          </div>
        </section>

        <section className="section" id="cta">
          <div className="container cta-banner">
            <Reveal>
              <h2>Klaar voor de toekomst?</h2>
              <p>
                Wacht niet langer met verduurzamen. Ontvang onafhankelijk advies op maat
                en vind de beste leverancier voor jouw project.
              </p>
              <a className="btn btn-primary" href="#contact">Vraag gratis advies aan</a>
            </Reveal>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <Reveal>
              <h2>Vraag vandaag nog advies aan</h2>
            </Reveal>
            <div className="contact-grid">
              <Reveal className="panel contact-box">
                <h3>Direct contact</h3>
                <p>E-mail: <a href="mailto:info@goleads.be">info@goleads.be</a></p>
                <p>Telefoon: <a href="tel:+32484905341">+32 484 90 53 41</a></p>
                <p>Regio: België</p>
              </Reveal>
              <Reveal delay={150}>
                <form className="panel contact-form" onSubmit={handleSubmit}>
                  <label htmlFor="name">Naam</label>
                  <input id="name" name="name" value={formData.name} onChange={handleChange} required />

                  <label htmlFor="email">E-mail</label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />

                  <label htmlFor="service">Interesse in</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} required>
                    <option value="">Kies een dienst</option>
                    <option value="Zonnepanelen">Zonnepanelen</option>
                    <option value="Laadpalen">Laadpalen</option>
                    <option value="Warmtepompen">Warmtepompen</option>
                    <option value="Dakrenovatie">Dakrenovatie</option>
                    <option value="Woningverbetering">Woningverbetering</option>
                  </select>

                  <label htmlFor="message">Bericht</label>
                  <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>

                  <button type="submit" className="btn btn-primary">Contacteer ons</button>
                </form>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <Reveal>
              <h2>Veelgestelde Vragen</h2>
            </Reveal>
            <div className="faq-grid">
              {faqs.map((item, index) => (
                <Reveal key={item.q} delay={index * 110}>
                  <article className="faq-item panel">
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">© {currentYear} Dus GoLeads - Alle rechten voorbehouden.</div>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
