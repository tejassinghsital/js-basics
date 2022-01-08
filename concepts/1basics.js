//for printing values
console.log("Hello world")
console.warn("It is a sample warning")
console.error("It is a sample error")


//declare variables
let num1;// takes undefined by default(it's a local variable as we same in java)
console.log(num1);//gives you undefined here...
var num2;//it is old formatting so we don't use it in modernjs
const num3 = 5;//it's for constant values means we can't update its values later in the code.


//In js there is no concept of datatype and it's decided as the input values at runtime lik in python.
num1 = 10;
num2 = "this is an example of string."
console.log("Value depend datatype number", num1)//we concatinate string with value while printing using , not + like in java
console.log("Value depend datatype string", num2)


//"" and '' both represent string and there is no concept of char in js lik java
num2 = "String with dpouble quotes."
let num4 = "String with single quotes."
console.log(num2);
console.log(num4);


//Primitives Datatypes in js: number(covers float, boolean etc means 5/2 is 2.5 not 2 here),string(its primitve here unlike java),boolean,Symbol,undefined,null
let a = true;//showing boolean
let b = null;//showing null()in js null is primitive unlike java where it is not primittive but also only used for object reference values and not for primitive datatypes values.
let c;//showing undefined as discussed earlier. 


//for loop and if else etc is same as java only change in for each loop(enhanced for loop)

//for each in java works on array and collections both
// int[] arr = new int[5]; or int[] arr = { 1, 6, 7, 3, 5, 9};
// for (int element: arr) {
//  System.out.println(element)
// }

//for each in js 
const arr = [2, 1, 6, 7, 3, 5, 9];//use dconst cos array size are fixed and it uses[] unlike java where array use{}
const arr1 = new Array(1, 6, 7, 3, 5, 9);//this is same as arr b ut with new keyword like we us ein java but syntax is changed obvioulsy. We can also make array of strings etc...
arr.forEach(function (element) {
 console.log(element);
});


