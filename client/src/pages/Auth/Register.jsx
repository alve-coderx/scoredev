import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { AiOutlineUser, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import axios from "axios";

import {
  MdAppRegistration,
  MdDriveFileRenameOutline,
  MdOutlinePassword,
} from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import InpIconControl from "../../components/InpIconControl";
import { toast } from "react-hot-toast";
import RegisterForm from "../../components/Form/RegisterForm";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [question, setQuestion] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/v1/auth/register`, {
        name,
        email,
        password,
        phone,
        address,
        question,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
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
      <div className="h-screen flex flex-col items-center lg:pt-40 ">
        <RegisterForm
          handleSubmit={handleSubmit}
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          setPhone={setPhone}
          setAddress={setAddress}
          setQuestion={setQuestion}
          name={name}
          email={email}
          password={password}
          address={address}
          question={question}
        />
      </div>
    </Layout>
  );
};

export default Register;
