import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Link className="card w-96 lg:w-72 bg-base-100 shadow-md lg:transition-transform lg:hover:scale-105">
      <figure>
        <img
            className="h-48 w-full object-cover"
          src="/assets/images/1.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </Link>
  );
};

export default Card;
