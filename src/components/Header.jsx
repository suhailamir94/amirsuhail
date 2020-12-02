import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/images/yesy.png" alt="" />
      </div>
      <Navbar />
    </header>
  );
};
export default Header;
