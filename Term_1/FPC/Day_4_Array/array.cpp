#include <stdio.h>
#include <stdlib.h>

int main() {
  int a[] = {13, 21, 30, 14, 45};
  int n = sizeof(a) / sizeof(int);

  int sum = 0;
  int min = a[0];
  int max = a[0];
  for (int i = 0; i < n; i++) {
    printf("%d\n", a[i]);
    sum += a[i];

    if (a[i] < min) {
      min = a[i];
    }
    // if (a[i] > max) {
    //   max = a[i];
    // }

    max = (a[i] > max) ? a[i] : max;
  }

  printf("Sum: %d\n", sum);
  printf("Avarage: %.2f\n", (float)sum / n);
  printf("Min: %d\n", min);
  printf("Max: %d\n", max);
  return 0;
}
