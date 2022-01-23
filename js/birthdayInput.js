const barsImg = document.getElementsByClassName("bars-img")[0];
const dateInput = document.getElementsByClassName("date")[0];
const okBtn = document.getElementsByClassName("btn")[0];

function changeInputVisibility() {
  const style = window.getComputedStyle(dateInput, null);
  if (style.visibility == "hidden") {
    dateInput.style.visibility = "visible";
  } else {
    dateInput.style.visibility = "hidden";
  }
}

barsImg.onclick = () => {
  changeInputVisibility();
};

okBtn.onclick = () => {
  changeInputVisibility();
};
