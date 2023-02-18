"use strict";
//Basic Types
let id = 45;
console.log(id);
let company = "Civo Cloud";
console.log(company);
let isSweet = true;
console.log(isSweet);
// any type is good when you have no idea of data type we can use it.
let x = "hello";
x = true;
let age = 22;
age = "twenty two";
console.log(age);
// array types in typescript
let marks = [60, 78, 87, 65];
console.log(marks);
// if we want store multiple types of data and it's value so we can use any types
let arr = [23, "shivam", 23.4, "hello"];
console.log(arr);
// Tuple in typescript assign many data types at once in order
let person = [22, "shivam", true];
console.log(person);
// we can also create Tuple types array
const employee = [[23, "shivam"], [23, "shivam"], [23, "shivam"]];
console.log(employee);
// Union - if you want to a particular variable can store more than on type
let collageId = 22;
// Enums 
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Lef"] = 2] = "Lef";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Down);
// Objects in typescript
const user = { id: 1, name: "shivam" };
const user1 = {
    id: 1,
    name: "shivam",
};
// type Assertion
let cid = 1;
let customer = cid;
console.log(customer);
// Function in typescipt following function return addition of two number and result will number
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 21));
const user2 = {
    id: 1,
    name: "shivam",
    age: 23,
};
console.log(user2.age);
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const multi = (x, y) => x * y;
console.log(add(2, 3));
console.log(sub(2, 3));
console.log(multi(2, 3));
// classes in typescript
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const shiv = new Person(1, "shivam");
const satya = new Person(2, "Satyam");
console.log(shiv);
console.log(satya);
