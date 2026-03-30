#include <stdio.h>

int main() {
    int n, i;
    int mang[100];
    int max, min;
    float tong = 0, binhQuan;
    
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
        tong += mang[i];
    }
    
    max = mang[0];
    min = mang[0];
    
    for (i = 1; i < n; i++) {
        if (mang[i] > max) max = mang[i];
        if (mang[i] < min) min = mang[i];
    }
    
    binhQuan = tong / n;
    
    printf("So lon nhat: %d\n", max);
    printf("So nho nhat: %d\n", min);
    printf("Binh quan: %.2f\n", binhQuan);
    
    return 0;
}
