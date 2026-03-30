#include <stdio.h>

int main() {
    int a, b, c, max, min;
    
    printf("Nhap so a: ");
    scanf("%d", &a);
    printf("Nhap so b: ");
    scanf("%d", &b);
    printf("Nhap so c: ");
    scanf("%d", &c);
    
    max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    
    min = a;
    if (b < min) min = b;
    if (c < min) min = c;
    
    printf("So lon nhat la: %d\n", max);
    printf("So nho nhat la: %d\n", min);
    
    return 0;
}
