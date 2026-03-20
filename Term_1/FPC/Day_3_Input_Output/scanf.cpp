#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(){
  char name[50];
  int age;
  float height;

  printf("Enter your name: ");
  fgets(name, sizeof(name), stdin);

  printf("Enter your age: ");
  scanf("%d", &age);

  printf("Enter your height: ");
  scanf("%f", &height);

  printf("\nName: %s", name);
  printf("Age: %d\n", age);
  printf("Height: %.2f\n", height);

  return 0;
}
