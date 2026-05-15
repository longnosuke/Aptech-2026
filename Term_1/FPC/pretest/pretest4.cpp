#include <stdio.h>
#include <stdlib.h>

void question1();
void question2();
int main()
{
    system("clear");
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

void question1() {
  int n1, n2;
  do {
    printf("Enter an the first number N1 (<100): ");
    scanf("%d", &n1);
    if (n1 <= 0 || n1 >= 100) {
      printf("Invalid input. Please enter a number between 1 and 100.\n");
    }
  } while (n1 <= 0 || n1 >= 100);
  do {
    printf("Enter an the first number N2 (<10): ");
    scanf("%d", &n2);
    if (n2 <= 0 || n2 >= 10) {
      printf("Invalid input. Please enter a number between 0 and 10.\n");
    }
  } while (n2 <= 0 || n2 >= 10);

  int min = (n1 < n2) ? n1 : n2;
  int max = (n1 > n2) ? n1 : n2;
  int sum = 0;
  for (int i = min; i < max; i+=min) {
    sum += i;
    printf("%d + ", i);
  }
  printf("\nThe sum of them are:%d\n", sum);
}

struct COUNTRIES {
  char name[50];
  char capital[50];
  long int area;
};

void question2() {
  int numCountries;
  do {
    printf("Enter the number of countries (1-10): ");
    scanf("%d", &numCountries);

    if (numCountries < 1 || numCountries > 10) {
      printf("The number of countries must be between 1 and 10. Input again...\n");
    }
  } while (numCountries < 1 || numCountries > 10);

  struct COUNTRIES countries[numCountries];

  for (int i = 0; i < numCountries; i++) {
    printf("\n--- Country %d ---\n", i + 1);

    printf("Enter the name: ");
    scanf("%s", countries[i].name);

    printf("Enter the capital: ");
    scanf("%s", countries[i].capital);

    printf("Enter the area: ");
    scanf("%ld", &countries[i].area);
  }

  int maxArea = countries[0].area;
  int maxIndex = 0;
  int count = 0;
  for (int i = 0; i < numCountries; i++) {
    if (countries[i].area > maxArea) {
      maxArea = countries[i].area;
      maxIndex = i;
      count = 1;
    } else if (countries[i].area == maxArea) {
      count++;
    }
  }

  printf("\n=1=> THE LARGEST NATION(S) IS/ARE ");
  for (int i = 0; i < numCountries; i++) {
    if (countries[i].area == maxArea) {
      printf("%s ", countries[i].name);
    }
  }
  printf("\n");
}
