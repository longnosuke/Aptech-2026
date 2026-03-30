#include <stdio.h>

int main() {
    int n, i;
    int mang[100];
    int demChan = 0;
    
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
        if (mang[i] % 2 == 0) {
            demChan++;
        }
    }
    
    printf("So luong so chan trong mang: %d\n", demChan);
    
    return 0;
}
