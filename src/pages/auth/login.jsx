import React, { useState } from "react";
import Alert from "../../components/alert/Alert";

const Login = () => {
  const [showAlert, setShowAlert] = useState(false);
  

  const loginHandler = async (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000); // Hide the alert after 3 seconds
  };

  return (
    <div className="relative min-h-screen bg-base-200 px-5 lg:px-0">
      {showAlert && (
        <div className="fixed top-4 right-4">
          <Alert alertType={"alert-warning"} alertMsg={"bla bla bla bla bla bal"}/>
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
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
