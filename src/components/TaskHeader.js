import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/taskHeader.css";
import { handleAddToggle } from "../redux/features/showAdd";

const TaskHeader = () => {
  const dispatch = useDispatch();
  const showAdd = useSelector((state) => state.showAdd.value);
  const allTasks = useSelector((state) => state.allTasks.data);

  return (
    <header>
      <p className="task-count">TASKS {allTasks.length}</p>
      <button
        onClick={() => {
          dispatch(handleAddToggle(!showAdd));
        }}
        className="add-task"
      >
        <FaPlus />
      </button>
    </header>
  );
};

export default TaskHeader;
