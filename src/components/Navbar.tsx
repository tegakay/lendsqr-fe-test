import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import header from "../Group-logo.png";
import { CiSearch } from "react-icons/ci";
import { AiOutlineBell } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineArrowDropDown } from "react-icons/md";


export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-header"><img src={header} className="header-icon" alt="lendsqr logo" /></div>
      <div className="nav-search">
        <form className="nav-form">
          <input
            type="text"
            placeholder="Search for Anything"
            className="nav-input"
            name="password"
            required
          />
          <button className="nav-button" type="submit">
            <CiSearch />
          </button>
         
        </form>
      </div>
      <ul className="nav-list">
            <li className="navlists1"><Link to="/">Docs</Link></li>
            <li className="navlists2"><Link to="/"><AiOutlineBell/></Link></li>
            <li className="navlists3"><Link to="/"><CgProfile/></Link></li>
            <li className="navlists4">Adedeji<Link to="/"><MdOutlineArrowDropDown/></Link></li>
          </ul>
    </nav>
  );
};
