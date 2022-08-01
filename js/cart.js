const getCartItem = localStorage.getItem("cart");
cartItem = JSON.parse(getCartItem);

document.querySelector(".cart-list").innerHTML = "";

cartItem.forEach((data, i) => {
  const listItems = `
    <li class="list-group-item">${data}</li>
  `;
  document.querySelector(".cart-list").insertAdjacentHTML("beforeend", listItems);
});
