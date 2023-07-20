import React from "react";
import { useLoaderData } from "react-router-dom";

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
            <button className="btn btn-primary">Add to Favorite</button>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineDetails;
