import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuth } from "../../context/auth";
const DetailsCard = ({ label, amount, value, statistics }) => {
  return (
    <div className="bg-white p-5 border drop-shadow-sm">
      <p className="text-[#828f99]">{label}</p>
      <div className="flex items-center justify-between mt-10">
        {amount && <span className="text-4xl font-[500]">{amount}</span>}
        {value && <span className="text-4xl font-[500]">${value}</span>}
        <div className="flex flex-col space-y-5 items-end">
          <span className="">{statistics}%</span>
          <span className="text-[#828f99] text-xs">Compared to April 2021</span>
        </div>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <div className="h-screen">
      <div className="flex w-screen">
        <div>
          <AdminMenu />
        </div>
        <div className="bg-[#F5F7FA] w-full p-5">
          <div className="container mx-auto">
            <div>
              <p className="text-3xl font-[600]">Dashboard</p>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
              <DetailsCard
                label="Total sells"
                value={3799.0}
                statistics={34.7}
              />
              <DetailsCard
                label="Average order value"
                value={3799.0}
                statistics={34.7}
              />
              <DetailsCard
                label="Total orders"
                amount={560}
                statistics={34.7}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
