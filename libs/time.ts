/**
 * Function to get duration as format Y:M:D-h:m:s between to Date
 * @param startDate : Date
 * @param endDate : Date
 * @returns duration string
 */
export const calculateDuration = (startDate: Date, endDate: Date) => {
  // Ensure the startDate is before the endDate
  if (startDate > endDate) {
    [startDate, endDate] = [endDate, startDate];
  }

  // Extract year, month, day, hour, minute, second from startDate and endDate
  let startYear = startDate.getFullYear();
  let startMonth = startDate.getMonth();
  let startDay = startDate.getDate();
  let startHour = startDate.getHours();
  let startMinute = startDate.getMinutes();
  let startSecond = startDate.getSeconds();

  let endYear = endDate.getFullYear();
  let endMonth = endDate.getMonth();
  let endDay = endDate.getDate();
  let endHour = endDate.getHours();
  let endMinute = endDate.getMinutes();
  let endSecond = endDate.getSeconds();

  // Calculate differences
  let years = endYear - startYear;
  let months = endMonth - startMonth;
  let days = endDay - startDay;
  let hours = endHour - startHour;
  let minutes = endMinute - startMinute;
  let seconds = endSecond - startSecond;

  // Adjust for negative values
  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }
  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }
  if (hours < 0) {
    hours += 24;
    days -= 1;
  }
  if (days < 0) {
    // Get the number of days in the previous month
    let previousMonth = new Date(endYear, endMonth, 0);
    days += previousMonth.getDate();
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }

  //To add 0 to match every length as 2 chars
  let M = months <= 9 ? `0${months}` : months;
  let D = days <= 9 ? `0${days}` : days;
  let h = hours <= 9 ? `0${hours}` : hours;
  let m = minutes <= 9 ? `0${minutes}` : minutes;
  let s = seconds <= 9 ? `0${seconds}` : seconds;

  return `${years}Y ${M}M ${D}D ${h}h:${m}m:${s}s`;
};
