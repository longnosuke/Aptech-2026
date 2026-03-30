#include <stdio.h>

int main() {
    int N, i;
    long long giaiThuaCach = 1;
    
    printf("Nhap N (0 <= N <= 20): ");
    scanf("%d", &N);
    
    if (N < 0 || N > 20) {
        printf("N phai nam trong khoang [0, 20]!\n");
        return 0;
    }
    
    if (N == 0) {
        printf("0! = 1\n");
        return 0;
    }
    
    if (N % 2 == 1) {
        printf("N la so le: N! = 1 * 3 * 5 * ... * N\n");
        for (i = 1; i <= N; i += 2) {
            giaiThuaCach *= i;
            if (i < N) printf("%d * ", i);
            else printf("%d = %lld\n", i, giaiThuaCach);
        }
    } else {
        printf("N la so chan: N! = 2 * 4 * 6 * ... * N\n");
        for (i = 2; i <= N; i += 2) {
            giaiThuaCach *= i;
            if (i < N) printf("%d * ", i);
            else printf("%d = %lld\n", i, giaiThuaCach);
        }
    }
    
    return 0;
}
