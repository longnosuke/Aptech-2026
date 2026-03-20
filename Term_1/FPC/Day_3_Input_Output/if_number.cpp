#include <stdio.h>
#include <stdlib.h>

int main(){
  system("clear");
  int number;

  printf("Nhap mot so nguyen: ");
  scanf("%d", &number);

  if (number > 0) {
    printf("%d la so duong\n", number);
  } else if (number < 0) {
    printf("%d la so am\n", number);
  } else {
    printf("%d la so khong\n", number);
  }
}
