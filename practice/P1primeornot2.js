let num1 = 18;
let flag = true;
for (let i = 2; i <= num1; i++) {
 if (num1 % i == 0) {
  flag = false;
 }
 else {
  flag = true;
 }

}
if (flag == true) {
 console.log(num1, "is prime");
}
else {
 console.log(num1, "is not prime");
}