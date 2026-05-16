import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Process from "./components/Process.jsx";
import Services from "./components/Services.jsx";
import Stats from "./components/Stats.jsx";
import CTA from "./components/CTA.jsx";
import Contact from "./components/Contact.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Process />
        <Services />
        <Stats />
        <CTA />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
