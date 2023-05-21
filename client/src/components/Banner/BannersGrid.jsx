import React, { useEffect, useState } from "react";
import jacket1 from "../../assets/jacket1.jpg";
import wear from "../../assets/wear.svg";
import BannerCard from "./BannerCard";
import axios from "axios";
import { toast } from "react-hot-toast";

const BannersGrid = () => {
  const [categories, setCategories] = useState([]);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllCategory();
  }, []);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto gap-5 my-5 ">
      {categories?.map((cat) => (
        <BannerCard
          name={cat.name}
          desc={cat.description}
          image={jacket1}
          icon={wear}
          id={cat._id}
        />
      ))}
      {/* <BannerCard item={attar} icon={fragrance} />
      <BannerCard item={badam} icon={organic} /> */}
    </div>
  );
};

export default BannersGrid;
