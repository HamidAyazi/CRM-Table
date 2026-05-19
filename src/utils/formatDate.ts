export function formatDate(date: string) {
  const parsedDate = new Date(date);

  const formattedDate = new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(parsedDate);

  const formattedTime = new Intl.DateTimeFormat("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(parsedDate);

  return {
    date: formattedDate,
    time: formattedTime,
  };
}