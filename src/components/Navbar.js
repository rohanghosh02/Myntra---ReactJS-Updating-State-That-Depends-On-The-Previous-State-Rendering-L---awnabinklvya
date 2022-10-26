import React, { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="brand">
        <a className="navbar-brand" href="/">
          <div className="icon-holder">
            <img
              src="/src/styles/logo-myntra-with-name.png"
              className="img-fluid"
            />
          </div>
        </a>
      </div>

      <div className="search">
          <div className="search-content">
            <button className="search-button">
              <i className="fa fa-search"></i>
            </button>
            <input
              type="text"
              className="search-input"
              placeholder="Search here..."
            />
          </div>
        </div>

      <div className="navigation">
        <ul className="menu">
          <li>
            <a href="#">Man</a>
          </li>
          <li>
            <a href="#">Woman</a>
          </li>
          <li>
            <a href="#">Kids</a>
          </li>
          <li>
            <a href="#">login</a>
          </li>
        </ul>
      

        <a className="cart" href="/">
          <div className="cart-holder">
            <img
              src="/src/shopping-cart-solid.svg"
              className="cart-img"
            />
          
            
          </div>
        
        </a>
        <div className="cart-numbers">
                 <div className="cart-list-length">1</div> 
            </div>

      </div>
    </nav>
  );
}
