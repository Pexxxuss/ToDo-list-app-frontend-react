const AddTaskForm = ({ newTask, setNewTask, addTaskHandler }) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button onClick={addTaskHandler} className="btn btn-lg btn-success">
            Add New Task
          </button>
        </div>
      </div>
    </>
  );
};
export default AddTaskForm;
