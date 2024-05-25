import React from "react";

const BahanMasakan = ({ bahan }) => {
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body">
        <h2 className="card-title">Bahan</h2>
        <ul>
          {bahan.map((item, index) => (
            <React.Fragment key={index}>
              <li className="py-2">{item.nama}</li>
              {index !== bahan.length - 1 && <hr className="opacity-10" />}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BahanMasakan;

