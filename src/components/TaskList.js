import { GoCheck, GoPencil } from "react-icons/go";
import { MdNotificationAdd } from "react-icons/md";
import userPhoto from "../assets/images/man.jpg";
import "../assets/styles/taskList.css";

const TaskList = () => {
  return (
    <div className="list-card">
      <div className="details">
        <div className="image-box">
          <img alt="user" src={userPhoto} width="43px" />
        </div>
        <div className="data-box">
          <p className="task-item">Follow up</p>
          <p className="task-date">2/4/2020</p>
        </div>
      </div>
      <div>
        <button className="edit-btn">
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
  );
};

export default TaskList;
