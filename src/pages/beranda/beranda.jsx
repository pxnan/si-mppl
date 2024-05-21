import React from "react";
import GuestLayout from "../../layouts/GuestLayout";
import Hero from "../../components/Hero/hero";
import HighlightProduct from "../../components/HighlightProduct/highlightProduct";

const Beranda = () => {
  const id = "1"
  return (
    <GuestLayout>
      <Hero/>
      <HighlightProduct id={id} title={"Makanan"} link={"/makanan"}/>
      <HighlightProduct id={id} title={"Jajanan"} link={"/jajanan"}/>
    </GuestLayout>
  );
};

export default Beranda;
