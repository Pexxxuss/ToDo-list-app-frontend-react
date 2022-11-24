const UpdateForm = ({
  updateData,
  changeTaskHandler,
  updateTaskHandler,
  cancelUpdateHandler,
}) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <input
            value={updateData && updateData.title}
            onChange={(e) => changeTaskHandler(e)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button
            onClick={updateTaskHandler}
            className="btn btn-lg btn-success mr-20"
          >
            Update Task
          </button>
          <button
            onClick={cancelUpdateHandler}
            className="btn btn-lg btn-warning"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};
export default UpdateForm;
