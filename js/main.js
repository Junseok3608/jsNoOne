const navbarList = document.querySelector(".list-group");
const navbarToggle = document.querySelector(".navbar-toggler");
const loginBtn = document.querySelector("#login");
const closeBtn = document.querySelector("#close");
const loginModal = document.querySelector(".login-modal");
const formId = document.querySelector("#id-input input");
const formPw = document.querySelector("#pw-input input");
const loginSubmit = document.querySelector("#login-submit");
const darkModeBtn = document.querySelector(".darkmode-btn");

function toggling() {
  navbarList.classList.toggle("list-group-hidden");
}

navbarToggle.addEventListener("click", toggling);

loginBtn.addEventListener("click", function () {
  loginModal.classList.toggle("show-modal");
});
closeBtn.addEventListener("click", function () {
  loginModal.classList.toggle("show-modal");
});

loginSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  if (formId.value == "") {
    alert("No ID!");
  }
  if (formPw.value == "") {
    alert("No PW!");
  } else if (formPw.value.length < 7) {
    alert("PW is too short!");
  }
});

let darkClicks = 0;
darkModeBtn.addEventListener("click", function () {
  darkClicks += 1;
  if (darkClicks % 2 == 0) {
    darkModeBtn.innerHTML = "dark 🌑";
  } else {
    darkModeBtn.innerHTML = "light 🌕";
  }
});

let time = 5;
function alertTimeOut() {
  if (time >= 0) {
    document.querySelector(".alert-danger").innerHTML = `${time}초 이내 구매시 특별 할인!`;
    time = time -= 1;
    return time;
  } else {
    document.querySelector(".alert-danger").style.display = "none";
  }
}

setInterval(alertTimeOut, 1000);
