import { createContext, useContext, useState } from "react";

export const TodoContext = createContext();


// setup context  
// steps : 
// create context export 
// hoc component (provider)

// methods banaye
// add      => setTodos me spread operator use krke new object add ka structure
// update   => todos created hai unko map kr ek particular todo ko id se select krke nexwText update kr
// delete   => todos ko filter apply kiya hai jisse new array banega without that particular item

// custom hook banaya hai useTodos jo useContext ke jagah use krenge use context me hum main component ka name daalenge 


// HOC Component

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Learn Vue Js", completed: false },
  ]);

  //  Add To-Do

    // add to do component se text aake isme arrange hoga 
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  //  Update To-Do

  const updateTodo = (id, updatedText) => {
    setTodos(
      todos.map((todo) =>
        todo.id == id ? { ...todo, text: updatedText } : todo
      )
    );
  };

  //  Delete To-Do

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

// Custom Hook

export const useTodos = () => {
  return(useContext(TodoContext));
};
