import React, { useEffect, useState } from "react";
import Product from "../ProductCard/Product";
import axios from "axios";
import Slider from "react-slick";

const ProductTypeGrid = ({ slug }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  let settings_3 = {
    dots: false,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  useEffect(() => {
    if (slug) getPrductsByCat();
  }, [slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto lg:px-0 px-5">
      {products.length === 0 ? (
        <div className="flex justify-center min-h-[50vh] items-center">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          <div className="flex items-center  justify-between py-5">
            <h4 className="uppercase text-xl">{category.name}</h4>
            <h6 className="text-xl">{products?.length} items</h6>
          </div>
          <div className="overflow-hidden">
            <Slider {...settings_3}>
              {products?.map((p, index) => (
                <Product item={p} key={index} />
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductTypeGrid;
