import React from "react";
import { FaHome,FaBloggerB } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { IoIosContact } from "react-icons/io";
import { MdLocalMovies } from "react-icons/md";

const NavItems = [
  {
     id: 1,
     title: "Home",
     to: "/",
     icon: FaHome,
    },
    {
      id:2,
      title:"About",
      to: "/about",
      icon: FcAbout,
    },
    {
     id: 3,
     title: "Contact",
     to: "/contact",
     icon: IoIosContact,
    },
    {
      id:4,
      title:"Blog",
      to: "/blog",
      icon: FaBloggerB,
    },
    {
      id:5,
      title: "Movies",
      to: "/movies",
      icon: MdLocalMovies,
    },{
      id: 6,
      title:"Register",
      to: "/register",
      icon: MdLocalMovies,
    },{
      id:7,
      title:"Login",
      to:"/login",
      icon: MdLocalMovies,
    }
];

export default NavItems;
