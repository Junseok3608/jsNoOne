const navbarList = document.querySelector(".list-group");
const navbarToggle = document.querySelector(".navbar-toggler");

function toggling() {
  navbarList.classList.toggle("list-group-hidden");
}

navbarToggle.addEventListener("click", toggling);

$(".text-btn").on("click", function () {
  $(".toggletab").toggle("list-group-hidden");
});
