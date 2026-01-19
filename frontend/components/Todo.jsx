import { useState } from "react";

const Todo = ({ id, title, completed: initialCompleted }) => {
  const [completed, setCompleted] = useState(initialCompleted);
  const [loading, setLoading] = useState(false);

  const handleComplete = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:3100/todo-lists/toggle-completed/${id}`,
        {
          method: "put",
        },
      );
      if (res.ok) {
        const data = await res.json();
        setCompleted(data.todo.completed);
      }
    } catch (e) {
      // Optionally handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {title}
      </span>
      <button
        onClick={handleComplete}
        disabled={loading}
        style={{ marginLeft: 8 }}
      >
        {completed ? "Mark as Uncompleted" : "Mark as Completed"}
      </button>
    </div>
  );
};

export default Todo;
