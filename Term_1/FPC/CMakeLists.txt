cmake_minimum_required(VERSION 4.2)
project(FPC)

set(CMAKE_CXX_STANDARD 14)

include_directories(.)

add_executable(FPC
        Day_1_Basic_of_C/helloworld.c
        Day_1_Basic_of_C/leapyear.c
        Day_2_Operator_Expression/add_three_number.cpp
        Day_2_Operator_Expression/d02_bitwise.cpp
        Day_2_Operator_Expression/d02_cast.cpp
        Day_2_Operator_Expression/d02_inc.cpp
        Day_2_Operator_Expression/evaluate_area_perimeter_rectangle.cpp
        Day_2_Operator_Expression/evaluate_net_salary.cpp
        Day_2_Operator_Expression/evaluate_the_expression.cpp
        Day_2_Operator_Expression/evaluate_volumne_cylinder.cpp
        Day_2_Operator_Expression_Lab/calculating_simple_interest.cpp
        Day_2_Operator_Expression_Lab/precendence_of_operators.cpp
        Day_2_Operator_Expression_Lab/tryityourself_1.cpp
        Day_2_Operator_Expression_Lab/tryityourself_2.cpp
        Day_2_Operator_Expression_Lab/tryityourself_3.cpp
        Day_2_Operator_Expression_Lab/tryityourself_4.cpp
        Day_2_Operator_Expression_Lab/tryityourself_5.cpp
        Day_2_Operator_Expression_Lab/using_arithmetic_operators.cpp
        Day_2_Operator_Expression_Lab/using_comparison_logiccal_operators.cpp
        Day_2_Operator_Expression_Lab/using_type_conversion.cpp
        Day_2_Variables_and_Datatypes/area_and_perimeter_of_a_circle.cpp
        Day_2_Variables_and_Datatypes/calculate_square_of_number.cpp
        Day_2_Variables_and_Datatypes/d02_var.cpp
        Day_2_Variables_and_Datatypes/display_salary_age.cpp
        Day_3_Condition_Lab/exercise_1.cpp
        Day_3_Condition_Lab/exercise_2.cpp
        Day_3_Condition_Lab/exercise_3.cpp
        Day_3_Input_Output/if_mark.cpp
        Day_3_Input_Output/if_mark_2.cpp
        Day_3_Input_Output/if_number.cpp
        Day_3_Input_Output/printf.cpp
        Day_3_Input_Output/printf2.cpp
        Day_3_Input_Output/scanf.cpp
        Day_3_Input_Output/switch_case.cpp
        Day_4_Array/array.cpp
        Day_4_Array/homework.cpp
        Day_4_Array/string.cpp
        Day_4_Array/string2.cpp
        Day_4_Loop/factorial.cpp
        Day_4_Loop/for.cpp
        Day_4_Loop/for_for.cpp
        Day_4_Loop/tryityourself_1.cpp
        Day_4_Loop/tryityourself_2.cpp
        Day_4_Loop/tryityourself_3.cpp
        Day_4_Loop/tryityourself_4.cpp
        Day_4_Loop/tryityourself_5.cpp
        Day_4_Loop/while.cpp
        Day_4_Loop_Lab/find_factorial.cpp
        Day_4_Loop_Lab/tryityourself1.cpp
        Day_4_Loop_Lab/tryityourself2.cpp
        Day_4_Loop_Lab/tryityourself3.cpp
        Day_5_Pointer/pointer.cpp
        Day_6_Function/function_demo.cpp
        Day_6_Function/function_demo_2.cpp
        Day_6_Function/function_demo_3.cpp
        "exam_preparation/1. Co ban/chuyen_doi_ngoai_te.cpp"
        "exam_preparation/1. Co ban/chuyen_doi_nhiet_do.cpp"
        "exam_preparation/1. Co ban/dien_tich_mat_lap_phuong.cpp"
        "exam_preparation/1. Co ban/dien_tich_mat_tru.cpp"
        "exam_preparation/1. Co ban/hoan_doi_2_so.cpp"
        "exam_preparation/1. Co ban/in_ma_ascii.cpp"
        "exam_preparation/1. Co ban/the_tich_lap_phuong.cpp"
        "exam_preparation/1. Co ban/the_tich_tru.cpp"
        "exam_preparation/2. Dieu kien/dien_tich_tam_giac.cpp"
        "exam_preparation/2. Dieu kien/doi_chu_thuong_hoa.cpp"
        "exam_preparation/2. Dieu kien/kiem_tra_so_chinh_phuong.cpp"
        "exam_preparation/2. Dieu kien/kiem_tra_tam_giac.cpp"
        "exam_preparation/2. Dieu kien/kiem_tra_tam_giac_vuong.cpp"
        "exam_preparation/2. Dieu kien/phuong_trinh_bac_2.cpp"
        "exam_preparation/2. Dieu kien/so_lon_nho_nhat.cpp"
        "exam_preparation/2. Dieu kien/so_ngay_toi_da.cpp"
        "exam_preparation/3. Vong lap/10_bo_so_pithagore.cpp"
        "exam_preparation/3. Vong lap/10_so_chinh_phuong.cpp"
        "exam_preparation/3. Vong lap/10_so_nguyen_to.cpp"
        "exam_preparation/3. Vong lap/bang_cuu_chuong.cpp"
        "exam_preparation/3. Vong lap/giai_thua.cpp"
        "exam_preparation/3. Vong lap/giai_thua_cach.cpp"
        "exam_preparation/3. Vong lap/kiem_tra_so_hoan_hao.cpp"
        "exam_preparation/3. Vong lap/kiem_tra_so_nguyen_to.cpp"
        "exam_preparation/4. Mang/dem_boi_so.cpp"
        "exam_preparation/4. Mang/dem_so_chan.cpp"
        "exam_preparation/4. Mang/dem_so_lan_xuat_hien.cpp"
        "exam_preparation/4. Mang/dem_uoc_so.cpp"
        "exam_preparation/4. Mang/dem_uoc_so_co_dau.cpp"
        "exam_preparation/4. Mang/dem_uoc_so_le.cpp"
        "exam_preparation/4. Mang/kiem_tra_mang_chan.cpp"
        "exam_preparation/4. Mang/max_min_binh_quan.cpp"
        "exam_preparation/4. Mang/sap_xep_giam_dan.cpp"
        "exam_preparation/4. Mang/sap_xep_tang_dan.cpp"
        exam_preparation/quick_test.cpp)
