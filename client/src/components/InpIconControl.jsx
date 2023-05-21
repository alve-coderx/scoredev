import React from "react";

const InpIconControl = ({
  icon,
  placeText,
  stateSeter,
  value,
  type,
  valid,
}) => {
  return (
    <div className="relative border  border-black flex">
      <div className="p-2 bg-secondary ">
        {icon}
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => stateSeter(e.target.value)}
        className="text-black outline-0 lg:w-96 p-2 "
        placeholder={placeText}
        required={valid}
      />
    </div>
  );
};

export default InpIconControl;
