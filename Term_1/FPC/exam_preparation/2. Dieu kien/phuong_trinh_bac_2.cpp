#include <stdio.h>
#include <math.h>

int main() {
    float a, b, c, delta, x1, x2;
    
    printf("Giai phuong trinh ax^2 + bx + c = 0\n");
    printf("Nhap a: ");
    scanf("%f", &a);
    printf("Nhap b: ");
    scanf("%f", &b);
    printf("Nhap c: ");
    scanf("%f", &c);
    
    if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                printf("Phuong trinh co vo so nghiem\n");
            } else {
                printf("Phuong trinh vo nghiem\n");
            }
        } else {
            x1 = -c / b;
            printf("Phuong trinh co 1 nghiem: x = %.2f\n", x1);
        }
    } else {
        delta = b*b - 4*a*c;
        
        if (delta > 0) {
            x1 = (-b + sqrt(delta)) / (2*a);
            x2 = (-b - sqrt(delta)) / (2*a);
            printf("Phuong trinh co 2 nghiem phan biet:\n");
            printf("x1 = %.2f\n", x1);
            printf("x2 = %.2f\n", x2);
        } else if (delta == 0) {
            x1 = -b / (2*a);
            printf("Phuong trinh co nghiem kep:\n");
            printf("x1 = x2 = %.2f\n", x1);
        } else {
            printf("Phuong trinh vo nghiem\n");
        }
    }
    
    return 0;
}
