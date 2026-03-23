#include <stdio.h>
#include <stdlib.h>

// int main() {
//   system("clear");
//   int count;

//   printf("Hello this is a\n");
//   for (count = 0; count <= 6; count++ ){
//     printf("nice\n");
//   };

//   printf("World\n");
//   return 0;
// }

// int main() {
//   system("clear");
//   // tinh tong cua n so nguyen duong dau tien

//   int n;
//   printf("Nhập số nguyên dương n: ");
//   scanf("%d", &n);

//   int sum = 0;
//   for (int i = 1; i <= n; i++) {
//     sum += i;
//     printf("%d + ", i);
//   }
//   printf("\b\b= %d", sum);
//   printf("\nTổng của %d số nguyên dương đầu tiên là %d\n", n, sum);
//   return 0;
// }


// Tổng của các số lẻ < n
int main() {
  system("clear");
  int n;
  printf("Nhập số nguyên dương n: ");
  scanf("%d", &n);

  int sum=0;
  // for (int i = 1; i <= n; i++) {
  //   if (i % 2 != 0) {
  //     sum += i;
  //     printf("%d + ", i);
  //   } else {
  //     continue;
  //   }
  // }

  // Alternative way
  for (int i = 1; i <= n; i+=2) {
    sum += i;
    printf("%d + ", i);
  }

  printf("\b\b= %d", sum);
  printf("\nTổng của các số lẻ < %d là %d\n", n, sum);
  return 0;
}
