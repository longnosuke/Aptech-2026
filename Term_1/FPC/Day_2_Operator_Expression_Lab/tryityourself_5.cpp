#include <stdio.h>

int main() {
  int iResult, a = 10, b = 8, c = 6, d = 5, e = 2;

  printf("a - b - c - d = %d\n", a - b - c - d);
  printf("a - b + c - d = %d\n", a - b + c - d);
  printf("a + b / c / d = %d\n", a + b / c / d);
  printf("a + b / c * d = %d\n", a + b / c * d);
  printf("a / b * c * d = %d\n", a / b * c * d);

  printf("a %% b / c * d = %d\n", a % b / c * d);
  printf("a %% b %% c %% d = %d\n", a % b % c % d);

  printf("a - (b - c) - d = %d\n", a - (b - c) - d);
  printf("(a - (b - c)) - d = %d\n", (a - (b - c)) - d);
  printf("a - ((b - c) - d) = %d\n", a - ((b - c) - d));

  printf("a %% (b %% c) * d * e = %d\n", a % (b % c) * d * e);
  printf("a + (b - c) * d - e = %d\n", a + (b - c) * d - e);
  printf("(a + b) * c + d * e = %d\n", (a + b) * c + d * e);
  printf("(a + b) * (c / d) %% e = %d\n", (a + b) * (c / d) % e);

  return 0;
}
