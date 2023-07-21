import React, { useState } from "react";
import { FaCartArrowDown, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const FavoriteItems = () => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );

  if (favorites.length === 0) {
    return <p>No favorite items yet.</p>;
  }

  const handleRemoveItem = (medicinename) => {
    const updatedFavorites = favorites.filter(
      (item) => item.medicinename !== medicinename
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };
  const addToCart = (item) => {
    // Pass the item as a parameter to the function
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    if (
      !cartItems.find((medicine) => medicine.medicinename === item.medicinename)
    ) {
      cartItems.push({
        id: item.id, // Make sure "id" is present in the item object
        genericname: item.genericname,
        medicinename: item.medicinename,
        companyname: item.companyname,
        imagelink: item.imagelink,
        regularunitprice: item.regularunitprice,
        discount: item.discount,
        quantity: item.quantity,
        types: item.types,
      });
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Added to Cart Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Company</th>
            <th>Type</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Quantity</th>
            <th>Remove</th>
            <th>Add to Cart</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map((item, index) => (
            <tr key={index}>
              <th></th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.imagelink} alt="Avatar" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.medicinename}</div>
                    <div className="text-sm opacity-50">{item.genericname}</div>
                  </div>
                </div>
              </td>
              <td>{item.companyname}</td>
              <td>{item.types}</td>
              <td>{item.regularunitprice} TK</td>
              <td>{item.discount} TK</td>
              <td>{item.quantity} </td>
              <th>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => handleRemoveItem(item.medicinename)}
                >
                  <FaTrash className="text-red-600 text-xl"></FaTrash>
                </button>
              </th>
              <th>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => addToCart(item)}
                >
                  <FaCartArrowDown className="text-green-600 text-xl" />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FavoriteItems;
