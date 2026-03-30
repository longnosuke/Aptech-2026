#include <stdio.h>

int main() {
    int a, b, temp;
    
    printf("Nhap so a: ");
    scanf("%d", &a);
    printf("Nhap so b: ");
    scanf("%d", &b);
    
    printf("Truoc khi hoan doi: a = %d, b = %d\n", a, b);
    
    temp = a;
    a = b;
    b = temp;
    
    printf("Sau khi hoan doi: a = %d, b = %d\n", a, b);
    
    return 0;
}
