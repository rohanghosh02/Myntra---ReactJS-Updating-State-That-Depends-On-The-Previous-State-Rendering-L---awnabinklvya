import React, { useState } from "react";
import "../styles/Content.css";
import data from "../../data";
import ProductModal from "./ProductModal";

export default function Content() {
  const [open, setOpen] = useState(false);
  const[id,setId] = useState(0);

  const handleClickOpen = (e,index) => {
    e.preventDefault();
    setOpen(true);
    setId(index);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
     <div className="product-tile-holder">
      {data.map((value, index) => {
        return (
          <div className="indiv-tile-holder" onClick={(e)=>handleClickOpen(e,index)} key={index} id={index}>
            <ul key={index}>
              <li key={index + "key"}>
                <div className="product-img">
                  <img
                    width={"200px"}
                    height={"220px"}
                    src={value.otherImages[0]}
                    alt="product-image"
                  />
                </div>
                <div className="brand-name">{value.name}</div>
                <div className="description">{value.description}</div>
                <span className="final-price">Rs.{value.finalPrice}</span>
                <s className="old-price">Rs:{value.strickPrice}</s>
                <span className="discount">{value.discount}% OFF</span>
              </li>
            </ul>

           
          </div>
        );
      })}
      

      
    </div>
    {open && <ProductModal open={open} handleClose={handleClose} id={id}/>}
    
    </>
   
  );
}
