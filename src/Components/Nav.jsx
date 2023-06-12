/* Imports */
import PlusIcon from "../Assets/icons8-plus.svg";


function Nav() {
  /*
   * App's Nav component
   **/

  const showModal = () => {
    document.getElementById("modal").classList.remove("hide");
  };

  return (
    <nav>
      <h2 className="logo">InternTo</h2>
      <button id="add-task-btn" onClick={ showModal }>
        <img
          className="plus-icon"
          src={ PlusIcon }
          alt="plus"
        />
        <span>New Task</span>
      </button>
    </nav>
  );
}


export default Nav;
