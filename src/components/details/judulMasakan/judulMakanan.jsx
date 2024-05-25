import React from "react";

const JudulMakanan = ({ judul }) => {
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body">
        <h1 className="text-3xl font-bold">{judul}</h1> {/* Menggunakan judul dari prop */}
      </div>
    </div>
  );
};

export default JudulMakanan;
