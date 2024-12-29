import React from 'react';

const ToDoItem = ({ item, onToggle, onDelete }) => {
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={item.completed}
                onChange={() => onToggle(item.id)}
            />
            <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                {item.text}
            </span>
            <button onClick={() => onDelete(item.id)}>Delete</button>
        </div>
    );
};

export default ToDoItem;