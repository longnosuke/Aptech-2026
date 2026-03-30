#include <stdio.h>
#include <math.h>

int main() {
    float canh, theTich;
    
    printf("Nhap do dai cua 1 canh cua hinh khoi lap phuong: ");
    scanf("%f", &canh);
    
    theTich = canh * canh * canh;
    
    printf("The tich cua hinh khoi lap phuong: %.2f\n", theTich);
    
    return 0;
}
