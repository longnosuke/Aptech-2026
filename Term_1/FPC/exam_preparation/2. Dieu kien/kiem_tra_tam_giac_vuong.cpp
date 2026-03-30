#include <stdio.h>
#include <math.h>

int main() {
    float a, b, c, temp;
    
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
        if (a > b) {
            temp = a;
            a = b;
            b = temp;
        }
        if (b > c) {
            temp = b;
            b = c;
            c = temp;
        }
        if (a > b) {
            temp = a;
            a = b;
            b = temp;
        }
        
        if (fabs(c*c - (a*a + b*b)) < 0.0001) {
            printf("Ba so %.2f, %.2f, %.2f tao thanh 3 canh cua 1 tam giac vuong\n", a, b, c);
        } else {
            printf("Ba so %.2f, %.2f, %.2f tao thanh 3 canh cua 1 tam giac NHUNG KHONG phai tam giac vuong\n", a, b, c);
        }
    } else {
        printf("Ba so %.2f, %.2f, %.2f KHONG tao thanh 3 canh cua 1 tam giac\n", a, b, c);
    }
    
    return 0;
}
