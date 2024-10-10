import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
//import MainView from "./components/mainview/MainView";
import Sidebar from "./components/sidebar/Sidebar";
import TestAPI from "./components/TestAPI";

function App() {

  return (
    <div className="relative">
      <Header />
      <Outlet />
      <Sidebar />
      <TestAPI />
    </div>
  );
}

export default App
