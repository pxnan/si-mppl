import React, { useEffect, useState } from 'react'
import AdminLayout from '../../../layouts/AdminLayout'
import { Link, useNavigate } from 'react-router-dom'
import { FaEdit, FaTrash } from 'react-icons/fa'
import axios from 'axios'

const ListJajanan = () => {
  const [jajananList, setJajananList] = useState([]);
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
            fetchJajanan();
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

  const fetchJajanan = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getAllJajanan");
      if (response.data.payload.status_code === 200) {
        setJajananList(response.data.payload.data);
      } else {
        console.error("Failed to fetch jajanan data");
      }
    } catch (error) {
      console.error("Error fetching jajanan data:", error);
    }
  };

  const deleteJajanan = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this jajanan?");
    if (!confirmed) {
      return;
    }

    try {
      const response = await axios.delete(`http://localhost:5000/deleteJajanan/${id}`);
      if (response.data.payload.status_code === 200) {
        window.location.reload();
      } else {
        console.error("Failed to delete jajanan");
      }
    } catch (error) {
      console.error("Error deleting jajanan:", error);
    }
  };

  return (
    <AdminLayout>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">List Jajanan</h1>
        <div className="flex flex-wrap -mx-4 pt-7">
          <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap w-full px-4 mb-4 justify-center">
            {jajananList.map((jajanan) => (
              <div key={jajanan.id} className="card bg-base-200 shadow-md w-full">
                <div className="card-body flex flex-col lg:flex-row justify-between">
                  <h2 className="card-title flex justify-center lg:justify-normal">{jajanan.nama}</h2>
                  <div className="flex gap-4 justify-center mt-5 lg:mt-0">
                    <Link
                      to={`/dashboard/editjajanan/${jajanan.id}`}
                      className="btn btn-primary w-2/4"
                    >
                      <FaEdit size={"20px"} />
                    </Link>
                    <button
                      onClick={() => deleteJajanan(jajanan.id)}
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
}

export default ListJajanan;
