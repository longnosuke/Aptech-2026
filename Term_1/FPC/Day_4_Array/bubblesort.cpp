#include <stdio.h>

int main() {
  int a[] = {30, 20, 10, 5};
  int n = sizeof(a) / sizeof(int);

  // for (int i = 0; i < n - 1; i++) {
  //   for (int j = 0; j < n - i - 1; j++) {
  //     printf("Step %d, comparing %d and %d\n", i, a[j], a[j + 1]);
  //     if (a[j] > a[j + 1]) {
  //       int temp = a[j];
  //       a[j] = a[j + 1];
  //       a[j + 1] = temp;
  //       printf("Swapped %d and %d\n", a[j], a[j + 1]);
  //     }
  //   }
  // }
// when i = 0 and j = 0 -> compare a[0] and a[1]
// when i = 0 and j = 1 -> compare a[1] and a[2]

for (int i = 0; i < n -1; i ++) {
  for (int j = n - 1; j > i; j--) {
    printf("When i = %d and j = %d, comparing %d and %d\n", i, j, a[j], a[j - 1]);
    if (a[j] < a[j - 1]) {
      int temp = a[j];
      a[j] = a[j - 1];
      a[j - 1] = temp;
      printf("Swapped %d and %d\n", a[j], a[j - 1]);
    }
  }
}

  printf("The final array is ");
  for (int i = 0; i < n; i++) {
    printf("%d ", a[i]);
  }
  printf("\n");
  return 0;
}
