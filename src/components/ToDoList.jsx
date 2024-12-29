import React, { useContext } from 'react';
import { ToDoContext } from '../context/ToDoContext';
import "./App.css";

const ToDoList = () => {
    const { todos, toggleTodo, deleteTodo } = useContext(ToDoContext);

    return (
        <div>
            <h2>To-Do List</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        {todo.text}
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;