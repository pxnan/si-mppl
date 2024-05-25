import React, { useEffect, useState } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const [totalMakanan, setTotalMakanan] = useState(0);
  const [totalJajanan, setTotalJajanan] = useState(0);

  useEffect(() => {
    const id = sessionStorage.getItem("id");
    const email = sessionStorage.getItem("email");
    const token = sessionStorage.getItem("token");

    if (!token || !id || !email) {
      navigate("/login");
    } else {
      // Check if token is valid
      axios.post('http://localhost:5000/checkToken', { id, email, token })
        .then(response => {
          if (response.data.payload.status_code === 200) {
            // Token is valid, proceed to fetch data
            fetchData();
          } else {
            navigate("/login");
          }
        })
        .catch(error => {
          console.error('Error checking token:', error);
          navigate("/login");
        });
    }
  }, [navigate]);

  const fetchData = () => {
    // Fetch total data makanan
    axios.get('http://localhost:5000/getAllMakanan')
      .then(response => {
        if (response.data.payload.status_code === 200) {
          setTotalMakanan(response.data.payload.data.length);
        }
      })
      .catch(error => {
        console.error('Error fetching makanan data:', error);
      });

    // Fetch total data jajanan
    axios.get('http://localhost:5000/getAllJajanan')
      .then(response => {
        if (response.data.payload.status_code === 200) {
          setTotalJajanan(response.data.payload.data.length);
        }
      })
      .catch(error => {
        console.error('Error fetching jajanan data:', error);
      });
  };

  return (
    <AdminLayout>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <div className="flex flex-wrap -mx-4 pt-7">
          <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap w-full mb-4 justify-center">
            <Link
              to={"/dashboard/listmakanan"}
              className="card bg-base-200 shadow-md w-full lg:w-5/12"
            >
              <div className="card-body p-0 flex flex-row">
                <h2 className="card-title w-3/5 pl-10">Makanan</h2>
                <div className="flex justify-center items-center bg-base-300 rounded-r-2xl w-2/5 h-12 p-9 py-16">
                  <h2 className="text-5xl font-bold">{totalMakanan}</h2>
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
                  <h2 className="text-5xl font-bold">{totalJajanan}</h2>
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
