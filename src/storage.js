export default function WriteStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

export function ReadStorage() {
  const todos = JSON.parse(localStorage.getItem("todos"));

  return todos ? todos : [];
}

