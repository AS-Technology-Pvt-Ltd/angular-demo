/*
annonymous function
call back

find
findbyIndex
push vs concat
pop 
sort
*/

// const axios = require("axios"); //import

// const fetchData = async () => {
//   try {
//     let res = await axios("https://jsonplaceholder.typicode.com/users");
//     return res.data;
//     // console.log(res.data.length);
//   } catch (err) {
//     console.log("error", err);
//   }

//   return null;
// };

//map,filter  ==>array

const data = [
  { id: 1, name: "Sachin" },
  { id: 2, name: "xyz" },
  { id: 3, name: "PQR" },
];

//1. ssachin ,2.xyz

// let x = data.map((item, index) => {
//   console.log(item.id, item.name);
//   return item.id + item.name;
// });

let x = data.map((item, index) => {
  return item.id;
});

let y = x;

console.log(x);
console.log(data);
console.log(y.length ? y : []); //how to validate array

/*

@object

*/

const p = { id: 1, name: "sachin" };

//how to validate object

let q = {};

console.log(q.id);
