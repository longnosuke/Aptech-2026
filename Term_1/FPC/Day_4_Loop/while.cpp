#include <stdio.h>
#include <stdlib.h>
int main()
{
  system("clear");
  int n=-1;
  while( n < 0 || n > 20) {
    printf("Please enter a number between 0 and 20: ");
    scanf("%d", &n);
  }
  printf("You entered %d\n", n);

  long long kq = 1;
  for (int i = 1; i <= n; i++) {
    kq *= i;
  }
  printf("Giai thua cua %d la %lld\n", n, kq);

  return 0;
}
