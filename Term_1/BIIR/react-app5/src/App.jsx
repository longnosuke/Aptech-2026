import { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import {
  createEmployee,
  deleteEmployee,
  fetchEmployees,
  updateEmployee,
} from "./api/employeeApi";
import About from "./components/About";
import Employee from "./components/Employee";
import EmployeeCreate from "./components/EmployeeCreate";
import EmployeeEdit from "./components/EmployeeEdit";
import Nav from "./components/Nav";

const toastOptions = {
  style: {
    background: "var(--code-bg)",
    border: "1px solid var(--border)",
    color: "var(--text-h)",
  },
  success: {
    duration: 2500,
  },
  error: {
    duration: 4000,
  },
};

function getErrorMessage(err) {
  return err instanceof Error ? err.message : "Something went wrong.";
}

function confirmDeleteEmployee(emp) {
  return new Promise((resolve) => {
    toast(
      (t) => (
        <div className="toast-confirm">
          <p>
            Delete employee {emp.name} ({emp.empID})?
          </p>
          <div className="toast-actions">
            <button
              type="button"
              onClick={() => {
                toast.dismiss(t.id);
                resolve(false);
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              className="toast-danger"
              onClick={() => {
                toast.dismiss(t.id);
                resolve(true);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ),
      { duration: Infinity },
    );
  });
}

function EmployeeEditPage({ employees, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const employee = employees.find((emp) => String(emp.id) === String(id));

  if (!employee) {
    return <Navigate to="/employees" replace />;
  }

  return (
    <EmployeeEdit
      employee={employee}
      onUpdate={async (data) => {
        const ok = await onUpdate(data);
        if (ok) {
          navigate("/employees");
        }
      }}
      onCancel={() => navigate("/employees")}
    />
  );
}

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;

    async function loadEmployees() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchEmployees();
        if (!cancelled) {
          setEmployees(data);
        }
      } catch (err) {
        if (!cancelled) {
          const message = getErrorMessage(err);
          setError(message);
          toast.error(message, { id: "employees-load-error" });
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadEmployees();
    return () => {
      cancelled = true;
    };
  }, []);

  async function handleCreate(data) {
    const duplicate = employees.some((emp) => emp.empID === data.empID);
    if (duplicate) {
      toast.error("Employee ID already exists.", {
        id: "employee-id-duplicate",
      });
      return;
    }

    try {
      const created = await createEmployee(data);
      setEmployees((prev) => [...prev, created]);
      navigate("/employees");
      toast.success("Employee created.");
    } catch (err) {
      toast.error(getErrorMessage(err));
    }
  }

  async function handleUpdate(updated) {
    const duplicate = employees.some(
      (emp) => emp.empID === updated.empID && emp.id !== updated.id,
    );
    if (duplicate) {
      toast.error("Employee ID already exists.", {
        id: "employee-id-duplicate",
      });
      return false;
    }

    try {
      const saved = await updateEmployee(updated);
      setEmployees((prev) =>
        prev.map((emp) => (emp.id === saved.id ? saved : emp)),
      );
      toast.success("Employee updated.");
      return true;
    } catch (err) {
      toast.error(getErrorMessage(err));
      return false;
    }
  }

  async function handleDelete(id) {
    const emp = employees.find((e) => String(e.id) === String(id));
    if (!emp) return;
    const confirmed = await confirmDeleteEmployee(emp);
    if (!confirmed) {
      return;
    }

    try {
      await deleteEmployee(id);
      setEmployees((prev) => prev.filter((e) => String(e.id) !== String(id)));
      toast.success("Employee deleted.");
    } catch (err) {
      toast.error(getErrorMessage(err));
    }
  }

  if (loading) {
    return (
      <div className="app">
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          toastOptions={toastOptions}
        />
        <header>
          <h1>Demo Api</h1>
          <Nav />
        </header>
        <main>
          <p>Loading employees…</p>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          toastOptions={toastOptions}
        />
        <header>
          <h1>Demo Api</h1>
          <Nav />
        </header>
        <main>
          <p className="error">{error}</p>
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={toastOptions}
      />
      <header>
        <h1>Demo Api</h1>
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
