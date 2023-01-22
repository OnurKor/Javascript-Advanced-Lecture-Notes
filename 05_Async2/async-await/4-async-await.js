//*===============================================================
//*                   4- ASYNC-AWAIT
//*===============================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asyn hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durudurulmasini saglar. Yapilan istek yerine getirilip sonuc
//* degerlerinin dondurulmesine ile kodun calismasi devam eder.

const getUsers = async function () {
  try {
    const res = await fetch("https://api.github.com/users");
    if (!res.ok) {
      throw new Error(`Something went wrong: ${res.status}`);
    }

    const data = await res.json();
    updateDom(data);
  } catch (error) {
    console.log(error);
  }
};

getUsers();

fetch("https://api.github.com/users")
  .then((res) => {
    //! error handling
    if (!res.ok) {
      throw new Error(`Something went wrong: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => updateDom(data))
  .catch((err) => console.log(err));

const updateDom = (data) => {
  const userDiv = document.querySelector(".users");

  data.forEach((user) => {
    //! destructuring
    const { login, avatar_url, html_url } = user;
    userDiv.innerHTML += `
        <h2 class="text-primary"><span class="text-black">NAME: </span>${login}</h2>
        <img src=${avatar_url} width="50%" alt=""/>
        <h3>HTML_URL: ${html_url}</h3>
        <h4>LOGIN: ${login}</h4>
        `;
  });
};
