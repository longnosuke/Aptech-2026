#include <stdio.h>

int main() {
  int x = 100;
  for (; x > 5; x -= 5) {
    printf("%d, ", x);
  }
  printf("%d\n", x);
  return 0;
}
