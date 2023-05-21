import React from "react";
import InpIconControl from "../InpIconControl";
import {
  MdAppRegistration,
  MdDriveFileRenameOutline,
  MdOutlinePassword,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { AiOutlinePhone, AiOutlineUser } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const RegisterForm = ({
  handleSubmit,
  setName,
  setEmail,
  setPassword,
  setPhone,
  setAddress,
  setQuestion,
  name,
  email,
  password,
  phone,
  address,
  question,
  
}) => {
  return (
    <div className="w-96">
      <div className="flex items-center justify-center">
        <p className="text-3xl font-[500] text-center">Register</p>
        <div className="text-3xl font-[500] ">
          <MdAppRegistration />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="py-6 flex flex-col space-y-4">
        <InpIconControl
          stateSeter={setName}
          valid={true}
          value={name}
          type="text"
          placeText="Name"
          icon={<MdDriveFileRenameOutline className="text-black text-lg" />}
        />
        <br />
        <InpIconControl
          stateSeter={setEmail}
          valid={true}
          value={email}
          type="email"
          placeText="Email Address"
          icon={<AiOutlineUser className="text-black text-lg" />}
        />
        <br />
        <InpIconControl
          stateSeter={setPassword}
          valid={true}
          value={password}
          type="password"
          placeText="password"
          icon={<MdOutlinePassword className="text-black text-lg" />}
        />
        <br />
        <InpIconControl
          stateSeter={setPhone}
          valid={true}
          value={phone}
          type="number"
          placeText="Phone"
          icon={<AiOutlinePhone className="text-black text-lg" />}
        />
        <br />
        <InpIconControl
          stateSeter={setAddress}
          valid={true}
          value={address}
          type="text"
          placeText="Address"
          icon={<GoLocation className="text-black text-lg" />}
        />
        <br />
        <InpIconControl
          stateSeter={setQuestion}
          valid={true}
          value={question}
          type="text"
          placeText="Address"
          icon={<GoLocation className="text-black text-lg" />}
        />
        <button
          className="text-secondary hover:text-black transition-all font-[600] bg-black hover:bg-secondary py-2"
          type="submit"
        >
          Create Account
        </button>
      </form>
      <div className="text-black font-[600] text-sm flex items-center justify-between">
        <p>Already have an account?</p>
        <NavLink to="/login">
          <span className="text-secondary hover:text-black cursor-pointer">
            Login
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default RegisterForm;
