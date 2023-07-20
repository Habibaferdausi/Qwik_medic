import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SearchResultList from "../Navbar/SearchResultList";

const Main = () => {
  const [results, setResults] = useState([]);
  return (
    <div>
      <Navbar setResults={setResults} />
      {results && results.length > 0 && <SearchResultList results={results} />}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
