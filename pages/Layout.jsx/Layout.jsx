import {useState} from "react";
import Sidebar from "../../components/sidebar/SideBar";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";

const Layout = () => {
  // const [isCollapsed, setIsCollapsed] = useState(false);

  // const toggleSidebar = () => {
  //   setIsCollapsed((prev) => !prev);
  // };
  return (
    <div className="h-screen flex flex-col">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="flex flex-grow overflow-hidden">
        <div className="w-64">
          <Sidebar />
        </div>
        <div className="flex-grow flex flex-col">
          <div className="">
            <Header />
          </div>
          <div className="flex-grow p-4 bg-gray-100 overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
