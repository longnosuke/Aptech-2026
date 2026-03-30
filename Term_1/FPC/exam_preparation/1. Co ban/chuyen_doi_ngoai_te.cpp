#include <stdio.h>

int main() {
    int luaChon;
    float soTien, tiGia, ketQua;
    
    printf("Chuyen doi ngoai te:\n");
    printf("1. USD sang EUR\n");
    printf("2. EUR sang USD\n");
    printf("3. VND sang USD\n");
    printf("4. VND sang EUR\n");
    printf("5. USD sang VND\n");
    printf("6. EUR sang VND\n");
    printf("Nhap lua chon (1-6): ");
    scanf("%d", &luaChon);
    
    if (luaChon == 1) {
        printf("Nhap so tien USD: ");
        scanf("%f", &soTien);
        printf("Nhap ti gia USD/EUR: ");
        scanf("%f", &tiGia);
        ketQua = soTien * tiGia;
        printf("%.2f USD = %.2f EUR\n", soTien, ketQua);
    } else if (luaChon == 2) {
        printf("Nhap so tien EUR: ");
        scanf("%f", &soTien);
        printf("Nhap ti gia EUR/USD: ");
        scanf("%f", &tiGia);
        ketQua = soTien * tiGia;
        printf("%.2f EUR = %.2f USD\n", soTien, ketQua);
    } else if (luaChon == 3) {
        printf("Nhap so tien VND: ");
        scanf("%f", &soTien);
        printf("Nhap ti gia VND/USD: ");
        scanf("%f", &tiGia);
        ketQua = soTien / tiGia;
        printf("%.2f VND = %.2f USD\n", soTien, ketQua);
    } else if (luaChon == 4) {
        printf("Nhap so tien VND: ");
        scanf("%f", &soTien);
        printf("Nhap ti gia VND/EUR: ");
        scanf("%f", &tiGia);
        ketQua = soTien / tiGia;
        printf("%.2f VND = %.2f EUR\n", soTien, ketQua);
    } else if (luaChon == 5) {
        printf("Nhap so tien USD: ");
        scanf("%f", &soTien);
        printf("Nhap ti gia USD/VND: ");
        scanf("%f", &tiGia);
        ketQua = soTien * tiGia;
        printf("%.2f USD = %.2f VND\n", soTien, ketQua);
    } else if (luaChon == 6) {
        printf("Nhap so tien EUR: ");
        scanf("%f", &soTien);
        printf("Nhap ti gia EUR/VND: ");
        scanf("%f", &tiGia);
        ketQua = soTien * tiGia;
        printf("%.2f EUR = %.2f VND\n", soTien, ketQua);
    } else {
        printf("Lua chon khong hop le!\n");
    }
    
    return 0;
}
