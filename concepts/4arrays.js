//array declaration
let arr = [];

//array initialization
let array = [1, 2, 3, 4, 5, 6, 7];

//array printing
console.log(array);

//array length with lengthh variable cos length method is for string(same here as java)
console.log(array.length);

//array print with index
for (let i = 0; i < array.length; i++) {
 console.log("at index", i, "we have element: ", array[i]);
}

// Major Array functions for Interview Point of View
//Adding elements in array(here array is not homogenous)

array.push("Singh");//add element at last
array.unshift("Tejas");//add elemnt at start
console.log("After adding", array);

console.log("...............................")

//Removing elements in array
array.pop();//remove elemnt from last
array.shift();//remove element from start
console.log("After removing", array);

//SLICE: Getting a part of an array ex.(2,8) so it gives 2to (8-1)=2 to 7 index elements
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr1.slice(2, 8));//3,4,5,6,7,8
//or
let partOfArray = arr1.slice(2, 8);
console.log(partOfArray);

//in both above two methods, original array won;t effect because of slice function on array.
console.log(arr1);
//if we don't give ending value then it give all array starting from providing first number
console.log(arr1.slice(3));


//SPLICE: better version of delete funciton because it also has delete count feature.like (2,1) so 2th indexed element gets deleted but with (2,5) the 2th,3rd,4th,5thAND 6TH cos of n+1 elemnt get deleted

console.log(arr1.splice(2, 5));//3,4,5,6,7 gets deleted so we get 1,2,7,8,9,10

//splice delete elements from original array.
console.log(arr1)

//indexof: tells on which index a particular value is on the given array
let arr2 = [45, 76, 2, 7, 83, 56, 8, 89]
console.log(arr2.indexOf(56));

//includes: teel if the elemnt is presented in an array of not
console.log(arr2.includes(56));
console.log(arr2.includes(93));