#include <stdio.h>
#include <string.h>

// int main() {
//     int array[] = {2, 3, 1, 5, 4};
//     // let say array[0] = z, array[1] = c, array[2] = a, array[3] = d, array[4] = b
//     char temp[20];
//     int n = sizeof(array) / sizeof(array[0]);
//     // Reorder the list of strings (Selection Sort)
//     for (int item = 0; item < n - 1; ++item) {
//       for (int i = item + 1; i < n; i++) {
//             // if (strcmp(array[item], array[i]) > 0) {
//             //     strcpy(temp, array[item]);
//             //     strcpy(array[item], array[i]);
//             //     strcpy(array[i], temp);
//             // }

//             if (array[item] > array[i]) {
//                 int temp = array[item];
//                 array[item] = array[i];
//                 array[i] = temp;
//             }
//         }
//     }

//     printf("Reordered list of strings: ");
//     for (int i = 0; i < n; i++) {
//         printf("%d ", array[i]);
//     }
//     printf("\n");

//     return 0;
// }

/*
Round 1: item = 0 (Goal: Find the smallest for indearray 0)
We compare array[0] ("z") against every other element:

    array[0] vs array[1] ("z" vs "c"): Swap! → {"c", "z", "a", "d", "b"}
    array[0] vs array[2] ("c" vs "a"): Swap! → {"a", "z", "c", "d", "b"}
    array[0] vs array[3] ("a" vs "d"): No swap.
    array[0] vs array[4] ("a" vs "b"): No swap.
    End of Round 1: array[0] is now "a". It is locked.

Round 2: item = 1 (Goal: Find the smallest for indearray 1)
We compare array[1] ("z") against the remaining elements:
    array[1] vs array[2] ("z" vs "c"): Swap! → {"a", "c", "z", "d", "b"}
    array[1] vs array[3] ("c" vs "d"): No swap.
    array[1] vs array[4] ("c" vs "b"): Swap! → {"a", "b", "z", "d", "c"}
    End of Round 2: array[1] is now "b". It is locked.

Round 3: item = 2 (Goal: Find the smallest for indearray 2)
We compare array[2] ("z") against the remaining elements:

    array[2] vs array[3] ("z" vs "d"): Swap! → {"a", "b", "d", "z", "c"}
    array[2] vs array[4] ("d" vs "c"): Swap! → {"a", "b", "c", "z", "d"}
    End of Round 3: array[2] is now "c". It is locked.

Round 4: item = 3 (Goal: Find the smallest for indearray 3)
We compare array[3] ("z") against the last element:
    array[3] vs array[4] ("z" vs "d"): Swap! → {"a", "b", "c", "d", "z"}
    End of Round 4: array[3] is now "d".
*/


// Alternative


int main() {
  int array[] = {12, 2, 3};

  int min, temp;
  int n = sizeof(array) / sizeof(array[0]);

  for (int i = 0; i < n; i++) {
    min = i;
    for (int j = i + 1; j < n; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }

  for (int i = 0; i < n; i++) {
    printf("%d ", array[i]);
  }
  printf("\n");
}
