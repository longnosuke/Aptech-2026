#include <stdio.h>

int main() {
  int a;
  int b;
  int c;

  printf("Enter the first number: ");
  scanf("%d", &a);
  printf("Enter the second number: ");
  scanf("%d", &b);
  printf("Enter the third number: ");
  scanf("%d", &c);

  printf("The sum of %d, %d, and %d is %d\n", a, b, c, a + b + c);
  return 0;
}
