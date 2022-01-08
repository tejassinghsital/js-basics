package practice;

import java.util.Scanner;

public class prmeornot {
 public static void main(String[] srgs) {

  Scanner sc = new Scanner(System.in);
  System.out.println("ENter lower bound: ");
  int low = sc.nextInt();

  System.out.println("Enter upper bound: ");
  int high = sc.nextInt();

  boolean flag = true;
  for (int i = low; i <= high; i++) {
   for (int j = 2; j <= i; j++) {
    if (i % j == 0) {
     flag = false;
    } else {
     flag = true;
    }

   }
   if (flag == true) {
    System.out.println(i);
   } else {
    continue;
   }
  }

 }
}
