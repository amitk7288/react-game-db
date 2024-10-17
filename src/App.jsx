import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";


function App() {

  return (
    <div className="relative">
      <Header />
      <Outlet />
      <Sidebar />
    </div>
  );
}

export default App
