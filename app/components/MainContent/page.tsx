import React from "react";

const page = () => {
  return (
    <div
      style={{ backgroundColor: "rgba(255, 255, 255, 0.05) " }}
      className="mx-24 rounded-3xl items-center relative overflow-hidden pt-10 pl-10 pb-10 pr-10"
    >
      <img
        className="cursor-pointer rounded-xl transform transition-transform duration-300 hover:scale-105 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
        src="/book2.png"
        alt=""
      />
    </div>
  );
};

export default page;
