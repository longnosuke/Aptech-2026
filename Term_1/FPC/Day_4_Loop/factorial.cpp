#include <stdio.h>
#include <stdlib.h>

int main() {
  // system("clear");
  int n;
  printf("Nhap n: ");
  scanf("%d", &n);

  int factorial;
  for (int i = n; i >= 1; i--) {
    factorial *= i;
    printf("%d * ", i);
  }
  printf("\b\b= %d\n", factorial);
  printf("Giai thua cua %d la %d\n", n, factorial);
  return 0;
}
