#include <stdio.h>
#include <stdlib.h>

int main() {
  system("clear");

  char name1[] = "Nguyen Thanh Long";
  char name2[] = "Nguyen Van A";
  float score1 = 89.258;
  float score2 = 100;

printf("Name 1: %-20s| Score 1: %06.2f\n", name1, score1);
printf("Name 2: %-20s| Score 2: %06.2f\n", name2, score2);

  return 0;
}
