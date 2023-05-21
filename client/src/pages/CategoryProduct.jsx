import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams } from "react-router-dom";
// import "../styles/CategoryProductStyles.css";
import axios from "axios";
import Product from "../components/ProductCard/Product";
const CategoryProduct = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h4 className="">{category?.name}</h4>
          <h6 className="">{products?.length}  </h6>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-7 md:grid-cols-3 grid-cols-2 gap-5 justify-items-center">
            {products?.map((p) => (
              <Product item={p} />
            ))}
          </div>
          {/* <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Loadmore"}
              </button>
            )}
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
