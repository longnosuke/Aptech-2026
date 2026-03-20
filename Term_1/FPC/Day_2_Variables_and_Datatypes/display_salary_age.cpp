#include <stdio.h>

int main() {
    int age;
    float salary;

    printf("Enter your age: ");
    scanf("%d", &age);

    printf("Enter your salary: ");
    scanf("%f", &salary);

    printf("\n--- User Details ---\n");
    printf("Age: %d\n", age);
    printf("Salary: %.2f\n", salary);

    return 0;
}
