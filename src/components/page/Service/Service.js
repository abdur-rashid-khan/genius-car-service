import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const Service = ({ product }) => {
const { id, name, img, description, price } = product;
// 
const navigate= useNavigate();
const detailsBtn =(id)=>{
   navigate(`/details/${id}`)
}

return (
   <div className="col-sm-12 col-md-6 col-lg-4  my-1  py-2 px-2 g-4"> 
      <div className="border p-2">
      <img className="w-100" src={img} alt="" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>
      <small>{description}</small>
      </p>
      <button onClick={()=>detailsBtn(id)} className="btn btn-primary">Book: {name}</button>
      </div>
   </div>
);
};

export default Service;
