#include <stdio.h>
#include <stdlib.h>

//demo about struct
struct DATE {
  int day;
  int month;
  int year;
};

struct STUDENT {
    char id[10];
    char name[30];
    float diem;
    DATE birthday;
};

int main() {
  system("clear");

  STUDENT student1 = {
    "SV001",
    "Nguyen Van A",
    8.5,
    {12, 4, 2006}
  };

  printf("ID: %s\n", student1.id);
  printf("Name: %s\n", student1.name);
  printf("Diem: %.1f\n", student1.diem);
  printf("Birthday: %d/%d/%d\n", student1.birthday.day, student1.birthday.month, student1.birthday.year);
  return 0;
}
