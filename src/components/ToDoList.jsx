import React from "react";
import { useTodos } from "./context/ToDoContext";
import TodoItem from "./ToDoItem";
import "./ToDoList.css"

const TodoList = () => {
  const { todos } = useTodos();

  return (
    <div className="to-do-list-container">
      {todos.length > 0 ? (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <p>Add some To-Dos.</p>
      )}
    </div>
  );
};

export default TodoList;

// note : agar todos ki length 0 hai toh print kro add some todos
// agar todos ki length > 0 hai toh todos ko map krke todoItem me daal do
// todoItem me key me todo ka id daal do as a prop
// todoItem me todo pass kro
