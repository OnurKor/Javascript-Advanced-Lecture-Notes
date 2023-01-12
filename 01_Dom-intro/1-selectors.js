//*===========================================
//*             DOM SELECTORS
//*===========================================

console.log('***** SELECTORS *****');

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

//* EXAMPLE-1 (Paragraph Style)
//*--------------------------------------------
const header = document.getElementById("header");
console.log(header);

header.style.color = "red";


//* EXAMPLE-2 (Button Style)
//*-------------------------------------------

const button =document.getElementById("btn");
console.log(button);
btn.style.backgroundColor = "black";
btn.style.color = "yellow";
btn.style.fontSize = "2rem";


//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*============================================

//*EXAMPLE-3 (img styling)
//*-------------------------------------------
const img = document.getElementsByTagName("img");
console.log(img);
  
img[0].style.border = "solid";
img[0].style.borderColor = "red";
img[0].style.transform = "rotate(-5deg)";


//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

//* EXAMPLE-4
//* ---------------
const par = document.getElementsByClassName("par");
// par[0].textContent = "Dom Manipülasyonu";
// par[0].innerText = "Dom Manipülasyonu";
// par[0].innerHTML = "Dom Manipülasyonu";
par[0].innerHTML += ' <a href="https://www.clarusway.com">Clarusway</a>'; //? innerHTML'e tag yazıp direkt render ettirebiliriz. Ama += yaparsak eskisini silmez ve yenisini ekler.

//! bir elementin yazısını değiştireceksek textContent kullanmak mantıklı, ama bir elemente html tagı basacaksak innerHTML kullanmak mantıklı.

//* ========================================
//*              QUERYSELECTOR()
//* ========================================
const title = document.querySelector("title");
title.textContent = "JS09-DOM 💗";

const myPars = document.querySelectorAll("p");
console.log(myPars); //? NodeList

myPars.forEach((p) => console.log(p.innerText)); //? innerText Sadece içeriği aldı.
myPars.forEach((p) => console.log(p.textContent)); //? textContent boşluklarıyla birlikte içeriği aldı.
myPars.forEach((p) => console.log(p.innerHTML)); //? innerHTML HTML etiketi olarak aldı.

const myPars1 = document.getElementsByClassName("par");
console.log(myPars1); //? HTML Collection oldugu için array işlemleri yapamadık.

//! HTML Collection'dan Array' e çevirme yöntemleri
//? 1.Array.from()

const myPars1Array = Array.from(myPars1); //? Array.from ile diziye çevirilir.
console.log(myPars1Array);
myPars1Array.forEach((p) => console.log(p.innerText));


//? 2.Spread/Rest

[...myPars1].forEach((p) => console.log(p.innerText));



//! querySelector ile CSS vari seçim yapmak mümkündür.
//! CSS Selector'lerin hepsini kullanmak mümkündür.

// console.log(document.querySelector("section p a"));


