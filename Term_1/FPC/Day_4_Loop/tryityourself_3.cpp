#include <stdio.h>
#include <stdlib.h>

int main() {
  system("clear");
  int i, n;
  // f1 = 0 cho dãy số Fibonacci mới
  int f1 = 1, f2 = 1;
  int nextTerm;
  printf("Enter the number of terms: ");
  scanf("%d", &n);
  while (n < 3 || n > 46) {
    printf("Please enter a number 3 < number < 46 ");
    scanf("%d", &n);
  }
  printf("Fibonacci Series: %d, %d", f1, f2);
  // i = 3 bởi vì series đã có (1, 1, nextTerm(f1+f2))
  // i = 4 cho dãy Fibonacci mới (0, 1, 1, nextTerm(f1+f2))
  for ( i = 3; i <= n; i++) {
    nextTerm = f1 + f2;
    printf(", %d", nextTerm);
    f1 = f2;
    f2 = nextTerm;
  }
  printf("\n");

  return 0;
}
