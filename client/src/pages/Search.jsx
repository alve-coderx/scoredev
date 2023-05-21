import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../components/ProductCard/Product";
const Search = () => {
  const [values, setValues] = useSearch();
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
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <Layout title={"Search results"}>
      <div className="container mx-auto py-10">
        <div className="text-left ">
          <div className="flex items-center justify-between space-x-5">
            <h1>Search Resuts : </h1>
            <h6>
              {values?.results.length < 1
                ? "No Products Found"
                : `Found ${values?.results.length}`}
            </h6>
          </div>
          <Carousel
            centerMode={true}
            focusOnSelect={true}
            responsive={responsive}
          >
            {values?.results.map((p, index) => (
              <Product item={p} key={index} />
              // <div className="card m-2" style={{ width: "18rem" }}>
              //   <img
              //     src={`/api/v1/product/product-photo/${p._id}`}
              //     className="card-img-top"
              //     alt={p.name}
              //   />
              //   <div className="card-body">
              //     <h5 className="card-title">{p.name}</h5>
              //     <p className="card-text">
              //       {p.description.substring(0, 30)}...
              //     </p>
              //     <p className="card-text"> $ {p.price}</p>
              //     <button className="btn btn-primary ms-1">More Details</button>
              //     <button className="btn btn-secondary ms-1">ADD TO CART</button>
              //   </div>
              // </div>
            ))}
          </Carousel>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
