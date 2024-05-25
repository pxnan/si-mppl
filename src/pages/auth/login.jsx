import React, { useState } from "react";
import Alert from "../../components/alert/Alert";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        sessionStorage.setItem("id", data.payload.id);
        sessionStorage.setItem("email", data.payload.email);
        sessionStorage.setItem("token", data.payload.token);
        setAlertType("alert-success");
        setAlertMsg("Login successful!");
        navigate("/dashboard");
      } else {
        setAlertType("alert-warning");
        setAlertMsg(data.payload.message || "Login failed!");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setAlertType("alert-danger");
      setAlertMsg("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }

    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div className="relative min-h-screen bg-base-200 px-5 lg:px-0">
      {showAlert && (
        <div className="fixed top-4 right-4">
          <Alert alertType={alertType} alertMsg={alertMsg} />
        </div>
      )}
      <div className="hero min-h-screen">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={loginHandler} className="card-body w-full lg:w-96">
            <h1 className="w-full text-center font-bold text-3xl py-4">
              MALUT FOOD
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
