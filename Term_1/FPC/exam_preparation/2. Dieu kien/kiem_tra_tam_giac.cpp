#include <stdio.h>

int main() {
    float a, b, c;
    
    printf("Nhap canh a: ");
    scanf("%f", &a);
    printf("Nhap canh b: ");
    scanf("%f", &b);
    printf("Nhap canh c: ");
    scanf("%f", &c);
    
    if (a <= 0 || b <= 0 || c <= 0) {
        printf("Cac canh phai lon hon 0!\n");
        return 0;
    }
    
    if (a + b > c && a + c > b && b + c > a) {
        printf("Ba so %.2f, %.2f, %.2f tao thanh 3 canh cua 1 tam giac\n", a, b, c);
    } else {
        printf("Ba so %.2f, %.2f, %.2f KHONG tao thanh 3 canh cua 1 tam giac\n", a, b, c);
    }
    
    return 0;
}
