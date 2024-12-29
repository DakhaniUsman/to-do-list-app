import React, { useState } from "react";
import { useTodos } from "./context/ToDoContext";
import "./ToDoItem.css";

const TodoItem = ({ todo }) => {
  const { updateTodo, deleteTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    if (newText.trim()) {
      updateTodo(todo.id, newText); // send current todo id and new updated text to updateTodo
      setIsEditing(false);
    }
  };

  return (
    <div className="to-do-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <div className="btns">
            <button onClick={handleUpdate}>✅</button>
            <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
          </div>
        </>
      ) : (
        <>
        
          <span>{todo.text}</span>
          <div className="btns">
            <button onClick={() => setIsEditing(true)}>✍️</button>
            <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;


// ye ek todo item hai yaha 4 things honge
// first is todo ko display krna jo span me todo.text as a variable aaya hai 
// second is edit krna  right me button hoga edit ka jo click krne pe setIsEditing tru hoga and wo span se input field bnjayega and isme edit kr na hai 
// third is edit ko save krna after editing save pe click krne par newText update hota hai jo updateTodo method se context me jaata hai and todo update hota hai  
// fourth is delete todo yaha button pe click krne pe deleteTodo method trigger hota hai jisme current id ko send krte hai and filter function ke through todos ka rray re create hota hai without that todo item