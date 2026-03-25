#include <stdio.h>
#include <stdlib.h>

// in tháp *
int main() {
  system("clear");

  int n = 5;

  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
      printf("%d", j);
    }
    printf("\n");
  }
    printf("\n\n");

  for (int i = n; i >= 1; i--) {
    for (int j = 1; j <= i; j++) {
        printf("%d", j);
    }
    printf("\n");
}

  return 0;
}

