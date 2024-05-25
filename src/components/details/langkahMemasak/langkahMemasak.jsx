import React from "react";

const LangkahMemasak = ({ langkah }) => {
  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body">
        <h2 className="card-title">Langkah-Langkah Pembuatan</h2>
        <ul>
          {langkah.map((item, index) => (
            <li className="py-2" key={index}>{`${index + 1}. ${item.langkah}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LangkahMemasak;
