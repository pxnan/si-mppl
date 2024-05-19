import React from "react";
import AdminLayout from "../../../layouts/AdminLayout";

const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 mb-4">
            <div className="card bg-base-200 shadow-md">
              <div className="card-body">
                <h2 className="card-title">Card 1</h2>
                <p>Some content here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
