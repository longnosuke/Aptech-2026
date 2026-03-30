#include <stdio.h>

int main() {
    int N, i;
    long long giaiThua = 1;
    
    printf("Nhap N (0 <= N <= 20): ");
    scanf("%d", &N);
    
    if (N < 0 || N > 20) {
        printf("N phai nam trong khoang [0, 20]!\n");
        return 0;
    }
    
    for (i = 1; i <= N; i++) {
        giaiThua *= i;
    }
    
    printf("%d! = %lld\n", N, giaiThua);
    
    return 0;
}
