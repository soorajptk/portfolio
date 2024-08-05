import React from "react";
import PropTypes from "prop-types";

export const Button = ({ label, onClick,icon}) => {
  return (
    <button
      className="px-6 flex w-full md:w-fit justify-center items-center gap-3 py-[0.25rem] text-center hover:bg-black rounded-2xl text-buttonTextColor font-medium leading-[2.047rem] text-[0.825rem] md:text-7xl border-[1px] border-white/15 backdrop-blur-md bg-white/15"
      onClick={onClick}
    >
      {label} <span>{icon}</span>
    </button>
  );
};


Button.propTypes = {
    label: PropTypes.string,
    onClick:PropTypes.func,
    icon:PropTypes.any
  };
  