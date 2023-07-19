import React, { useState, useEffect } from "react";

const Home = () => {
  const [getProductData1, setGetProductData1] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Token 84db931d9424722dba3f46921df2471c60e13eca",
        },
      };

      try {
        const response = await fetch(
          "https://qwikmedic.pythonanywhere.com/medicineInfo/1",
          requestOptions
        );
        const json = await response.json();
        console.log(json);
        setGetProductData1(json);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="form-control">
      <h1 className="text-purple-600 text-center text-3xl">
        Welcome to Qwik Medic
      </h1>
    </div>
  );
};

export default Home;
