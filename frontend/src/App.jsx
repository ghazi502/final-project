import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const fetchTodos = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3100/todo-lists/get-all",
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleAddTodo = async (newTodo) => {
    try {
      const response = await axios.post(
        "http://localhost:3100/todo-lists/create",
        newTodo,
      );
      fetchTodos();
      setNewTodoTitle("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todo List APP</h1>
      <input
        type="text"
        placeholder="Add todo"
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
      />
      <button onClick={() => handleAddTodo({ title: newTodoTitle })}>
        Add
      </button>
      <br />
      <br />

      {data && data.data && data.data.length > 0 ? (
        data.data.map((todo) => (
          <div key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </span>
            | <span>{todo.completed ? "Completed" : "Pending"}</span>
          </div>
        ))
      ) : (
        <p>No todos available</p>
      )}
    </div>
  );
}

export default App;
