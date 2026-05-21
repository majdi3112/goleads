import { useState } from "react";
import Reveal from "./Reveal.jsx";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  function update(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function submit(e) {
    e.preventDefault();
    setFeedback("");

    if (!accessKey) {
      setStatus("error");
      setFeedback(
        "E-mailverzending is nog niet geconfigureerd. Voeg VITE_WEB3FORMS_ACCESS_KEY toe (zie README)."
      );
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `GoLeads aanvraag – ${form.service}`,
          from_name: form.name,
          email: form.email,
          replyto: form.email,
          message: [
            `Dienst: ${form.service}`,
            `Telefoon: ${form.phone || "—"}`,
            "",
            form.message
          ].join("\n")
        })
      });

      const data = await res.json().catch(() => ({}));

      if (data.success) {
        setStatus("success");
        setFeedback("Bedankt! Uw aanvraag is verstuurd. We nemen zo snel mogelijk contact met u op.");
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
        setFeedback(data.message || "Verzenden mislukt. Probeer later opnieuw of bel ons.");
      }
    } catch {
      setStatus("error");
      setFeedback("Netwerkfout. Controleer uw verbinding en probeer opnieuw.");
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <Reveal>
          <span className="kicker">Contact</span>
          <h2>Vraag vandaag nog gratis advies aan</h2>
          <p className="muted">
            Wilt u besparen op uw energiekosten of uw woning verduurzamen? Vul het formulier in voor
            een onafhankelijk advies op maat.
          </p>

          <ul className="contact-list">
            <li>
              <span className="contact-icon">✉</span>
              <div>
                <small>E-mail</small>
                <a href="mailto:info@goleads.be">info@goleads.be</a>
              </div>
            </li>
            <li>
              <span className="contact-icon">☎</span>
              <div>
                <small>Telefoon</small>
                <a href="tel:+32484905341">+32 484 90 53 41</a>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <form className="contact-form" onSubmit={submit}>
            <div className="row">
              <label>
                <span>Volledige naam</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="Voornaam Achternaam"
                  required
                  disabled={status === "loading"}
                />
              </label>
              <label>
                <span>E-mailadres</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={update}
                  placeholder="naam@voorbeeld.be"
                  required
                  disabled={status === "loading"}
                />
              </label>
            </div>

            <div className="row">
              <label>
                <span>Telefoonnummer</span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={update}
                  placeholder="+32 ..."
                  disabled={status === "loading"}
                />
              </label>
              <label>
                <span>Interesse in</span>
                <select name="service" value={form.service} onChange={update} required disabled={status === "loading"}>
                  <option value="">Kies een dienst</option>
                  <option>Zonnepanelen</option>
                  <option>Laadpalen</option>
                  <option>Warmtepompen</option>
                  <option>Thuisbatterij</option>
                  <option>Bouwwerk aan huis</option>
                  <option>Dakrenovatie</option>
                  <option>Woningverbeteringen</option>
                </select>
              </label>
            </div>

            <label>
              <span>Uw bericht of project</span>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={update}
                placeholder="Vertel kort wat u wenst te realiseren"
                required
                disabled={status === "loading"}
              />
            </label>

            <button type="submit" className="btn btn-primary btn-block" disabled={status === "loading"}>
              {status === "loading" ? "Bezig met verzenden…" : "Vraag gratis advies aan"}
            </button>

            {feedback && (
              <p className={status === "success" ? "form-success" : "form-error"} role="status">
                {feedback}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
