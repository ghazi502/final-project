import React from "react";
import Todo from "./Todo";

const TodoLists = ({ data = [] }) => {
  return (
    <div>
      {Array.isArray(data.data)
        ? data.data.map((todo) => <Todo key={todo.id} {...todo} />)
        : null}
    </div>
  );
};

export default TodoLists;
