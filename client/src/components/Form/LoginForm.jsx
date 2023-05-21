import React from "react";
import InpIconControl from "../InpIconControl";
import { AiOutlineUser } from "react-icons/ai";
import { MdAppRegistration, MdOutlinePassword } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

const LoginForm = ({
  handleSubmit,
  password,
  email,
  setEmail,
  setPassword,
}) => {
  const navigate = useNavigate();

  return (
    <div className="lg:w-96 p-4">
      <div className="flex items-center justify-center">
        <p className="text-3xl font-[500] text-center">Login</p>
        <div className="text-3xl font-[500] ">
          <MdAppRegistration />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="py-6 flex flex-col space-y-4">
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
        <span
          onClick={() => navigate("/forgot-password")}
          className="text-secondary hover:text-black cursor-pointer"
        >
          Forgot password?
        </span>
        <button
          className="text-secondary hover:text-black transition-all font-[600] bg-black hover:bg-secondary py-2"
          type="submit"
        >
          Login
        </button>
      </form>
      <div className="text-black font-[600] text-sm flex items-center justify-between">
        <p>Already have an account?</p>
        <NavLink to="/register">
          <span className="text-secondary hover:text-black cursor-pointer">
            register
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default LoginForm;
