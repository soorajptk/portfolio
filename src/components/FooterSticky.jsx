import React from "react";

export const FooterSticky = () => {
  return (
    <a
      download="pranavsaidas.pdf"
      href="/files/resume.pdf"
      className="fixed w-full h-[2.5rem] md:h-[4rem] text-[0.85rem] md:text-[1.8rem] flex items-center justify-center text-buttonTextColor z-10 text-center  bottom-0 hover:bg-black cursor-pointer rounded-t-2xl backdrop-blur-sm bg-white/15"
    >
      Download Resume
    </a>
  );
};
