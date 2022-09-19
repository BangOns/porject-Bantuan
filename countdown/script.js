const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
//
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const item = document.querySelectorAll(".deadline-format h4");
// bisa juga memberi waktu dengan ini
let FutureDate = new Date();
let tempYear = FutureDate.getFullYear();
let tempMonth = FutureDate.getMonth();
let tempDay = FutureDate.getDay();

let futureDay = new Date(tempYear, tempMonth, tempDay + 10, 15, 10, 0);
const year = futureDay.getFullYear();
const hours = futureDay.getHours();
const minute = futureDay.getMinutes();
let month = futureDay.getMonth();
month = months[month];
const date = futureDay.getDate();
const days = weekdays[futureDay.getDay()];

giveaway.textContent = `give away ends on ${days} ,${date} ${month} ${year} ${hours}:${minute}am`;

// future time in ms
const futureTime = futureDay.getTime();
// fungsi
function getRemaining() {
  const today = new Date().getTime();
  const t = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHours = 60 * 60 * 1000;
  const oneMIns = 60 * 1000;
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHours);
  let minute = Math.floor((t % oneHours) / oneMIns);
  let sec = Math.floor((t % oneMIns) / 1000);
  const values = [days, hours, minute, sec];

  function format(index) {
    if (index < 10) {
      return (index = `0${index}`);
    }
    return index;
  }

  //
  item.forEach((val, index) => {
    val.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countDown);
    deadline.innerHTML = `<h4>Maaf giveaway yang anda tunggu telah selesai</h4>`;
  }
}
let countDown = setInterval(getRemaining, 1000);

getRemaining();
