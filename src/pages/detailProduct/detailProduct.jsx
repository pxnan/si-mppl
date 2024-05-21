import React from "react";
import GuestLayout from "../../layouts/GuestLayout";
import HeroDetail from "../../components/details/HeroDetail/heroDetail";
import BahanMasakan from "../../components/details/bahanMasakan/bahanMasakan";
import PenjelasanMasakan from "../../components/details/penjelasanMasakan/penjelasanMasakan";
import JudulMakanan from "../../components/details/judulMasakan/judulMakanan";
import LangkahMemasak from "../../components/details/langkahMemasak/langkahMemasak";

const DetailProduct = () => {
  return (
    <GuestLayout>
      <HeroDetail />
      <div className="flex flex-col px-6 lg:px-96 py-10 bg-base-200 gap-6">
        <JudulMakanan/>
        <PenjelasanMasakan/>
        <BahanMasakan />
        <LangkahMemasak/>
      </div>
    </GuestLayout>
  );
};

export default DetailProduct;
