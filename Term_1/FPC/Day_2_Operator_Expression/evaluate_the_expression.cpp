#include <stdio.h>

int main() {
  int a = 10;
  int b = 7;
  float c = 15.75;
  int d = 4;
  int e = 2;
  float f = 5.6;
  float z = a*b+(c/d)-e*f;

  printf("The result of %d * %d + %f / %d - %d * %f is %f\n", a, b, c, d, e, f, z);
  return 0;
}
