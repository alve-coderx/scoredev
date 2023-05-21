import React, { useEffect, useState } from "react";
import { AiFillHeart, AiFillShopping, AiFillStar } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useCart } from "../../context/cart";

const Product = ({ item }) => {
  const [cart, setCart] = useCart();
  const navigate = useNavigate();

  return (
    <div className="cursor-pointer bg-white shadow-xl lg:w-80 w-48 rounded-md">
      <div className="relative">
        <img
          src={`/api/v1/product/product-photo/${item._id}`}
          alt="samp"
          className="w-full"
        />
        <button
          onClick={() => {
            setCart([...cart, item]);
            localStorage.setItem("cart", JSON.stringify([...cart, item]));
            toast.success("Item Added to cart");
          }}
          className="glasseff absolute right-2 bottom-1 text-lg p-1"
        >
          <AiFillShopping />
        </button>
        <button className="glasseff absolute right-10 bottom-1 text-lg p-1">
          <AiFillHeart />
        </button>
      </div>
      <div className="flex items-center justify-between lg:text-lg text-xs font-[600] mt-2 px-2">
        <p>{item.name}</p>
        <p>
          {item.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>
      <div className="px-2 text-xs ">
        <p className="uppercase font-[600]">Description</p>
        <p>{item.description.substring(0, 100)}...</p>
      </div>
      <button
        onClick={() => navigate(`/product/${item.slug}`)}
        className="bg-[#141414] lg:text-md font-[600] w-full text-white py-2"
      >
        More Details
      </button>
    </div>
  );
};

export default Product;
