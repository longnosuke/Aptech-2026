#include <stdio.h>

int main() {
  int a = 17; // 0001 0001
  // 1110 1110
  int b = 28;

  // Bitwise And
  printf("The bitwise AND of %d and %d is %d\n", a, b, a & b);
  // Bitwise OR
  printf("The bitwise OR of %d and %d is %d\n", a, b, a | b);
  // Bitwise XOR
  printf("The bitwise XOR of %d and %d is %d\n", a, b, a ^ b);
  // Bitwise NOT
  printf("The bitwise NOT of %d is %d\n", a, ~a);
  return 0;
}
