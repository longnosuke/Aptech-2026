#include <stdio.h>
#include <math.h>

int main() {
    int a, b;
    
    printf("Nhap so nguyen a: ");
    scanf("%d", &a);
    
    if (a < 0) {
        printf("%d khong phai la so chinh phuong\n", a);
        return 0;
    }
    
    b = sqrt(a);
    
    if (b * b == a) {
        printf("%d la so chinh phuong (%d^2 = %d)\n", a, b, a);
    } else {
        printf("%d khong phai la so chinh phuong\n", a);
    }
    
    return 0;
}
