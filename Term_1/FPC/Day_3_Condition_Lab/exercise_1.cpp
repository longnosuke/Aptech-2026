#include <stdio.h>

int main() {
  int x,y;
  printf("Enter the first number: ");
  scanf("%d", &x);
  printf("Enter the second number: ");
  scanf("%d", &y);

  if (x < 2000 || x > 3000) {
    printf("x = %d\n", x);
  }
  if (y >= 100 && y <= 500) {
    printf("y = %d\n", y);
  }
}
