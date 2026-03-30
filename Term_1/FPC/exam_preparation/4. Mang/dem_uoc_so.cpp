#include <stdio.h>

int main() {
    int n, i, N, j;
    int mang[100];
    
    printf("Nhap so phan tu cua mang (n <= 100): ");
    scanf("%d", &n);
    
    if (n <= 0 || n > 100) {
        printf("So phan tu khong hop le!\n");
        return 0;
    }
    
    printf("Nhap %d phan tu cua mang:\n", n);
    for (i = 0; i < n; i++) {
        printf("Phan tu thu %d: ", i + 1);
        scanf("%d", &mang[i]);
    }
    
    printf("Nhap so nguyen N: ");
    scanf("%d", &N);
    
    printf("Cac uoc so cua %d trong mang: ", N);
    for (i = 0; i < n; i++) {
        if (mang[i] != 0 && N % mang[i] == 0) {
            printf("%d ", mang[i]);
        }
    }
    printf("\n");
    
    return 0;
}
