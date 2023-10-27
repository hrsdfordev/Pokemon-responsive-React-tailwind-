import React from "react";
import { changeColorTypes } from "../../hooks/FillterChangeColor";

const CardPokemon = (props) => {
  return (
    <div
      className="border cursor-pointer border-gray-300 bg-gray-200 p-5 rounded-md w-full flex flex-row justify-start items-center md:flex-col md:w-[30%] lg:w-[23%] md:justify-center"
      key={props.idx}
    >
      <img className="transform hover:scale-105" src={props.image} alt="" width={200} />
      <div className=" mt-4 w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold "> {props.name} </h1>
        <div className="flex ">
          {props.type.map((val, idx) => (
            <>{changeColorTypes(val.type.name)}</>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardPokemon;
