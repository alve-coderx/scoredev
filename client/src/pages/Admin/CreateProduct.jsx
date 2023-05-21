import React, { useEffect, useState } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Select } from "antd";
import AdminLayout from "../../components/Layout/AdminLayout";

const { Option } = Select;
const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");

  //get all category
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
  useEffect(() => {
    getAllCategory();
  }, []);

  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);
      const { data } = axios.post(
        "/api/v1/product/create-product",
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <AdminLayout title={"Dashboard - Create Product"}>
      <div className="container mx-auto">
        <div>
          <p className="text-3xl font-[600]">Create Product</p>
        </div>
        <div className="bg-white p-5 flex flex-col space-y-5 border drop-shadow-md">
          <div>
            <input
              type="text"
              value={name}
              placeholder="write a name"
              className="p-3 border"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="">
            <textarea
              type="text"
              value={description}
              placeholder="write a description"
              className="p-3 border w-full h-80"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="">
            <label className="border p-3">
              {photo ? photo.name : "Upload Photo"}
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files[0])}
                hidden
              />
            </label>
          </div>
          <div className="border w-20">
            {photo && (
              <div className="text-center">
                <img
                  src={URL.createObjectURL(photo)}
                  alt="product_photo"
                  height={"200px"}
                  className="img img-responsive"
                />
              </div>
            )}
          </div>

          <div className="">
            <input
              type="number"
              value={price}
              placeholder="write a Price"
              className="p-3 border"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="">
            <input
              type="number"
              value={quantity}
              placeholder="write a quantity"
              className="p-3 border"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <Select
            bordered={false}
            placeholder="Select a category"
            size="large"
            showSearch
            className="border w-48"
            onChange={(value) => {
              setCategory(value);
            }}
          >
            {categories?.map((c) => (
              <Option key={c._id} value={c._id}>
                {c.name}
              </Option>
            ))}
          </Select>
          <div className="mb-3">
            <Select
              bordered={false}
              placeholder="Select Shipping "
              size="large"
              showSearch
              className="border w-48"
              onChange={(value) => {
                setShipping(value);
              }}
            >
              <Option value="0">No</Option>
              <Option value="1">Yes</Option>
            </Select>
          </div>
          <div className="flex justify-end">
            <button className="bg-black  text-white p-3 text-sm" onClick={handleCreate}>
              CREATE PRODUCT
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default CreateProduct;
