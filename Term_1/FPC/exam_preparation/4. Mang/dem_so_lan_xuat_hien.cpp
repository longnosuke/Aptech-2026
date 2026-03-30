#include <stdio.h>

int main() {
    int n, i, N;
    int mang[100];
    int dem = 0;
    
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
    
    printf("Nhap so nguyen N can dem: ");
    scanf("%d", &N);
    
    for (i = 0; i < n; i++) {
        if (mang[i] == N) {
            dem++;
        }
    }
    
    printf("So %d xuat hien %d lan trong mang\n", N, dem);
    
    return 0;
}
