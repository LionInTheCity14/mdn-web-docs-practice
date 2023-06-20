// import {oojs1.js} from "scripts";

class Shape {
  name;
  sides;
  sideLength;

  constructor(name, sides, sideLength){
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  calcPerimeter(){
    console.log(this.sides * this.sideLength);
  }
}

class Square extends Shape{
  constructor(sideLength, name, sides){
    super(name = "square", sides = 4);
    // super(name, sides);
    this.sideLength = sideLength;
  }
  calcArea(){
    console.log(`Area of given ${this.name} is ${this.sideLength ** 2}.`);
  }
}

const square = new Square(5);
console.log(square);
square.calcPerimeter();
square.calcArea();
