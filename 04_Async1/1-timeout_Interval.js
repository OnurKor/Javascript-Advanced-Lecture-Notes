//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basariyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ---------------------------------------------------------------
// const bekle = (ms) => { //! blocking-code
//     const start = new Date().getTime();
//     while(new Date().getTime() < start +ms);
// };


// console.log("hello");
// // alert("FS"); //! blocking-code
// console.time("timer");
// bekle(3000)
// console.timeEnd("timer");
// console.log("FS11");



//* Asenkron (setTimeout)
//* ---------------------------------------------------------------
// //! macro task kuyruğu
// setTimeout ( () => {
//     //! non-blocking code
//     console.log("Selam");
// }, 1000);

// //! micro task kuyruğu
// console.log("Sana da selam");
// console.log("merhaba");


// setTimeout ( () => {
//     //! non-blocking code
//     console.log("Dostum naber?");
// }, 500);


//* Asenkron (setInterval, clearInterval)
//*----------------------------------------------------------
let counter = 0;

setInterval( () => {
console.log(++counter); 
}, 1000)



//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakta bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.




//? COZUMLER:
//?----------------------------------------------------------------
//* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
//? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//* 2- Promise,
//! 3- Fetch API (Promise'in basitlestirilmis hali),
//! 4- ASYNC-AWAIT (Fetch API'nin makyajlanmis hali)

