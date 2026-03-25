#include <stdio.h>
int main() {
  char c;
  printf("Enter a character: ");
  scanf("%c", &c);

  switch (c) {
    case 'a':
    case 'A':
      printf("Ada");
      break;
    case 'b':
    case 'B':
      printf("Basic");
      break;
    case 'c':
    case 'C':
      printf("COBAL");
      break;
    case 'd':
    case 'D':
      printf("dBASE III");
      break;
    case 'f':
    case 'F':
      printf("Fortran");
      break;
    case 'p':
    case 'P':
      printf("Pascal");
      break;
    case 'v':
    case 'V':
      printf("Visual C++");
      break;
    default:
      printf("%c: Character does not match any of the above\n", c);
      break;
  }
}
