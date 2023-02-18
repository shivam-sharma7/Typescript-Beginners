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

 // good way to define object

 type User =  {

    id: number
    name: string

 }

 const user1: User = {
    id: 1,
    name: "shivam",
 }

 // type Assertion

 let cid: any = 1;

 let customer = <Number>cid

 console.log(customer);
 

 // Function in typescipt following function return addition of two number and result will number

 function addNum(x: number, y:number): number{

   return x+y;

 }

 console.log(addNum(1, 21));
 
// Interface in Typescript

interface UserInterface{

   id: number
   name:string
   age: number

}

const user2: UserInterface = {
  
   id: 1,
   name: "shivam",
   age: 23,
}

console.log(user2.age);


// we can also use interface with functions

interface MathFunc{
   (x:number, y:number):number

}

const add: MathFunc = (x:number, y:number):number => x + y;
const sub: MathFunc = (x:number, y:number):number => x - y;
const multi: MathFunc = (x:number, y:number):number => x * y;

console.log(add(2, 3));
console.log(sub(2, 3));
console.log(multi(2, 3));

// classes in typescript

class Person {

   id: number
   name?: string 
    

constructor(id: number, name: string) {

   this.id = id;
   this.name = name;
}

}

const shiv = new Person(1, "shivam");
const satya = new Person(2, "Satyam");

console.log(shiv);
console.log(satya);





