products.forEach((data) => {
  const cardSectionLayout = `
  <div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100" />
    <h5>${data.title}</h5>
    <p>${data.price}</p>
  </div>`;
  document.querySelector(".row").insertAdjacentHTML("beforeend", cardSectionLayout);
});
