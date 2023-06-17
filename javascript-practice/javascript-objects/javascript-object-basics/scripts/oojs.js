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

person2["eyes"] = "black";
person2.friend = function(){
  console.log(`${person2.name[1]} is friend of ${person2.name[0]}`);
}

// One useful aspect of bracket notation is that it can be 
// used to set not only member values dynamically, but member 
// names too. Let's say we wanted users to be able to store 
// custom value types in their people data, by typing the 
// member name and value into two text inputs. We could get 
// those values like this:

const dataLabel = document.createElement("label");
const dataNameInput = document.createElement("input");
dataLabel.textContent = "Data name: ";
dataLabel.setAttribute("for", "dataName");
dataNameInput.setAttribute("id", "dataName");
document.body.appendChild(dataLabel);
document.body.appendChild(dataNameInput);

// dataNameInput.addEventListener("change", (evt) =>{
//   const dataName = dataNameInput.value;
//   return dataName;
// });

const dataValueLabel = document.createElement("label");
const dataValueInput = document.createElement("input");
dataValueLabel.textContent = "Data value: ";
dataValueLabel.setAttribute("for", "value");
dataValueInput.setAttribute("id", "value");
document.body.appendChild(dataValueLabel);
document.body.appendChild(dataValueInput);

// dataValueInput.addEventListener("change", (evt) => {
//   const dataValue = dataValueInput.value;
//   return dataValue;
// })

const userInfo = {};

// if(dataName != undefined || dataValue != undefined){
//   userInfo[dataName] = dataValue;
// }

// To test, this should be like that
const myDataName = "height";
const myDataValue = "1.75m";
// To set up values
userInfo[myDataName] = myDataValue;

// What is "THIS"

function introduceSelf(){ //This method is form person1 object
  console.log(`Hi! I'm ${this.name[0]}.`);
  // Hi! I'm undefined.
}

// The this keyword refers to the current object the code is
// being written inside — so in this case this is equivalent
// to person1. So why not just write person instead?

// Well, when you only have to create a single object literal,
// it's not so useful. But if you create more than one, this
//  enables you to use the same method definition for every
// object you create.


const object1 = {
  name: "Varun", 
  introduceSelf(){
    console.log(`Hi! I'm ${this.name}.`);
  }
}

const object2 = {
  name: "Sahil",
  introduceSelf(){
    console.log(`Hi! I'm ${this.name}.`);
  }
}

// Even though the method's code is exactly the same in each
// case. This isn't hugely useful when you are writing out
// object literals by hand, but it will be essential when
// we start using constructors to create more than one object
// from a single object definition.

// Introducting Constructors

// Using object literals is fine when you only need to create
// one object, but if you have to create more than one,
// as in the previous section, they're seriously inadequate.
// We have to write out the same code for every object
// we create, and if we want to change some properties of the
// object - like adding a height property - then we have to
// remember to update every object.

// We would like a way to define the "shape" of an object —
// the set of methods and the properties it can have — and
// then create as many objects as we like, just updating the
// values for the properties that are different.

// The first version of this is just a function:

function createPerson(name){
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function(){
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}

// Now we can create as many objects as we like, reusing the 
// definition

const varun = createPerson("Varun");
varun.introduceSelf();
// Hi! I'm Varun.
const sahil = createPerson("Sahil");
sahil.introduceSelf();
// Hi! I'm Sahil.

// This works fine but is a bit long-winded: we have to create
// an empty object, initialize it, and return it. A better way
// is to use a constructor.

// A constructor is just a function called using the "new"
// keyword. When you call a constructor, it will:

// 1) create a new object
// 2) bind this to the new object, so you can refer to this in
//    your constructor code
// 3) run the code in the constructor
// 4) return the new object.

// Constructors, by convention, start with a capital letter
// and are named for the type of object they create. So we
// could rewrite our example like this:

function Person(name){
  this.name = name;
  this.introduceSelf = function (){
    console.log(`Hi! I'm ${this.name}.`);
  };
}

// To call Person() as a constructor, we use "new":

const sunil = new Person("Sunil");
sunil.introduceSelf();
// Hi! I'm Sunil.

const anshu = new Person("Anshu");
anshu.introduceSelf();
// Hi! I'm Anshu.

const myNotification = new Notification("Hello!");
console.log(myNotification);