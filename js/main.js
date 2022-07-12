const alertBox = document.querySelector(".alert-box");
const alertBoxP = document.querySelector(".alert-box p");

function alertControl(event, event2) {
  alertBoxP.innerHTML = event;
  alertBox.style.display = event2;
}
