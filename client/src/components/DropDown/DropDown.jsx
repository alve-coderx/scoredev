import React, { useState } from "react";

const DropDown = ({children,label}) => {
  const [opemMenu, setOpenMenu] = useState(false);

  return (
    <div
      onMouseEnter={() => setOpenMenu(true)}
      onMouseLeave={() => setOpenMenu(false)}
      className="p-2 relative cursor-pointer bg-white z-10 "
    >
      <div>
        {label}
      </div>
      <div
        className={`absolute top-10 drop-shadow-xl -left-44 border z-10  p-4 overflow-y-hidden flex bg-white items-start flex-col  lg:left-0 transition-all ${
          opemMenu ? "h-auto w-48" : "hidden"
        }`}
      > 
        {children}
      </div>
    </div>
  );
};

export default DropDown;
