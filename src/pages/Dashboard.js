import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../assets/styles/dashboard.css";
import TaskForm from "../components/TaskForm";
import TaskHeader from "../components/TaskHeader";
import TaskList from "../components/TaskList";

const BASE_URL = "https://stage.api.sloovi.com";
const COMPANY_ID = "company_413ef22b6237417fb1fba7917f0f69e7";
const ACCESS_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTY5MDY1NTMsIm5iZiI6MTY1NjkwNjU1MywianRpIjoiZmM3YWQzMjctMjEzMC00NzE0LWJiYTYtYjBhNmMzYTdhZmIyIiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1bmRhciBQaWNoYWkiLCJlbWFpbCI6InNtaXRod2lsbHMxOTg5QGdtYWlsLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzRlZTRjZjY3YWQ0NzRhMjc5ODhiYzBhZmI4NGNmNDcyIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9jZjk0Yjc0YmQ0MWI0NjZiYjE4NWJkNGQ2NzRmMDMyYj9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.eQfaiXYncvlMjvxKKCxgGO7_OwfTvrXBKhJCbiXN4mE";

let config = { Authorization: "Bearer " + ACCESS_TOKEN }; //3055f8f90fa44bbe8bda05385a20690a

const Dashboard = () => {
  const show = useSelector((state) => state.show.value);
  const [user, setUser] = useState(null);

  const getData = async () => {
    const userData = await axios.get(
      `${BASE_URL}/team?product=outreach&company_id=${COMPANY_ID}`,
      { headers: config }
    );

    const response = userData.data.results.data;
    if (response) {
      setUser(response);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
