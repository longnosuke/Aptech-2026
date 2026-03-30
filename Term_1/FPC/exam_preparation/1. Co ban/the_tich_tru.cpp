#include <stdio.h>
#include <math.h>

int main() {
    float banKinh, chieuCao, theTich;
    const float PI = 3.14159;
    
    printf("Nhap ban kinh day cua hinh khoi tru: ");
    scanf("%f", &banKinh);
    printf("Nhap chieu cao cua hinh khoi tru: ");
    scanf("%f", &chieuCao);
    
    theTich = PI * banKinh * banKinh * chieuCao;
    
    printf("The tich cua hinh khoi tru: %.2f\n", theTich);
    
    return 0;
}
