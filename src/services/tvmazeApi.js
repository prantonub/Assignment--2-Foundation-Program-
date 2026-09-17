// Centralized access to the TVMaze API.
// Keeping every fetch call here means components never talk to the network directly.

const BASE_URL = "https://api.tvmaze.com";

/**
 * Normalizes the two different shapes TVMaze returns:
 * - /shows            -> [ show, show, ... ]
 * - /search/shows?q=  -> [ { score, show }, { score, show }, ... ]
 * Both are flattened into a plain array of show objects.
 */
function normalizeShows(data) {
  if (!Array.isArray(data)) return [];
  return data
    .map((item) => (item && item.show ? item.show : item))
    .filter(Boolean);
}

async function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`TVMaze request failed with status ${response.status}`);
  }
  return response.json();
}

/** Fetches the full show catalog. */
export async function getAllShows() {
  const response = await fetch(`${BASE_URL}/shows`);
  const data = await handleResponse(response);
  return normalizeShows(data);
}

/** Searches shows by title. Returns [] for an empty/whitespace query instead of hitting the network. */
export async function searchShows(query) {
  const trimmed = query.trim();
  if (!trimmed) return [];

  const response = await fetch(
    `${BASE_URL}/search/shows?q=${encodeURIComponent(trimmed)}`
  );
  const data = await handleResponse(response);
  return normalizeShows(data);
}

/** Fetches a small sample of shows, used to build the home page hero collage. */
export async function getShowsSample(count = 8) {
  const shows = await getAllShows();
  return shows
    .filter((show) => show.image && show.image.medium)
    .slice(0, count);
}
