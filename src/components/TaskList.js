import { useEffect } from "react";
import { GoCheck, GoPencil } from "react-icons/go";
import { MdNotificationAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import userPhoto from "../assets/images/man.jpg";
import "../assets/styles/taskList.css";
import { getAllTasks } from "../redux/features/allTasks";
import { setEditTaskID } from "../redux/features/editTaskID";
import { handleEditToggle } from "../redux/features/showEdit";
import { formatDate } from "../utilities/helperFunctions";

const TaskList = () => {
  const dispatch = useDispatch();
  const showEdit = useSelector((state) => state?.showEdit?.value);
  const allTasks = useSelector((state) => state?.allTasks?.data);

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  return (
    <>
      {allTasks.map((data, index) => (
        <div key={index} className="list-card">
          <div className="details">
            <div className="image-box">
              <img alt="user" src={userPhoto} width="43px" />
            </div>
            <div className="data-box">
              <p className="task-item">{data.task_msg}</p>
              <p className="task-date">{formatDate(data.task_date)}</p>
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                dispatch(handleEditToggle(!showEdit));
                dispatch(setEditTaskID(data.id));
              }}
              className="edit-btn"
            >
              <GoPencil />
            </button>
            <button>
              <MdNotificationAdd />
            </button>
            <button>
              <GoCheck />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TaskList;
