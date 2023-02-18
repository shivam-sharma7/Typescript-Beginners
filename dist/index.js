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
    Direction1[Direction1["up"] = 0] = "up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Lef"] = 2] = "Lef";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Down);
