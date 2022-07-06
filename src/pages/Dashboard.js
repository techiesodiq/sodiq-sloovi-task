import { useSelector } from "react-redux";
import "../assets/styles/dashboard.css";
import TaskForm from "../components/TaskForm";
import TaskHeader from "../components/TaskHeader";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  const show = useSelector((state) => state.show.value);

  return (
    <div className="container">
      <aside className="vertical-sidebar"></aside>
      <main className="main">
        <div className="main-card">
          <TaskHeader />
          <TaskList />
          {show && <TaskForm />}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
