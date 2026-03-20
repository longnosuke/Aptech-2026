#include <stdio.h>
#include <stdlib.h>

int main() {
  system("clear");
  printf("Hello, World! \n");
  printf("\t I'm learning C \n");

  int age = 25;
  float height = 1.75;
  char name[] = "Nguyen Thanh Long";
  char grade = 'A';
  printf("I am %.2f meters tall \n", height);
  printf("I am %d years old \n", age);
  printf("My name is %s \n", name);
  printf("My grade is %c \n", grade);

  return 0;
}
