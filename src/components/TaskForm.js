import { useDispatch } from "react-redux";
import "../assets/styles/taskForm.css";
import { handleCancel } from "../features/show";

const TaskForm = () => {
  const dispatch = useDispatch();
  return (
    <form className="form">
      <div className="task-description">
        <label>Task Description</label>
        <input type="text" />
      </div>

      <div className="date-and-time">
        <div className="date-time-col">
          <label>Date</label>
          <input
            type="date"
            placeholder="04/06/2022"
            onfocus="(this.type='date')"
          />
        </div>
        <div className="date-time-col">
          <label>Time</label>
          <input type="time" placeholder="Time" />
        </div>
      </div>

      <div className="assign-user">
        <label>Assign User</label>
        <input type="text" />
      </div>
      <div className="form-btn">
        <button
          onClick={() => {
            dispatch(handleCancel(true));
          }}
          className="cancel-btn"
        >
          Cancel
        </button>
        <button className="save-btn">Save</button>
      </div>
    </form>
  );
};

export default TaskForm;