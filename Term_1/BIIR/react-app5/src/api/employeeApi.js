const BASE_URL = "https://6a1454df6c7db8aac0544f8c.mockapi.io/api/Employee";

export function normalizeEmployee(emp) {
  return {
    id: String(emp.id),
    empID: emp.empID,
    name: (emp.name ?? emp.nane ?? "").toString(),
    yob: Number(emp.yob),
    position: emp.position,
    salary: Number(emp.salary),
  };
}

function employeePayload({ empID, name, yob, position, salary }) {
  return { empID, name, yob, position, salary };
}

export async function fetchEmployees() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to load employees.");
  }
  const data = await response.json();
  console.debug(data);
  return data.map(normalizeEmployee);
}

export async function createEmployee(employee) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employeePayload(employee)),
  });
  if (!response.ok) {
    throw new Error("Failed to create employee.");
  }
  return normalizeEmployee(await response.json());
}

export async function updateEmployee(employee) {
  const response = await fetch(`${BASE_URL}/${employee.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employeePayload(employee)),
  });
  if (!response.ok) {
    throw new Error("Failed to update employee.");
  }
  return normalizeEmployee(await response.json());
}

export async function deleteEmployee(id) {
  const response = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!response.ok) {
    throw new Error("Failed to delete employee.");
  }
}
