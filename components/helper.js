export function genMealLogDateKey(date) {
  let dateNum = date.getDate();
  let monthNum = (date.getMonth() + 1);
  let dateStr;
  let monthStr;
  if (dateNum > 9) {
    dateStr = dateNum.toString();
  } else {
    dateStr = '0' + dateNum.toString();
  }
  if (monthNum > 9) {
    monthStr = monthNum.toString();
  } else {
    monthStr = '0' + monthNum.toString();
  }
  return (
    date.getFullYear().toString() +
    monthStr +
    dateStr
  );
}
