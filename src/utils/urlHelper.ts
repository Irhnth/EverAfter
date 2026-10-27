/**
 * Safely extracts and sanitizes guest name from URL query parameter (?to=Guest+Name)
 */
export function getGuestNameFromUrl(searchString: string = ''): string {
  const fallback = 'Tamu Undangan';

  if (!searchString) {
    if (typeof window !== 'undefined' && window.location?.search) {
      searchString = window.location.search;
    } else {
      return fallback;
    }
  }

  try {
    const params = new URLSearchParams(searchString);
    const rawTo = params.get('to') || params.get('u');

    if (!rawTo) return fallback;

    // Decode and sanitize
    const cleaned = decodeURIComponent(rawTo.replace(/\+/g, ' '))
      .replace(/<[^>]*>/g, '') // Strip HTML tags
      .trim();

    return cleaned.length > 0 ? cleaned : fallback;
  } catch {
    return fallback;
  }
}
