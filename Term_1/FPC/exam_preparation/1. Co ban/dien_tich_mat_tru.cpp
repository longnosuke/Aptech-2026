#include <stdio.h>
#include <math.h>

int main() {
    float banKinh, chieuCao, dienTichMat;
    const float PI = 3.14159;
    
    printf("Nhap ban kinh day cua hinh khoi tru: ");
    scanf("%f", &banKinh);
    printf("Nhap chieu cao cua hinh khoi tru: ");
    scanf("%f", &chieuCao);
    
    dienTichMat = 2 * PI * banKinh * (banKinh + chieuCao);
    
    printf("Dien tich mat cua hinh khoi tru: %.2f\n", dienTichMat);
    
    return 0;
}
