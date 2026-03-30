#include <stdio.h>
#include <math.h>

int main() {
    int N, i, laNguyenTo = 1;
    
    printf("Nhap N: ");
    scanf("%d", &N);
    
    if (N <= 1) {
        printf("%d khong phai la so nguyen to\n", N);
        return 0;
    }
    
    for (i = 2; i <= sqrt(N); i++) {
        if (N % i == 0) {
            laNguyenTo = 0;
            break;
        }
    }
    
    if (laNguyenTo) {
        printf("%d la so nguyen to\n", N);
    } else {
        printf("%d khong phai la so nguyen to\n", N);
    }
    
    return 0;
}
