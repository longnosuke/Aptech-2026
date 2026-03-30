#include <stdio.h>

int main() {
    int N, i, tongUoc = 0;
    
    printf("Nhap N: ");
    scanf("%d", &N);
    
    if (N <= 1) {
        printf("%d khong phai la so hoan hao\n", N);
        return 0;
    }
    
    for (i = 1; i < N; i++) {
        if (N % i == 0) {
            tongUoc += i;
        }
    }
    
    if (tongUoc == N) {
        printf("%d la so hoan hao\n", N);
    } else {
        printf("%d khong phai la so hoan hao\n", N);
    }
    
    return 0;
}
