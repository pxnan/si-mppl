import React, { useState} from "react";
import SideBar from "../components/adminComponent/sideBar/SideBar";
import Topbar from "../components/adminComponent/topBar/TopBar";

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div
          className={`flex-1 flex flex-col transition-opacity duration-300 ${
            isSidebarOpen ? "opacity-100 md:opacity-100" : "opacity-100"
          }`}
        >
          <Topbar toggleSidebar={toggleSidebar} />
          <main className="flex-1 overflow-y-auto p-4">{children}</main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
