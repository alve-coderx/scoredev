import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../components/ProductCard/Product";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [count, setCount] = useState(0);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="bg-[#F4F4F4] py-10 border-b">
        <div className="flex lg:flex-row flex-col lg:items-start relative items-center justify-center lg:space-x-10 container mx-auto">
          <div className="bg-white p-2 border drop-shadow-sm rounded-md">
            <img
              src={`/api/v1/product/product-photo/${product._id}`}
              alt={product.name}
              className="lg:w-96 w-80"
            />
          </div>
          <div className="flex flex-col space-y-5 pb-5">
            <div>
              <Link
                to="/"
                className={`font-medium text-gray-500 hover:text-gray-700`}
              >
                home
              </Link>
              <Link
                to={`/category/${product?.category?.name}`}
                className={`font-medium text-gray-500 hover:text-gray-700`}
              >
                /{product?.category?.name}
              </Link>
              <Link
                to={`/product/category/${product._id}`}
                className={`font-medium text-black hover:text-gray-700`}
              >
                /{product.name}
              </Link>
            </div>
            <p className="text-3xl">{product.name}</p>
            <p className="text-xl">
              {" "}
              ৳ :
              {product?.price?.toLocaleString("en-US", {
                style: "currency",
                currency: "BDT",
              })}
            </p>
            <p className="text-sm">Category : {product?.category?.name}</p>

            {/* <Dropdown /> */}
            <div className="flex items-center my-4">
              <button
                className="btn bg-white hover:bg-black hover:text-white text-gray-500 py-3 px-2 transition-all rounded-l-md"
                onClick={() => setCount(count - 1)}
              >
                -
              </button>
              <button className="btn bg-white text-gray-500 py-3 px-2 ">
                {count}
              </button>
              <button
                className="btn bg-white hover:bg-black hover:text-white text-gray-500 py-3 px-2 transition-all rounded-r-md"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
            <div className="gap-5 flex items-center ">
              <button className="bg-black text-white p-2 text-sm">
                Add to Cart
              </button>
              <button className="bg-black text-white p-2 text-sm">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 container mx-auto">
        <p className="text-3xl">You Also May Like</p>
        {relatedProducts.length < 1 && (
          <p className="text-center">No Similar Products found</p>
        )}
        <Carousel
          centerMode={true}
          focusOnSelect={true}
          responsive={responsive}
        >
          {relatedProducts?.map((p, index) => (
            <Product item={p} key={index} />
          ))}
        </Carousel>
      </div>
    </Layout>
  );
};

export default ProductDetails;
