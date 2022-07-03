import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/taskHeader.css";
import { handlePlus } from "../features/show";

const TaskHeader = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.show.value);
  return (
    <header>
      <p className="task-count">TASKS 0</p>
      <button onClick={dispatch(handlePlus(!show))} className="add-task">
        <FaPlus />
      </button>
    </header>
  );
};

export default TaskHeader;
