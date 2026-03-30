#include <stdio.h>
#include <stdlib.h>
int main() {
  system("clear");
  int a = 10;
  int *p = &a;
  // p is a pointer variable contain address of variable a

  printf("Value of a is %d\n", a);
  printf("Address of a is %p\n", &a);
  printf("Value of p is %p\n", p);
  printf("Value of *p is %d\n", *p);

  *p = 20;
  printf("Value of a is %d\n", a);
  
  return 0;
}
