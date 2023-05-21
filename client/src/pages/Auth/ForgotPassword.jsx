import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { AiOutlineUser } from "react-icons/ai";
import axios from "axios";

import { MdAppRegistration, MdOutlinePassword } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import InpIconControl from "../../components/InpIconControl";
import { toast } from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [question, setQuestion] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/v1/auth/forgot-password`, {
        email,
        newPassword,
        question,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="h-screen flex flex-col items-center pt-40 ">
        <div className="w-96">
          <div className="flex items-center justify-center">
            <p className="text-3xl font-[500] text-center">Reset Password</p>
            <div className="text-3xl font-[500] ">
              <MdAppRegistration />
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="py-6 flex flex-col space-y-4"
          >
            <InpIconControl
              stateSeter={setEmail}
              valid={true}
              value={email}
              type="email"
              placeText="Email Address"
              icon={<AiOutlineUser className="text-black text-2xl" />}
            />
            <br />
            <InpIconControl
              stateSeter={setNewPassword}
              valid={true}
              value={newPassword}
              type="password"
              placeText="password"
              icon={<MdOutlinePassword className="text-black text-2xl" />}
            />
            <br />
            <InpIconControl
              stateSeter={setQuestion}
              valid={true}
              value={question}
              type="text"
              placeText="What is your fav sports?"
              icon={<MdOutlinePassword className="text-black text-2xl" />}
            />
            <br />
            <button
              className="text-secondary hover:text-black transition-all font-[600] bg-black hover:bg-secondary py-2"
              type="submit"
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
