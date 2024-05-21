import React from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <div className="flex flex-wrap -mx-4 pt-7">
          <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap w-full px-4 mb-4 justify-center">
            <Link
              to={"/dashboard/listmakanan"}
              className="card bg-base-200 shadow-md w-full lg:w-5/12"
            >
              <div className="card-body p-0 flex flex-row">
                <h2 className="card-title w-3/5 pl-10">Makanan</h2>
                <div className="flex justify-center items-center bg-base-300 rounded-r-2xl w-2/5 h-12 p-9 py-16">
                  <h2 className="text-5xl font-bold">10</h2>
                </div>
              </div>
            </Link>
            <Link
              to={"/dashboard/listjajanan"}
              className="card bg-base-200 shadow-md w-full lg:w-5/12"
            >
              <div className="card-body p-0 flex flex-row">
                <h2 className="card-title w-3/5 pl-10">Jajanan</h2>
                <div className="flex justify-center items-center bg-base-300 rounded-r-2xl w-2/5 h-12 p-9 py-16">
                  <h2 className="text-5xl font-bold">15</h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
