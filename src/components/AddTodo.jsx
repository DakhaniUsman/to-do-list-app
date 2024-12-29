import React, { useState } from 'react'
import { useTodos } from './context/ToDoContext';
import "./AddToDo.css"

const AddTodo = () => {
    const {addTodo} = useTodos();  

    const [text, setText] = useState("");

    const handleAdd = () => {
        if (text.trim()){   // remove additonal space and prevent from empty text submission
            addTodo(text);  // click pe send text to addTodo
            setText("");    // after sending empty the input field
        }                   // 
    }

  return (
    <div className='add-to-container'>
        <input type="text" placeholder='Add your new task' value={text} onChange={(e)=> setText(e.target.value)}/>
        <button onClick={handleAdd}>+</button>
    </div>
  )
}

export default AddTodo;

// note : add to do search field rhega plus ek button 
// hume kya krna hai jo search filed me type hoga usko track krna hai and todo krke todo list ke todoItem me bhejna hai

