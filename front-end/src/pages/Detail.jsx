import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { usePokemon } from "../contexts";
import { LoadinPoke } from "../components/loading/LoadinPoke";
import { changeColorTypes } from "../hooks/FillterChangeColor";



const Detail = () => {
  let { id } = useParams();
  const { getPokemonByName, state, pokemonLoading, toggleMenuBack } = usePokemon();
  
  const onNext = () => {
  }

  useEffect(() => {
    toggleMenuBack(false);
    console.log(id);
    getPokemonByName(id);
  }, [id]);

  return (
    <>
      {pokemonLoading ? (
        <>
          <div className="mx-auto  lg:container">
            <div className="flex flex-col items-center justify-center ">
              <div className="flex w-full items-center justify-between">
                <Link to={`/detail/${id <=1 ? 1 : parseFloat(id)-1}`} className="transform text-5xl duration-300 hover:scale-105 hover:bg-gray-600  cursor-pointer m-2 rounded-md bg-gray-500">
                  <svg
                    className=" text-white"
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M689 165.1L308.2 493.5c-10.9 9.4-10.9 27.5 0 37L689 858.9c14.2 12.2 35 1.2 35-18.5V183.6c0-19.7-20.8-30.7-35-18.5z" />
                  </svg>
                </Link>
                <img
                  className=" border-white  transform hover:scale-105 mt-3  w-[300px] md:w-[40%] lg:w-[50%] xl:w-[35%]"
                  src={state?.pokemonByOne?.sprites?.other?.home?.front_default}
                  alt=""
                  width={200}
                />
                 <Link to={`/detail/${parseInt(id)+1}`}className="transform text-5xl duration-300 hover:scale-105 hover:bg-gray-600  cursor-pointer m-2 rounded-md bg-gray-500">
                  <svg
                    className="text-white"
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z" />
                  </svg>
                </Link>
              </div>
              <h1 className="font-medium text-3xl mt-2">
                {state?.pokemonByOne?.name}
              </h1>
              <div className="grid grid-cols-2 gap-5 w-full shadow border border-gray-300 mt-2 rounded-md p-3">
               
               <div className="col-span-1  ">
                  <div className="flex flex-col md:justify-center  ">
                    <h1 className="font-medium text-xl "> Abilities  </h1>
                    <hr className="h-[1.5px] bg-gray-300 mt-2" />
                    {state.pokemonByOne.abilities.map((val, idx) => (
                      <div key={idx} className=" text-lg w-full">
                        {changeColorTypes(val.ability.name)}
                      </div>
                    ))}
                    <div className="hidden md:block">
                    <h1 className="font-medium text-xl mt-3"> Types  </h1>
                    <hr className="h-[1.5px] bg-gray-300 mt-2" />
                    {state.pokemonByOne.types.map((val, idx) => (
                      <div key={idx} className=" text-lg w-full">
                        {changeColorTypes(val.type.name)}
                      </div>
                    ))}
                    </div>
                  </div>
                </div>

                <div className="col-span-1 md:hidden">
                  <div className="flex flex-col md:flex-row md:justify-center md:items-center ">
                    <h1 className="font-medium text-xl "> Type </h1>
                    <hr className="h-[1.5px] bg-gray-300 mt-2" />
                    {state.pokemonByOne.types.map((val, idx) => (
                      <div key={idx} className=" text-lg">
                        {changeColorTypes(val.type.name)}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1">
                      <div className="flex flex-col">
                        <h1 className="font-medium text-xl mt-5 mb-3 md:mt-0 md:mb-0"> State </h1>
                        <hr className="h-[1.5px] bg-gray-300 mt-2 mb-3" />
                        <div className="w-full pl-3 rounded-md">
                          {state.pokemonByOne.stats.map((val , idx) => (<>
                            <div className="flex items-center my-1" key={idx}>
                              <h1 className="font-medium uppercase"> {val.stat.name} : </h1> 
                              <div className="ml-3 w-[50%] rounded-md h-5 bg-gray-300"> 
                                <div style={val.base_stat > 100 ? { backgroundColor : 'orange' , width : val.base_stat } : { backgroundColor : 'green' , width : val.base_stat}  } className="h-full bg-green-500 rounded-md text-sm">
                                  <h1 className="text-center text-white"> {val.base_stat}  </h1>
                                </div>
                              </div>
                            </div>
                          </>))}
                        </div>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <LoadinPoke />
      )}
    </>
  );
};

export default Detail;
