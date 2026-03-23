#include <stdio.h>
#include <stdlib.h>

int main(){
  system("clear");
  int mark;

  printf("Nhap diem thi [0-100]: ");
  scanf("%d", &mark);

  if (mark  < 0 || mark > 100) {
    printf("Diem khong hop le\n");
  } else if ( mark >= 90) {
    printf("Xep loai A\n");
  } else if ( mark >= 75) {
    printf("Xep loai B\n");
  } else if ( mark >= 60) {
    printf("Xep loai C\n");
  } else if( mark >= 40 ) {
    printf("Xep loai D\n");
  } else if( mark < 40 ) {
    printf("Fail\n");
  }
  return 0;
}
