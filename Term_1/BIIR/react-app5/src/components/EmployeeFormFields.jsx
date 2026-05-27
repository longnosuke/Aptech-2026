import { ErrorMessage, Field } from "formik";

export default function EmployeeFormFields() {
  return (
    <>
      <div className="input-group">
        <label htmlFor="empID">Employee ID:</label>
        <Field
          id="empID"
          type="text"
          name="empID"
          placeholder="Enter Employee ID (e.g. E004)"
        />
        <ErrorMessage name="empID" component="div" className="error" />
      </div>

      <div className="input-group">
        <label htmlFor="name">Name:</label>
        <Field
          id="name"
          type="text"
          name="name"
        />
        <ErrorMessage name="name" component="div" className="error" />
      </div>

      <div className="input-group">
        <label htmlFor="yob">Year of Birth:</label>
        <Field
          id="yob"
          type="number"
          name="yob"
        />
        <ErrorMessage name="yob" component="div" className="error" />
      </div>

      <div className="input-group">
        <label htmlFor="position">Position:</label>
        <Field
          id="position"
          type="text"
          name="position"
        />
        <ErrorMessage name="position" component="div" className="error" />
      </div>

      <div className="input-group">
        <label htmlFor="salary">Salary:</label>
        <Field
          id="salary"
          type="number"
          name="salary"
          min="0"
          step="0.01"
        />
        <ErrorMessage name="salary" component="div" className="error" />
      </div>
    </>
  );
}
