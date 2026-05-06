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
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ref,
      style,
      className: `reveal ${visible ? "is-visible" : ""} ${className}`
    },
    children
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
  return /* @__PURE__ */ React.createElement("span", { ref }, value, suffix);
}
function App() {
  const currentYear = useMemo(() => (/* @__PURE__ */ new Date()).getFullYear(), []);
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
      `Naam: ${formData.name}
E-mail: ${formData.email}
Interesse: ${formData.service}

Bericht:
${formData.message}`
    );
    window.location.href = `mailto:info@goleads.be?subject=${subject}&body=${body}`;
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "page-bg" }, /* @__PURE__ */ React.createElement("span", { className: "blob one" }), /* @__PURE__ */ React.createElement("span", { className: "blob two" }), /* @__PURE__ */ React.createElement("span", { className: "blob three" })), /* @__PURE__ */ React.createElement("header", { className: "header" }, /* @__PURE__ */ React.createElement("div", { className: "container header-inner" }, /* @__PURE__ */ React.createElement("a", { className: "brand", href: "#top" }, "Dus GoLeads"), /* @__PURE__ */ React.createElement("nav", { className: "nav" }, /* @__PURE__ */ React.createElement("a", { href: "#diensten" }, "Diensten"), /* @__PURE__ */ React.createElement("a", { href: "#waarom" }, "Waarom wij"), /* @__PURE__ */ React.createElement("a", { href: "#werkwijze" }, "Werkwijze"), /* @__PURE__ */ React.createElement("a", { href: "#contact" }, "Contact")), /* @__PURE__ */ React.createElement("a", { className: "btn btn-primary", href: "#contact" }, "Gratis advies"))), /* @__PURE__ */ React.createElement("main", { id: "top" }, /* @__PURE__ */ React.createElement("section", { className: "hero" }, /* @__PURE__ */ React.createElement("div", { className: "container hero-grid" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("span", { className: "eyebrow" }, "Vergelijken - Adviseren - Begeleiden"), /* @__PURE__ */ React.createElement("h1", null, "Bespaar slim en geef je woning een duurzame upgrade"), /* @__PURE__ */ React.createElement("p", null, "Dus GoLeads helpt je de juiste leverancier kiezen voor zonnepanelen, laadpalen, warmtepompen en renovaties. Modern, betrouwbaar en volledig op maat."), /* @__PURE__ */ React.createElement("div", { className: "hero-actions" }, /* @__PURE__ */ React.createElement("a", { className: "btn btn-primary", href: "#contact" }, "Vraag gratis advies aan"), /* @__PURE__ */ React.createElement("a", { className: "btn btn-outline", href: "#diensten" }, "Bekijk diensten"))), /* @__PURE__ */ React.createElement(Reveal, { delay: 150, className: "glass-card-wrap" }, /* @__PURE__ */ React.createElement("aside", { className: "glass-card" }, /* @__PURE__ */ React.createElement("h3", null, "Jouw project, onze begeleiding"), /* @__PURE__ */ React.createElement("p", null, "Van eerste vergelijking tot contact met de juiste partner: wij nemen je mee van A tot Z."), /* @__PURE__ */ React.createElement("div", { className: "stats" }, /* @__PURE__ */ React.createElement("div", { className: "stat" }, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement(CountUp, { end: 100, suffix: "%" })), /* @__PURE__ */ React.createElement("span", null, "Onafhankelijk advies")), /* @__PURE__ */ React.createElement("div", { className: "stat" }, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement(CountUp, { end: 5, suffix: "+" })), /* @__PURE__ */ React.createElement("span", null, "Duurzame diensten")), /* @__PURE__ */ React.createElement("div", { className: "stat" }, /* @__PURE__ */ React.createElement("strong", null, "1 doel"), /* @__PURE__ */ React.createElement("span", null, "Lager energieverbruik")), /* @__PURE__ */ React.createElement("div", { className: "stat" }, /* @__PURE__ */ React.createElement("strong", null, "A tot Z"), /* @__PURE__ */ React.createElement("span", null, "Persoonlijke opvolging")))))), /* @__PURE__ */ React.createElement(Reveal, { delay: 120, className: "container hero-image-wrap" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      className: "hero-image",
      src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1800&q=80",
      alt: "Professioneel energieadvies voor woningverbetering"
    }
  ))), /* @__PURE__ */ React.createElement("section", { className: "section", id: "diensten" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("h2", null, "Onze Groene Oplossingen"), /* @__PURE__ */ React.createElement("p", null, "Wij kiezen alleen leveranciers die passen bij jouw situatie.")), /* @__PURE__ */ React.createElement("div", { className: "services-grid" }, services.map((service, index) => /* @__PURE__ */ React.createElement(Reveal, { key: service.title, delay: index * 90 }, /* @__PURE__ */ React.createElement("article", { className: "service-card" }, /* @__PURE__ */ React.createElement("img", { src: service.image, alt: service.title }), /* @__PURE__ */ React.createElement("div", { className: "service-card-content" }, /* @__PURE__ */ React.createElement("h3", null, service.title), /* @__PURE__ */ React.createElement("p", null, service.text)))))))), /* @__PURE__ */ React.createElement("section", { className: "section", id: "waarom" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("h2", null, "Waarom Dus GoLeads")), /* @__PURE__ */ React.createElement("div", { className: "why-grid" }, reasons.map((reason, index) => /* @__PURE__ */ React.createElement(Reveal, { key: reason, delay: index * 100 }, /* @__PURE__ */ React.createElement("article", { className: "panel" }, /* @__PURE__ */ React.createElement("h3", null, reason.split(" ")[0]), /* @__PURE__ */ React.createElement("p", null, reason))))))), /* @__PURE__ */ React.createElement("section", { className: "section", id: "werkwijze" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("h2", null, "De Weg naar Besparing"), /* @__PURE__ */ React.createElement("p", null, "In vier duidelijke stappen naar de juiste leverancier.")), /* @__PURE__ */ React.createElement("div", { className: "timeline" }, steps.map((step, index) => /* @__PURE__ */ React.createElement(Reveal, { key: step.id, delay: index * 130 }, /* @__PURE__ */ React.createElement("article", { className: "timeline-item" }, /* @__PURE__ */ React.createElement("span", { className: "timeline-badge" }, step.id), /* @__PURE__ */ React.createElement("h3", null, step.title), /* @__PURE__ */ React.createElement("p", null, step.text))))))), /* @__PURE__ */ React.createElement("section", { className: "section", id: "cijfers" }, /* @__PURE__ */ React.createElement("div", { className: "container metrics" }, /* @__PURE__ */ React.createElement(Reveal, { className: "metric-card" }, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement(CountUp, { end: 250, suffix: "+" })), /* @__PURE__ */ React.createElement("span", null, "Aanvragen begeleid")), /* @__PURE__ */ React.createElement(Reveal, { delay: 120, className: "metric-card" }, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement(CountUp, { end: 40, suffix: "+" })), /* @__PURE__ */ React.createElement("span", null, "Vergeleken leveranciers")), /* @__PURE__ */ React.createElement(Reveal, { delay: 240, className: "metric-card" }, /* @__PURE__ */ React.createElement("strong", null, /* @__PURE__ */ React.createElement(CountUp, { end: 98, suffix: "%" })), /* @__PURE__ */ React.createElement("span", null, "Tevredenheid")))), /* @__PURE__ */ React.createElement("section", { className: "section", id: "reviews" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("h2", null, "Wat Klanten Zeggen")), /* @__PURE__ */ React.createElement("div", { className: "reviews-grid" }, testimonials.map((item, index) => /* @__PURE__ */ React.createElement(Reveal, { key: item.name, delay: index * 120 }, /* @__PURE__ */ React.createElement("article", { className: "review-card panel" }, /* @__PURE__ */ React.createElement("p", null, '"', item.quote, '"'), /* @__PURE__ */ React.createElement("strong", null, item.name), /* @__PURE__ */ React.createElement("span", null, item.city))))))), /* @__PURE__ */ React.createElement("section", { className: "section", id: "projecten" }, /* @__PURE__ */ React.createElement("div", { className: "container project-grid" }, /* @__PURE__ */ React.createElement(Reveal, { className: "panel project-text" }, /* @__PURE__ */ React.createElement("h2", null, "Professioneel advies, zichtbaar resultaat"), /* @__PURE__ */ React.createElement("p", null, "Onze aanpak combineert technische kennis, onafhankelijke vergelijking en persoonlijke opvolging. Zo maak je met vertrouwen de juiste investering."), /* @__PURE__ */ React.createElement("p", null, "Van eerste intake tot finale plaatsing: je hebt een duidelijk plan, betrouwbare partners en een betere woningwaarde."), /* @__PURE__ */ React.createElement("a", { className: "btn btn-primary", href: "#contact" }, "Plan je gratis adviesgesprek")), /* @__PURE__ */ React.createElement(Reveal, { delay: 150 }, /* @__PURE__ */ React.createElement(
    "img",
    {
      className: "project-image",
      src: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1600&q=80",
      alt: "Duurzame woning met moderne renovatie"
    }
  )))), /* @__PURE__ */ React.createElement("section", { className: "section", id: "cta" }, /* @__PURE__ */ React.createElement("div", { className: "container cta-banner" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("h2", null, "Klaar voor de toekomst?"), /* @__PURE__ */ React.createElement("p", null, "Wacht niet langer met verduurzamen. Ontvang onafhankelijk advies op maat en vind de beste leverancier voor jouw project."), /* @__PURE__ */ React.createElement("a", { className: "btn btn-primary", href: "#contact" }, "Vraag gratis advies aan")))), /* @__PURE__ */ React.createElement("section", { className: "section", id: "contact" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("h2", null, "Vraag vandaag nog advies aan")), /* @__PURE__ */ React.createElement("div", { className: "contact-grid" }, /* @__PURE__ */ React.createElement(Reveal, { className: "panel contact-box" }, /* @__PURE__ */ React.createElement("h3", null, "Direct contact"), /* @__PURE__ */ React.createElement("p", null, "E-mail: ", /* @__PURE__ */ React.createElement("a", { href: "mailto:info@goleads.be" }, "info@goleads.be")), /* @__PURE__ */ React.createElement("p", null, "Telefoon: ", /* @__PURE__ */ React.createElement("a", { href: "tel:+32484905341" }, "+32 484 90 53 41")), /* @__PURE__ */ React.createElement("p", null, "Regio: Belgi\xEB")), /* @__PURE__ */ React.createElement(Reveal, { delay: 150 }, /* @__PURE__ */ React.createElement("form", { className: "panel contact-form", onSubmit: handleSubmit }, /* @__PURE__ */ React.createElement("label", { htmlFor: "name" }, "Naam"), /* @__PURE__ */ React.createElement("input", { id: "name", name: "name", value: formData.name, onChange: handleChange, required: true }), /* @__PURE__ */ React.createElement("label", { htmlFor: "email" }, "E-mail"), /* @__PURE__ */ React.createElement("input", { id: "email", name: "email", type: "email", value: formData.email, onChange: handleChange, required: true }), /* @__PURE__ */ React.createElement("label", { htmlFor: "service" }, "Interesse in"), /* @__PURE__ */ React.createElement("select", { id: "service", name: "service", value: formData.service, onChange: handleChange, required: true }, /* @__PURE__ */ React.createElement("option", { value: "" }, "Kies een dienst"), /* @__PURE__ */ React.createElement("option", { value: "Zonnepanelen" }, "Zonnepanelen"), /* @__PURE__ */ React.createElement("option", { value: "Laadpalen" }, "Laadpalen"), /* @__PURE__ */ React.createElement("option", { value: "Warmtepompen" }, "Warmtepompen"), /* @__PURE__ */ React.createElement("option", { value: "Dakrenovatie" }, "Dakrenovatie"), /* @__PURE__ */ React.createElement("option", { value: "Woningverbetering" }, "Woningverbetering")), /* @__PURE__ */ React.createElement("label", { htmlFor: "message" }, "Bericht"), /* @__PURE__ */ React.createElement("textarea", { id: "message", name: "message", rows: "4", value: formData.message, onChange: handleChange }), /* @__PURE__ */ React.createElement("button", { type: "submit", className: "btn btn-primary" }, "Contacteer ons")))))), /* @__PURE__ */ React.createElement("section", { className: "section", id: "faq" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement(Reveal, null, /* @__PURE__ */ React.createElement("h2", null, "Veelgestelde Vragen")), /* @__PURE__ */ React.createElement("div", { className: "faq-grid" }, faqs.map((item, index) => /* @__PURE__ */ React.createElement(Reveal, { key: item.q, delay: index * 110 }, /* @__PURE__ */ React.createElement("article", { className: "faq-item panel" }, /* @__PURE__ */ React.createElement("h3", null, item.q), /* @__PURE__ */ React.createElement("p", null, item.a)))))))), /* @__PURE__ */ React.createElement("footer", { className: "footer" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, "\xA9 ", currentYear, " Dus GoLeads - Alle rechten voorbehouden.")));
}
ReactDOM.createRoot(document.getElementById("root")).render(/* @__PURE__ */ React.createElement(App, null));
