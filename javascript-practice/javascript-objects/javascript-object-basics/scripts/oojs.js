const person = {};

/* const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
}*/

const person1 = {
  name: ["Varun", "Sahil"],
  age: 22,
  bio: function (){
    console.log(`${this.name[0]} and ${this.name[1]} both are ${this.age} years old.`);
  },
  introduceSelf: function(n = this.name[0]){
    console.log(`Hi! I'm ${n}.`);
  },
}

// When the object's members are functions there's a simpler
//  syntax. Instead of bio: function () we can write
//  bio(). Like this:

const person2 = {
  name: ["varun", "sahil"],
  age: 22,
  bio(){
    console.log(`${this.name[0]} and ${this.name[1]} both are ${this.age} years old.`);
  },
  introduceSelf(n = this.name[0]){
    console.log(`Hi! I'm ${n}`);
  }
}

// Object as object property
const person3 = {
  name: {
    first: "Varun",
    second: "Sahil",
  },
}
// dot notation
console.log(person3.name.first);
// bracket notation
console.log(person3["name"]["second"]);

// Dot notation is generally preferred over bracket notation
//  because it is more succinct and easier to read. However
//  there are some cases where you have to use brackets. For 
//  example, if an object property name is held in a variable,
//  then you can't use dot notation to access the value, but you
//  can access the value using bracket notation. 

function logProperty(propertyName){
  console.log(person1[propertyName]);
}

logProperty("name");
logProperty("bio");

// Setting object members
person2.name[1] = "Sunil";
console.log(person2.name[1]);

person3["name"]["second"] = "Mini";
console.log(person3["name"]["second"]);