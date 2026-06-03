import students from '../data/students.json';
import { useState } from 'react';

const gpaValues = students.map(student => student.gpa);
const GPA_MIN = Math.min(...gpaValues);
const GPA_MAX = Math.max(...gpaValues);
const GPA_STEP = GPA_MAX > 10 ? 1000 : 0.1;
const formatGpa = (value) => GPA_MAX > 10 ? value.toLocaleString() : value.toFixed(1);

export default function Student() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudents, setFilteredStudents] = useState(students);

  const handleNameSearch = () => {
    const filtered = students.filter(student => student.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredStudents(filtered);
  };

  const [minGpa, setMinGpa] = useState(GPA_MIN);
  const [maxGpa, setMaxGpa] = useState(GPA_MAX);

  const handleGpaSearch = () => {
    const filtered = students.filter(student => student.gpa >= minGpa && student.gpa <= maxGpa);
    setFilteredStudents(filtered);
  };

  const updateMinGpa = (value) => {
    const nextValue = Number(value);
    setMinGpa(Math.min(nextValue, maxGpa));
  };

  const updateMaxGpa = (value) => {
    const nextValue = Number(value);
    setMaxGpa(Math.max(nextValue, minGpa));
  };

  return (
    <div className="student-page">
      <div className="search-row">
        <input className="text-input" type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button className="counter" onClick={handleNameSearch}>Search</button>
      </div>
      {/* Search filter range by GPA */}
      <section className="gpa-filter" aria-label="Search filter range by GPA">
        <div className="gpa-filter__header">
          <div>
            <h3>GPA range</h3>
            <p>Filter students from {formatGpa(minGpa)} to {formatGpa(maxGpa)}</p>
          </div>
          <button className="counter" onClick={handleGpaSearch}>Apply</button>
        </div>

        <div className="gpa-fields">
          <label>
            <span>Min GPA</span>
            <input type="number" min={GPA_MIN} max={GPA_MAX} step={GPA_STEP} value={minGpa} onChange={(e) => updateMinGpa(e.target.value)} />
          </label>
          <label>
            <span>Max GPA</span>
            <input type="number" min={GPA_MIN} max={GPA_MAX} step={GPA_STEP} value={maxGpa} onChange={(e) => updateMaxGpa(e.target.value)} />
          </label>
        </div>

        <div className="gpa-slider">
          <input type="range" min={GPA_MIN} max={GPA_MAX} step={GPA_STEP} value={minGpa} onChange={(e) => updateMinGpa(e.target.value)} aria-label="Minimum GPA" />
          <input type="range" min={GPA_MIN} max={GPA_MAX} step={GPA_STEP} value={maxGpa} onChange={(e) => updateMaxGpa(e.target.value)} aria-label="Maximum GPA" />
        </div>
      </section>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>GPA</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.department}</td>
                <td>{student.gpa}</td>
                <td className="actions">
                  <button className='counter' onClick={() => alert(`Edit student ${student.id}`)}>Edit</button>
                  <button className='counter' onClick={() => alert(`Delete student ${student.id}`)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
