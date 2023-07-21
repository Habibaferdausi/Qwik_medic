import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = async (value) => {
    const apiUrl = "https://qwikmedic.pythonanywhere.com/medicineInfo";
    try {
      const response = await fetch(apiUrl, {
        headers: {
          Authorization: "Token 84db931d9424722dba3f46921df2471c60e13eca",
        },
      });
      const json = await response.json();

      const results = json.filter((medicineInfo) => {
        return (
          value &&
          medicineInfo &&
          medicineInfo.medicinename &&
          medicineInfo.medicinename.toLowerCase().includes(value)
        );
      });

      setResults(results);
      console.log(results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (value) => {
    setInput(value);
  };

  useEffect(() => {
    fetchData(input);
  }, [input]);

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Qwik Medic</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                className="input input-bordered"
              />
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="favoriteItems">Favorite Items</NavLink>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
