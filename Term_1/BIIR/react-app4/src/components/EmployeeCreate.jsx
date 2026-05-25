import { useState } from "react";

const emptyForm = {
  empID: "",
  name: "",
  yob: "",
  position: "",
  salary: "",
};

export default function EmployeeCreate({ onCreate, onCancel }) {
  const [form, setForm] = useState(emptyForm);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onCreate({
      empID: form.empID.trim(),
      name: form.name.trim(),
      yob: Number(form.yob),
      position: form.position.trim(),
      salary: Number(form.salary),
    });
    setForm(emptyForm);
  }

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <h3>Create New Employee</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee ID:</label>
          <input
            type="text"
            name="empID"
            value={form.empID}
            onChange={handleChange}
            placeholder="Enter Employee ID"
            pattern="^E[0-9]{3}$"
            title="Please enter a 3-digit employee ID starting with 'E'"
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
          <button type="submit">Create</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
