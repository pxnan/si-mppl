import React from "react";
import Card from "../Card/card";
import { Link } from "react-router-dom";

const HighlightProduct = ({ title, link }) => {
  return (
    <div className="w-full bg-base-200 p-4 pb-20">
      <h1 className="text-4xl font-bold text-center mb-8">{title}</h1>
      <div className="flex flex-wrap gap-4 justify-center pb-5">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="w-full flex justify-center">
        <Link className="btn bg-base-100" to={link}>Lihat {title} Lainnya</Link>
      </div>
    </div>
  );
};

export default HighlightProduct;
