import React from "react";
import { Link } from "react-router-dom";

const SearchResult = ({ result }) => {
  const { medicinename, imagelink, power, id } = result;

  return (
    <Link to={`details/${id}`} className="px-2 py-1 hover:bg-purple-100">
      <div className="flex">
        <div className="w-1/3 pr-4">
          <img
            src={imagelink}
            alt={medicinename}
            className="w-full h-20 object-cover"
          />
        </div>
        <div className="w-2/3">
          <h2 className="text-lg font-semibold">{medicinename}</h2>
          <p>Power: {power}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchResult;
