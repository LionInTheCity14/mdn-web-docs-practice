const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// when looping through an collection

for (const cat of cats) {
  console.log(cat);
}

// to do something with each item of collection
function toUpper(string) {
  return string.toUpperCase();
}

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

// to add item that passes some condition

function lCat(cat) {
  return cat.startsWith("L");
}

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]

// for loop
// for (initializer; condition; final-expression) {
//   // code to run
// }

// while loop
// initializer
// while (condition) {
//   // code to run

//   final-expression
// }

// do while loop
// initializer
// do {
//   // code to run

//   final-expression
// } while (condition)