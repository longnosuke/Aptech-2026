import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
        About
      </NavLink>
      <NavLink
        to="/employees"
        end
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Employee List
      </NavLink>
      <NavLink
        to="/employees/create"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Create Employee
      </NavLink>
    </nav>
  )
}
