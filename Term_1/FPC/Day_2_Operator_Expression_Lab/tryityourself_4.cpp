#include <stdio.h>

int main() {
  float centimeters;

  printf("Enter a distance in centimeters: ");
  scanf("%f", &centimeters);

  float inches = centimeters / 2.54;
  float feet = inches / 12;

  printf("%.1f centimeters is equal to %.1f feet\n", centimeters, feet);
  printf("%.1f centimeters is equal to %.1f inches\n", centimeters, inches);
}
