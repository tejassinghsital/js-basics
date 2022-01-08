//non-primitives datatypes-> arrays,object and functions
//functions

//unlike java we don't have to wirte static or return. We can return anything we like without giving return type
//function defination
function sayHi(i) {
 console.log("Hello");
 console.log("i receivced", i);
}

// function call
sayHi();
//also we don't have to write parameter variable datatype too like...
sayHi(10);//i takes int here
sayHi("Hi");//i takes string here
sayHi([1, 2, 3, 4, 5, 6]);//i takes array here

// we can also pass more than one vriable like
function sum(i, j) {
 return i + j;//return works without return type in fx def unlike java
}

sum(10, 2);
console.log(sum([1, 2, 3, 4, 5], "Hello"));//passed array and string as parameter

//we can give any datatype input and can get any datatype as output from fx
function randomfx(i) {
 let returnval = Math.random() > 0.5 ? true : "returnval is less than 0.5";
 return returnval;
}

let returnvalfromfx = randomfx([1, 2, 3, 4, 5, 6]);
console.log("this is return from random fx that uses true and string in terniary operator that is not possible to do in java but in js it is: ", returnvalfromfx)