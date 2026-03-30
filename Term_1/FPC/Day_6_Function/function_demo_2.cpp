#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void sort(char names[][31], int n);

int main()
{
    system("cls");

    char s[10][31];
    int n;
    printf("Nhap so luong sv [3-10] : ");
    scanf("%d", &n);

    getchar(); // Clear the newline character from the buffer

    printf("Nhap ten :\n");
    for(int i = 0; i < n; i++){
        printf("sv thu %d = ", i+1);
        scanf("%[^\n]s", s[i]);
        getchar(); // Clear the newline character from the buffer
    }

    printf("\n\nDanh sach ten sinh vien :\n");
    for(int i = 0; i < n; i++){
        printf("%s \n", s[i]);
    }

    sort(s, n);

    printf("\n\nDanh sach ten sv sau khi sap xep tang dan:\n");
    for(int i = 0; i < n; i++){
        printf("%s \n", s[i]);
    }

    return 0;
}

void sort(char names[][31], int n){
    char temp[31];

    for(int i = 0; i < n-1; i++){
        for(int j = 0; j < n-i-1; j++){
            if(strcmp(names[j], names[j+1]) > 0){
                // doi cho names[j] va names[j+1]
                strcpy(temp, names[j]);
                strcpy(names[j], names[j+1]);
                strcpy(names[j+1], temp);
            }
        }
    }
}
