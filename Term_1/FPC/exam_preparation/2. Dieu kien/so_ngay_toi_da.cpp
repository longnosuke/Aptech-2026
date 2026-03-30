#include <stdio.h>

int main() {
    int thang, nam, soNgay;
    
    printf("Nhap thang (1-12): ");
    scanf("%d", &thang);
    printf("Nhap nam: ");
    scanf("%d", &nam);
    
    if (thang < 1 || thang > 12) {
        printf("Thang khong hop le!\n");
        return 0;
    }
    
    switch (thang) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            soNgay = 31;
            break;
        case 4: case 6: case 9: case 11:
            soNgay = 30;
            break;
        case 2:
            if ((nam % 400 == 0) || (nam % 100 != 0 && nam % 4 == 0)) {
                soNgay = 29;
            } else {
                soNgay = 28;
            }
            break;
    }
    
    printf("Thang %d nam %d co %d ngay\n", thang, nam, soNgay);
    
    return 0;
}
