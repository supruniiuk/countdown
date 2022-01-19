const today = new Date();

const timeElements = document.querySelectorAll("[date-time]");

const getFutureDate = (month, day) => {
  const thisYear = new Date(today.getFullYear(), month - 1, day);
  const nextYear = new Date(today.getFullYear() + 1, month - 1, day);

  if (today < thisYear) {
    return thisYear;
  } else if (today < nextYear) {
    return nextYear;
  }
};

const birthday = getFutureDate(2, 23);

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
  if (
    today.getMonth() == birthday.getMonth() &&
    today.getDate() == birthday.getDate()
  ) {
    let intervalNames = document.getElementById("interval-names");
    let timeElement = document.getElementById("time");
    timeElement.innerHTML = "<p>Happy Birthday!</p>";
    intervalNames.style.display = "none";
  } else {
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
  }
}, 1000);
