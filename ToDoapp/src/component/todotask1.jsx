function Todo() {
  return (
    <div id="row" className="row">
      <div className="col-6">
        <h4>BuyMilk</h4>
      </div>
      <div className="col-4">
        <h4>19/02/23</h4>
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}
export default Todo;
