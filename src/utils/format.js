/** Pulls a 4-digit year out of an ISO date string, or returns a fallback. */
export function getYear(dateString, fallback = "Unknown") {
  if (!dateString) return fallback;
  const year = new Date(dateString).getFullYear();
  return Number.isNaN(year) ? fallback : String(year);
}

/** Formats the TVMaze rating object/number to one decimal place, or a fallback. */
export function formatRating(rating, fallback = "N/A") {
  const value = typeof rating === "object" ? rating?.average : rating;
  if (value === null || value === undefined) return fallback;
  return Number(value).toFixed(1);
}

/**
 * Strips HTML tags from TVMaze's `summary` field so it is safe to render as
 * plain text (no dangerouslySetInnerHTML anywhere in the app).
 */
export function stripHtml(html) {
  if (!html) return "";
  return html
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ")
    .trim();
}

/** Splits a cleaned summary into paragraphs for nicer rendering. */
export function summaryParagraphs(html) {
  const text = stripHtml(html);
  if (!text) return [];
  return text.split(/\n{2,}/).filter(Boolean);
}

export function formatRuntime(minutes) {
  if (!minutes && minutes !== 0) return "Unknown";
  return `${minutes} min`;
}
