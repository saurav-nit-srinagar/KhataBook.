import { MdDelete } from "react-icons/md";
function Todo({ itemName, itemdate, ondeleteKey }) {
  return (
    <div id="row" className="row">
      <div className="col-6">
        <h4>{itemName}</h4>
      </div>
      <div className="col-4">
        <h4>{itemdate}</h4>
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => ondeleteKey(itemName)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
export default Todo;
