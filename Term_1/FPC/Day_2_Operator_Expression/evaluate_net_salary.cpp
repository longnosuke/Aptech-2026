#include <stdio.h>

int main() {
  float basic_salary = 12000;
  float DA = 0.12 * basic_salary;
  float HRA = 150;
  float TA = 120;
  float others = 450;
  float PF = 0.14 * basic_salary;
  float IT = 0.15 * basic_salary;

  float net_salary = basic_salary + DA + HRA + TA + others - PF - IT;

  printf("The net salary is %.2f\n", net_salary);
  return 0;
}
