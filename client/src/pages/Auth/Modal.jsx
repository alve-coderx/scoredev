import React from "react";
import LoginForm from "../../components/Form/LoginForm";

const Modal = () => {
  return (
    <div className="transition-10 duration-50 justify-center items-center flex fixed lg:-top-40   inset-0  outline-0 ">
      <div className="bg-white z-10 rounded-sm lg:mt-20 drop-shadow-xl">
          <LoginForm
          //   setEmail={setEmail}
          //   handleSubmit={handleSubmit}
          //   setPassword={setPassword}
          //   email={email}
          //   password={password}
          />
      </div>
    </div>
  );
};

export default Modal;
