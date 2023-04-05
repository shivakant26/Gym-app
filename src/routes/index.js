import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./publicRoutes";
import { allRouter } from "../Constant";

const MainRoute = () => {
  return (
    <>
      <Routes>
        {allRouter?.map((route, index) => {
          return (
            <Route
              path={route?.slug}
              element={<PublicRoutes>{route?.component}</PublicRoutes>}
            />
          );
        })}
      </Routes>
    </>
  );
};

export default MainRoute;
