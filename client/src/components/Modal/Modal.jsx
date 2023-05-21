import React, { useState } from "react";

export default function Modal({setVisible,children}) {
  return (
    <>
      <div className="transition-10 duration-50 justify-center items-center flex fixed inset-0  z-50 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto ounded-lg ">
          <div onClick={() => setVisible(false)}>Close</div>
          <div className="lg:w-[500px] w-[22rem] bg-[#f6f9fb] py-4 lg:px-6 md:px-9  rounded-xl flex transform flex-col gap-8 overflow-hidden modal-cl border p-4 text-left align-middle drop-shadow-2xl transition-alls opacity-100 scale-100">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
