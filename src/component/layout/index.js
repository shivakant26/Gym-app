import React from "react";
import { useLocation } from "react-router-dom";
import MainRoute from "../../routes";
import Banner from "../Banner";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  const { pathname } = useLocation()
  const slug  = pathname.replace("/","");
  return (
    <>
      <Header />
      <Banner slug={slug}/>
      <MainRoute />
      <Footer />
    </>
  );
}

export default Layout;
