// const btn = document.querySelector(".tombol");

// const body = document.body;
// // const defaultText = "ini tombol";
// btn.textContent = "ini tombol";

// function ubahtext() {
//   baru = document.createElement("p");
//   baru.innerHTML = "rheno";
//   body.append(baru);
// }

// function keluartext() {
//   baru.style.color = "red";
// }

// const arrayGua = ["a", "b", "c"];
// console.log(arrayGua);

// const arrayGanti = [];
// arrayGanti[0] = "x";
// arrayGanti[1] = "y";
// arrayGanti[2] = "z";
// console.log(arrayGanti);

// const arrayKita = new Array();
// arrayKita[0] = "1";
// arrayKita[3] = "4";
// console.log(arrayKita);

// COPY ARRAY
// let counter = {
//   first: "1",
// };

// let copiedCounter = counter;
// copiedCounter.first = "2";

// console.log(copiedCounter);

// const arraygua = [
//   "a",
//   {
//     apakek: function () {
//       console.log("yaudah");
//     },
//   },
//   ["eat", "makan"],
// ];
// arraygua[1].apakek();
// console.log(arraygua[2]);

// ARRAY MERGING
// const arrayAing = ["gina", "fira", "fela"];
// const arrayManeh = ["a", "b", "c"];

// const mergeArray = arrayAing.concat(arrayManeh);
// console.log(mergeArray);
// // for(list of mergeArray) console.log(list) MELIHAT LIST DARI GABUNGAN ARRAY
// // for (list in mergeArray) console.log(list);  MELIHAT INDEX ARRAY DALAM LIST\
// mergeArray.map((value, index) => console.log(value, index));

// const data = [
//   {
//     nama: "joni",
//     umur: 30,
//   },
//   {
//     nama: "doe",
//     umur: 25,
//   },
//   {
//     nama: "budi",
//     umur: 29,
//   },
// ];

// // menampilan data
// data.map((value) => {
//   console.log(value.nama, value.umur);
// });

// // mengurut by umur
// data.sort((a, b) => a.umur - b.umur).map((value) => console.log(value));

// // mengurut by umur lebih dari 25
// data.filter((x) => x.umur > 25).map((value) => console.log(value));

// 30 25 29

// i:0 0<3 i=1
//j:0; 0<2;  j=1
// data[0].umur < data[1].umur (30<25) FALSE
// i:1 1<3 i=2
//j:1 1<2 j=2
//if data[25].umur < data[29].umur (25<29) TRUE
// temp = 25
// 25 = 29
// 29 = temp
// i:2 2<3 i=
// j:2<2

// 2<3 2<3 i=3 j=3
// data[3].umur <

// menampilkan umur dari yang terbesar tanpa menggunakan sort
// for (let i = 0; i < data.length; i++) {
//   for (let j = 0; j < data.length - 1; j++) {
//     if (data[j].umur < data[j + 1].umur) {
//       const temp = data[j];
//       data[j] = data[j + 1];
//       data[j + 1] = temp;
//     }
//   }
// }
// data.forEach((person) => {
//   console.log("nama:" + person.nama + "," + "umur:" + person.umur);
// });

// FUNCTION
// function Apaan() {
//   return "apa kek";
// }
// alert(Apaan());

// function nama(firstname, lastname) {
//   console.log(firstname, lastname);
// }
// nama("goblin", "sitorang");

// () pada function  argumen

// function nama() {
//   console.log(arguments[0]);
//   console.log(arguments[1]);
// }
// nama("atta", "haliling");

// function nama() {
//   for (let i = 0; i < arguments.length; i++) {
//     console.log("nama:", arguments[i]);
//   }
// }
// nama("atta", "haliling", "popo", "setiawan");

// function nama(first, last) {
//   console.log(arguments[0], arguments[1]);
// }
// nama("popo", "anjg");

// const pler = new Function("x", "y", "console.log(x+y)");
// pler(5, 5);

// sum(4, 3);
// function sum(x, y) {
//   console.log(x + y);
// }

// sum2 = (x, y) => {
//   console.log(x + y);
// };
// sum2(2, 4);

// const lingkaran = (r) => {
//   alert(`luas lingkaran adalah ${r ** 2 * 3.14}`);
// };
// let p = prompt(`Berapa jari jari lingkaran?`);
// lingkaran(p);

// PERHITUNGAN MTK BY:
//1. luas lingkaran
// function circle() {
//   const x = 3.14;
//   const y = arguments[0];
//   console.log(x * y * y);
// }
// circle(4);

// let nama = prompt("Nama karyawan:");
// let gaji_harian = prompt("Masukkan gaji harian:");
// let masuk_kerja = prompt("Total hari karyawan masuk kerja:");

// function gajian(gaji_harian, masuk_kerja) {
//   return gaji_harian * masuk_kerja;
// }

// alert(`${nama} mendapatkan ${gajian(gaji_harian, masuk_kerja)}`);

// let erey = [3, 5, 12];
// let assemble = erey.join(" ,"); //untuk menampilkan array pada output(alert)
// let tot = 0;

// for (x = 0; x < erey.length; x++) {
//   tot = tot + erey[x];
// }

// alert(`hasil penambahan dari value pada array ${assemble} adalah ${tot}`);

