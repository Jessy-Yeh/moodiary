function padTo2Digits(num: number) {
  return num.toString().padStart(2, "0");
}

export default function formatDate(date: Date) {
  const day = padTo2Digits(date.getDate());
  const month = padTo2Digits(date.getMonth() + 1);
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}
