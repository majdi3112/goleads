import Reveal from "./Reveal.jsx";
import CountUp from "./CountUp.jsx";

export default function Stats() {
  return (
    <section className="section section-stats">
      <div className="container stats-grid">
        <Reveal className="stat-card">
          <strong>
            <CountUp end={250} suffix="+" />
          </strong>
          <span>Aanvragen begeleid</span>
        </Reveal>
        <Reveal delay={120} className="stat-card">
          <strong>
            <CountUp end={40} suffix="+" />
          </strong>
          <span>Vergeleken leveranciers</span>
        </Reveal>
        <Reveal delay={240} className="stat-card">
          <strong>
            <CountUp end={98} suffix="%" />
          </strong>
          <span>Tevredenheid</span>
        </Reveal>
        <Reveal delay={360} className="stat-card">
          <strong>
            <CountUp end={5} />
          </strong>
          <span>Sterren rating</span>
        </Reveal>
      </div>
    </section>
  );
}
