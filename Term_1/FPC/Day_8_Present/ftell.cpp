#include <stdio.h>

int main() {
    FILE *fp = fopen("example.txt", "w+"); // mở file để ghi và đọc
    if (fp == NULL) {
        printf("Không thể mở file.\n");
        return 1;
    }

    // Ghi dữ liệu vào file
    fputs("Toi ten la Nguyen Van A.", fp);

    // Di chuyển con trỏ về đầu file
    fseek(fp, 0, 2);
   // Kiểm tra vị trí con trỏ hiện tại
    long pos = ftell(fp);
    printf("Con trỏ hiện tại đang ở vị trí: %ld\n", pos);

    fclose(fp);
    return 0;
}
