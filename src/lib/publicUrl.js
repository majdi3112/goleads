/** Voor assets in /public (werkt met elke Vite `base`, o.a. `./`). */
export function publicUrl(path) {
  const base = import.meta.env.BASE_URL || "/";
  const normalized = path.replace(/^\//, "");

  if (base === "./" || base === ".") {
    return `./${normalized}`;
  }

  const prefix = base.endsWith("/") ? base : `${base}/`;
  return `${prefix}${normalized}`;
}
