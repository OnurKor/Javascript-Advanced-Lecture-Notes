const taxRate = 0.18;
const shippingPrice = 15.0;

window.addEventListener("load", () => {
  //?set item to LocalStorage => sürekli kalır biz silene kadar
  localStorage.setItem("taxRate", taxRate);
  localStorage.setItem("shippingPrice", shippingPrice);

  //?set item to SessionStorage => sayfayı kapattıgımızda silinir.
  /*  sessionStorage.setItem("taxRate", taxRate);
  sessionStorage.setItem("shippingPrice", shippingPrice); */
}); //! web database'imiz diyebiliriz.

//? capturing method

let productsDiv = document.querySelector(".products");
// console.log(productsDiv);

productsDiv.addEventListener("click", (event) => {
  if (event.target.className == "minus") {
    console.log("minus button clicked");
  } else if (event.target.classList.contains("plus")) {
    // console.log(event.target.classList);
    console.log("plus button clicked");
  } else if (event.target.classList.contains("remove-product")) {
    console.log("remove button clicked");
  } else {
    console.log("other elements clicked");
  };
  // console.log(event.target);
});
