import { useState } from "react";

function Addtodo({ onNewitem }) {
  const [todoName, settodoName] = useState();
  const [tododate, settododate] = useState();

  const handleNameChange = (event) => {
    settodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    settododate(event.target.value);
  };
  const handleAddButton = () => {
    onNewitem(todoName, tododate);
    settodoName("");
    settododate("");
  };

  return (
    <div className="conatiner  ">
      <div className="row">
        <div className="col-6">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              value={todoName}
              placeholder="Enter your Text"
              onChange={handleNameChange}
            />
          </div>
        </div>
        <div className="col-4">
          <input
            type="date"
            className="form-control"
            id="datepicker"
            value={tododate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2  ml-3">
          <button
            id="button"
            type="button"
            className="btn btn-success"
            onClick={handleAddButton}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
