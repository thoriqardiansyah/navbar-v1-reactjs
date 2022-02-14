import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-items">
        <div className="navbar-logo">
          React <i className="fab fa-react"></i>
        </div>
        <div className="menu-icon"></div>
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Navbar;
