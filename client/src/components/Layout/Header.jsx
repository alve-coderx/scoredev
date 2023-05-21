import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineShopping,
  AiOutlineUser,
} from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import logo from "../../assets/logo.png";
import callus from "../../assets/callus.PNG";
import { useAuth } from "../../context/auth";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import CartPage from "../../pages/CartPage";
import DropDown from "../../components/DropDown/DropDown";
import Sidebar from "../Sidebar";
import { links } from "../../utils/links";
import logo_sm from "../../assets/logo_sm.png";

const TopHead = ({ sidebar, setSidebar }) => {
  return (
    <div className="bg-white border-b py-2">
      <div className="flex items-center justify-between container mx-auto px-2">
        <div className="flex space-x-4 items-center">
          <AiOutlineMenu
            className="text-black text-2xl block"
            onClick={() => setSidebar(true)}
          />
          <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
          <img src={logo} alt="logo" className="lg:block hidden w-36 " />
          <img src={logo_sm} alt="logo_sm" className="lg:hidden block w-10" />
        </div>
        <div className="lg:w-[30rem]">
          <SearchInput />
        </div>
        <img
          src={callus}
          alt="callus"
          className="lg:w-58 w-40 lg:block hidden"
        />
      </div>
    </div>
  );
};
const MenuItems = ({
  setOpenMenu,
  opemMenu,
  auth,
  categories,
  open,
  setOpen,
  setAuth,
}) => {
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };
  return (
    <div className="bg-white border-b p-2">
      <div className="flex items-center justify-between space-x-2 container mx-auto">
        <div
          onMouseEnter={() => setOpenMenu(true)}
          onMouseLeave={() => setOpenMenu(false)}
          className="relative cursor-pointer"
        >
          <div className="flex items-center bg-secondary rounded-md p-2 justify-between w-52">
            <div className="flex items-center">
              <BiCategoryAlt className="font-[600] text-lg" />
              <span className="font-[600]">CATEGORIES</span>
            </div>
            <MdOutlineKeyboardArrowDown className="font-[600] text-xl" />
          </div>
          <div
            className={`absolute top-10 rounded-b-md  bg-white w-full overflow-y-hidden flex flex-col left-0 transition-all ${
              opemMenu ? "h-auto" : "h-0 "
            }`}
          >
            {categories.map((c, index) => (
              <NavLink
                to={`/category/${c.slug}`}
                key={index}
                className="hover:opacity-60 text-center px-5 py-2 font-[600] text-sm"
              >
                {c.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="lg:flex hidden items-center space-x-2 ">
          {links.map((item, index) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={
                index === links.length - 1
                  ? "text-lg font-[500]  px-4"
                  : "border-r text-lg font-[500]  px-4"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center space-x-5">
          <div>
            {/* <span>{cart.length}</span> */}
            <AiOutlineShopping
              className="text-2xl cursor-pointer"
              onClick={() => setOpen(true)}
            />
          </div>
          {<CartPage open={open} setOpen={setOpen} />}
          {auth.user ? (
            <DropDown
              label={<AiOutlineUser className="text-2xl cursor-pointer" />}
            >
              <NavLink
                to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
              >
                <p className=" font-[500] hover:text-secondary opacity-50">
                  {auth?.user?.role === 1 ? "Dashboard" : "Profile"}
                </p>
              </NavLink>
              {auth?.user?.role === 1 ? (
                ""
              ) : (
                <>
                  <NavLink to={`/dashboard/user/orders`}>
                    <p className=" font-[500] hover:text-secondary opacity-50">
                      Orders
                    </p>
                  </NavLink>
                  <NavLink to={`/`}>
                    <p className=" font-[500] hover:text-secondary opacity-50">
                      Account Details
                    </p>
                  </NavLink>
                </>
              )}

              <button
                onClick={handleLogout}
                className="font-[500] hover:text-secondary opacity-50"
              >
                Logout
              </button>
            </DropDown>
          ) : (
            <NavLink to="/login">
              <FiLogIn className="text-xl cursor-pointer" />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};
const Header = () => {
  const [open, setOpen] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [opemMenu, setOpenMenu] = useState(false);
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  return (
    <>
      <nav className="fixed w-screen z-10">
        <TopHead sidebar={sidebar} setSidebar={setSidebar} />
        <MenuItems
          categories={categories}
          auth={auth}
          setOpenMenu={setOpenMenu}
          opemMenu={opemMenu}
          setOpen={setOpen}
          open={open}
          cart={cart}
          setAuth={setAuth}
        />
      </nav>
    </>
  );
};

export default Header;
