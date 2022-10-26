import React from "react";
import "../styles/filters.css";

export default function Filters() {
  return (
    <>
      <div className="sort-holder">
        <span>Sort by: </span>
        <select name="sort" id="sort">
          <option value="">What's New</option>
          <option value="">Price low to high</option>
          <option value="">Better Discount</option>
        </select>
      </div>
      <div className="container">
        <div className="filter-holder">
          <h5 className="gender-heading">Gender</h5>

          <input type="radio" name="gender" id="male" defaultChecked="checked" />
          <label htmlFor="male">MEN</label>
          <br />
          <input type="radio" name="gender" id="female" />
          <label htmlFor="gender">WOMEN</label>
          <br />
          <br />

          <h5 className="Categories-heading">Categories</h5>
          <input type="checkbox" name="white" id="white" />
          <label htmlFor="white">White</label>
          <br />
          <input type="checkbox" name="folded" id="folded" />
          <label htmlFor="white">Folded Sleeves</label>
        </div>
      </div>
    </>
  );
}
