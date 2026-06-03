import { Link, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Student from './pages/Student'
import About from './pages/About'
import initialStudents from './data/students.json'


import './App.css'

function App() {
  const [students, setStudents] = useState(initialStudents)

  const handleAddStudent = (student) => {
    setStudents((currentStudents) => {
      const nextId = currentStudents.length
        ? Math.max(...currentStudents.map((item) => Number(item.id))) + 1
        : 1

      return [
        ...currentStudents,
        {
          ...student,
          id: nextId,
          empID: `E${String(nextId).padStart(3, '0')}`,
        },
      ]
    })
  }

  const handleRemoveStudent = (id) => {
    setStudents((currentStudents) =>
      currentStudents.filter((student) => String(student.id) !== String(id)),
    )
  }

  return (
    <>
      <h2>Danh sach Sinh Vien</h2>
      <nav className='actions'>
        <Link className='counter' to="/">Danh sach</Link>
        <Link className='counter' to="/about">About</Link>
        <Link className='counter' to="/?add=true">Them moi</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <Student
              students={students}
              onAddStudent={handleAddStudent}
              onRemoveStudent={handleRemoveStudent}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
