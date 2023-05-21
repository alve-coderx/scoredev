import React, { useEffect, useState } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuth } from "../../context/auth";
import axios from "axios";
import moment from "moment";

const AdminOrders = () => {
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "deliverd",
    "cancel",
  ]);
  const [changeStatus, setCHangeStatus] = useState("");
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/all-orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  const handleChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(`/api/v1/auth/order-status/${orderId}`, {
        status: value,
      });
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen">
      <div className="flex w-screen">
        <div>
          <AdminMenu />
        </div>
        <div className="bg-[#F5F7FA] w-full p-5">
          <div className="container mx-auto">
            <p>All Orders</p>
            {orders?.map((o, i) => {
              return (
                <div className="flex flex-col">
                  <div className="overflow-x-auto ">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                          <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                              <th scope="col" className="px-6 py-4">
                                #
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Status
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Buyer
                              </th>
                              <th scope="col" className="px-6 py-4">
                                {" "}
                                date
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Payment
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Quantity
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Product
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-4 font-medium">
                                {i + 1}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {o?.status}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {o?.buyer?.name}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {moment(o?.createAt).fromNow()}
                              </td>
                              <td>{"Success"}</td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {o?.products?.length}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {o?.products?.map((p, i) => (
                                  <div className="flex space-x-2" key={p._id}>
                                    <div className="col-md-4">
                                      <img
                                        src={`/api/v1/product/product-photo/${p._id}`}
                                        className="card-img-top"
                                        alt={p.name}
                                        width="100px"
                                        height={"100px"}
                                      />
                                    </div>
                                    <div className="col-md-8">
                                      <p>{p.name}</p>
                                      <p>{p.description.substring(0, 30)}</p>
                                      <p>Price : {p.price}</p>
                                    </div>
                                  </div>
                                ))}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
