import { useEffect, useState } from "react";
import { useReveal } from "../hooks/useReveal.js";

export default function CountUp({ end, prefix = "", suffix = "", duration = 1500 }) {
  const [ref, visible] = useReveal();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString("nl-BE")}
      {suffix}
    </span>
  );
}
