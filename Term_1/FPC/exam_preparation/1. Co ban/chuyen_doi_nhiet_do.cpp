#include <stdio.h>

int main() {
    int luaChon;
    float nhietDo, ketQua;
    
    printf("Chuyen doi nhiet do:\n");
    printf("1. Do C sang Do F\n");
    printf("2. Do F sang Do C\n");
    printf("Nhap lua chon (1 hoac 2): ");
    scanf("%d", &luaChon);
    
    if (luaChon == 1) {
        printf("Nhap nhiet do (Do C): ");
        scanf("%f", &nhietDo);
        ketQua = (nhietDo * 9.0 / 5.0) + 32;
        printf("%.2f Do C = %.2f Do F\n", nhietDo, ketQua);
    } else if (luaChon == 2) {
        printf("Nhap nhiet do (Do F): ");
        scanf("%f", &nhietDo);
        ketQua = (nhietDo - 32) * 5.0 / 9.0;
        printf("%.2f Do F = %.2f Do C\n", nhietDo, ketQua);
    } else {
        printf("Lua chon khong hop le!\n");
    }
    
    return 0;
}
