export default function EmployeeFormFields({ formik, empIDReadOnly = false }) {
  return (
    <>
      <div className="input-group">
        <label>Employee ID:</label>
        <input
          type="text"
          name="empID"
          placeholder="Enter Employee ID (e.g. E004)"
          value={formik.values.empID}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          readOnly={empIDReadOnly}
        />
        {formik.touched.empID && formik.errors.empID && (
          <div className="error">{formik.errors.empID}</div>
        )}
      </div>

      <div className="input-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="error">{formik.errors.name}</div>
        )}
      </div>

      <div className="input-group">
        <label>Year of Birth:</label>
        <input
          type="number"
          name="yob"
          value={formik.values.yob}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.yob && formik.errors.yob && (
          <div className="error">{formik.errors.yob}</div>
        )}
      </div>

      <div className="input-group">
        <label>Position:</label>
        <input
          type="text"
          name="position"
          value={formik.values.position}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.position && formik.errors.position && (
          <div className="error">{formik.errors.position}</div>
        )}
      </div>

      <div className="input-group">
        <label>Salary:</label>
        <input
          type="number"
          name="salary"
          value={formik.values.salary}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          min="0"
          step="0.01"
        />
        {formik.touched.salary && formik.errors.salary && (
          <div className="error">{formik.errors.salary}</div>
        )}
      </div>
    </>
  )
}
