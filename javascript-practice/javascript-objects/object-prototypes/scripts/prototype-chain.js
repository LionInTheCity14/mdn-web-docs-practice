const myObject = {
  city: "Agra",
  great(){
    console.log(`Greetings from ${this.city}.`);
  },
};

myObject.great(); // Greetings from Agra.

// If you type the object's name followed by a period into the
// console, like myObject., then the console will pop up a
// list of all the properties available to this object.
// You'll see that as well as city and greet, there are lots
// of other properties!

// myObject.

// __defineGetter__
// __defineSetter__
// __lookupGetter__
// __lookupSetter__
// __proto__
// city
// constructor
// greet
// hasOwnProperty
// isPrototypeOf
// propertyIsEnumerable
// toLocaleString
// toString
// valueOf

console.log(myObject.toString()); // [object Object]

console.log(myObject.__proto__ === Object.getPrototypeOf(myObject));  // true

console.log(Object.getPrototypeOf(myObject));

// The prototype of an object is not always Object.prototype.
// Try this:

const myDate = new Date();
let obj = myDate;

do{
  obj = Object.getPrototypeOf(obj);
  console.log(obj);
}while(obj);

// Date.prototype   (myDate's prototype)
// Object { }       (Date.prototype's prototype i.e, default prototype or Object.prototype)
// null             (default prototype's prototype i.e, null)

// Shadowing properties

const newDate = new Date(2023, 6, 18);
console.log(newDate.getFullYear());  // 2023

newDate.getFullYear = function(){
  console.log("something else!");
}
console.log(newDate.getFullYear());
newDate.getFullYear();  // something else!

// Setting a prototype

// 1) Object.create()
// 2) constructors

// The Object.create() method creates a new object and allows 
// you to specify an object that will be used as the new 
// object's prototype.

const vehicle = {
  start(){
    console.log("Engine started");;
  },
  stop(){
    console.log("Vehicle stops");
  },
  off(){
    console.log("Engine off!");
  }
}

const car = Object.create(vehicle);

car.numOfTyres = function (){
  console.log(`car has 4 tyres`);
}

console.log(car); // car object
console.log(car.__proto__); // car object's prototype i.e, vehicle
console.log(car.__proto__.__proto__); // prototype's prototype i.e, default prototype
console.log(car.__proto__.__proto__.__proto__); // default prototype's prototype i.e, null

// In JavaScript, all functions have a property named
// prototype. When you call a function as a constructor, this
// property is set as the prototype of the newly constructed
// object (by convention, in the property named __proto__).

// So if we set the prototype of a constructor, we can ensure
// that all objects created with that constructor are given
// that prototype:

const Car = function (name, company,){
  this.name = name;
  this.company = company;
  // this.__proto__ = vehicle;
}

// OR 
Object.assign(Car.prototype, vehicle);

const hondaCity = new Car(`City`, `Honda`);
console.log(hondaCity);
hondaCity.start();
console.log(hondaCity.__proto__); // vehicle object

// It's common to see that methods are defined on the
// prototype, but data properties are defined in the
// constructor. That's because methods are usually the same
// for every object we create, while we often want each
// object to have its own value for its data properties
// (just as here where every car has a different name and
// company).

// Properties that are defined directly in the object, like
// name here, are called own properties, and you can check
// whether a property is an own property using the static
// Object.hasOwn() method:

const nexon = new Car("Nexon", "Tata");
console.log(Object.hasOwn(nexon, "name"));  // true
console.log(Object.hasOwn(nexon, "start")); // false

// You can also use the non-static Object.hasOwnProperty()
// method here, but we recommend that you use Object.hasOwn()
// if you can.

console.log(Object.hasOwnProperty(nexon, "name"));  // false
console.log(Object.hasOwnProperty(nexon, "start")); // false