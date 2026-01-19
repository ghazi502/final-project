import { todoListData } from "../data/todoListData.js";

export function getAllTodoLists(req, res) {
  try {
    const data = todoListData;
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

export function createTodoList(req, res) {
  try {
    const data = req.body; // Expecting { title: "New Todo Title" }
    const newTodo = {
      id: todoListData.length + 1,
      title: data.title,
      completed: false,
    };
    todoListData.push(newTodo);

    res.status(201).json({ success: true, todo: newTodo }); // Return the newly created todo
  } catch (error) {
    console.error("Error creating todo list:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}
