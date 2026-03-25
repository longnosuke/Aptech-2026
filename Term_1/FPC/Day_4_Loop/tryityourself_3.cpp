#include <stdio.h>
int main() {
  int i, n;
  int f1 = 1, f2 = 1;
  int nextTerm = f1 + f2;
  printf("Enter the number of terms: ");
  scanf("%d", &n);

  printf("Fibonacci Series: %d, %d", f1, f2);
  for ( i = 4; i <= n; i++) {
    printf(", %d", nextTerm);
    f1 = f2;
    f2 = nextTerm;
    nextTerm = f1 + f2;
  }
  printf("\n");

  return 0;
}
