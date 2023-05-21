import React, { useState } from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { BsBorderStyle } from "react-icons/bs";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo_lg from "../../assets/logo_lg.png";
import logo_lg_menu from "../../assets/logo_lg_menu.png";
import admin_ico from "../../assets/admin_ico.svg";
import admin_logout from "../../assets/admin_logout.svg";
import { useAuth } from "../../context/auth";

const RenderNavItem = ({ goPath, icon, label }) => {
  return (
    <NavLink
      to={goPath}
      className="text-white text-lg flex items-center space-x-2"
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
};

const RenderNavIcons = ({ goPath, icon }) => {
  return (
    <NavLink to={goPath} className="text-white text-2xl ">
      {icon}
    </NavLink>
  );
};

const AdminMenu = () => {
  const [menu, setMenu] = useState(false);
  const [auth] = useAuth();

  return (
    <div>
      {/* Desktop Nav  */}
      <div
        className={`${
          menu ? "w-[15rem]" : "w-[5rem] "
        } hidden bg-admin_primary transition-all lg:flex flex-col relative justify-between border-r relative border-gray-600`}
      >
        <div>
          <div className="overflow-y-auto scroll h-screen pb-10 ">
            <div className="shadow-xl">
              <img src={menu ? logo_lg : logo_lg_menu} alt="logo_lg" />
            </div>
            <div
              onClick={() => setMenu((prev) => !prev)}
              className={`${
                menu ? "border-y-secondary " : "border-x-secondary "
              }bg-white absolute rounded-full cursor-pointer border drop-shadow-2xl p-1 text-xl bottom-28 -right-3 z-10`}
            >
              {menu ? <BiArrowFromRight /> : <BiArrowFromLeft />}
            </div>
            {menu ? (
              <div className="flex flex-col items-start p-4 space-y-10 mt-20">
                <RenderNavItem
                  goPath="/dashboard/admin/create-category"
                  icon={<BiCategoryAlt />}
                  label="Create Category"
                />
                <RenderNavItem
                  goPath="/dashboard/admin/create-product"
                  icon={<MdProductionQuantityLimits />}
                  label="Create Product"
                />
                <RenderNavItem
                  goPath="/dashboard/admin/products"
                  icon={<MdProductionQuantityLimits />}
                  label="Products"
                />
                <RenderNavItem
                  goPath="/dashboard/admin/orders"
                  icon={<BsBorderStyle />}
                  label="Orders"
                />
                {/* <NavLink
              to="/dashboard/admin/users"
              className="text-white "
            >
              Users
            </NavLink> */}
                <NavLink to="/">
                  <button className="fixed bottom-40 bg-white left-0 py-2 px-5 rounded-r-full">
                    <img
                      src={admin_logout}
                      alt="admin_logout"
                      className="w-8"
                    />
                  </button>
                </NavLink>
                <NavLink to="/dashboard/admin">
                  <div className="flex items-center fixed bottom-10 space-x-5">
                    <div className="bg-white border border-secondary  rounded-full p-2">
                      <img src={admin_ico} alt="admin_ico" className="w-8" />
                    </div>
                    <div className="text-white text-sm">
                      <span>{auth?.user?.name}</span>
                      <br />
                      <span>{auth?.user?.email}</span>
                    </div>
                  </div>
                </NavLink>
              </div>
            ) : (
              <div className="flex flex-col items-center p-4 space-y-10 mt-20">
                <RenderNavIcons
                  goPath="/dashboard/admin/create-category"
                  icon={<BiCategoryAlt />}
                  label="Create Category"
                />
                <RenderNavIcons
                  goPath="/dashboard/admin/create-product"
                  icon={<MdProductionQuantityLimits />}
                  label="Create Product"
                />
                <RenderNavIcons
                  goPath="/dashboard/admin/products"
                  icon={<MdProductionQuantityLimits />}
                  label="Products"
                />
                <RenderNavIcons
                  goPath="/dashboard/admin/orders"
                  icon={<BsBorderStyle />}
                  label="Orders"
                />
                {/* <NavLink
              to="/dashboard/admin/users"
              className="text-white "
            >
              Users
            </NavLink> */}
                <div className="bg-white border border-secondary rounded-full fixed bottom-10 p-2">
                  <NavLink to="/dashboard/admin">
                    <img src={admin_ico} alt="admin_ico" className="w-8" />
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Mobile Nav  */}
      <div
        className={`${
          menu ? "w-[15rem]" : "w-[5rem] "
        } flex bg-admin_primary transition-all lg:hidden flex-col relative justify-between border-r relative border-gray-600`}
      >
        <div>
          <div className="overflow-y-auto scroll h-screen pb-10 ">
            <div className="shadow-xl">
              <img src={menu ? logo_lg : logo_lg_menu} alt="logo_lg" />
            </div>
            <div
              onClick={() => setMenu((prev) => !prev)}
              className={`${
                menu ? "border-y-secondary " : "border-x-secondary "
              }bg-white absolute rounded-full cursor-pointer border drop-shadow-2xl p-1 text-xl bottom-28 -right-3 z-10`}
            >
              {menu ? <BiArrowFromRight /> : <BiArrowFromLeft />}
            </div>
            {menu ? (
              <div className="flex flex-col items-start p-4 space-y-10 mt-20">
                <RenderNavItem
                  goPath="/dashboard/admin/create-category"
                  icon={<BiCategoryAlt />}
                  label="Create Category"
                />
                <RenderNavItem
                  goPath="/dashboard/admin/create-product"
                  icon={<MdProductionQuantityLimits />}
                  label="Create Product"
                />
                <RenderNavItem
                  goPath="/dashboard/admin/products"
                  icon={<MdProductionQuantityLimits />}
                  label="Products"
                />
                <RenderNavItem
                  goPath="/dashboard/admin/orders"
                  icon={<BsBorderStyle />}
                  label="Orders"
                />
                {/* <NavLink
              to="/dashboard/admin/users"
              className="text-white "
            >
              Users
            </NavLink> */}
                <NavLink to="/">
                  <button className="fixed bottom-40 bg-white left-0 py-2 px-5 rounded-r-full">
                    <img
                      src={admin_logout}
                      alt="admin_logout"
                      className="w-8"
                    />
                  </button>
                </NavLink>
                <NavLink to="/dashboard/admin">
                  <div className="flex items-center fixed bottom-10 space-x-5">
                    <div className="bg-white border border-secondary  rounded-full p-2">
                      <img src={admin_ico} alt="admin_ico" className="w-8" />
                    </div>
                    <div className="text-white text-sm">
                      <span>{auth?.user?.name}</span>
                      <br />
                      <span>{auth?.user?.email}</span>
                    </div>
                  </div>
                </NavLink>
              </div>
            ) : (
              <div className="flex flex-col items-center p-4 space-y-10 mt-20">
                <RenderNavIcons
                  goPath="/dashboard/admin/create-category"
                  icon={<BiCategoryAlt />}
                  label="Create Category"
                />
                <RenderNavIcons
                  goPath="/dashboard/admin/create-product"
                  icon={<MdProductionQuantityLimits />}
                  label="Create Product"
                />
                <RenderNavIcons
                  goPath="/dashboard/admin/products"
                  icon={<MdProductionQuantityLimits />}
                  label="Products"
                />
                <RenderNavIcons
                  goPath="/dashboard/admin/orders"
                  icon={<BsBorderStyle />}
                  label="Orders"
                />
                {/* <NavLink
              to="/dashboard/admin/users"
              className="text-white "
            >
              Users
            </NavLink> */}
                <div className="bg-white border border-secondary rounded-full fixed bottom-10 p-2">
                  <NavLink to="/dashboard/admin">
                    <img src={admin_ico} alt="admin_ico" className="w-8" />
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;
