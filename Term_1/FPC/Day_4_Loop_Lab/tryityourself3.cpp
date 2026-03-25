#include <stdio.h>
#include <stdlib.h>
int main() {
  system("clear");

  int n;
  printf("Enter n: ");
  scanf("%d", &n);

  for (int i = 1; i <= 10; i++) {
    printf("%d\n", i*n);
  }
  return 0;
}
