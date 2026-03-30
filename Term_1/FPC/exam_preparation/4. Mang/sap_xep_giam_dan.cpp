#include <stdio.h>

int main() {
    int n, i, j;
    int mang[100];
    int temp;
    
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
    
    for (i = 0; i < n - 1; i++) {
        for (j = i + 1; j < n; j++) {
            if (mang[i] < mang[j]) {
                temp = mang[i];
                mang[i] = mang[j];
                mang[j] = temp;
            }
        }
    }
    
    printf("Mang sau khi sap xep giam dan:\n");
    for (i = 0; i < n; i++) {
        printf("%d ", mang[i]);
    }
    printf("\n");
    
    return 0;
}
