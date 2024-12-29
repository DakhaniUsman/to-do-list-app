import React, { createContext, useState } from 'react';

// Create Context
export const ToDoContext = createContext();

// Create a provider component
export const ToDoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <ToDoContext.Provider value={{ todos, addTodo, removeTodo }}>
            {children}
        </ToDoContext.Provider>
    );
};