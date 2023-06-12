/* Imports */
import { useState, createContext, useEffect } from "react";
import Nav from "./Components/Nav";
import Slab from "./Components/Slab";
import ModalBox from "./Components/Modal";

export const todoContext = createContext(null);


function TodoApp() {
  /*
   * Main App Component
   */

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("todos"))
    const init = items ? items : [];

    setTodos(init)
  }, []);


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
