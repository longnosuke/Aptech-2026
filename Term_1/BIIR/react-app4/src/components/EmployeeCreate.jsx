import { useFormik } from 'formik'
import EmployeeFormFields from './EmployeeFormFields'
import { getEmployeeValidationSchema } from '../validation/employeeSchema'

const emptyValues = {
  empID: '',
  name: '',
  yob: '',
  position: '',
  salary: '',
}

export default function EmployeeCreate({ onCreate, onCancel }) {
  const formik = useFormik({
    initialValues: emptyValues,
    validationSchema: getEmployeeValidationSchema(),
    onSubmit: (values) => {
      const newEmployee = {
        empID: values.empID.trim(),
        name: values.name.trim(),
        yob: Number(values.yob),
        position: values.position.trim(),
        salary: Number(values.salary),
      }
      console.log('nhan vien moi:', newEmployee)
      onCreate(newEmployee)
      formik.resetForm()
    },
  })

  return (
    <div className="form-container">
      <h3>Create New Employee</h3>

      <form onSubmit={formik.handleSubmit}>
        <EmployeeFormFields formik={formik} />

        <div className="form-actions">
          <button type="submit">Create</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
