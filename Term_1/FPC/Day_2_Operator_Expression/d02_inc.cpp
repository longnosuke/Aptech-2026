#include <stdio.h>
int main() {
  int a = 10;
  int b = 20;

  a++; // a = a + 1
  b--; // b = b - 1
  printf("The incremented value of a is %d\n", a);
  printf("The decremented value of b is %d\n", b);

  ++a; // a = a + 1
  --b; // b = b - 1
  printf("The pre-increment value of a is %d\n", a);
  printf("The pre-decrement value of b is %d\n", b);

  // a++; // a = a + 1
  // b--; // b = b - 1
  printf("The value of a++ is %d, b-- is %d\n", a++, b--);
  printf("The value of ++a is %d, --b is %d\n", ++a, --b);
  return 0;
}
