import { useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Employee from "./components/Employee";
import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeEdit from "./components/EmployeeEdit";
import Nav from "./components/Nav";
import { useEffect } from "react";

function EmployeeEditPage({ employees, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const employee = employees.find((emp) => emp.id === Number(id));

  if (!employee) {
    return <Navigate to="/employees" replace />;
  }

  return (
    <EmployeeEdit
      employee={employee}
      onUpdate={(data) => {
        onUpdate(data);
        navigate("/employees");
      }}
      onCancel={() => navigate("/employees")}
    />
  );
}

function App() {
  const mockAPIurl = "https://6a1454df6c7db8aac0544f8c.mockapi.io/api/";

  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  // Fetch employees from the API on component mount
  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch(`${mockAPIurl}/Employee`);
      const data = await response.json();
      setEmployees(data);
    };
    fetchEmployees();
  }, []);

  function nextId() {
    return employees.length
      ? Math.max(...employees.map((emp) => emp.id)) + 1
      : 1;
  }

  function handleCreate(data) {
    const duplicate = employees.some((emp) => emp.empID === data.empID);
    if (duplicate) {
      alert("Employee ID already exists.");
      return;
    }
    setEmployees((prev) => [...prev, { id: nextId(), ...data }]);
    navigate("/employees");
  }

  function handleUpdate(updated) {
    const duplicate = employees.some(
      (emp) => emp.empID === updated.empID && emp.id !== updated.id,
    );
    if (duplicate) {
      alert("Employee ID already exists.");
      return;
    }
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === updated.id ? updated : emp)),
    );
  }

  function handleDelete(id) {
    const emp = employees.find((e) => e.id === id);
    if (!emp) return;
    if (window.confirm(`Delete employee ${emp.name} (${emp.empID})?`)) {
      setEmployees((prev) => prev.filter((e) => e.id !== id));
    }
  }

  return (
    <div className="app">
      <header>
        <h1>Employee Management System</h1>
        <Nav />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/employees" replace />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/employees"
            element={<Employee employees={employees} onDelete={handleDelete} />}
          />
          <Route
            path="/employees/create"
            element={
              <EmployeeCreate
                onCreate={handleCreate}
                onCancel={() => navigate("/employees")}
              />
            }
          />
          <Route
            path="/employees/:id/edit"
            element={
              <EmployeeEditPage employees={employees} onUpdate={handleUpdate} />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
