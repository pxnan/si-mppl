import React from "react";

const HeroDetail = ({ gambar }) => {
  return (
    <div
      className="hero h-80 shadow-md"
      style={{
        backgroundImage: `url(${gambar})`, // Menggunakan gambar dari prop
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
      }}
    >
    </div>
  );
};

export default HeroDetail;
