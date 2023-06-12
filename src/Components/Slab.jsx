/* Imports */
import { useContext} from "react";
import CancelBtn from "./CancelButton";
import { todoContext } from "../App";


function Slab({ todo }) {
  /*
   * Todo task display component
   */

  const { todos, setTodos } = useContext(todoContext);

  const setStatus = (e) => {
    const newTodo = todos.filter(td => {
      if (td.id === todo.id) {
        td.completed = e.target.checked;
      }
      return td;
    });

    localStorage.setItem("todos", JSON.stringify(newTodo));
    setTodos(newTodo);
  };

  const removeSlab = () => {
    const filteredTodos = todos.filter(td => todo.id !== td.id);

    localStorage.setItem("todos", JSON.stringify(filteredTodos));
    setTodos(filteredTodos);
  };

  return (
    <div className="slab">
      <legend className="title">{ todo.title }</legend>
      <p className="detail">{ todo.description }</p>
      <div className="status">
        <input type="checkbox" onClick={ setStatus } checked={ todo.completed } />
        <span>{ todo.completed ? "COMPLETED" : "NOT COMPLETED" }</span>
      </div>
      <CancelBtn clickHandler={ removeSlab } />
    </div>
  );
}


export default Slab;
