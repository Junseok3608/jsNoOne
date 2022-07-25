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

document.querySelectorAll(".buy-btn")[0].addEventListener("click", function () {
  document.querySelectorAll(".buy-btn")[0].style.color = "red";
});

// 1. 구매버튼 누르면 누른 상품이름 로컬스토리지에 넣기
// +array 형식으로 넣는 것으로 하기
// array 식으로 할 경우 우선 json으로 변환하기 그다음 넣기의 과정
// 변환할 떄는?
// 데이터 꺼내기- json에서 변환하기-수정하기-json으로 변환하기-다시 넣기
// 이런 식으로 해야함
// +sibling요소 찾는 방법 알아봐야 함
// +로컬 스토리지가 비어있을 때랑 뭔가 있을 때 저장 방식이 다를 것임.a
// -> 아마도 내 생각에는 if문이 도입되어서 만약 데이터 있으면? 없으면? 이런 식으로 짜게 될 듯.a

// 2. 카트.html 만들어서 거기는 장바구니 페이지로 만들고,
// 로컬스토리지에 있는 상품 명들을 쭉 진열해 보도록 할 것.a
