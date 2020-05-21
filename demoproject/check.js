let data = ["A", "B", "C", "D", "E"];

var ages = [3, 10, 18, 20];

// let x = [];

// for (let i = 0; i < data.length; i++) {
//   x.push(data[i]);
// }

// console.log(x);

let x = ages.find((item, i) => {
  return item > 6;
});

// let y = ages.findIndex(function (item, i) {
//   // console.log(item);
//   return item > 3;
// });

console.log(x);

const u = "sachin";
let y = u.split("").reverse().join("", ",");

console.log(y);
