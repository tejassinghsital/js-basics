//'' and '' both works for strings
let quote = "This is an example string.";

//functions on string
//charAt: gives you cahr of a particular index
let char = quote.charAt(5);
console.log(char);

//CharCodeAt: gives you ascii value of a particular indexed character in a string.
let asciich = quote.charCodeAt(5);
console.log(asciich);

//substring: gives you a part of string similar to slice in array (start to n-1)
let char2 = quote.substring(2, 15);
console.log(char2);

//trim: removes start and end spaces of the string
let str1 = "    This is for trim.      ";
console.log(str1.trim());//trimeEnd & trimStart for respective uses.

//split: split string on a sudden character and store that in an array.
// most famous example: google search string->google+search+string
console.log(quote.split("i"));//split string with respect to i and store that in an array.
//or
let splittedchar = quote.split(" ");//store all words of string in array
console.log(splittedchar)

//join: join array of strings with respect to anygiven character
// famous example google serach to google+search
let splitjoinchar = splittedchar.join('+');
console.log(splitjoinchar);