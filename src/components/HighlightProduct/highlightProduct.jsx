import React, { useState, useEffect } from "react";
import Card from "../Card/card";
import { Link } from "react-router-dom";

const HighlightProduct = ({ URL, apiURL, title, link }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiURL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProducts(data.payload.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiURL]);

  return (
    <div className="w-full bg-base-200 p-4 pb-20">
      <h1 className="text-4xl font-bold text-center mb-8">{title}</h1>
      <div className="flex flex-wrap gap-4 justify-center pb-5">
        {products.slice(0, 4).map((product) => (
          <Card
            key={product?.id}
            id={product?.id}
            title={product?.nama}
            description={truncateDescription(product?.penjelasan)}
            imageURL={product?.gambar}
            URL={URL}
          />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Link className="btn btn-primary" to={link}>
          Lihat {title} Lainnya
        </Link>
      </div>
    </div>
  );
};

// Function to truncate description to 5 words followed by ...
const truncateDescription = (description) => {
  if (!description) return ""; // Check if description is undefined or null

  const words = description.split(" ");
  const truncatedWords = words.slice(0, 5);
  return truncatedWords.join(" ") + "...";
};

export default HighlightProduct;
