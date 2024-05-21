import React from "react";
import GuestLayout from "../../layouts/GuestLayout";
import Product from "../../components/Product/product";

const Jajanan = () => {
  const id = "1";
  return (
    <GuestLayout>
      <Product id={id} title={"Jajanan"} />
    </GuestLayout>
  );
};

export default Jajanan;
