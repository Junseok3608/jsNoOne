const tabBtn = document.querySelectorAll(".tab-button");
const tabContent = document.querySelectorAll(".tab-content");

// for (let i = 0; i < tabBtn.length; i++) {
//   $(".tab-button")
//     .eq(i)
//     .on("click", function () {
//       tabChange(i);
//     });
// }
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
