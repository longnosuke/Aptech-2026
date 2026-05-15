#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>

void question1();
void question2();
int main()
{
    system("cls");
    int action;
    do
    {

        printf("*************************************\n");
        printf("*    selecting appropriate action   *\n");

        printf(" 1. question 1\n");

        printf(" 2. question 2\n");

        printf(" 3. quite program\n");
        printf(" Enter your action: ");
        scanf("%d", &action);
        printf("*************************************\n");
        switch (action)
        {
        case 1:
            question1();
            break;
        case 2:
            question2();
            break;
        case 3:
            printf("Exit program!\n");
            break;
        default:
            printf("Invalid action. Please select a valid option.\n");
        }
    } while (action != 3);

    return 0;
}

void question1()
{
    int number;
    int count = 0;
    printf("This is question 1.\n");
    printf("Please enter your number: ");
    if (scanf("%d", &number) == 1)
    {
        // for (int i = 1; i <= number / 2; i++)
        // {
        //     if (number % i == 0 && i % 2 != 0)
        //     {
        //         printf("%d ", i);
        //         count++;
        //     }
        // }
        // printf("\nTotal odd divisors: %d\n", count);

        //Alternative

        for (int i = 1; i * 1 <= number; i++)
        {
            if (number % i == 0 && i % 2 != 0)
            {
                printf("%d ", i);
                count++;
            }
        }
        for (int i = (int)sqrt(number); i >= 1; i--)
        {
            if (number % i == 0 && i * i != number) {
              int j = number / i;
              {
                printf("%d ", j);
                count++;
              }
            }
        }
        printf("\nTotal odd divisors: %d\n", count);
    }
    else
    {
        printf("Invalid input. Please enter a valid integer.\n");
    }
}
struct Rectangle
{
    int length;
    int width;
    char color[20];
};

void question2()
{
    int n;
    printf("This is question 2.\n");
    printf("Enter the number of rectangles: ");
    scanf("%d", &n);
    struct Rectangle rectangles[n];
    for (int i = 0; i < n; i++)
    {
        printf("Enter length, width, and color of rectangle %d: ", i + 1);
        scanf("%d %d %s", &rectangles[i].length, &rectangles[i].width, rectangles[i].color);
    }
    printf("\nLists of Rectangles\n");
    printf("No\tWidth\tHeight\tArea\tColor\n");
    printf("=====================================\n");
    for (int i = 0; i < n; i++)
    {
        int area = rectangles[i].length * rectangles[i].width;
        printf("%d\t%d\t%d\t%d\t%s\n", i + 1, rectangles[i].width, rectangles[i].length, area, rectangles[i].color);
    }
    printf("=====================================\n");
    return;
}
