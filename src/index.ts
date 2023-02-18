//Basic Types

let id :number = 45;
console.log(id);

let company: string = "Civo Cloud";
console.log(company);

let isSweet:boolean = true;
console.log(isSweet);

// any type is good when you have no idea of data type we can use it.

let x: any = "hello";
x = true;

let age: any = 22;
 age = "twenty two"
 console.log(age);

 // array types in typescript

 let marks: number[] = [60, 78, 87, 65];

 console.log(marks);

 // if we want store multiple types of data and it's value so we can use any types

 let arr:any[] = [23, "shivam", 23.4, "hello"];

 console.log(arr);

 // Tuple in typescript assign many data types at once in order

 let person: [number, string, boolean] = [22, "shivam", true];
 console.log(person);

 // we can also create Tuple types array
 
 const employee:[number, string][]  = [  [23, "shivam"],  [23, "shivam"],  [23, "shivam"] ];
 console.log(employee);
 
 // Union - if you want to a particular variable can store more than on type

 let collageId: string | number = 22;

 // Enums 

 enum Direction1 {

    Up,
    Down,
    Lef,
    Right
 }

 console.log(Direction1.Down);
 
// Objects in typescript

const user: {

    id: number,
    name: string

 } = {id: 1, name: "shivam"};

 // good way 

 type User =  {

    id: number
    name: string

 }

 const user1: User = {
    id: 1,
    name: "shivam",
 }




