import { useState } from 'react'

const defaultForm = {
  name: '',
  department: '',
  gpa: '',
}

export default function Add({ onAddStudent, onCancel }) {
  const [form, setForm] = useState(defaultForm)

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const student = {
      name: form.name.trim(),
      department: form.department.trim(),
      gpa: Number(form.gpa),
    }

    if (!student.name || !student.department || Number.isNaN(student.gpa)) {
      return
    }

    onAddStudent(student)
    setForm(defaultForm)
  }

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={updateField}
          required
        />
      </label>

      <label>
        <span>Department</span>
        <input
          type="text"
          name="department"
          value={form.department}
          onChange={updateField}
          required
        />
      </label>

      <label>
        <span>GPA</span>
        <input
          type="number"
          name="gpa"
          min="0"
          step="0.1"
          value={form.gpa}
          onChange={updateField}
          required
        />
      </label>

      <div className="form-actions">
        <button className="counter" type="submit">
          Add
        </button>
        <button className="counter" type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  )
}
