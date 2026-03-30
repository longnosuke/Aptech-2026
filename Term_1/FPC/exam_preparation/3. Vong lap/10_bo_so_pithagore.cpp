#include <stdio.h>

int main() {
    int count = 0;
    int a, b, c;
    
    printf("10 bo so Pithagore dau tien:\n");
    
    for (c = 5; c < 100 && count < 10; c++) {
        for (b = 1; b < c && count < 10; b++) {
            for (a = 1; a < b && count < 10; a++) {
                if (c * c == a * a + b * b) {
                    printf("(%d, %d, %d)\n", a, b, c);
                    count++;
                }
            }
        }
    }
    
    return 0;
}
