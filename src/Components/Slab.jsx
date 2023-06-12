/* Imports */
import { useState, useContext} from "react";
import CancelBtn from "./CancelButton";
import { todoContext } from "../App";


function Slab({ todo }) {
  /*
   * Todo task display component
   */

  const [todoStatus, setTodoStatus] = useState(false);
  const { todos, setTodos } = useContext(todoContext);

  const setStatus = (e) => {
    setTodoStatus(e.target.checked);
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
        <input type="checkbox" onClick={ setStatus } />
        <span>{ todoStatus ? "COMPLETED" : "NOT COMPLETED" }</span>
      </div>
      <CancelBtn clickHandler={ removeSlab } />
    </div>
  );
}


export default Slab;
