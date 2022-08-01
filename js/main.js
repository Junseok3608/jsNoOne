const navbarList = document.querySelector(".list-group");
const navbarToggle = document.querySelector(".navbar-toggler");
const loginBtn = document.querySelector("#login");
const closeBtn = document.querySelector("#close");
const loginModal = document.querySelector(".login-modal");
const formId = document.querySelector("#id-input input");
const formPw = document.querySelector("#pw-input input");
const loginSubmit = document.querySelector("#login-submit");
const darkModeBtn = document.querySelector(".darkmode-btn");
const slideContainer = document.querySelector(".slide-container");
const slideBtn1 = document.querySelector(".slide-1");
const slideBtn2 = document.querySelector(".slide-2");
const slideBtn3 = document.querySelector(".slide-3");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

function toggling() {
  navbarList.classList.toggle("list-group-hidden");
}

navbarToggle.addEventListener("click", toggling);

loginBtn.addEventListener("click", function () {
  loginModal.classList.toggle("show-modal");
});
closeBtn.addEventListener("click", function () {
  loginModal.classList.remove("show-modal");
});
document.querySelector(".black-bg").addEventListener("click", function (e) {
  if (e.target == this) {
    loginModal.classList.remove("show-modal");
  }
});

loginSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  if (formId.value == "") {
    alert("No ID!");
  } else if (!/\S+@\S+\.\S+/.test(formId.value)) {
    alert("Not Email form");
  }
  if (formPw.value == "") {
    alert("No PW!");
  } else if (formPw.value.length < 7) {
    alert("PW is too short!");
  } else if (!/A-Z/.test(formPw.value)) {
    alert("You have to use uppercase");
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

// this part is carousel
slideBtn1.addEventListener("click", function () {
  slideContainer.classList.remove("slide-transform3", "slide-transform2");
  slideContainer.classList.add("slide-transform1");
});
slideBtn2.addEventListener("click", function () {
  slideContainer.classList.remove("slide-transform1", "slide-transform3");
  slideContainer.classList.add("slide-transform2");
});
slideBtn3.addEventListener("click", function () {
  slideContainer.classList.remove("slide-transform1", "slide-transform2");
  slideContainer.classList.add("slide-transform3");
});

prevBtn.addEventListener("click", function () {
  if (slideContainer.classList.contains("slide-transform1")) {
    slideContainer.classList.remove("slide-transform1", "slide-transform3");
    slideContainer.classList.add("slide-transform3");
  } else if (slideContainer.classList.contains("slide-transform2")) {
    slideContainer.classList.remove("slide-transform1", "slide-transform2");
    slideContainer.classList.add("slide-transform1");
  } else if (slideContainer.classList.contains("slide-transform3")) {
    slideContainer.classList.remove("slide-transform2", "slide-transform3");
    slideContainer.classList.add("slide-transform2");
  }
});
nextBtn.addEventListener("click", function () {
  if (slideContainer.classList.contains("slide-transform1")) {
    slideContainer.classList.remove("slide-transform1", "slide-transform3");
    slideContainer.classList.add("slide-transform2");
  } else if (slideContainer.classList.contains("slide-transform2")) {
    slideContainer.classList.remove("slide-transform1", "slide-transform2");
    slideContainer.classList.add("slide-transform3");
  } else if (slideContainer.classList.contains("slide-transform3")) {
    slideContainer.classList.remove("slide-transform2", "slide-transform3");
    slideContainer.classList.add("slide-transform1");
  }
});

window.addEventListener("scroll", function () {
  this.document.querySelector(".navbar-brand").style.fontSize = "20px";
  if (this.window.scrollY < 100) {
    this.document.querySelector(".navbar-brand").style.fontSize = "30px";
  }
});

const lorem = document.querySelector(".lorem");

lorem.addEventListener("scroll", function () {
  let scrolledV = lorem.scrollTop + lorem.clientHeight + 10;
  const scrollO = lorem.scrollHeight;
  if (scrollO < scrolledV) {
    document.querySelector(".goodjob").style.visibility = "visible";
  }
});

let basicXY = 0;
let btnClick = false;

document.querySelectorAll(".slide-box")[0].addEventListener("mousedown", function (e) {
  basicXY = e.clientX;
  btnClick = true;
});
document.querySelectorAll(".slide-box")[0].addEventListener("mousemove", function (e) {
  if (btnClick == true) {
    $(".slide-container").css("transform", `translateX(${e.clientX - basicXY}px)`);
  }
});
document.querySelectorAll(".slide-box")[0].addEventListener("mouseup", function (e) {
  btnClick = false;
  if (e.clientX - basicXY >= -200) {
    $(".slide-container").css("transition", "all 0.5s").css("transform", `translateX(0vw)`);
  } else if (e.clientX - basicXY <= -200) {
    $(".slide-container").css("transition", "all 0.5s").css("transform", `translateX(-100vw)`);
  }
  setTimeout(() => {
    $(".slide-container").css("transition", "none");
  }, 500);
});

switch (e) {
  case 3:
    console.log("3");
    break;
  case 5:
    console.log("6");
    break;
}
