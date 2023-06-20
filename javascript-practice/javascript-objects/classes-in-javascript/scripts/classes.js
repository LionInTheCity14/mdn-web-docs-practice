// Classes and Constructors

class Person{
  name;
  constructor(name = ""){
    this.name = name;
  }
  introduceSelf(){
    console.log(`Hi! I am ${this.name}.`);
  }
}

const varun = new Person("varun");
console.log(varun);
varun.introduceSelf();

// Omitting constructors
// If you don't need to do any special initialization, you can
// omit the constructor, and a default constructor will be
// generated for you:

class Animal{
  sleep(){
    console.log("zzzzzzz");
  }
}

const spot = new Animal();
spot.sleep();

// Inheritance
// Given our Person class above, let's define the Professor
// subclass.

class Professor extends Person{
  teaches;
  constructor(name, teaches){
    super(name);
    this.teaches = teaches;
  }
  introduceSelf(){
    console.log(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
  }

  grade(paper){
    const grade = Math.floor(Math.random() * (5) + 1);
    console.log(grade);
  }
}

const ishant = new Professor("ishant", "SA");
console.log(ishant);
ishant.introduceSelf();
ishant.grade(); // random grades

// Note: If a subclass has any of its own initialization to do,
// it must first call the superclass constructor using super(),
// passing up any parameters that the superclass constructor is
// expecting.

// Encapsulation

// In the last article we discussed how we would like to make
// the year property of Student private, so we could change the
// rules about archery classes without breaking any code that
// uses the Student class.

// Private data properties must be declared in the class
// declaration, and their names start with #.

class Student extends Person{
  #year;
  constructor(name, year){
    super(name);
    this.#year = year;
  }
  introduceSelf(){
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
  }
  canStudyArchery(){
    return this.#year > 1;
  }
}

const sunil = new Student("Sunil", 4);
console.log(sunil);
console.log(sunil.name);  // Sunil
// console.log(sunil.#year); // Uncaught SyntaxError: reference
// to undeclared private field or method #year
console.log(sunil.canStudyArchery()); // true

// Private methods

// You can have private methods as well as private data
// properties. Just like private data properties, their names
// start with #, and they can only be called by the object's
// own methods:

class Example{
  somePublicMethod(){
    this.#somePrivateMethod();
  }
  #somePrivateMethod(){
    console.log(`You call me?`);
  }
}

const myExample = new Example();
myExample.somePublicMethod(); // You called me?
// myExample.#somePrivateMethod(); //  Uncaught SyntaxError:
// reference to undeclared private field or method
// #somePrivateMethod