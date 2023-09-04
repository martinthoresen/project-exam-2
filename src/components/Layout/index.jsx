import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

function Layout() {
  return (
    <div className="d-flex row vh-100">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Layout;
