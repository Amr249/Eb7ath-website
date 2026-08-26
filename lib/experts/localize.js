/** @param {string | { en?: string, ar?: string }} value @param {string} lang */
export function localizedText(value, lang) {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[lang] ?? value.en ?? value.ar ?? "";
}
