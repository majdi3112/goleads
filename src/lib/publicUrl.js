/** Voor assets in /public (werkt met elke Vite `base`, o.a. `./` en `/goleads/`). */
export function publicUrl(path) {
  const base = import.meta.env.BASE_URL || "/";
  const normalized = path.startsWith("/") ? path.slice(1) : path;

  if (base === "./" || base === ".") {
    return `./${normalized}`;
  }

  const root = base.endsWith("/") ? base : `${base}/`;
  return `${root}${normalized}`;
}
