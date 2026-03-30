#include <stdio.h>
#include <math.h>

int laNguyenTo(int n) {
    if (n <= 1) return 0;
    for (int i = 2; i <= sqrt(n); i++) {
        if (n % i == 0) return 0;
    }
    return 1;
}

int main() {
    int count = 0, i = 2;
    
    printf("10 so nguyen to dau tien:\n");
    
    while (count < 10) {
        if (laNguyenTo(i)) {
            printf("%d ", i);
            count++;
        }
        i++;
    }
    
    printf("\n");
    
    return 0;
}
