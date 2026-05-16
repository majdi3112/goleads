import { useState } from "react";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [sent, setSent] = useState(false);

  function update(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function submit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Aanvraag advies - ${form.service || "GoLeads"}`);
    const body = encodeURIComponent(
      `Naam: ${form.name}\nE-mail: ${form.email}\nTelefoon: ${form.phone}\nInteresse: ${form.service}\n\nBericht:\n${form.message}`
    );
    window.location.href = `mailto:info@goleads.be?subject=${subject}&body=${body}`;
    setSent(true);
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
            <li>
              <span className="contact-icon">📍</span>
              <div>
                <small>Regio</small>
                <span>België &amp; Nederland</span>
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
                />
              </label>
              <label>
                <span>E-mailadres</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={update}
                  placeholder="naam@email.be"
                  required
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
                />
              </label>
              <label>
                <span>Interesse in</span>
                <select name="service" value={form.service} onChange={update} required>
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
              />
            </label>

            <button type="submit" className="btn btn-primary btn-block">
              Vraag gratis advies aan
            </button>

            {sent && (
              <p className="form-success">Uw mailapp wordt geopend om de aanvraag te versturen.</p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
