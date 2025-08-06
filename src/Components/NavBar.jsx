import React from "react";
import { FaHome, FaPhone } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FcAbout } from "react-icons/fc";
import NavItems from "../Data/NavItems";

const Navbar = () => {
  function handleClick() {
    alert("Button Clicked");
  }
  return (
    <div className="nav">
      <div>
        <Link to="/">
          <img src="../daraz.png" alt="" />
        </Link>
      </div>
      <div className="nav-links">
        <ul>
          {/* <li>
            <Link to="/">
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FcAbout />
              About
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <FaPhone />
              Contact
            </Link>
          </li>
          <li>
            <Link to="/blog">
              <FaBlog />
              Blog
            </Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li> */}
          {NavItems.map((item, i) => {
            return (
              <li key={item.id}>
                <Link to={item.to}><item.icon/> {item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <div className="search">
        <input type="text" name="" id="" placeholder="search" />
      </div> */}
    </div>
  );
};

export default Navbar;
