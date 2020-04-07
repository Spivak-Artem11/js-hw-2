// //num1

// let car = {
//   name: "Lexus",
//   age: 10,
//   lastService: "1 month",
//   create: 2008,
//   needRepair: false,
// };

// let num = parseInt(car.lastService);

// if (num > 5) {
//   console.log("Need Repair");
//   car.needRepair = true;
// } else {
//   car.needRepair = false;
// }

// console.log(car);

// // num 2

// let product = {
//   name: "Яблоко",
//   price: "10$",
// };

// let min = 10; // минимальная цена
// let max = 20; // максимальная цена

// let priceProduct = parseInt(product.price);

// if (priceProduct >= min && priceProduct <= max) {
//   console.log(product.name);
// } else {
//   console.log("Товар не найден.");
// }

// num 3

// let str3 = "JavaScript is a pretty good language";

// let newStr3 = "";

// for (let i = 0; i < str3.length; i++) {
//   if (str3[i] == " ") {
//     continue;
//   }
//   if (str3[i - 1] == " ") {
//     newStr3 += str3[i].toUpperCase();
//   } else {
//     newStr3 += str3[i];
//   }
// }

// console.log(newStr3);

// num 4

// let arr = [1, 2, 3];

// function doubleArray(arr) {
//   let newArr4 = [];
//   for (j = 0; j < 2; j++) {
//     for (let i = 0; i < arr.length; i++) {
//       newArr4.push(arr[i]);
//     }
//   }
//   return newArr4;
// }

// console.log(doubleArray(arr));

// num 5

// let a = [1, 2, 3];
// let b = ["a", "b", "c"];

// function chgArr() {
//   for (let i = 0; i <= arguments.length - 1; i++) {
//     arguments[i].splice(0, 1);
//   }
// }

// chgArr(a, b);

// console.log(a, b);

//num 6

// let users = [
//   {
//     _id: "5d1c3860aa841704d3245513",
//     isActive: false,
//     balance: 2764.35,
//     age: 33,
//     name: "Allie Blair",
//     gender: "female",
//     company: "PHOTOBIN",
//     email: "allieblair@photobin.com",
//     phone: "+1 (951) 566-2987",
//     registered: "2018-11-30T02:29:00 -02:00",
//   },
//   {
//     _id: "5d1c386095ffb689687f2db9",
//     isActive: false,
//     balance: 3276.25,
//     age: 22,
//     name: "Yesenia Leblanc",
//     gender: "female",
//     company: "SKINSERVE",
//     email: "yesenialeblanc@skinserve.com",
//     phone: "+1 (947) 446-2840",
//     registered: "2015-10-31T01:10:31 -02:00",
//   },
//   {
//     _id: "5d1c3860e73ff2a338722e81",
//     isActive: true,
//     balance: 1868.65,
//     age: 38,
//     name: "Mamie Kramer",
//     gender: "female",
//     company: "EARBANG",
//     email: "mamiekramer@earbang.com",
//     phone: "+1 (885) 564-3305",
//     registered: "2014-06-03T09:36:40 -03:00",
//   },
//   {
//     _id: "5d1c386000e4f2fc62be1b1e",
//     isActive: true,
//     balance: 1003.15,
//     age: 32,
//     name: "Crawford Bryant",
//     gender: "male",
//     company: "DIGIRANG",
//     email: "crawfordbryant@digirang.com",
//     phone: "+1 (889) 408-2141",
//     registered: "2015-01-15T05:20:21 -02:00",
//   },
//   {
//     _id: "5d1c386008ff236a315d638b",
//     isActive: false,
//     balance: 3045.41,
//     age: 36,
//     name: "Helene Holland",
//     gender: "female",
//     company: "HYDROCOM",
//     email: "heleneholland@hydrocom.com",
//     phone: "+1 (937) 554-2040",
//     registered: "2014-09-15T08:22:59 -03:00",
//   },
//   {
//     _id: "5d1c3860b4c27c4d5fdb6c1f",
//     isActive: true,
//     balance: 1693.51,
//     age: 23,
//     name: "Hernandez Osborn",
//     gender: "male",
//     company: "TERRASYS",
//     email: "hernandezosborn@terrasys.com",
//     phone: "+1 (965) 595-3942",
//     registered: "2016-08-06T12:19:01 -03:00",
//   },
// ];

// let a = [];

// function funcGetUsers(arr, key, value) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i][key] === value) {
//       a.push({
//         name: arr[i].name,
//         age: arr[i].age,
//         gender: arr[i].gender,
//       });
//     }
//   }
// }

// funcGetUsers(users, "gender", "male");

// console.log(a);

// num 7

// const obj = {};

// (function (x) {
//   x.b = 1;
//   x = null;
// })(obj);

// console.log(obj);

// я думаю, что сначала обьект равняется null(он пустой), он обращается к функции и она перезаписывает обьект, а потом так как во функции есть x.b = 1, этим она заполняет пустоту и поэтому получается obj{b:1}

//num 8

// const price = {
//   price: 10,
//   discount: "15%",
//   getPrice: function () {
//     console.log(this.price);
//     return this;
//   },
//   getPriceWithDiscount: function () {
//     console.log(this.price - (parseInt(this.discount) * this.price) / 100) *
//       this.price;
//   },
// };

// price.getPrice();
// price.getPriceWithDiscount();

// num 9

// let sizes = {
//   width: 5,
//   height: 10,
//   getPrice: function () {
//     return this.width * this.height;
//   },
// };

// function getWidth() {
//   return this.width;
// }

// function getHeight() {
//   return this.height;
// }

// function getRes() {
//   console.log(sizes.getPrice());
// }

// getRes.call(sizes);
// getWidth.call(sizes);
// getHeight.call(sizes);
