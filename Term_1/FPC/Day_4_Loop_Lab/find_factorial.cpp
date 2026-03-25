#include <stdio.h>
#include <stdlib.h>

int main() {
  // system("clear");
  int n;
  printf("Nhap n: ");
  scanf("%d", &n);

  long long factorial;
  for (int i = n; i >= 1; i--) {
    factorial *= i;
    printf("%d * ", i);
  }
  printf("\b\b= %lld\n", factorial);
  printf("Giai thua cua %d la %lld\n", n, factorial);
  return 0;
}
