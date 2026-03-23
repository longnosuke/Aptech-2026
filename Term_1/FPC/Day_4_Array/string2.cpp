#include <stdio.h>
#include <string.h>

int main() {
  char s1[] = "Hoang Long";
  char s2[] = "Nguyen Thanh";
  char s3[50];

  // strlen: calculate the length of array
  printf("Length of string 1 [%s]: %lu\n", s1, strlen(s1));
  printf("Length of string 2 [%s]: %lu\n", s2, strlen(s2));

  // strcpy: copy string s2 into s3
  strcpy(s3, s2);
  printf("Copy string 3 from s2: %s\n", s3);

  // strcat: concatenate string s1 and s2 into s3
  strcat(s3, " ");
  strcat(s3, s1);
  printf("Concatenate string 3 from s1 and s2: %s\n", s3);

  // strcmp: compare string s1 and s2
  int result = strcmp(s1, s2); 
  if (result > 0) {
    printf("s1 is greater than s2\n");
  } else if (result < 0) {
    printf("s1 is less than s2\n");
  } else {
    printf("s1 and s2 are the same\n");
  }

  return 0;
}
