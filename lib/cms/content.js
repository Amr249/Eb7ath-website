import DOMPurify from "isomorphic-dompurify";

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function isHtmlContent(content) {
  return /<[a-z][\s\S]*>/i.test(String(content || "").trim());
}

export function contentToHtml(content) {
  const value = String(content || "").trim();
  if (!value) return "";
  if (isHtmlContent(value)) return value;
  return value
    .split(/\n\n+/)
    .filter(Boolean)
    .map((paragraph) => `<p>${escapeHtml(paragraph).replace(/\n/g, "<br>")}</p>`)
    .join("");
}

export function sanitizeArticleHtml(html) {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      "p",
      "br",
      "h1",
      "h2",
      "h3",
      "strong",
      "em",
      "u",
      "ul",
      "ol",
      "li",
      "blockquote",
      "a",
    ],
    ALLOWED_ATTR: ["href", "target", "rel", "style"],
  });
}

export function prepareArticleHtml(content) {
  return sanitizeArticleHtml(contentToHtml(content));
}
