function Addtodo() {
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
              placeholder="Enter your Text"
            />
          </div>
        </div>
        <div className="col-4">
          <input type="date" className="form-control" id="datepicker" />
        </div>
        <div className="col-2  ml-3">
          <button id="button" type="button" className="btn btn-success">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
