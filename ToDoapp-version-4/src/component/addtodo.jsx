import { useRef} from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";

function Addtodo({ onNewitem }) {
  const todoNameElement = useRef();
  const tododateElement = useRef();

  const handleAddButton = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const tododate = tododateElement.current.value;
    todoNameElement.current.value = " ";
    tododateElement.current.value = " ";
    onNewitem(todoName, tododate);
  };

  return (
    <div className="conatiner">
      <form className="row" onSubmit={handleAddButton}>
        <div className="col-6">
          <div className="input-group mb-3">
            <input
              type="text"
              ref={todoNameElement}
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Enter your Text"
            />
          </div>
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={tododateElement}
            className="form-control"
            id="datepicker"
          />
        </div>
        <div className="col-2  ml-3">
          <button id="button" type="submit" className="btn btn-success">
            <MdOutlineAddShoppingCart />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Addtodo;
