#include <stdio.h>
int main() {
  int a,b,c;
  printf("Please enter three numbers\n");
  printf("Number 1: ");
  scanf("%d", &a);
  printf("Number 2: ");
  scanf("%d", &b);
  printf("Number 3: ");
  scanf("%d", &c);

  int max = a;
  if (b > max)
    max = b;
  if (c > max)
    max = c;

  printf("Highest value is: %d\n", max);
}
