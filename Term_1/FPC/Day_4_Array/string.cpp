#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
  char s[] = "Hello World!";
  printf("%s\n", s);

  printf("Length of string 1: %lu\n", sizeof(s)/sizeof(char));
  printf("Length of string 2: %lu\n", sizeof(s));
  printf("Length of string 3: %lu\n", strlen(s));
  return 0;
}
