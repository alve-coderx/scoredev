import React from "react";
const BannerCard = ({ name, desc,id }) => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full overlay"></div>
      <img src={`/api/v1/category/category-image/${id}`} alt="cat" className="w-full h-full" />
      <div className="absolute w-full h-full p-5 top-10 flex flex-col justify-start space-y-2 text-white ">
        <p className="text-sm">{desc}</p>
        <p className="text-4xl uppercase">{name}</p>
        <p className="text-lg">$39.99-$74.99</p>
        <img src={`/api/v1/category/category-icon/${id}`} alt="wear" className="w-16 " />
      </div>
    </div>
  );
};

export default BannerCard;
