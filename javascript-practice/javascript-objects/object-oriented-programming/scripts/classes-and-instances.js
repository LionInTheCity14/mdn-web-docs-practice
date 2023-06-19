// When we model a problem in terms of objects in OOP, we
// create abstract definitions representing the types of objects
// we want to have in our system. 

// For example, if we were modeling a school, we might want to
// have objects representing professors. Every professor has
// some properties in common: they all have a name and a subject
// that they teach. Additionally, every professor can do certain
// things: they can all grade a paper and they can introduce
// themselves to their students at the start of the year,
// for example:

// class Professor
//     properties
//         name
//         teaches
//     constructor
//         Professor(name, teaches)
//     methods
//         grade(paper)
//         introduceSelf()

class Professor{
  name
  teaches
  Professor(name, teaches){
    this.name = name;
    this.teaches = teaches
  }
  grade(paper){

  }
  introduceSelf(){
    console.log(`My name is Professor ${this.name} and I will be your ${this.teaches} professor.`);
  }
}

const ishantSir = new Professor("Ishant", "Structure Analysis");

// Inheritance

// Suppose in our school we also want to represent students.
// Unlike professors, students can't grade papers, don't teach
// a particular subject, and belong to a particular year.

// However, students do have a name and may also want to
// introduce themselves, so we might write out the definition
// of a student class like this

// class Student
//     properties
//         name
//         year
//     constructor
//         Student(name, year)
//     methods
//         introduceSelf()

// It would be helpful if we could represent the fact that
// students and professors share some properties, or more
// accurately, the fact that on some level, they are the same
// kind of thing. Inheritance lets us do this.

// We start by observing that students and professors are both
// people, and people have names and want to introduce
// themselves. We can model this by defining a new class
// Person, where we define all the common properties of people.
// Then, Professor and Student can both derive from Person,
// adding their extra properties:

// class Person
//     properties
//         name
//     constructor
//         Person(name)
//     methods
//         introduceSelf()

// class Professor : extends Person
//     properties
//         teaches
//     constructor
//         Professor(name, teaches)
//     methods
//         grade(paper)
//         introduceSelf()

// class Student : extends Person
//     properties
//         year
//     constructor
//         Student(name, year)
//     methods
//         introduceSelf()

// In this case, we would say that Person is the superclass or
// parent class of both Professor and Student. Conversely,
// Professor and Student are subclasses or child classes of
// Person.

// You might notice that introduceSelf() is defined in all
// three classes. The reason for this is that while all people
// want to introduce themselves, the way they do so is
// different:

const randeepSir = new Professor("Randeep", "Soil Mechanics");
randeepSir.introduceSelf(); // "My name is Professor Randeep and I will be your Soil Mechanics professor."

const varun = new Student("Varun","4");
varun.introduceSelf();  // "My name is Varun and I'm in the fourth year."

// We might have a default implementation of introduceSelf()
// for people who aren't students or professors:

pratt = new Person("Pratt");
pratt.introduceSelf(); // 'My name is Pratt.'

// Polymorphism

// This feature - when a method has the same name but a
// different implementation in different classes - is called
// polymorphism.

// Overriding

// When a method in a subclass replaces the superclass's
// implementation, we say that the subclass overrides the
// version in the superclass.

// Encapsulation

// Keeping an object's internal state private, and generally
// making a clear division between its public interface and its
// private internal state, is called encapsulation.

// This is a useful feature because it enables the programmer
// to change the internal implementation of an object without
// having to find and update all the code that uses it: it
// creates a kind of firewall between this object and the rest
// of the system.

// For example, suppose students are allowed to study archery if
// they are in the second year or above. We could implement
// this just by exposing the student's year property, and other
// code could examine that to decide whether the student can
// take the course:

if (student.year > 1) {
  // allow the student into the class
}

// The problem is, if we decide to change the criteria for
// allowing students to study archery - for example by also
// requiring the parent or guardian to give their permission -
// we'd need to update every place in our system that performs
// this test.

// It would be better to have a canStudyArchery() method on
// Student objects, that implements the logic in one place:

// class Student : extends Person
//     properties
//        year
//     constructor
//        Student(name, year)
//     methods
//        introduceSelf()
//        canStudyArchery() { return this.year > 1 }

// In many OOP languages, we can prevent other code from
// accessing an object's internal state by marking some
// properties as private. This will generate an error if code
// outside the object tries to access them:

// class Student : extends Person
//     properties
//        private year
//     constructor
//         Student(name, year)
//     methods
//        introduceSelf()
//        canStudyArchery() { return this.year > 1 }

// student = new Student('Weber', 1)
// student.year // error: 'year' is a private property of Student

// In languages that don't enforce access like this,
// programmers use naming conventions, such as starting the
// name with an underscore, to indicate that the property
// should be considered private.

// OOP and JavaScript

// we looked at a couple of core JavaScript features:
// constructors and prototypes. These features certainly have
// some relation to some of the OOP concepts described above.


// 1) constructors in JavaScript provide us with something like
// a class definition, enabling us to define the "shape" of an
// object, including any methods it contains, in a single place.
// But prototypes can be used here, too. For example, if a
// method is defined on a constructor's prototype property, then
// all objects created using that constructor get that method
// via their prototype, and we don't need to define it in the
// constructor.

// 2) the prototype chain seems like a natural way to implement
// inheritance. For example, if we can have a Student object
// whose prototype is Person, then it can inherit name and
// override introduceSelf().

// differences between these features and the "classical" OOP concepts

// First, in class-based OOP, classes and objects are two
// separate constructs, and objects are always created as
// instances of classes. Also, there is a distinction between
// the feature used to define a class (the class syntax itself)
// and the feature used to instantiate an object (a
// constructor). In JavaScript, we can and often do create
// objects without any separate class definition, either using
// a function or an object literal. This can make working with
// objects much more lightweight than it is in classical OOP.

// Second, although a prototype chain looks like an inheritance
// hierarchy and behaves like it in some ways, it's different
// in others. When a subclass is instantiated, a single object
// is created which combines properties defined in the subclass
// with properties defined further up the hierarchy. With
// prototyping, each level of the hierarchy is represented by a
// separate object, and they are linked together via the
// __proto__ property. The prototype chain's behavior is less
// like inheritance and more like delegation.

// Delegation is a programming pattern where an object, when
// asked to perform a task, can perform the task itself or ask
// another object (its delegate) to perform the task on its
// behalf. In many ways, delegation is a more flexible way of
// combining objects than inheritance (for one thing, it's
// possible to change or completely replace the delegate at run
// time).