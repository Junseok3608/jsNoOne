window.addEventListener("scroll", function () {
  let hei = window.scrollY;
  console.log(hei);
  let y = (-1 / 500) * hei + 115 / 50;
  let z = (-1 / 5000) * hei + 565 / 500;
  $(".card-box").eq(0).css("opacity", y);
  $(".card-box").eq(0).css("transform", `scale(${z})`);
});
