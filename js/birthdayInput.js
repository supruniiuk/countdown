const barsImg = document.getElementsByClassName("bars-img")[0];
const dateInput = document.getElementsByClassName("date")[0];

function changeInputVisibility(value = "hidden") {
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
