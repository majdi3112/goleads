export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a className="brand" href="#top">
            <span className="brand-mark">G</span>
            <span>
              <strong>GoLeads</strong>
            </span>
          </a>
          <p className="footer-text">
            Wij helpen u bij het kiezen van de juiste leverancier voor woningverbetering en
            energiebesparing met onafhankelijk advies.
          </p>
        </div>

        <div>
          <h4>Onze diensten</h4>
          <ul>
            <li>Zonnepanelen vergelijken</li>
            <li>Laadpalen installatie</li>
            <li>Warmtepomp advies</li>
            <li>Dakrenovatie partners</li>
          </ul>
        </div>

        <div>
          <h4>Waarom GoLeads</h4>
          <ul>
            <li>Onafhankelijke vergelijking</li>
            <li>Persoonlijk advies op maat</li>
            <li>Volledige begeleiding</li>
            <li>Energiebesparing focus</li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>België &amp; Nederland</li>
            <li>
              <a href="tel:+32484905341">+32 484 90 53 41</a>
            </li>
            <li>
              <a href="mailto:info@goleads.be">info@goleads.be</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {year} GoLeads. Alle rechten voorbehouden.</p>
        <a href="#top">Terug naar boven ↑</a>
      </div>
    </footer>
  );
}
