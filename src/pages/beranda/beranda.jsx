import React from "react";
import GuestLayout from "../../layouts/GuestLayout";
import Hero from "../../components/Hero/hero";
import HighlightProduct from "../../components/HighlightProduct/highlightProduct";

const Beranda = () => {
  const getAllMakanan = 'http://localhost:5000/getAllMakanan'
  const getAllJajanan = 'http://localhost:5000/getAllJajanan'
  return (
    <GuestLayout>
      <Hero/>
      <HighlightProduct URL={"/detail/makanan/"} apiURL={getAllMakanan} title={"Makanan"} link={"/makanan"}/>
      <HighlightProduct URL={"/detail/jajanan/"} apiURL={getAllJajanan} title={"Jajanan"} link={"/jajanan"}/>
    </GuestLayout>
  );
};

export default Beranda;
