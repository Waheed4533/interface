// // Define an interface for a shape with area calculation
// interface Shape {
//     calculateArea(): number;
// }

// // Implement the interface with a Circle class
// class Circle implements Shape {
//     constructor(private radius: number) {}

//     calculateArea(): number {
//         return Math.PI * this.radius ** 2;
//     }
// }

// // Implement the interface with a Rectangle class
// class Rectangle implements Shape {
//     constructor(private width: number, private height: number) {}

//     calculateArea(): number {
//         return this.width * this.height;
//     }
// }

// const circle = new Circle(5);
// const rectangle = new Rectangle(4, 6);

// console.log("Circle area:", circle.calculateArea()); // Output: Circle area: 78.53981633974483
// console.log("Rectangle area:", rectangle.calculateArea()); // Output: Rectangle area: 24
// // in this class, Think of a class as a blueprint for creating objects. 
// //It defines how an object should look and behave. 
// //Imagine a class as a recipe, and when you bake cookies (create objects),
// //you follow that recipe to make consistent cookies.
// class Dog {
//     name:string
//     age:number
//     constructor(name:string, age:number) {
//         this.name = name;
//         this.age = age;
//     }

//     bark() {
//         console.log(`${this.name} says woof!`);
//     }
// }

// const dog1 = new Dog("Buddy", 3);
// const dog2 = new Dog("Molly", 5);

// dog1.bark(); // Output: Buddy says woof!
// dog2.bark(); // Output: Molly says woof!
// interface bag{
//     size:number,
//     company:string
// }
// interface bag{
//     color:string
// }
type Coordinates = [number,number];
let house:Coordinates=[5,7];
//we use coordinate to exress location on x and y axis

