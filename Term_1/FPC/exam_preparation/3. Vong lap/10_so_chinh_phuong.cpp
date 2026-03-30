#include <stdio.h>
#include <math.h>

int main() {
    int count = 0, i = 1;
    
    printf("10 so chinh phuong dau tien:\n");
    
    while (count < 10) {
        int sqrt_i = sqrt(i);
        if (sqrt_i * sqrt_i == i) {
            printf("%d ", i);
            count++;
        }
        i++;
    }
    
    printf("\n");
    
    return 0;
}
