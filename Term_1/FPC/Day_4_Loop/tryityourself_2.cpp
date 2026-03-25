#include <stdio.h>

int main() {
  int num1, num2;
  printf("Enter two numbers: ");
  scanf("%d %d", &num1, &num2);

  int sum = 0;
  int start = num1 < num2 ? num1 : num2;
  int end = num1 > num2 ? num1 : num2;

  for (int i = start; i <= end; i++) {
    if (i % 2 != 0) {
      sum += i;
    }
  }
  printf("Sum of all odd numbers between %d and %d is %d\n", num1, num2, sum);
  return 0;
}
