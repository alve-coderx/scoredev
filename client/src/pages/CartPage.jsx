import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import admin_ico from "../assets/admin_ico.svg";
import axios from "axios";
import toast from "react-hot-toast";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
// import "../styles/CartStyles.css";

const CartPage = ({ setOpen, open }) => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "BDT",
      });
    } catch (error) {
      console.log(error);
    }
  };
  //detele item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  //handle payments
  const handlePayment = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/v1/product/braintree/payment", {
        cart,
      });
      setLoading(false);
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/dashboard/user/orders");
      toast.success("Successfully ");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-md pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col bg-[#F5F5F5] shadow-xl">
                    <div className="flex justify-between items-center p-2">
                      <p className="text-xl cursor-pointer" onClick={() => setOpen(false)}>
                        <MdKeyboardArrowRight />
                      </p>
                      <p>
                        {cart?.length
                          ? `Item : ${cart.length}  ${
                              auth?.token ? "" : "please login to checkout !"
                            }`
                          : " Your Cart Is Empty"}
                      </p>
                      <p>
                        <div>
                          <img
                            src={admin_ico}
                            alt="admin_ico"
                            className="bg-white rounded-full p-2 w-10"
                          />
                        </div>
                        {/* {!auth?.user
                          ? "Hello Guest"
                          : `Hello  ${auth?.token && auth?.user?.name}`} */}
                      </p>
                    </div>
                    <div className="container ">
                      <div className="row ">
                        <div className="flex flex-col items-center px-2 h-[790px] pb-10 overflow-y-auto space-y-2">
                          {cart?.map((p) => (
                            <div
                              className="cursor-pointer flex items-start justify-between bg-white shadow-lg w-full p-2 rounded-lg"
                              key={p._id}
                            >
                              <div className="flex items-center space-x-5">
                                <div>
                                  <img
                                    src={`/api/v1/product/product-photo/${p._id}`}
                                    className=" w-40 h-28"
                                    alt={p.name}
                                  />
                                </div>
                                <div>
                                  <div>
                                    <p className="text-black font-[600]">
                                      {p.name}
                                    </p>
                                    <p className="text-gray-500 font-[400] text-sm">
                                      {p.description.substring(0, 30)}
                                    </p>
                                    <p className="text-black font-[600] text-sm">
                                      {p.price}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <button
                                className="bg-secondary text-sm rounded-md p-2"
                                onClick={() => removeCartItem(p._id)}
                              >
                                <AiTwotoneDelete />
                              </button>
                            </div>
                          ))}
                        </div>
                        <div className="absolute border-t  bg-white bottom-0 w-full p-5">
                          <div>
                            <div className="font-[600] flex items-center justify-between">
                              <p>Total :</p>
                              <p>{totalPrice()} </p>
                            </div>
                            <>
                              <div className="flex font-[600]  items-start justify-between">
                                <p>Address :</p>
                                <div className="flex items-center">
                                  <p>{auth?.user?.address}</p>
                                  <AiFillEdit
                                  className="cursor-pointer"
                                    onClick={() =>
                                      navigate("/dashboard/user/profile")
                                    }
                                  />
                                </div>
                              </div>
                            </>
                          </div>

                          <button
                            className="w-full bg-secondary py-3 shadow-xl mt-5 font-[600] rounded-lg"
                            onClick={handlePayment}
                            disabled={loading || !auth?.user?.address}
                          >
                            {loading ? "Processing ...." : "Checkout"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CartPage;
