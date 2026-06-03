import { Link, Route, Routes } from 'react-router-dom'
import Student from './pages/Student'
import About from './pages/About'
import Add from './pages/Add'


import './App.css'

function App() {
  return (
    <>
      <h2>Danh sach Sinh Vien</h2>
      <nav className='actions'>
        <Link className='counter' to="/">Danh sach</Link>
        <Link className='counter' to="/about">About</Link>
        <Link className='counter' to="/add">Them moi</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Student />} />
        <Route path="/about" element={<About />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  )
}

export default App
