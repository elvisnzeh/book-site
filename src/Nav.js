import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PageContext } from "./UserContext";
import Modals from "./Modals";
import { MdOutlineLegendToggle } from "react-icons/md";
import "./Nav.css";

const Nav = () => {
  const { cart, totalPrice, Open, setOpen } = useContext(PageContext);

  const toggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return (
    <nav>
      <div className="trigger" onClick={toggle}>
        <MdOutlineLegendToggle />
      </div>
      <ul className={`navbar-links ${Open ? 'Open' : ''}`}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact us</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li className="cart-info">
          <span className="dollar">${totalPrice.toFixed(2)}</span>
          <div className="cart-container">
            <Modals />
            <span className="cart-count">{cart.length}</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
