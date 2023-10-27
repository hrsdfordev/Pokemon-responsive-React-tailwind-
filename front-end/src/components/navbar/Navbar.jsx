import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <>
      <div className="container mx-auto p-5 shadow-md sm:container ">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div
              onClick={handleToggleMenu}
              className="translate-y-[2px] mr-1 hover:bg-gray-400 hover:text-white hover:duration-300  p-2 rounded-md md:hidden"
            >
              {!toggleMenu ? (
                <svg
                  className="text-xl"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path fill="none" d="M0 0h20v20H0z" />
                  <path d="M3 9.25h14v1.5H3zM3 3h14v1.5H3zM3 15.5h14V17H3z" />
                </svg>
              ) : (
                <svg
                  className="text-xl"
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
                </svg>
              )}
            </div>

            <h1 className="font-medium text-2xl"> Pokemon</h1>
          </div>
          <div className="hidden md:inline-flex">
            <h1 className="mx-3 cursor-pointer hover:font-semibold  ">
              Poke'mon
            </h1>
            <h1 className="mx-3 cursor-pointer hover:font-semibold  ">About</h1>
            <h1 className="mx-3 cursor-pointer hover:font-semibold  ">
              Contacts
            </h1>
          </div>
          <div className="bg-gray-300 px-3 py-2 rounded-md font-medium hover:bg-gray-400 hover:text-white hover:duration-300 cursor-pointer">
            {" "}
            Get Started{" "}
          </div>
        </div>
      </div>
      {toggleMenu ? (
        <div
          className="flex flex-col justify-center w-full border border-gray-300  md:hidden
       "
        >
            <div className="p-2">
            <h1 className="my-2 translate-x-5 cursor-pointer hover:font-semibold  ">
              Poke'mon
            </h1>
            <h1 className="my-2 translate-x-5  cursor-pointer hover:font-semibold  ">About</h1>
            <h1 className="my-2 translate-x-5  cursor-pointer hover:font-semibold  ">
              Contacts
            </h1>
            </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
