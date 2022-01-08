// 1. You've to print all prime numbers between a range. 
// 2. Take as input "low", the lower limit of range.
// 3. Take as input "high", the higher limit of range.
// 4. For the range print all the primes numbers between low and high(both included).
let low = 23;
let high = 67;

let flag = true;

for (let j = low; j <= high; j++) {
 for (let i = 2; i <= j; i++) {
  if (low % i == 0) {
   flag = false;
  }
  else {
   flag = true;
  }

 }
 if (flag == true) {
  console.log(low);
 }
 else {
  continue;
 }
}
