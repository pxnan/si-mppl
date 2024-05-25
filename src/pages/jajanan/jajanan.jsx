import React from "react";
import GuestLayout from "../../layouts/GuestLayout";
import Product from "../../components/Product/product";

const Jajanan = () => {
  const getAllJajanan = 'http://localhost:5000/getAllJajanan'
  return (
    <GuestLayout>
        <Product URL={"/detail/jajanan/"} apiURL={getAllJajanan} title={"Jajanan"}/>
    </GuestLayout>
  )
};

export default Jajanan;
