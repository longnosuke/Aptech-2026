import { useState } from "react";

export default function EmployeeEdit({ employee, onUpdate, onCancel }) {
  const [form, setForm] = useState({
    empID: employee.empID,
    name: employee.name,
    yob: String(employee.yob),
    position: employee.position,
    salary: String(employee.salary),
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdate({
      ...employee,
      empID: form.empID.trim(),
      name: form.name.trim(),
      yob: Number(form.yob),
      position: form.position.trim(),
      salary: Number(form.salary),
    });
  }

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <h3>Edit Employee</h3>

      {/* https://viblo.asia/p/react-form-validation-voi-formik-yup-maGK7Jgb5j2 */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee ID:</label>
          <input
            type="text"
            name="empID"
            value={form.empID}
            onChange={handleChange}
            pattern="^E[0-9]{3}$"
            title="Please enter a 3-digit employee ID starting with 'E'"
            readOnly
            required
          />
        </div>

        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Year of Birth:</label>
          <input
            type="number"
            name="yob"
            value={form.yob}
            onChange={handleChange}
            min="1900"
            max={currentYear - 15}
            required
          />
        </div>

        <div>
          <label>Position:</label>
          <input
            type="text"
            name="position"
            value={form.position}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Salary:</label>
          <input
            type="number"
            name="salary"
            value={form.salary}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
          />
        </div>

        <div className="form-actions">
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
