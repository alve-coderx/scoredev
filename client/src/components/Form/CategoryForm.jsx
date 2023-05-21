import React from "react";

const CategoryForm = ({
  handleSubmit,
  name,
  setName,
  description,
  setDescription,
  image,
  setImage,
  icon,
  setIcon,
}) => {
  return (
    <>
      <div className="flex flex-col space-y-5 items-start">
        <div>
          <input
            type="text"
            className="p-3 w-96 border"
            placeholder="Enter category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            className="p-3 w-96 border"
            placeholder="Enter category description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="">
          <label className="bg-black text-white px-4 py-2">
            {image ? image.name : "Upload Photo"}
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              hidden
            />
          </label>
        </div>
        <div className="border w-20">
          {image ? (
            <div className="text-center">
              <img
                src={URL.createObjectURL(image)}
                alt="product_photo"
                height={"200px"}
                className="img img-responsive"
              />
            </div>
          ) : (
            <div className="h-20 animated-pluse"></div>
          )}
        </div>
        <div className="">
          <label className="bg-black text-white px-4 py-2">
            {icon ? image.icon : "Upload icon"}
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={(e) => setIcon(e.target.files[0])}
              hidden
            />
          </label>
        </div>
        <div className="border w-20">
          {icon ? (
            <div className="text-center">
              <img
                src={URL.createObjectURL(icon)}
                alt="product_photo"
                height={"200px"}
                className="img img-responsive"
              />
            </div>
          ) : (
            <div className="h-20 animated-pluse"></div>
          )}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-secondary border py-1 text-lg px-6 my-5 font-[500]"
        >
          Add
        </button>
      </div>
    </>
  );
};

export default CategoryForm;
