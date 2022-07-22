products.forEach((data, i) => {
  const cardSectionLayout = `
    <div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100" />
      <h5>${data.title}</h5>
      <p>${data.price}</p>
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

document.querySelector("#sort-btn").addEventListener("click", function () {
  products.sort(function (a, b) {
    return a.price - b.price;
  });
  document.querySelector(".row").innerHTML = "";
  products.forEach((data, i) => {
    const cardSectionLayout = `
      <div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100" />
        <h5>${data.title}</h5>
        <p>${data.price}</p>
      </div>`;
    document.querySelector(".row").insertAdjacentHTML("beforeend", cardSectionLayout);
  });
});

let array = [7, 3, 5, 2, 40];
let newArray = array.filter(function (a) {
  return a < 10;
});
console.log(array);
console.log(newArray);
