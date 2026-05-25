import * as Yup from 'yup'

export function getEmployeeValidationSchema() {
  const currentYear = new Date().getFullYear()
  const minYob = currentYear - 80
  const maxYob = currentYear - 18

  return Yup.object().shape({
    empID: Yup.string()
      .transform((value) => value?.trim())
      .required('Employee ID is required')
      .matches(
        /^E[0-9]{3}$/,
        "Employee ID must be 'E' followed by 3 digits (e.g. E001)",
      ),

    name: Yup.string()
      .transform((value) => value?.trim())
      .required('Name is required')
      .matches(
        /^[A-Za-z\s]{2,}$/,
        'Employee name must contain only letters and spaces and be at least 2 characters long.',
      ),

    yob: Yup.number()
      .typeError('Year of birth is required')
      .required('Year of birth is required')
      .integer('Year of birth must be a whole number')
      .min(
        minYob,
        `Birth year must be between ${minYob} and ${maxYob} (age 18–80)`,
      )
      .max(maxYob, 'Employee age must be between 18 and 80.'),

    position: Yup.string()
      .transform((value) => value?.trim())
      .required('Position is required')
      .min(2, 'Position must be at least 2 characters'),

    salary: Yup.number()
      .typeError('Salary is required')
      .required('Salary is required')
      .min(0, 'Salary must be at least 0'),
  })
}
