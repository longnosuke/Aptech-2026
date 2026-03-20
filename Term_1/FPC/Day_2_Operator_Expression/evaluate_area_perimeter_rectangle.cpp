#include <stdio.h>

int main() {
  float width;
  float height;

  printf("Enter the width: ");
  scanf("%f", &width);
  printf("Enter the height: ");
  scanf("%f", &height);

  float area = width * height;
  float perimeter = 2 * (width + height);

  printf("The area of the rectangle is %f unit\n", area);
  printf("The perimeter of the rectangle is %f unit\n", perimeter);
  return 0;
}
