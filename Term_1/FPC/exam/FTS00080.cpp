/* Question1
Find square of positive numbers only/
Output:
How many numbers you want to enter 3
Enter number 2
Square = 4
Enter Number: -1
Enter number: 6
Square: 36
*/

/* Question 2
Using the array of the structure, write a program with following requirements:
- User to enter the number of cars
- Then Enter information for those cars (name, color, price)
- Finally, output those arrays as alphabetically sort by name.

Example
Enter the number of cars: 2
Enter the name of car 1
 - Name: Toyota
 - Color: Blue
 - Price: 1000

 Enter the name of car 2
 - Name: Honda
 - Color: Gray
 - Price: 1500

Output:
Information of cars
Car1:
- Name: Honda
- Color: Gray
- Price: 1500

Car2:
- Name: Toyota
- Color: Blue
- Price: 1000
*/
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void question1() {
  int number;
  do {
    printf("How many numbers you want to enter: ");
    scanf("%d", &number);
  } while (number <= 0 && number < 1000000);

  int num;
  for (int i = 1; i <= number; i++) {
    printf("Enter number at: ");
    scanf("%d", &num);


    if (num > 0) {
      printf("Square = %d\n", num * num);
    }
  }
}

struct Car {
  char name[50];
  char color[50];
  float price;
};

void question2() {
  int numCars;
  printf("Enter the number of cars: ");
  scanf("%d", &numCars);

  struct Car cars[numCars];

  for (int i = 0; i < numCars; i++) {
    printf("Enter the name of car %d\n", i + 1);
    printf(" - Name: ");
    scanf("%s", cars[i].name);
    printf(" - Color: ");
    scanf("%s", cars[i].color);
    printf(" - Price: ");
    scanf("%f", &cars[i].price);
    printf("\n");
  }

  // Sort cars alphabetically by name
  for (int i = 0; i < numCars - 1; i++) {
    for (int j = 0; j < numCars - i - 1; j++) {
      if (strcmp(cars[j].name, cars[j + 1].name) > 0) {
        struct Car temp = cars[j];
        cars[j] = cars[j + 1];
        cars[j + 1] = temp;
      }
    }
  }
  // Compare two pair of string. If the first string is greater than the second string, swap them => move to next pair
  // when i = 0, j = 0, compare cars[0] and cars[1]

  printf("Output:\n");
  printf("Information of cars\n");
  for (int i = 0; i < numCars; i++) {
    printf("Car%d:\n", i + 1);
    printf("- Name: %s\n", cars[i].name);
    printf("- Color: %s\n", cars[i].color);
    printf("- Price: %.0f\n", cars[i].price);
    printf("\n");
  }
}

int main() {
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





