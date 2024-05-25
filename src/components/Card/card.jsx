import React from "react";
import { Link } from "react-router-dom";

const Card = ({URL, id, title, description, imageURL}) => {
  return (
    <Link to={`${URL}${id}`} className="card w-96 lg:w-72 bg-base-100 shadow-md lg:transition-transform lg:hover:scale-105">
      <figure>
        <img
            className="h-48 w-full object-cover"
          src={imageURL}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Card;
