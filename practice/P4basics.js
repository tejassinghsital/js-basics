// 1. You've to count the number of digits in a number.
// 2. Take as input "n", the number for which the digits has to be counted.
// 3. Print the digits in that number.

let num = 97654;
let count;
while (num > 0) {
 if (num / 10 != 10) {
  count++;
 }
 else if (num == 10) {
  Count = 2;
 }
 else {
  count = 1;
 }
}
console.log(count);