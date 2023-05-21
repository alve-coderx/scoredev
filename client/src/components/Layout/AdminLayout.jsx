import React from "react";
import { Toaster } from "react-hot-toast";
import AdminMenu from "./AdminMenu";

const AdminLayout = ({ children }) => {
  return (
    <div className="h-screen overflow-hidden flex w-screen">
      <div>
        <AdminMenu />
      </div>
      <div className="bg-[#F5F7FA] overflow-y-auto h-full w-full p-5">
        <Toaster />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
