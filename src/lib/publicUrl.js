/** Voor assets in /public (werkt met GitHub Pages base path). */
export function publicUrl(path) {
  const base = import.meta.env.BASE_URL || "/";
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${base.endsWith("/") ? base : `${base}/`}${normalized}`;
}
