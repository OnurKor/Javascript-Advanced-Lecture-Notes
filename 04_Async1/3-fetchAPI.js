//* ===========================================================
//*                          3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

let dataFromAPI;

fetch("https://api.github.com/users")
  .then((res) => {
    //! error handling
    if (!res.ok) {
      throw new Error(`Something went wrong: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    dataFromAPI = data;
    console.log(dataFromAPI);
  })
  .catch((err) => console.log(err));
