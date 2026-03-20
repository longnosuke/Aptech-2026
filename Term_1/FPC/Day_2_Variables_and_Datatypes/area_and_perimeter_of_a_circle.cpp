#include <stdio.h>

int main() {
  int radius;
  printf("Enter the radius of the circle: ");
  scanf("%d", &radius);

  float area = 3.14 * radius * radius;
  float perimeter = 2 * 3.14 * radius;

  printf("Area of the circle: %.2f\n", area);
  printf("Perimeter of the circle: %.2f\n", perimeter);
  return 0;
}
