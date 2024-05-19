import React from "react";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";

const GuestLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  );
};

export default GuestLayout;
