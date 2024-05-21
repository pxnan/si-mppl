import React from "react";
import Card from "../Card/card";
import { Link } from "react-router-dom";

const HighlightProduct = ({ title, link, id }) => {
  return (
    <div className="w-full bg-base-200 p-4 pb-20">
      <h1 className="text-4xl font-bold text-center mb-8">{title}</h1>
      <div className="flex flex-wrap gap-4 justify-center pb-5">
        <Card id={id}/>
        <Card id={id}/>
        <Card id={id}/>
        <Card id={id}/>
      </div>
      <div className="w-full flex justify-center">
        <Link className="btn btn-primary" to={link}>Lihat {title} Lainnya</Link>
      </div>
    </div>
  );
};

export default HighlightProduct;

