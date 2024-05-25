import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams from React Router
import GuestLayout from "../../layouts/GuestLayout";
import HeroDetail from "../../components/details/HeroDetail/heroDetail";
import BahanMasakan from "../../components/details/bahanMasakan/bahanMasakan";
import PenjelasanMasakan from "../../components/details/penjelasanMasakan/penjelasanMasakan";
import JudulMakanan from "../../components/details/judulMasakan/judulMakanan";
import LangkahMemasak from "../../components/details/langkahMemasak/langkahMemasak";

const DetailJajanan = () => {
  const [jajananDetail, setjajananDetail] = useState(null);
  const { id } = useParams(); // Get the "id" parameter from the URL

  useEffect(() => {
    fetch(`http://localhost:5000/getJajananById/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setjajananDetail(data.payload.data);
      })
      .catch((error) => {
        console.error("Error fetching makanan detail:", error);
      });
  }, [id]); // Include "id" in the dependency array

  return (
    <GuestLayout>
      {jajananDetail && (
        <>
          <HeroDetail gambar={jajananDetail.gambar} />
          <div className="flex flex-col px-6 lg:px-96 py-10 bg-base-200 gap-6">
            <JudulMakanan judul={jajananDetail.nama} />
            <PenjelasanMasakan penjelasan={jajananDetail.penjelasan} />
            <BahanMasakan bahan={jajananDetail.bahan} />
            <LangkahMemasak langkah={jajananDetail.langkah} />
          </div>
        </>
      )}
    </GuestLayout>
  );
};

export default DetailJajanan;
