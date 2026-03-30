#!/bin/bash

echo "=== C Programming Exercises Test Suite ==="
echo ""

# Function to compile and test a program
test_program() {
    local folder=$1
    local filename=$2
    local test_input=$3
    local description=$4
    
    echo "Testing: $description"
    echo "File: $folder/$filename"
    
    # Compile
    gcc "$folder/$filename" -o temp_test 2>/dev/null
    if [ $? -ne 0 ]; then
        echo "❌ Compilation failed!"
        echo ""
        return 1
    fi
    
    # Run with test input
    echo "$test_input" | ./temp_test
    echo ""
    
    # Clean up
    rm -f temp_test
}

# Basic exercises
echo "--- BASIC EXERCISES ---"
test_program "1. Co ban" "hoan_doi_2_so.cpp" "5\n10\n" "Swap two numbers"
test_program "1. Co ban" "in_ma_ascii.cpp" "A\n" "Print ASCII code"
test_program "1. Co ban" "dien_tich_mat_tru.cpp" "3\n5\n" "Cylinder surface area"
test_program "1. Co ban" "the_tich_tru.cpp" "3\n5\n" "Cylinder volume"
test_program "1. Co ban" "dien_tich_mat_lap_phuong.cpp" "4\n" "Cube surface area"
test_program "1. Co ban" "the_tich_lap_phuong.cpp" "4\n" "Cube volume"
test_program "1. Co ban" "chuyen_doi_nhiet_do.cpp" "1\n25\n" "Temperature conversion C->F"
test_program "1. Co ban" "chuyen_doi_ngoai_te.cpp" "3\n23000\n23000\n" "Currency conversion VND->USD"

# Conditional exercises
echo "--- CONDITIONAL EXERCISES ---"
test_program "2. Dieu kien" "so_ngay_toi_da.cpp" "2\n2024\n" "Days in month (leap year)"
test_program "2. Dieu kien" "so_lon_nho_nhat.cpp" "15\n7\n23\n" "Find max/min of 3 numbers"
test_program "2. Dieu kien" "kiem_tra_tam_giac.cpp" "3\n4\n5\n" "Check triangle sides"
test_program "2. Dieu kien" "kiem_tra_tam_giac_vuong.cpp" "3\n4\n5\n" "Check right triangle"
test_program "2. Dieu kien" "dien_tich_tam_giac.cpp" "3\n4\n5\n" "Triangle area with 3 sides"
test_program "2. Dieu kien" "phuong_trinh_bac_2.cpp" "1\n-5\n6\n" "Solve quadratic equation"
test_program "2. Dieu kien" "kiem_tra_so_chinh_phuong.cpp" "16\n" "Check perfect square"
test_program "2. Dieu kien" "doi_chu_thuong_hoa.cpp" "a\n" "Convert letter case"

# Loop exercises
echo "--- LOOP EXERCISES ---"
test_program "3. Vong lap" "bang_cuu_chuong.cpp" "7\n" "Multiplication table"
test_program "3. Vong lap" "giai_thua.cpp" "5\n" "Factorial"
test_program "3. Vong lap" "kiem_tra_so_hoan_hao.cpp" "6\n" "Check perfect number"
test_program "3. Vong lap" "10_so_chinh_phuong.cpp" "" "First 10 perfect squares"
test_program "3. Vong lap" "10_bo_so_pithagore.cpp" "" "First 10 Pythagorean triples"
test_program "3. Vong lap" "kiem_tra_so_nguyen_to.cpp" "17\n" "Check prime number"
test_program "3. Vong lap" "10_so_nguyen_to.cpp" "" "First 10 prime numbers"
test_program "3. Vong lap" "giai_thua_cach.cpp" "6\n" "Alternative factorial"

# Array exercises
echo "--- ARRAY EXERCISES ---"
test_program "4. Mang" "max_min_binh_quan.cpp" "5\n10\n25\n5\n30\n15\n" "Array max/min/average"
test_program "4. Mang" "dem_so_chan.cpp" "5\n1\n2\n3\n4\n5\n" "Count even numbers"
test_program "4. Mang" "kiem_tra_mang_chan.cpp" "3\n2\n4\n6\n" "Check even array"
test_program "4. Mang" "dem_so_lan_xuat_hien.cpp" "4\n1\n2\n3\n2\n2\n" "Count occurrences"
test_program "4. Mang" "dem_uoc_so.cpp" "4\n1\n2\n3\n6\n12\n" "Find divisors"
test_program "4. Mang" "dem_boi_so.cpp" "4\n6\n12\n18\n25\n6\n" "Find multiples"
test_program "4. Mang" "dem_uoc_so_le.cpp" "4\n1\n3\n5\n15\n30\n" "Find odd divisors"
test_program "4. Mang" "sap_xep_giam_dan.cpp" "5\n3\n1\n4\n2\n5\n" "Sort descending"
test_program "4. Mang" "sap_xep_tang_dan.cpp" "5\n3\n1\n4\n2\n5\n" "Sort ascending"
test_program "4. Mang" "dem_uoc_so_co_dau.cpp" "4\n1\n2\n3\n6\n12\n" "Count divisors"

echo "=== Test Suite Complete ==="
