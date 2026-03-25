#include <stdio.h>
#include <stdlib.h>

// in tháp *
int main() {
  system("clear");

  int n = 9;

  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
      printf("%d", j);
    }
    printf("\n\n");
  }
  return 0;
}
