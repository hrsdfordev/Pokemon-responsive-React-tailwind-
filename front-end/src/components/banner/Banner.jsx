import React from "react";
import mainBanner from "../../assets/images/banner/mainBanner.png";

const Banner = () => {
  return (
    <div className="w-full bg-[#F1C27B] mb-2">
      <div className="md:flex flex-row-reverse items-center mx-auto lg:container">
        <div className="p-5 lg:p-10">
          <img
            className="w-full md:w-[95%] md:mx-auto"
            src={mainBanner}
            alt=""
          />
        </div>
        <div className="flex flex-col items-center lg:text-xl">
          <h1 className="text-3xl font-bold text-white"> Poke'mon </h1>
          <p className="p-5">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor animi
            fugiat libero. Quaerat nemo laborum ipsa accusantium beatae facilis
            illum ut, voluptas facere, quae eius pariatur ducimus eveniet,
            incidunt reiciendis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
