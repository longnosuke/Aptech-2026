#include <stdio.h>
#include <math.h>

int main() {
    float a, b, c, p, dienTich;
    
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
        p = (a + b + c) / 2;
        dienTich = sqrt(p * (p - a) * (p - b) * (p - c));
        printf("Dien tich cua tam giac co 3 canh %.2f, %.2f, %.2f la: %.2f\n", a, b, c, dienTich);
    } else {
        printf("Ba so %.2f, %.2f, %.2f KHONG tao thanh 3 canh cua 1 tam giac\n", a, b, c);
    }
    
    return 0;
}
