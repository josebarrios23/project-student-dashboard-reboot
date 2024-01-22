const URL = import.meta.env.VITE_BASE_API_URL;

export function getAllStudents() {
  return fetch(`${URL}/students`).then((res) => res.json());
}

export function getOneStudent(id) {
  return fetch(`${URL}/students/${id}`).then((res) => res.json());
}