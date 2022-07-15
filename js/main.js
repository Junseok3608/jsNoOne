const navbarList = document.querySelector(".list-group");
const navbarToggle = document.querySelector(".navbar-toggler");
const loginBtn = document.querySelector("#login");
const closeBtn = document.querySelector("#close");
const loginModal = document.querySelector(".login-modal");
const formId = document.querySelector("#id-input input");
const formPw = document.querySelector("#pw-input input");
const loginSubmit = document.querySelector("#login-submit");

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

function game369(e) {
  if (e % 9 == 0) {
    console.log("clap clap");
  } else if (e % 3 == 0) {
    console.log("clap");
  } else {
    console.log("PPPPAAAASSSS");
  }
}

function gamereal369(e) {
  if (e % 10 == 3) {
    console.log("clap");
  } else if (e % 10 == 6) {
    console.log("clap");
  } else if (e % 10 == 9) {
    console.log("clap");
  } else {
    console.log("pass");
  }
}

function examresult(a, b) {
  if (0 > a || 100 < a || 0 > b || 100 < b) {
    console.log("Are you kidding?");
  } else if (parseInt(a) == NaN || parseInt(b) == Nan) {
    console.log("Are you kidding?");
  } else {
    if (a < 41 || b < 41) {
      console.log("You failed");
    } else if (a + b < 120) {
      console.log("You failed");
    } else {
      console.log("You Pass!!");
    }
  }
}
