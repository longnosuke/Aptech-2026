import { Form, Formik } from 'formik'
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
  return (
    <div className="form-container">
      <h3>Create New Employee</h3>

      <Formik
        initialValues={emptyValues}
        validationSchema={getEmployeeValidationSchema()}
        onSubmit={(values, { resetForm }) => {
          const newEmployee = {
            empID: values.empID.trim(),
            name: values.name.trim(),
            yob: Number(values.yob),
            position: values.position.trim(),
            salary: Number(values.salary),
          }
          console.log('nhan vien moi:', newEmployee)
          onCreate(newEmployee)
          resetForm()
        }}
      >
        <Form>
          <EmployeeFormFields />

          <div className="form-actions">
            <button type="submit">Create</button>
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}