// const token = ~~(Math.random() * 12345678);
// const pictures = ["x.jpg", "y.jpg"];
// const validUsers = ["ucup", "budi", "andi"]; // Add more valid usernames here

// function login(username) {
//   console.log("processing token user..");
//   return new Promise((success, failed) => {
//     setTimeout(() => {
//       if (!validUsers.includes(username)) failed("incorrect data");
//       success({ token });
//     }, 200);
//   });
// }

// function getUser(token) {
//   console.log("processing apiKey..");
//   return new Promise((success, failed) => {
//     if (!token) failed("No token, can't access");
//     setTimeout(() => {
//       success({ apikey: "abc123" });
//     }, 300);
//   });
// }

// function getPictures(apikey) {
//   console.log("processing picture..");
//   return new Promise((success, failed) => {
//     if (!apikey) failed("no apikey, can't access");
//     setTimeout(() => {
//       success({ pic: pictures });
//     }, 1500);
//   });
// }

// async function UserDisplay() {
//   try {
//     const username = prompt("Enter your username:");
//     const { token } = await login(username);
//     const tok = prompt("Enter your token:");
//     const { apikey } = await getUser(tok);
//     const { pic } = await getPictures(apikey);

//     console.log(`token anda ${token}`);
//     console.log(`apikey anda ${apikey}`);
//     console.log(`berikut beberapa render picture ${pic}`);
//   } catch (err) {
//     console.log(err);
//   }
// }

// UserDisplay();

//membuat segitiga
// const titik = 6;
// for (i = 1; i <= titik; i++) {
//   let baris = "";
//   for (j = 1; j <= i; j++) {
//     baris = baris + ". ";
//   }
//   console.log(baris);
// }

// const tinggi = 6;
// for (let i = 1; i <= tinggi; i++) {
//   let baris = "";

//   // Tambahkan spasi untuk rata tengah
//   for (let j = 1; j <= tinggi - i; j++) {
//     baris += " ";
//   }

//   // Tambahkan titik
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     baris += ".";
//   }

//   console.log(baris);
// }

//VVVV Bro Code Course VVVV

// let fullName = "renofebrian";
// let Age = 19;
// let student = true;

// document.getElementById("p1").textContent = `My name is ${fullName}`;
// document.getElementById("p2").textContent = `Im ${Age} years old`;
// document.getElementById("p3").textContent = `im a student: ${student}`;

// let students = 60;

// students /= 2;
// students **= 2;

// console.log(students);

// let username;

// username = window.prompt("enter username:");
// console.log(username);

let username;
document.getElementById("mybutton").onclick = function () {
  username = document.getElementById("mytext").value;
  console.log(username);
  document.getElementById("myh1").textContent = `woi ${username}`;
};

// let age = prompt("how old are you?");
// age = Number(age);

// console.log(age);

// let x;
// let y;
// let z;

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};
decreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};
resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};

const ranBtn = document.getElementById("ranBtn");
const ranLabel = document.getElementById("ranLabel");
const min = 0;
const max = 100;
let randomNum;

ranBtn.onclick = function () {
  randomNum = Math.floor(Math.random() * max) + min;
  ranLabel.textContent = randomNum;
};

const cekbox = document.getElementById("cekbox");
const cekbox1 = document.getElementById("cekbox1");
const cekbox2 = document.getElementById("cekbox2");
const submitpay = document.getElementById("submitpay");
const paymentresult = document.getElementById("paymentresult");

submitpay.onclick = function () {
  if (cekbox.checked) {
    paymentresult.textContent = "Kamu membayar menggunakan Gopay";
  } else if (cekbox1.checked) {
    paymentresult.textContent = "kamu membayar menggunakan dana";
  } else if (cekbox2.checked) {
    paymentresult.textContent = "kamu membayar menggunakan QRIS";
  } else {
    paymentresult.textContent = "kamu harus memilih metode pembayaran! ";
  }
};

document.addEventListener("click", function (e) {
  if (
    !cekbox.contains(e.target) &&
    !cekbox1.contains(e.target) &&
    !cekbox2.contains(e.target)
  ) {
    cekbox.checked = false;
    cekbox1.checked = false;
    cekbox2.checked = false;
  }
});

// //Ternary Operantion
// let cash = 125;

// let discount = cash >= 100 ? 20 : 0;
// console.log(`${cash - cash * (discount / 100)}`);

//switch//
// let day = 2;
// switch (day) {
//   case 1:
//     console.log();
//   case 2:
//     console.log("selasa");
//     break;
//   case 3:
//     console.log();
//     break;
//   case 4:
//     console.log();
//     break;
//   case 5:
//     console.log();
//     break;
//   case 6:
//     console.log();
//     break;
//   case 7:
//     console.log();
//     break;
// }

// slicing string //
// const email = "bbc@gmail.com";

// let nama = fullNa .slice(0);
// console.log(nama);

//metode chaining
let nama = window.prompt("masukin nama");

// nama = nama.trim();
// let letter = nama.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = nama.slice(1);
// extraChars = extraChars.toLowerCase();
// nama = letter + extraChars;

//cara diatas terlalu panjang maka gunakan cara chaining dibawah
nama = nama.trim().charAt(0).toUpperCase() + nama.trim().slice(1).toLowerCase();

console.log(nama);
