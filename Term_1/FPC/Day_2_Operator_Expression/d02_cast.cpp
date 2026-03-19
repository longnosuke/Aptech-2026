#include <stdio.h>

int main() {
  int a = 10;
  int b = 3;

  // Casting
  printf("The result of %d divided by %d is %d\n", a, b, a / b);
  printf("The result of %d divied by %d is %f\n", a, b, (float)a / b);

  return 0;
}
