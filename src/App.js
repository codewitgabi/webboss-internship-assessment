/* Imports */
import { useState, createContext } from "react";
import Nav from "./Components/Nav";
import Slab from "./Components/Slab";
import ModalBox from "./Components/Modal";

export const todoContext = createContext(null);


function TodoApp() {
  /*
   * Main App Component
   */

  const data = JSON.parse(localStorage.getItem("todos"));
  const init = data ? data : [];

  const [todos, setTodos] = useState(init);

  return (
    <todoContext.Provider value={{ todos, setTodos }} >
      <Nav />
      {
        todos.map(todo => {
          return (
            <Slab key={ todo.id } todo={ todo } />
          );
        })
      }
      <ModalBox />
    </todoContext.Provider>
  );
}


export default TodoApp;
