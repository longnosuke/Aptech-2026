#include <stdio.h>
#include <stdlib.h>

// Function to run a test
void runTest(const char* folder, const char* filename, const char* input, const char* description) {
    char command[200];
    printf("Testing: %s\n", description);
    printf("File: %s/%s\n", folder, filename);
    
    // Compile command
    sprintf(command, "gcc \"%s/%s\" -o temp_test 2>/dev/null", folder, filename);
    int result = system(command);
    
    if (result != 0) {
        printf("❌ Compilation failed!\n\n");
        return;
    }
    
    // Run with input
    sprintf(command, "echo '%s' | ./temp_test", input);
    system(command);
    
    // Clean up
    system("rm -f temp_test");
    printf("\n");
}

int main() {
    printf("=== C Programming Exercises Quick Test ===\n\n");
    
    // Test a few key exercises
    runTest("1. Co ban", "hoan_doi_2_so.cpp", "5\n10\n", "Swap two numbers");
    runTest("2. Dieu kien", "kiem_tra_so_nguyen_to.cpp", "17\n", "Check prime number");
    runTest("3. Vong lap", "giai_thua.cpp", "5\n", "Factorial calculation");
    runTest("4. Mang", "max_min_binh_quan.cpp", "3\n10\n25\n5\n30\n", "Array statistics");
    
    printf("=== Quick Test Complete ===\n");
    return 0;
}
