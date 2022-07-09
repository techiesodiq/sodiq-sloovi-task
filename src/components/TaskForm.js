import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/taskForm.css";
import timeZoneData from "../data/time-zone.json";
import { getAddUser } from "../redux/features/addUser";
import { getAllTasks } from "../redux/features/allTasks";
import { handleAddToggle } from "../redux/features/showAdd";
import { getUserDetails } from "../redux/features/userDetails";
import {
  convertBooleanToInteger,
  convertStringToInteger,
  convertTimeToSeconds,
} from "../utilities/helperFunctions";

const DELAYED_TIME = 2000;

const TaskForm = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state?.userDetails?.data);
  const loading = useSelector((state) => state.addUser.loading);
  const showAdd = useSelector((state) => state.showAdd.value);
  const [formData, setFormData] = useState({
    task_msg: "",
    task_date: "",
    task_time: 0,
    is_completed: false,
    time_zone: 0,
    assigned_user: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };
  const handleCheck = () => {
    setFormData((values) => ({
      ...values,
      is_completed: !values.is_completed,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const modifiedFormData = {
      task_msg: formData.task_msg,
      task_date: formData.task_date,
      task_time: convertTimeToSeconds(formData.task_time),
      is_completed: convertBooleanToInteger(formData.is_completed),
      time_zone: convertStringToInteger(formData.time_zone),
      assigned_user: formData.assigned_user,
    };
    dispatch(getAddUser(modifiedFormData));
    dispatch(getAllTasks);
    setTimeout(() => {
      dispatch(handleAddToggle(!showAdd));
    }, DELAYED_TIME);
  };

  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <div className="task-description">
          <label>Task Description</label>
          <input
            required
            name="task_msg"
            type="text"
            placeholder="Your task message here"
            onChange={handleChange}
          />
        </div>

        <div className="date-and-time">
          <div className="date-time-col">
            <label>Date</label>
            <input
              required
              name="task_date"
              type="date"
              placeholder="04/06/2022"
              onChange={handleChange}
            />
          </div>
          <div className="date-time-col">
            <label>Time</label>
            <input
              required
              name="task_time"
              type="time"
              placeholder="Time"
              onChange={handleChange}
            />
          </div>

          <div className="date-time-col">
            <label>Time Zone</label>
            <select
              defaultValue="none"
              required
              name="time_zone"
              onChange={handleChange}
            >
              <option value="" hidden></option>
              {timeZoneData.map((data, index) => (
                <option key={index} value={data.value}>
                  {data.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="assign-user">
          <label>Assign User</label>
          <select
            defaultValue=""
            required
            name="assigned_user"
            onChange={handleChange}
          >
            <option value="" hidden></option>
            {userDetails.map((data, index) => (
              <option key={index} value={data.id}>
                {data.name}
              </option>
            ))}
          </select>
        </div>

        <div className="checkbox">
          <label>Done</label>
          <input
            type="checkbox"
            name="is_completed"
            value={formData.is_completed}
            onClick={handleCheck}
          ></input>
        </div>
      </div>
      <div className="form-btn">
        <button
          type="button"
          onClick={() => {
            dispatch(handleAddToggle(!showAdd));
          }}
          className="cancel-btn"
        >
          Cancel
        </button>
        <button type="submit" className="save-btn">
          {loading ? "Saving..." : " Save"}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
