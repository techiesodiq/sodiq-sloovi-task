import { useEffect, useState } from "react";
import { GoTrashcan } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/taskForm.css";
import timeZoneData from "../data/time-zone.json";
import { getAllTasks } from "../redux/features/allTasks";
import { getDeleteUser } from "../redux/features/deleteUser";
import { getEditUser } from "../redux/features/editUser";
import { handleEditToggle } from "../redux/features/showEdit";
import { getSingleTask } from "../redux/features/singleTask";
import { getUserDetails } from "../redux/features/userDetails";
import {
  convertBooleanToInteger,
  convertIntegerToBoolean,
  convertIntegerToString,
  convertSecondsToTime,
  convertStringToInteger,
  convertTimeToSeconds,
} from "../utilities/helperFunctions";

const EditTaskForm = () => {
  const dispatch = useDispatch();
  const showEdit = useSelector((state) => state.showEdit.value);
  const editTaskID = useSelector((state) => state.editTaskID.value);
  const singleTask = useSelector((state) => state.singleTask.data);
  const userDetails = useSelector((state) => state.userDetails.data);
  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);
  console.log(userDetails);
  const [formData, setFormData] = useState({
    task_msg: "",
    task_date: "",
    task_time: 0,
    is_completed: false,
    time_zone: 0,
    assigned_user: "",
  });

  const handleDelete = () => {
    dispatch(getDeleteUser(singleTask.id));
    dispatch(getAllTasks());
    dispatch(handleEditToggle(!showEdit));
  };

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

  useEffect(() => {
    dispatch(getSingleTask(editTaskID));
  }, [editTaskID, dispatch]);

  useEffect(() => {
    if (singleTask?.task_msg) {
      setFormData({
        task_msg: singleTask.task_msg,
        task_date: singleTask.task_date,
        task_time: convertSecondsToTime(singleTask.task_time),
        is_completed: convertIntegerToBoolean(singleTask.is_completed),
        time_zone: convertIntegerToString(singleTask.time_zone),
        assigned_user: singleTask.assigned_user,
      });
    }
  }, [singleTask]);

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
    dispatch(getEditUser({ task_id: singleTask.id, task: modifiedFormData }));
    dispatch(getAllTasks());
    dispatch(handleEditToggle(!showEdit));
  };
  console.log(userDetails);
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div>
        <div className="task-description">
          <label>Task Description</label>
          <input
            name="task_msg"
            type="text"
            placeholder="Your task message here"
            onChange={handleChange}
            value={formData.task_msg}
          />
        </div>

        <div className="date-and-time">
          <div className="date-time-col">
            <label>Date</label>
            <input
              name="task_date"
              type="date"
              placeholder="04/06/2022"
              value={formData.task_date}
              onChange={handleChange}
            />
          </div>
          <div className="date-time-col">
            <label>Time</label>
            <input
              name="task_time"
              type="time"
              placeholder="Time"
              onChange={handleChange}
              value={formData.task_time}
            />
          </div>

          <div className="date-time-col">
            <label>Time Zone</label>
            <select name="time_zone" onChange={handleChange}>
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
            name="assigned_user"
            value={formData.assigned_user}
            onChange={handleChange}
          >
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
            onChange={handleChange}
            onClick={handleCheck}
          ></input>
        </div>
      </div>
      <div className="edit-form-btn">
        <button type="button" onClick={handleDelete} className="delete-btn">
          <GoTrashcan size={20} />
        </button>

        <div className="save-and-cancel">
          <button
            type="button"
            onClick={() => {
              dispatch(handleEditToggle(!showEdit));
            }}
            className="cancel-btn"
          >
            Cancel
          </button>
          <button type="submit" className="save-btn">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditTaskForm;
