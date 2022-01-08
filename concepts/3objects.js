//objects in js, hashmap injava(but hasmap is static in java),dictionary in python

//object is nothing but a key colon value(valuse can be anything like primitives and non primitives both[yes we can declare object/functions inside object values]) pair

//object declaration(CREATE)
let obj = {};


//Object Initialization(taking captain america object as example)
//NOTE: KEY:VALUE PAIR ARE SEPERATED FROM ONE ANOTHER BY , AND LAST VALUE DOESN'T HAVE , AT LAST
let capt = {
 name: "Steve",
 lastName: 'Rogers',
 Address: {
  state: 'Manhatan',
  city: 'New York'
 },
 age: 35,
 isAvenger: true,
 movies: ["First Avenger", "Winter Soilder", "Civil War"],
 //value in object called prperty
 //function in object called method
 sayHi: function () {
  console.log("Hello captain america");
 }//this is last pair so that's why not put , here

}

//Get particular key from the object(READ)
//NOTE: WE CAN READ WHOLE OBJECT/ARRAY WITHOUT LOOPING OVER THEIR INDEX
console.log(capt.name);
console.log(capt.Address.state);
console.log(capt.sayHi);//here function call without() means show function
//for output you have to put () then it shows function output...
console.log(capt);
console.log(capt.movies[1]);
console.log(capt.movies);//it is possible to access whole array with name unlike java where it gives hashcode like [I@536sdf3


//Set->adding new pair in object/Update->updatting previour values of key(UPDATE)
//Update(we use object_name.key=updated_value;)
console.log(capt);
console.log(".........................................")
capt.age = 100;
capt.isAvenger = false;
capt.movies = ["Avengers sequels"];
console.log(capt);
console.log("..........................................")
//Set(Syntax same as update)
capt.friends = ["tony", 'bruce', 'natasha', 'bukky'];
console.log("After set \n", capt);

console.log("..........................................")
//DELETE(syntax: delete object_name.Key)
delete capt.name, capt.lastName;//not work after comma
console.log("After deleting \n", capt);

//Set using for loop with square brackets
//method 1(for all object kay and value pair)(all method works the same way)
console.log("Normal capt object", capt);

//method 2
console.log("For loop capt object");
for (let key in capt) {
 console.log(key, " : ", capt[key]);
}

//method 1(for getting single key value pair)
console.log(capt.lastName);

//method 2
let propkey = "lastName";
console.log(capt[propkey]);

//method 3
console.log(capt["lastName"]);

//If you don;t have any key in object then you get undefined
console.log(capt.xyz);

// for key we write variable directly but for value we have to write capt[key]