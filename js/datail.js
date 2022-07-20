const tabBtn = document.querySelectorAll(".tab-button");
const tabContent = document.querySelectorAll(".tab-content");

function tabChange(nums) {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(nums).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(nums).addClass("show");
}

$(".list").click(function (e) {
  console.log(parseInt(e.target.dataset.id));
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
