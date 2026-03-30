#include <stdio.h>
#include <stdlib.h>

float casio(float a, float b, char op);

//demo ve lap trinh ham trong C/C++
int main()
{
    system("clear");

    float a, b;
    printf("Nhap 2 so bat ky: ");
    scanf("%f %f", &a, &b);

    printf("Nhap 1 phep toan so hoc [+ -  * /] : ");
    char op;
    scanf(" %c", &op);

    float r= casio(a, b, op);
    printf("Ket qua: %.2f\n", r);

    return 0;
}

//ham thuc hien phep toan so hoc 'op' tren 2 bien 'a' va 'b', tra ve ket qua cua phep toan do.
float casio(float a, float b, char op)
{
    float result = 0.0f;
    switch (op)
    {
    case '+':
        result = a + b;
        break;
    case '-':
        result = a - b;
        break;
    case '*':
        result = a * b;
        break;
    case '/':
        if (b != 0)
        {
            result = a / b;
        }
        else
            printf("\n >> Error: Division by zero\n");
        break;
    default:
        printf("\n >> Error: Invalid operator [+ - * /]\n");
    }

    return result;
}
