#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct PRODUCT {
  char id[10];
  char name[30];
  int price;
};

// sort product by name
// print heighest price product

// sort product by price
void sortProductByCondition(char condition, struct PRODUCT products[], int n) {
  for (int i = 0; i < n - 1; i++) {
    int minIndex = i;
    for (int j = i + 1; j < n; j++) {
      if (condition == 'n') {
        if (strcmp(products[minIndex].name, products[j].name) > 0) {
          minIndex = j;
        }
      } else if (condition == 'p') {
        if (products[minIndex].price > products[j].price) {
          minIndex = j;
        }
      }
    }
    if (minIndex != i) {
      struct PRODUCT temp = products[i];
      products[i] = products[minIndex];
      products[minIndex] = temp;
    }
  }
}

int main() {
  // Pre-define the array with mock data for easy testing
  struct PRODUCT products[] = {
      {"P001", "Laptop Gaming", 1500},
      {"P002", "Mechanical Keyboard", 120},
      {"P003", "Wireless Mouse", 50},
      {"P004", "HD Monitor", 250},
      {"P005", "Desk Pad", 20}
  };

  // Automatically calculate the number of products in the array
  int n = sizeof(products) / sizeof(products[0]);

  // printf("\n  **** LIST OF ALL PRODUCTS ****\n");
  // printf("----------------------------------\n");

  // for (int i = 0; i < n; i++) {
  //   printf("ID:    %s\n", products[i].id);
  //   printf("Name:  %s\n", products[i].name);
  //   printf("Price: $%d\n", products[i].price);
  //   printf("----------------------------------\n");
  // }

  printf("\n  **** SORT BY NAME ****\n");
  sortProductByCondition('n', products, n);
  for (int i = 0; i < n; i++) {
    printf("ID:    %s\n", products[i].id);
    printf("Name:  %s\n", products[i].name);
    printf("Price: $%d\n", products[i].price);
    printf("----------------------------------\n");
  }

  printf("\n  **** SORT BY PRICE ****\n");
  sortProductByCondition('p', products, n);
  for (int i = 0; i < n; i++) {
    printf("ID:    %s\n", products[i].id);
    printf("Name:  %s\n", products[i].name);
    printf("Price: $%d\n", products[i].price);
    printf("----------------------------------\n");
  }
  return 0;
}

// #include <stdio.h>
// #include <stdlib.h>
// #include <string.h> // Needed for strcspn

// struct PRODUCT {
//   char id[10], name[30];
//   int price;
// };

// int main() {
//   int n;

//   // 1. Get the number of products
//   do {
//     printf("Nhap so luong san pham (3-10): ");
//     if (scanf("%d", &n) != 1) { // Basic check if user entered a number
//         while(getchar() != '\n'); // Clear buffer if they typed a letter
//         continue;
//     }
//   } while (n < 3 || n > 10);

//   struct PRODUCT products[n];

//   // 2. Input Loop
//   for (int i = 0; i < n; i++) {
//     printf("\n--- San pham thu %d ---\n", i + 1);

//     printf("ID: ");
//     scanf("%9s", products[i].id); // %9s prevents overflow for a 10-char array

//     // CRITICAL: Clear the buffer before fgets
//     while (getchar() != '\n');

//     printf("Name: ");
//     fgets(products[i].name, sizeof(products[i].name), stdin);
//     strtok(products[i].name, "\n");
//     // Remove the trailing '\n' that fgets always adds
//     // products[i].name[strcspn(products[i].name, "\n")] = 0;

//     printf("Price: ");
//     scanf("%d", &products[i].price);
//   }

//   // 3. Display Result
//   printf("\n  **** LIST OF ALL PRODUCTS ****\n");
//   printf("%s | %s | %s\n", "ID", "NAME", "PRICE");
//   printf("--------------------------------------------\n");

//   for (int i = 0; i < n; i++) {
//     printf("%s | %s | %d\n",
//            products[i].id,
//            products[i].name,
//            products[i].price);
//   }

//   return 0;
// }
