import React from "react";
import defaultImage from "../assets/categories.jpeg";

const Header = ({ category }) => {
  return (
    <header className="header">
        <div className="image">
        <img
          src={category.image ? category.image : defaultImage}
          alt=""
          style={{ width: "256px", height: "256px" }}
        />
        </div>
        <div className="title">
          <p className="h5">{category.name}</p>
          <p className="p">{category.description}</p>
        </div>
    </header>
  );
};

export default Header;