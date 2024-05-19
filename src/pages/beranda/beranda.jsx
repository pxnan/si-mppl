import React from "react";
import GuestLayout from "../../layouts/GuestLayout";
import Hero from "../../components/Hero/hero";
import HighlightProduct from "../../components/HighlightProduct/highlightProduct";

const Beranda = () => {
  return (
    <GuestLayout>
      <Hero/>
      <HighlightProduct title={"Makanan"} link={"/makanan"}/>
      <HighlightProduct title={"Jajanan"} link={"/"}/>
    </GuestLayout>
  );
};

export default Beranda;
