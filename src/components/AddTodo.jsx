import React, { useState } from 'react';

const AddToDo = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({});

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { text: newTodo, id: Date.now() }]);
            setNewTodo('');
        }
    };

    const handleEditTodo = (todo) => {
        setIsEditing(true);
        setCurrentTodo(todo);
        setNewTodo(todo.text);
    };

    const handleUpdateTodo = () => {
        setTodos(todos.map(todo => (todo.id === currentTodo.id ? { ...todo, text: newTodo } : todo)));
        setIsEditing(false);
        setNewTodo('');
        setCurrentTodo({});
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={isEditing ? handleUpdateTodo : handleAddTodo}>
                {isEditing ? 'Update' : 'Add'}
            </button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => handleEditTodo(todo)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddToDo;