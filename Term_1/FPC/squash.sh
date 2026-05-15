output="output.md"
> "$output"

find . -type f -name "*.cpp" | sort | while read file; do
  filename=$(basename "$file" .cpp)

  {
    echo "# $filename"
    echo ""
    echo "_Source: $file_"
    echo ""
    echo '```cpp'
    cat "$file"
    echo '```'
    echo ""
  } >> "$output"

done

echo "✅ All files merged into $output"
