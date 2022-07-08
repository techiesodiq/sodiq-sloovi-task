import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <Dashboard />
      <ToastContainer />
    </div>
  );
}

export default App;
