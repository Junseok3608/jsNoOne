// 2. 카트.html 만들어서 거기는 장바구니 페이지로 만들고,
// 로컬스토리지에 있는 상품 명들을 쭉 진열해 보도록 할 것.a

const getCartItem = localStorage.getItem("cart");
cartItem = JSON.parse(getCartItem);

document.querySelector(".cart-list").innerHTML = "";

cartItem.forEach((data, i) => {
  const listItems = `
    <li class="list-group-item">${data}</li>
  `;
  document.querySelector(".cart-list").insertAdjacentHTML("beforeend", listItems);
});
