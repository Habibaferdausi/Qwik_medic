import React from "react";

const FavoriteItems = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  return (
    <div>
      <h1 className="text-center text-xl text-purple-800 font-bold mt-4 ">
        Favorite Items
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {favorites.map((item, index) => (
              <tr key={index}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.imagelink} alt={item.medicinename} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.medicinename}</div>
                      <div className="text-sm opacity-50">
                        Company: {item.companyname}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.regularunitprice} TK</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default FavoriteItems;
