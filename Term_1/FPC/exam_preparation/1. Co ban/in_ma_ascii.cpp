#include <stdio.h>

int main() {
    char kyTu;
    
    printf("Nhap mot ky tu bat ky: ");
    scanf("%c", &kyTu);
    
    printf("Ma ASCII cua '%c' la: %d\n", kyTu, kyTu);
    
    return 0;
}
