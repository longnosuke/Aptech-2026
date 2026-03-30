#include <stdio.h>
#include <ctype.h>

int main() {
    char kyTu;
    
    printf("Nhap mot ky tu: ");
    scanf("%c", &kyTu);
    
    if (isupper(kyTu)) {
        printf("Ky tu hoa '%c' chuyen thanh chu thuong: '%c'\n", kyTu, tolower(kyTu));
    } else if (islower(kyTu)) {
        printf("Ky tu thuong '%c' chuyen thanh chu hoa: '%c'\n", kyTu, toupper(kyTu));
    } else {
        printf("'%c' khong phai la chu cai\n", kyTu);
    }
    
    return 0;
}
