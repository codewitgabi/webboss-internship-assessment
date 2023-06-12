/* Imports */
import CancelIcon from "../Assets/icons8-multiply-50.png";

function CancelBtn({ clickHandler }) {
  /*
   * Cancel button component
   */

  return (
    <img
      src={ CancelIcon }
      className="cancel-btn"
      alt="cancel"
      onClick={ () => clickHandler() }
    />
  );
}


export default CancelBtn;
