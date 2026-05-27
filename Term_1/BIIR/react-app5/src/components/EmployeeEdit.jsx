import { Form, Formik } from "formik";
import EmployeeFormFields from "./EmployeeFormFields";
import { getEmployeeValidationSchema } from "../validation/employeeSchema";

export default function EmployeeEdit({ employee, onUpdate, onCancel }) {
  const initialValues = {
    empID: employee.empID,
    name: employee.name,
    yob: employee.yob,
    position: employee.position,
    salary: employee.salary,
  };

  return (
    <div className="form-container">
      <h3>Edit Employee</h3>

      <Formik
        initialValues={initialValues}
        validationSchema={getEmployeeValidationSchema()}
        enableReinitialize
        onSubmit={(values) => {
          const updated = {
            ...employee,
            empID: values.empID.trim(),
            name: values.name.trim(),
            yob: Number(values.yob),
            position: values.position.trim(),
            salary: Number(values.salary),
          };
          console.log("cap nhat nhan vien:", updated);
          onUpdate(updated);
        }}
      >
        <Form>
          <EmployeeFormFields />

          <div className="form-actions">
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
