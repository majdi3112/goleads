import { useEffect, useState } from "react";

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
        <a className="brand" href="#top" onClick={close}>
          <span className="brand-mark">G</span>
          <span>
            <strong>GoLeads</strong>
          </span>
        </a>

        <nav className={`nav ${open ? "is-open" : ""}`}>
          <a href="#werkwijze" onClick={close}>Werkwijze</a>
          <a href="#diensten" onClick={close}>Diensten</a>
          <a href="#reviews" onClick={close}>Reviews</a>
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
