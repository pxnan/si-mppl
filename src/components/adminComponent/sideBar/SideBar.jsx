import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaListAlt,
  FaPlus,
  FaUtensils,
  FaCandyCane,
  FaUserPlus,
} from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";

const SideBar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const logOutHandler = () => {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("token");
    navigate('/login')
  };
  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0 w-64 bg-base-200 transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
        <ul className="menu p-0">
          <li className="mb-2">
            <Link
              to="/dashboard"
              className="flex items-center py-2 px-4 rounded hover:bg-base-300"
            >
              <FaTachometerAlt className="mr-2" />
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/dashboard/listmakanan"
              className="flex items-center py-2 px-4 rounded hover:bg-base-300"
            >
              <FaUtensils className="mr-2" />
              List Makanan
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/dashboard/listjajanan"
              className="flex items-center py-2 px-4 rounded hover:bg-base-300"
            >
              <FaCandyCane className="mr-2" />
              List Jajanan
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/dashboard/addmakanan"
              className="flex items-center py-2 px-4 rounded hover:bg-base-300"
            >
              <FaPlus className="mr-2" />
              Add Makanan
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/dashboard/addjajanan"
              className="flex items-center py-2 px-4 rounded hover:bg-base-300"
            >
              <FaPlus className="mr-2" />
              Add Jajanan
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/dashboard/addadmin"
              className="flex items-center py-2 px-4 rounded hover:bg-base-300"
            >
              <FaUserPlus className="mr-2" />
              Add Admin
            </Link>
          </li>
          <li>
            <button
              onClick={logOutHandler}
              className="flex items-center py-2 px-4 rounded hover:bg-base-300"
            >
              <TbLogout2 className="mr-2" />
              LogOut
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
