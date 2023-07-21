// MedicineDetails.js

import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaBeer, FaBookmark, FaCartArrowDown } from "react-icons/fa";

const MedicineDetails = () => {
  const medicineInfo = useLoaderData();
  const {
    imagelink,
    medicinename,
    introduction,
    genericname,
    power,
    sideeffect,
    types,
    uses,
    childdose,
    companyname,
    regularunitprice,
  } = medicineInfo;

  const addToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (!favorites.find((medicine) => medicine.medicinename === medicinename)) {
      favorites.push({ medicinename, imagelink, regularunitprice });
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  const addToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    if (!cartItems.find((medicine) => medicine.medicinename === medicinename)) {
      cartItems.push({ medicinename, imagelink, regularunitprice });
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  };

  console.log(medicineInfo);
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={imagelink} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{medicinename}</h2>
          <h3> Generic Name:{genericname}</h3>
          <p>Power:{power}</p>
          <p>Company Name:{companyname}</p>
          <p>Des:{introduction}</p>
          <p>Type: {types}</p>
          <p>Price:{regularunitprice} TK</p>
          <p>Uses :{uses}</p>
          <p>Dose:{childdose}</p>
          <p>Side Effects:{sideeffect}</p>

          <div className="card-actions justify-end">
            <button className="btn btn-secondary" onClick={addToFavorites}>
              Add to Favorite <FaBookmark />
            </button>
            <button className="btn btn-primary" onClick={addToCart}>
              Add to Cart <FaCartArrowDown></FaCartArrowDown>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineDetails;
