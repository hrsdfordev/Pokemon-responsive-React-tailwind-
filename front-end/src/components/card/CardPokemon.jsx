import React from "react";
import { changeColorTypes } from "../../hooks/FillterChangeColor";
import { Link } from "react-router-dom";

const CardPokemon = (props) => {
  return (
    <Link to={`/detail/${props.id}`}
      className="border cursor-pointer border-gray-300 bg-gray-200 p-5 rounded-md w-full flex flex-row justify-start items-center md:flex-col md:w-[30%] lg:w-[23%] md:justify-center"
      
    >
      <img className="transform hover:scale-105" src={props.image} alt="" width={200} />
      <div className=" mt-4 w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold "> {props.name} </h1>
        <div className="flex ">
          {props.type.map((val, idx) => (
            <>{changeColorTypes(val.type.name , idx)}</>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default CardPokemon;
