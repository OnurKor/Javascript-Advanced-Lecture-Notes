// const taxRate = 0.18;
// const shippingPrice = 15.0;

window.addEventListener("load", () => {
  calculateCartTotal();
  //?set item to LocalStorage => sürekli kalır biz silene kadar
  // localStorage.setItem("taxRate", taxRate);
  // localStorage.setItem("shippingPrice", shippingPrice);
  //?set item to SessionStorage => sayfayı kapattıgımızda silinir.
  /*  sessionStorage.setItem("taxRate", taxRate);
  sessionStorage.setItem("shippingPrice", shippingPrice); */
}); //! web database'imiz diyebiliriz.

//? capturing method

let productsDiv = document.querySelector(".products");
// console.log(productsDiv);

productsDiv.addEventListener("click", (event) => {
  if (event.target.className == "minus") {
    let quantityP = event.target.nextElementSibling;
    if (quantityP.innerText > 1) {
      quantityP.innerText--;
      //*parameter == selected productInfoDiv
      calculateProductAndCartTotal(event.target.parentElement.parentElement);
    } else {
      if (confirm("Product will be deleted")) {
        event.target.parentElement.parentElement.parentElement.remove();
        calculateCartTotal();
      }
    }
    // console.log(typeof event.target.nextElementSibling.innerText);
    // console.log("minus button clicked");
  } else if (event.target.classList.contains("plus")) {
    event.target.previousElementSibling.innerText++;
    //*parameter == selected productInfoDiv
    calculateProductAndCartTotal(event.target.parentElement.parentElement);
    // console.log(event.target.classList);
    // console.log("plus button clicked");
  } else if (event.target.classList.contains("remove-product")) {
    if (confirm("Product will be deleted")) {
      event.target.parentElement.parentElement.parentElement.remove();
    calculateCartTotal();
    }
    // console.log("remove button clicked");
  } else {
    console.log("other elements clicked");
  }
  console.log(event.target);
});

//? calculate cart and product totals
const calculateProductAndCartTotal = (productInfoDiv) => {
  //! product calculation
  // console.log(productInfoDiv);
  let quantity = productInfoDiv.querySelector("strong").innerText;
  let price = productInfoDiv.querySelector("#product-quantity").innerText;
  let productTotalDiv = productInfoDiv.querySelector(".product-line-price");
  productTotalDiv.innerText = (price * quantity).toFixed(2);

  //! cart calculation
  calculateCartTotal();
};

//? calculate cart totals
const calculateCartTotal = () => {
  let productsTotalPriceDivs = document.querySelectorAll(".product-line-price");
  // console.log(productsTotalPriceDivs);

  let subtotal = 0;
  productsTotalPriceDivs.forEach((eachProductTotalDiv) => {
    subtotal += parseFloat(eachProductTotalDiv.innerText);
  });
  console.log(subtotal);

  let taxPrice = subtotal * localStorage.getItem("taxRate");
  console.log(taxPrice);

  let shippingPrice = (subtotal > 0 ? parseFloat(localStorage.getItem("shippingPrice")) : 0); //? veya başına + koyarakta number'a çevirebiliriz.

  let cartTotal = subtotal + taxPrice + shippingPrice;

  document.querySelector("#cart-subtotal p:nth-child(2)").innerText =
    subtotal.toFixed(2);

  document.querySelector("#cart-tax p:nth-child(2)").innerText =
    taxPrice.toFixed(2);

  document.querySelector("#cart-shipping p:nth-child(2)").innerText =
    shippingPrice.toFixed(2);

  document.querySelector("#cart-total").lastElementChild.innerText =
    cartTotal.toFixed(2);
};
