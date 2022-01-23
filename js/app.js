const today = new Date();
let bdMonth = 2;
let bdDay = 23;

const timeElements = document.querySelectorAll("[data-time]");
const birthdayInput = document.getElementsByClassName("date__input")[0];
const okButton = document.getElementsByClassName("btn")[0];

const getFutureDate = (month, day) => {
  const thisYear = new Date(today.getFullYear(), month - 1, day);
  const nextYear = new Date(today.getFullYear() + 1, month - 1, day);

  if (today < thisYear) {
    return thisYear;
  } else if (today < nextYear) {
    return nextYear;
  }
};

let birthday = getFutureDate(bdMonth, bdDay);

okButton.onclick = () => {
  bdMonth = +birthdayInput.value.split("-")[1];
  bdDay = +birthdayInput.value.split("-")[2];
  birthday = getFutureDate(bdMonth, bdDay);

  dateInput.style.visibility = "hidden";
};

const convertFromSeconds = (sec) => {
  const days = Math.floor(sec / (3600 * 24));
  const hours = Math.floor(sec / 3600) % 24;
  const minutes = Math.floor((sec % 3600) / 60);
  const seconds = Math.floor((sec % 3600) % 60);

  return [days, hours, minutes, seconds];
};

const getSecondsBetweenDates = () => {
  const now = new Date();
  const seconds = (birthday.getTime() - now.getTime()) / 1000;

  return seconds;
};

setInterval(() => {
  const seconds = getSecondsBetweenDates();
  let time = convertFromSeconds(seconds);

  time = time.map((item) => {
    let elem = item.toString();
    if (elem.length < 2) {
      elem = "0" + elem;
    }
    return elem;
  });

  for (let i = 0; i < timeElements.length; i++) {
    timeElements[i].textContent = time[i];
  }
}, 1000);
