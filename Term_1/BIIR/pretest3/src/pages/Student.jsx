import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Add from './Add';

const formatGpa = (value, maxGpa) => maxGpa > 10 ? value.toLocaleString() : value.toFixed(1);

export default function Student({ students, onAddStudent, onRemoveStudent }) {
  const gpaValues = useMemo(() => students.map(student => student.gpa), [students]);
  const GPA_MIN = gpaValues.length ? Math.min(...gpaValues) : 0;
  const GPA_MAX = gpaValues.length ? Math.max(...gpaValues) : 10;
  const GPA_STEP = GPA_MAX > 10 ? 1000 : 0.1;

  const [searchTerm, setSearchTerm] = useState('');
  const [appliedSearchTerm, setAppliedSearchTerm] = useState('');
  const [minGpa, setMinGpa] = useState(GPA_MIN);
  const [maxGpa, setMaxGpa] = useState(GPA_MAX);
  const [appliedMinGpa, setAppliedMinGpa] = useState(GPA_MIN);
  const [appliedMaxGpa, setAppliedMaxGpa] = useState(GPA_MAX);
  const [searchParams, setSearchParams] = useSearchParams();
  const isAddModalOpen = searchParams.get('add') === 'true';

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesName = student.name
        .toLowerCase()
        .includes(appliedSearchTerm.toLowerCase());
      const matchesGpa =
        student.gpa >= appliedMinGpa && student.gpa <= appliedMaxGpa;

      return matchesName && matchesGpa;
    });
  }, [appliedMaxGpa, appliedMinGpa, appliedSearchTerm, students]);

  const handleNameSearch = () => {
    setAppliedSearchTerm(searchTerm);
  };

  const handleGpaSearch = () => {
    setAppliedMinGpa(minGpa);
    setAppliedMaxGpa(maxGpa);
  };

  const handleAddStudent = (student) => {
    onAddStudent(student);
    setSearchParams({});
  };

  const openAddModal = () => {
    setSearchParams({ add: 'true' });
  };

  const closeAddModal = () => {
    setSearchParams({});
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
      <div className="list-toolbar">
        <button className="counter" type="button" onClick={openAddModal}>
          Add Student
        </button>
      </div>

      <div className="search-row">
        <input className="text-input" type="text" placeholder="Search..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button className="counter" onClick={handleNameSearch}>Search</button>
      </div>
      {/* Search filter range by GPA */}
      <section className="gpa-filter" aria-label="Search filter range by GPA">
        <div className="gpa-filter__header">
          <div>
            <h3>GPA range</h3>
            <p>Filter students from {formatGpa(minGpa, GPA_MAX)} to {formatGpa(maxGpa, GPA_MAX)}</p>
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
                  <button className='counter' onClick={() => onRemoveStudent(student.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isAddModalOpen && (
        <div className="modal-backdrop" role="presentation">
          <section className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="addStudentTitle">
            <div className="modal-header">
              <h3 id="addStudentTitle">Add Student</h3>
              <button className="counter" type="button" onClick={closeAddModal}>
                Close
              </button>
            </div>
            <Add
              onAddStudent={handleAddStudent}
              onCancel={closeAddModal}
            />
          </section>
        </div>
      )}
    </div>
  )
}
