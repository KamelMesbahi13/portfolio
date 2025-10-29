import React from "react";
import Logo from "../../assets/kmLogo.png";

const Navbar = () => {
  return (
    <div className="container">
      <div className="w-12 h-12">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Navbar;
