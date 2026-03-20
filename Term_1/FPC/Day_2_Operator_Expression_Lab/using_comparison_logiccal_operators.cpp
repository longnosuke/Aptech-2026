#include <stdio.h>
int main()
{
    int a = 5, b = 6, c = 7;
    printf("int a = 5, b = 6, c = 7\n");
    printf("The value of a > b is %i\n", a > b);
    printf("The value of b < c is %i\n", b < c);
    printf("The value of a + b >= c is %i\n", a + b >= c);
    printf("The value of a - b <= b - c is %i\n", a-b<=b-c);
    printf("The value of b-a =b - c is %i\n", b - a == b - c);
    printf("The value of a*b!= c * c is %i\n", a * b < c * c);
    printf("Result of a>10 && b <5 = %d\n", a>10 && b<5);
    printf("Result of a>100 || b<50 = %d\n",a>100 || b<50);
    return 0;
}
