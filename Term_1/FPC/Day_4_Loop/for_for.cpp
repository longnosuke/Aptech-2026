#include <stdio.h>
#include <stdlib.h>

// in tháp *
int main() {
  system("clear");

  int n;
  printf("Nhap n: ");
  scanf("%d", &n);

  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
      printf("*");
    }
    printf("\n");
  }

  // Đảo lại
  for (int i = 1; i <= n; i++) {
    for (int j = n; j >= i; j--) {
      printf("*");
    }
    printf("\n");
  }

  return 0;
}

