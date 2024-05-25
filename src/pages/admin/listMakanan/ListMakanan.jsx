import React, { useEffect, useState } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";
import axios from "axios";

const ListMakanan = () => {
  const [makananList, setMakananList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const id = sessionStorage.getItem("id");
    const email = sessionStorage.getItem("email");
    const token = sessionStorage.getItem("token");

    if (!token || !id || !email) {
      navigate("/login");
    } else {
      // Check if token is valid
      axios
        .post("http://localhost:5000/checkToken", { id, email, token })
        .then((response) => {
          if (response.data.payload.status_code === 200) {
            fetchMakanan();
          } else {
            navigate("/login");
          }
        })
        .catch((error) => {
          console.error("Error checking token:", error);
          navigate("/login");
        });
    }
  }, [navigate]);

  const fetchMakanan = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getAllMakanan");
      if (response.data.payload.status_code === 200) {
        setMakananList(response.data.payload.data);
      } else {
        console.error("Failed to fetch makanan data");
      }
    } catch (error) {
      console.error("Error fetching makanan data:", error);
    }
  };

  const deleteMakanan = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this makanan?");
    if (!confirmed) {
      return;
    }

    try {
      const response = await axios.delete(`http://localhost:5000/deleteMakanan/${id}`);
      if (response.data.payload.status_code === 200) {
        setMakananList(makananList.filter(makanan => makanan.id !== id));
      } else {
        console.error("Failed to delete makanan");
      }
    } catch (error) {
      console.error("Error deleting makanan:", error);
    }
  };

  return (
    <AdminLayout>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">List Makanan</h1>
        <div className="flex flex-wrap -mx-4 pt-7">
          <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap w-full px-4 mb-4 justify-center">
            {makananList.map((makanan) => (
              <div key={makanan.id} className="card bg-base-200 shadow-md w-full">
                <div className="card-body flex flex-col lg:flex-row justify-between">
                  <h2 className="card-title flex justify-center lg:justify-normal">{makanan.nama}</h2>
                  <div className="flex gap-4 justify-center mt-5 lg:mt-0">
                    <Link
                      to={`/dashboard/editmakanan/${makanan.id}`}
                      className="btn btn-primary w-2/4"
                    >
                      <FaEdit size={"20px"} />
                    </Link>
                    <button
                      onClick={() => deleteMakanan(makanan.id)}
                      className="btn btn-primary w-2/4"
                    >
                      <FaTrash size={"20px"} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ListMakanan;
