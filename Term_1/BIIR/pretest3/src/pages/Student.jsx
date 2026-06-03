import students from '../data/students.json';
import { useState } from 'react';

export default function Student() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudents, setFilteredStudents] = useState(students);

  const handleNameSearch = () => {
    const filtered = students.filter(student => student.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredStudents(filtered);
  };

  const [minGpa, setMinGpa] = useState(Math.min(...students.map(student => student.gpa)));
  const [maxGpa, setMaxGpa] = useState(Math.max(...students.map(student => student.gpa)));

  const handleGpaSearch = () => {
    const filtered = students.filter(student => student.gpa >= minGpa && student.gpa <= maxGpa);
    setFilteredStudents(filtered);
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button onClick={handleNameSearch}>Search</button>
      </div>
      {/* Search filter range by GPA */}
      <div>
        <input type="number" placeholder="Min GPA" value={minGpa} onChange={(e) => setMinGpa(Number(e.target.value))} />
        <input type="number" placeholder="Max GPA" value={maxGpa} onChange={(e) => setMaxGpa(Number(e.target.value))} />
        <button onClick={handleGpaSearch}>Search</button>
      </div>

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
            <tr>
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
  )
}
