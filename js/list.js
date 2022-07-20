for (i = 0; i < document.querySelectorAll(".card-body h5").length; i++) {
  document.querySelectorAll(".card-body h5")[i].innerHTML = products[i].title;
  document.querySelectorAll(".card-body p")[i].innerHTML = `가격: ${products[i].price}`;
}
