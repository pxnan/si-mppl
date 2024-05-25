import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../../layouts/AdminLayout";

const AddAdmin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

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
          if (response.data.payload.status_code !== 200) {
            navigate("/login");
          }
        })
        .catch((error) => {
          console.error("Error checking token:", error);
          navigate("/login");
        });
    }
  }, [navigate]);

  const handleAddAdmin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/addAdmin", { email, password })
      .then((response) => {
        if (response.data.payload.status_code === 200) {
          setMessage("Admin added successfully");
        } else {
          setMessage("Failed to add admin");
        }
      })
      .catch((error) => {
        console.error("Error adding admin:", error);
        setMessage("Failed to add admin");
      });
  };

  return (
    <AdminLayout>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Add Admin</h1>
        <form onSubmit={handleAddAdmin} className="space-y-4">
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="password" className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-4 w-full">
            Add Admin
          </button>
        </form>
        {message && (
          <div className="alert alert-info mt-4">
            <div>
              <span>{message}</span>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AddAdmin;
