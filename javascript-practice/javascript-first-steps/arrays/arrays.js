// creating arrays
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping);
const sequence = [1, 1, 2, 3, 5, 8, 13];
const random = ["tree", 795, [0, 1, 2]];

// finding length
console.log(`Length of shopping list is ${shopping.length}`);

// accessing and modifying array items
console.log(shopping[3]);
shopping[3] = "peanut butter";
console.log(shopping[3]);

// accessing multidimensional array
console.log(random[2][1]);

// finding index of the item in an array

const birds = ["parrot", "falcon", "owl"];
console.log(birds.indexOf("owl"));
console.log(birds.indexOf("rabbit"));

// adding item to array
let newLength = birds.push("peacock");  // it returns the length
newLength = birds.push("eagle", "ostrich");
console.log(birds, newLength);

// adding to the first position
newLength = birds.unshift("crow");
console.log(birds, newLength);

// removing items from array
let removedItem = birds.pop("ostrich");  // it returns the removed item
console.log(birds, birds.length, removedItem);

// to remove item from start
removedItem = birds.shift();
console.log(birds, removedItem);

// to remove item form any index position (using splice());

const idx = birds.indexOf("peacock");
removedItem = birds.splice(idx, 1); // .splice(startIdx, howManyItems) and it return the removed item or items array
console.log(birds,removedItem);

// accessing every item
for(const bird of birds){
  console.log(bird);
}

// doing something to each item of array using (using .map())

function expoFun(item){
  return item**2;
}
const numbers = [0, 1, 2, 3, 4, 5];
const expo = numbers.map(expoFun);  // We give a function to the map(), and map() calls the function once for each item in the array, passing in the item. It then adds the return value from each function call to a new array, and finally returns the new array.
console.log(expo);

// doing something to certain items of the arrays that match some test (using .filter())

function isOdd(item){
  return item % 2 !== 0;
}
const odds = numbers.filter(isOdd);  // Like map(), we give a function to the filter() method, and filter() calls this function for every item in the array, passing in the item. If the function returns true, then the item is added to a new array. Finally it returns the new array.
console.log(odds);

// converting between strings and arrays (using .split(), .join(), toString())

const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

// string to array (using .split())
const arr1 = data.split(","); console.log(arr1);
const arr2 = data.split("L"); console.log(arr2);
const arr3 = data.split(" "); console.log(arr3);
const arr4 = data.split("");  console.log(arr4);
// array to string (using .join())
const str1 = arr1.join(",");  console.log(str1);
// another way of array to string (using .toString());
const str2 = arr4.toString(); console.log(str2);