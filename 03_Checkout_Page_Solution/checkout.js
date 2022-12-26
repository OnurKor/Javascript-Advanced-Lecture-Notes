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
    event.target.parentElement.parentElement.parentElement.remove();
    calculateCartTotal();
    // console.log("remove button clicked");
  } else {
    console.log("other elements clicked");
  }
  // console.log(event.target);
});

//? calculate cart and product totals
const calculateProductAndCartTotal = (productInfoDiv) => {
  //! product calculation
  let quantity = 
  let price = 

  //! cart calculation
  calculateCartTotal();
};

//? calculate cart totals
const calculateCartTotal = () => {};
