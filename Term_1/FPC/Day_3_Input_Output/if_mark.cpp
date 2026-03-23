#include <stdio.h>
#include <stdlib.h>

int main(){
  system("clear");
  int mark;

  printf("Nhap diem thi [0-100]: ");
  scanf("%d", &mark);

  if (mark  < 0 || mark > 100) {
    printf("Diem khong hop le\n");
  } else {
    printf("Diem ket qua la %d\n", mark);
  }
  return 0;
}
