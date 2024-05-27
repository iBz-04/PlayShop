import React, { useState, useContext } from "react";
import "./header.css";
import { AppContext } from "../App";
import userImg from "../images/user.jpg";

function Header({ toggleActive }) {
  const { library, bag } = useContext(AppContext);
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
    toggleActive();
  };

  return (
    <header>
      <div className="d-flex align-items-center">
        <a
          href="#"
          className={`menu ${menu ? "active" : undefined}`}
          onClick={toggleMenu}
        >
          <i className="bi bi-sliders"></i>
        </a>
      </div>
      <div className="userItems">
        <a href="#" className="icon">
          <i className="bi bi-heart-fill"></i>
          <span className="like">{library.length}</span>
        </a>
        <a href="#" className="icon">
          <i className="bi bi-bag-fill"></i>
          <span className="bag">{bag.length}</span>
        </a>
        <div className="avatar">
          <a href="#">
            <img src={userImg} alt="User Image" />
          </a>
          <div className="user">
            <span>iBz</span>
            <a href="#">View Profile</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
