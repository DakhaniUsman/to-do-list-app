import { TodoProvider } from "./components/context/ToDoContext";
import AddTodo from "./components/AddToDo";
import TodoList from "./components/ToDoList";
import "./App.css";

const App = () => {
  return (
    <TodoProvider>
      <div className="App">
        <div className="to-do-app">
          <h1>To-Do List</h1>
          <AddTodo />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;


// note: app arrow funtion create kr export kr

// sab cheez ko TodoProvider me daal kyuki wo context me jaake sab functionalities aajayege usme
// parent div bana aur app ke liye ek div bana 
// heading de and addTodo and TodoList import kr
