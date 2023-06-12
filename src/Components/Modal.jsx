/* Imports */
import { useContext } from "react";
import CancelBtn from "./CancelButton";
import { todoContext } from "../App";

function ModalBox() {
  /*
   * Todo Creation Form
   */

  const { todos, setTodos } = useContext(todoContext);


  const removeModal = () => {
    document.getElementById("modal").classList.add("hide");
    document.getElementById("todo-form").reset();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const description = form.description.value;
    const id = Date.now();
    
    const newTodo = [...todos, {id, title, description, completed: false}];

    setTodos(newTodo);
    localStorage.setItem("todos", JSON.stringify(newTodo));

    form.reset();
  };
  
  return (
    <div className="modal hide" id="modal">
      <form id="todo-form" onSubmit={ handleSubmit }>
        <label>Title <span className="required">*</span></label>
        <input
          type="text"
          id="title"
          name="title"
          required
          placeholder="Title..." />
        <label>Description <span className="required">*</span></label>
        <textarea
          name="description"
          placeholder="Description..."
          required>
        </textarea>

        <button
          type="submit"
          id="add-form-btn">
          ADD TASK
        </button>
      </form>
      
      <CancelBtn clickHandler={ removeModal } />
    </div>
  );
}


export default ModalBox;
