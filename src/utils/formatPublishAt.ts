export function formatPublishAt(initialTime: number) {
  const difference = Date.now() - initialTime;

  // if difference is greather than a day
  if (difference > 24 * 60 * 60 * 1000) {
    const date = new Date(initialTime);
    return date.toLocaleDateString("pt-BR");
  }

  // if difference is greather than a hour
  if (difference > 60 * 60 * 1000) {
    const diffAsHour = difference / 1000 / 60 / 60;
    return `Publicado há ${Math.floor(diffAsHour)} hora(s)`;
  }

  // if difference is greather than a minute
  if (difference > 60 * 1000) {
    const diffAsMinute = difference / 1000 / 60;
    return `Publicado há ${Math.floor(diffAsMinute)} minuto(s)`;
  }

  return "Publicado há instantes atrás";
}
