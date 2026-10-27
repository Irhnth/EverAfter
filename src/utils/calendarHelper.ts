export function createGoogleCalendarUrl(
  title: string,
  details: string,
  location: string,
  startTimeIso: string,
  endTimeIso: string,
): string {
  const formatTime = (iso: string) => {
    return new Date(iso).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const start = formatTime(startTimeIso);
  const end = formatTime(endTimeIso);

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${start}/${end}`,
    details: details,
    location: location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
