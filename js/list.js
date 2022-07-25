function repage() {
  document.querySelector(".row").innerHTML = "";
  products.forEach((data, i) => {
    const cardSectionLayout = `
        <div class="col-sm-4">
          <img src="https://via.placeholder.com/600" class="w-100" />
          <h5>${data.title}</h5>
          <p>${data.price}</p>
          <button class="buy-btn">구매</button>
        </div>`;
    document.querySelector(".row").insertAdjacentHTML("beforeend", cardSectionLayout);
  });
}

products.forEach((data, i) => {
  const cardSectionLayout = `
    <div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100" />
      <h5>${data.title}</h5>
      <p>${data.price}</p>
      <button class="buy-btn">구매</button>
    </div>`;
  document.querySelector(".row").insertAdjacentHTML("beforeend", cardSectionLayout);
});

let btnClicks = 0;
document.querySelector("#more-btn").addEventListener("click", function () {
  btnClicks++;
  if (btnClicks == 1) {
    fetch("https://codingapple1.github.io/js/more1.json")
      .then((res) => res.json())
      .then(function (data) {
        for (i = 0; i < data.length; i++) {
          const cardSectionLayout = `
          <div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100" />
            <h5>${data[i].title}</h5>
            <p>${data[i].price}</p>
            <button class="buy-btn">구매</button>
          </div>`;
          document.querySelector(".row").insertAdjacentHTML("beforeend", cardSectionLayout);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  } else if (btnClicks == 2) {
    fetch("https://codingapple1.github.io/js/more2.json")
      .then((res) => res.json())
      .then(function (data) {
        for (i = 0; i < data.length; i++) {
          const cardSectionLayout = `
          <div class="col-sm-4">
            <img src="https://via.placeholder.com/600" class="w-100" />
            <h5>${data[i].title}</h5>
            <p>${data[i].price}</p>
            <button class="buy-btn">구매</button>
          </div>`;
          document.querySelector(".row").insertAdjacentHTML("beforeend", cardSectionLayout);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    document.querySelector("#more-btn").style.visibility = "hidden";
  }
});

document.querySelector("#sort-menu").addEventListener("change", function () {
  if (this.value == `가나다순 정렬`) {
    products.sort(function (a, b) {
      if (a.title > b.title) return 1;
      else if (a.title < b.title) return -1;
      else if (a.title == b.title) return 0;
    });
    repage();
  } else if (this.value == `다나가순 정렬`) {
    products.sort(function (a, b) {
      if (a.title > b.title) return -1;
      else if (a.title < b.title) return 1;
      else if (a.title == b.title) return 0;
    });
    repage();
  } else if (this.value == `가격순 정렬`) {
    products.sort(function (a, b) {
      return a.price - b.price;
    });
    repage();
  } else if (this.value == `6만원 이하 보기`) {
    const result = products.filter((a) => a.price < 60001);

    document.querySelector(".row").innerHTML = "";
    result.forEach((data, i) => {
      const cardSectionLayout = `
        <div class="col-sm-4">
          <img src="https://via.placeholder.com/600" class="w-100" />
          <h5>${data.title}</h5>
          <p>${data.price}</p>
          <button class="buy-btn">구매</button>
        </div>`;
      document.querySelector(".row").insertAdjacentHTML("beforeend", cardSectionLayout);
    });
  }
});
function addingCart(i) {
  document.querySelectorAll(".buy-btn")[i].addEventListener("click", function () {
    let cartItem = [];
    if (localStorage.getItem("cart") == null) {
      cartItem.push(this.previousElementSibling.previousElementSibling.innerText);
      const cartItemJson = JSON.stringify(cartItem);
      localStorage.setItem("cart", cartItemJson);
    } else {
      const getCartItem = localStorage.getItem("cart");
      cartItem = JSON.parse(getCartItem);
      cartItem.push(this.previousElementSibling.previousElementSibling.innerText);
      const cartItemJson = JSON.stringify(cartItem);
      localStorage.setItem("cart", cartItemJson);
    }
  });
}
for (i = 0; i < document.querySelectorAll(".buy-btn").length; i++) {
  addingCart(i);
}
