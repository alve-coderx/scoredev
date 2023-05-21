import React from "react";
import { useSearch } from "../../context/search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";


const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form
        className="relative border-2 bg-[#F4F6F8] p-3 rounded-md "
        role="search"
        onSubmit={handleSubmit}
      >
        <input
          type="search"
          className="text-slate-400 outline-0  bg-[#F4F6F8]"
          placeholder="Search here"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button
          className="absolute top-0 right-0 border-l-2 p-2 bg-[#F4F6F8]"
          type="submit"
        >
          <AiOutlineSearch className="text-black text-2xl" />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
