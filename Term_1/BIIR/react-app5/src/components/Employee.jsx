import { Link } from 'react-router-dom'

export default function Employee({ employees, onDelete }) {
  return (
    <div>
      <h3>Employee List</h3>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Year of Birth</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan={6}>No employees yet.</td>
            </tr>
          ) : (
            employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.empID}</td>
                <td>{emp.name}</td>
                <td>{emp.yob}</td>
                <td>{emp.position}</td>
                <td>{Number(emp.salary).toLocaleString()}</td>
                <td className="actions">
                  <Link to={`/employees/${emp.id}/edit`} className="btn-link">
                    Edit
                  </Link>
                  <button
                    type="button"
                    className="danger"
                    onClick={() => onDelete(emp.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
