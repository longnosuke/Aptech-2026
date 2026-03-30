#!/bin/bash

echo "=== Compiling All C Programs ==="
echo ""

# Function to compile a program
compile_program() {
    local folder=$1
    local filename=$2
    local program_name=$(basename "$filename" .cpp)
    
    echo "Compiling: $folder/$filename"
    gcc "$folder/$filename" -o "$folder/$program_name" 2>"$folder/$program_name.errors"
    
    if [ $? -eq 0 ]; then
        echo "✅ Success: $folder/$program_name"
        rm -f "$folder/$program_name.errors"
    else
        echo "❌ Failed: $folder/$program_name"
        echo "Errors saved in: $folder/$program_name.errors"
    fi
    echo ""
}

# Find and compile all .cpp files
find . -name "*.cpp" | while read file; do
    folder=$(dirname "$file")
    filename=$(basename "$file")
    compile_program "$folder" "$filename"
done

echo "=== Compilation Complete ==="
echo ""
echo "To run individual programs:"
echo "  ./1.\\ Co\\ ban/hoan_doi_2_so"
echo "  ./2.\\ Dieu\\ kien/kiem_tra_so_nguyen_to"
echo "  ./3.\\ Vong\\ lap/giai_thua"
echo "  ./4.\\ Mang/max_min_binh_quan"
echo ""
echo "To run full test suite:"
echo "  ./test_all.sh"
