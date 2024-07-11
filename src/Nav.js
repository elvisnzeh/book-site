import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { PageContext } from "./UserContext";
import Modals from "./Modals";
import Search from "./Search";

const Nav = () => {
  const { cart, totalPrice } = useContext(PageContext);

  return (
    <div>
      <nav>
        <div className="menu-bar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          <NavLink className="market" to="/">
            {/* < className="logo" /> */}
          </NavLink>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact us</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Blog">Blog</NavLink>
          </li>
        </ul>
        <ul className="nav-right">
          <li className="dollar">${totalPrice.toFixed(2)}</li>
          <li className="noti">
            {<Modals />}
            <span className="cart-count">{cart.length}</span>
          </li>
          {/* <li>{<Search />}</li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
