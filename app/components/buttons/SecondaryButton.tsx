import React from "react";

const SecondaryButton = (props: any) => {
  return (
    <div>
      <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
        {props.title}
      </button>
    </div>
  );
};

export default SecondaryButton;
