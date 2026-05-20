export function formatDate(date: string) {
  const parsedDate = new Date(date);

  const formattedDate = new Intl.DateTimeFormat("fa-IR", { //format date to Persian calender
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(parsedDate);

  const formattedTime = new Intl.DateTimeFormat("fa-IR", { //format time to Persian calender
    hour: "2-digit",
    minute: "2-digit",
  }).format(parsedDate);

  return {
    date: formattedDate,
    time: formattedTime,
  };
}