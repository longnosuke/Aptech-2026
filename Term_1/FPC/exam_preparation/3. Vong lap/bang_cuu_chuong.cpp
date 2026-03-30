#include <stdio.h>

int main() {
    int N, i;
    
    printf("Nhap N (2 <= N <= 50): ");
    scanf("%d", &N);
    
    if (N < 2 || N > 50) {
        printf("N phai nam trong khoang [2, 50]!\n");
        return 0;
    }
    
    printf("Bang cuu chuong %d:\n", N);
    for (i = 1; i <= 10; i++) {
        printf("%d x %d = %d\n", N, i, N * i);
    }
    
    return 0;
}
