export function toStringTime(minutes) {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const remainder = minutes - (hours * 60);
  return `${hours} hr ${remainder} min`;
}

export function compareDate(date1, date2) {
  const month1 = parseInt(date1.substring(0, 2), 10);
  const month2 = parseInt(date2.substring(0, 2), 10);

  const day1 = parseInt(date1.substring(3, 5), 10);
  const day2 = parseInt(date2.substring(3, 5), 10);

  const year1 = parseInt(date1.substring(6, 8), 10);
  const year2 = parseInt(date2.substring(6, 8), 10);

  const hash1 = (year1 * 10000) + (month1 * 100) + day1;
  const hash2 = (year2 * 10000) + (month2 * 100) + day2;

  return hash1 - hash2;
}
