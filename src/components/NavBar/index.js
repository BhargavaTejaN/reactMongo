import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/students">
        <p>Students</p>
      </Link>
    </div>
  );
};

export default NavBar;
