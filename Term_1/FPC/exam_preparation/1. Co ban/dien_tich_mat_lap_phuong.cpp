#include <stdio.h>
#include <math.h>

int main() {
    float canh, dienTichMat;
    
    printf("Nhap do dai cua 1 canh cua hinh khoi lap phuong: ");
    scanf("%f", &canh);
    
    dienTichMat = 6 * canh * canh;
    
    printf("Dien tich mat cua hinh khoi lap phuong: %.2f\n", dienTichMat);
    
    return 0;
}
