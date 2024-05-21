import React from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import { Link } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";

const ListMakanan = () => {
  const id = "1";
  return (
    <AdminLayout>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">List Makanan</h1>
        <div className="flex flex-wrap -mx-4 pt-7">
          <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap w-full px-4 mb-4 justify-center">
            <div className="card bg-base-200 shadow-md w-full">
              <div className="card-body flex  flex-col lg:flex-row justify-between">
                <h2 className="card-title flex justify-center lg:justify-normal">Judul makanan</h2>
                <div className="flex gap-4 justify-center mt-5 lg:mt-0">
                  <Link
                    to={`/dashboard/editmakanan/${id}`}
                    className="btn bg-base-300 w-2/4"
                  >
                    <FaEdit size={"20px"}/>
                  </Link>
                  <button className="btn bg-base-300 w-2/4">
                    <FaTrash size={"20px"}/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ListMakanan;
