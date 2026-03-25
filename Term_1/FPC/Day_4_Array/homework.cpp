#include <stdio.h>
#include <string.h>

int main() {
    char x[5][20] = {"z", "c", "a", "d", "b"};
    // let say x[0] = z, x[1] = c, x[2] = a, x[3] = d, x[4] = b
    char temp[20];
    int n = 5; // Total number of strings

    // Reorder the list of strings (Selection Sort)
    for (int item = 0; item < n - 1; ++item) {
      for (int i = item + 1; i < n; i++) {
            if (strcmp(x[item], x[i]) > 0) {
                strcpy(temp, x[item]);
                strcpy(x[item], x[i]);
                strcpy(x[i], temp);
            }
        }
    }

    printf("Reordered list of strings:\n");
    for (int i = 0; i < n; i++) {
        printf("String %d is %s\n", i + 1, x[i]);
    }

    return 0;
}

/*
Round 1: item = 0 (Goal: Find the smallest for index 0)
We compare x[0] ("z") against every other element:

    x[0] vs x[1] ("z" vs "c"): Swap! → {"c", "z", "a", "d", "b"}
    x[0] vs x[2] ("c" vs "a"): Swap! → {"a", "z", "c", "d", "b"}
    x[0] vs x[3] ("a" vs "d"): No swap.
    x[0] vs x[4] ("a" vs "b"): No swap.
    End of Round 1: x[0] is now "a". It is locked.

Round 2: item = 1 (Goal: Find the smallest for index 1)
We compare x[1] ("z") against the remaining elements:
    x[1] vs x[2] ("z" vs "c"): Swap! → {"a", "c", "z", "d", "b"}
    x[1] vs x[3] ("c" vs "d"): No swap.
    x[1] vs x[4] ("c" vs "b"): Swap! → {"a", "b", "z", "d", "c"}
    End of Round 2: x[1] is now "b". It is locked.

Round 3: item = 2 (Goal: Find the smallest for index 2)
We compare x[2] ("z") against the remaining elements:

    x[2] vs x[3] ("z" vs "d"): Swap! → {"a", "b", "d", "z", "c"}
    x[2] vs x[4] ("d" vs "c"): Swap! → {"a", "b", "c", "z", "d"}
    End of Round 3: x[2] is now "c". It is locked.

Round 4: item = 3 (Goal: Find the smallest for index 3)
We compare x[3] ("z") against the last element:
    x[3] vs x[4] ("z" vs "d"): Swap! → {"a", "b", "c", "d", "z"}
    End of Round 4: x[3] is now "d".
*/
