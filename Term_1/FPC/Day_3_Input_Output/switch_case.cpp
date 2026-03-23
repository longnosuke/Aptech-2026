#include <stdio.h>
#include <stdlib.h>

int main() {
  system("clear");
  char kytu;

  printf("Nhập một ký tự từ [a-z] hoặc một số: ");
  scanf("%c", &kytu);

  if ((kytu >= 'a' && kytu <= 'z' )|| (kytu >= 'A' && kytu <= 'Z')) {
    switch (kytu) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U':
        printf("Ký tự là nguyên âm\n");
        break;
      default:
        printf("Ký tự là phụ âm\n");
    }
  } else if (kytu >= '0' && kytu <= '9') {
    printf("Ký tự là số \n");
  } else {
    printf("Ký tự là ký tự đặc biệt\n");
  }

  return 0;
}
