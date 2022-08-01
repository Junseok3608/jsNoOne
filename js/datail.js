const tabBtn = document.querySelectorAll(".tab-button");
const tabContent = document.querySelectorAll(".tab-content");

function tabChange(nums) {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(nums).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(nums).addClass("show");
}

$(".list").click(function (e) {
  tabChange(e.target.dataset.id);
});

const car = {
  nam: "sonata",
  price: [50000, 3000, 43000],
  color: "white",
};
let 상품명 = car.nam;
let 가격 = car.price[0];
document.querySelector(".nam-price").innerHTML = `${상품명} / ${가격}`;

const itemName = document.querySelector("#item-name");
const itemSize = document.querySelector("#item-size");

itemName.addEventListener("input", function () {
  if (this.value == "모자") {
    itemSize.classList.remove("show");
  }
  if (this.value == "셔츠") {
    itemSize.classList.add("show");
    itemSize.innerHTML = "";
    shirts.forEach((e) => {
      itemSize.insertAdjacentHTML("beforeend", `<option>${e}</option>`);
    });
  }
  if (this.value == "바지") {
    itemSize.classList.add("show");
    itemSize.innerHTML = "";
    pants.forEach((e) => {
      itemSize.insertAdjacentHTML("beforeend", `<option>${e}</option>`);
    });
  }
});

document.querySelector(".image").addEventListener("scroll", function () {
  console.log("hiy");
});
