import { useSelector } from "react-redux";
import "../assets/styles/dashboard.css";
import EditTaskForm from "../components/EditTaskForm";
import TaskForm from "../components/TaskForm";
import TaskHeader from "../components/TaskHeader";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  const showAdd = useSelector((state) => state?.showAdd.value);
  const showEdit = useSelector((state) => state?.showEdit.value);

  return (
    <div className="container">
      <aside className="vertical-sidebar"></aside>
      <main className="main">
        <div className="main-card">
          <TaskHeader />
          {!showAdd && !showEdit && <TaskList />}
          {showAdd && <TaskForm />}
          {showEdit && <EditTaskForm />}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
