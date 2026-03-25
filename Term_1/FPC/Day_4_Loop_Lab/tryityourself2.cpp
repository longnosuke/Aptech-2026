#include <stdio.h>
#include <stdlib.h>

int main() {
  // system("clear");
  int age;
  printf("Enter your age: ");
  scanf("%d", &age);

  for (int i = 1; i <= age; i++) {
    printf("%d\n", age);
  }
  return 0;
}
