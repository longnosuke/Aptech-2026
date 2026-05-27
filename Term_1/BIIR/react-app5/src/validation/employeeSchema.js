import * as Yup from "yup";

export function getEmployeeValidationSchema() {
  return Yup.object().shape({
    empID: Yup.string()
      .transform((value) => value?.trim())
      .required("Employee ID is required")
      .matches(
        /^empID [0-9]+$/,
        "Employee ID must be 'empID' followed by a number (e.g. empID 1)",
      ),

    name: Yup.string()
      .transform((value) => value?.trim())
      .required("Name is required")
      .matches(
        /^[A-Za-z\s]{2,}$/,
        "Employee full name must contain only letters and spaces",
      ),

    yob: Yup.number()
      .typeError("Year of birth is required")
      .required("Year of birth is required")
      .integer("Year of birth must be a whole number"),

    position: Yup.string()
      .transform((value) => value?.trim())
      .required("Position is required")
      .min(2, "Position must be at least 2 characters"),

    salary: Yup.number()
      .typeError("Salary is required")
      .required("Salary is required")
      .min(0, "Salary must be at least 0"),
  });
}
