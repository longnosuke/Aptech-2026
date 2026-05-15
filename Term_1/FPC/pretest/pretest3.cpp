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
  printf("Please enter a number from 1 to 10: ");
  int number;
  scanf("%d", &number);
  if (number < 1 || number > 10) {
    printf("Invalid number. Please enter a number from 1 to 10.\n");
    return;
  }

  long long int factorial = 1;
  for (int i = number; i >= 1; i--) {
    factorial *= i;
    printf("%d * ", i);
  }
  printf("\b\b= %lld\n", factorial);
  printf("The factory of %d is %lld\n", number, factorial);
}

struct EMPLOYEE {
  char EmployeeName[50];
  int EmployeeID[50];
  int baseSalary;
  int workDays;
};

void question2() {
  int numEmployees;
  do
  {
    printf("Enter the number of employees to be entered into system: ");
    scanf("%d", &numEmployees);
    if (numEmployees < 1 || numEmployees > 100) {
      printf("The number of employees must be between 1 and 100. Input again…\n");
    }
  } while (numEmployees < 1 || numEmployees > 100);

  struct EMPLOYEE employees[numEmployees];

  for (int i = 0; i < numEmployees; i++) {
    printf("Enter employee name, employee ID, base salary, and work days for employee %d: ", i + 1);
    scanf("%s %d %d %d", employees[i].EmployeeName, &employees[i].EmployeeID, &employees[i].baseSalary, &employees[i].workDays);
  }

  for (int i = 0; i < numEmployees; i++) {
    int totalSalary = employees[i].baseSalary * employees[i].workDays;
    printf("Employee name: %s\n", employees[i].EmployeeName);
    printf("Employee ID: %d\n", employees[i].EmployeeID);
    printf("Base salary: %d\n", employees[i].baseSalary);
    printf("Work days: %d\n", employees[i].workDays);
    printf("Total salary: %d\n", totalSalary);
    printf("\n");
  }
}
