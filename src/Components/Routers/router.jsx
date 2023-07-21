import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import MedicineDetails from "../MedicineDetails/MedicineDetails";
import FavoriteItems from "../Favourite Items/FavoriteItems";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "details/:id",
        element: <MedicineDetails></MedicineDetails>,
        loader: async ({ params }) => {
          const token = "84db931d9424722dba3f46921df2471c60e13eca";
          const url = `https://qwikmedic.pythonanywhere.com/medicineInfo/${params.id}`;
          const response = await fetch(url, {
            headers: {
              Authorization: `Token ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }

          return response.json();
        },
      },
      {
        path:'favoriteItems',
        element:<FavoriteItems></FavoriteItems>
      }
    ],
  },
]);
export default router;
