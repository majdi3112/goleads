import { useEffect, useState } from "react";
import { publicUrl } from "../lib/publicUrl.js";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function close() {
    setOpen(false);
  }

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a className="brand brand-logo" href="#top" onClick={close} aria-label="GoLeads – naar start">
          <img src={publicUrl("logo-navbar.png")} alt="" width="200" height="42" decoding="async" />
        </a>

        <nav className={`nav ${open ? "is-open" : ""}`}>
          <a href="#werkwijze" onClick={close}>Werkwijze</a>
          <a href="#diensten" onClick={close}>Diensten</a>
          <a href="#faq" onClick={close}>FAQ</a>
          <a href="#contact" onClick={close}>Contact</a>
        </nav>

        <a className="btn btn-primary header-cta" href="#contact" onClick={close}>
          Gratis advies
        </a>

        <button
          aria-label="Menu"
          className={`burger ${open ? "is-open" : ""}`}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
