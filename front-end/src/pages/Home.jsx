
import { useEffect, useState } from "react";
import { listMenuCard } from "../utils/constance";
import { usePokemon } from "../contexts/index";
import { LoadinPoke } from "../components/loading/LoadinPoke";
import Banner from '../components/banner/Banner'
import CardPokemon from "../components/card/CardPokemon";
import CardMenu from "../components/card/CardMenu";



const Home = () => {

  const [plusIndex , setPlusIndex] = useState(0)
  const { state, fetchPokemon, pokemonLoading , toggleMenuBack } = usePokemon();

  useEffect(() => {
    toggleMenuBack(false)
    fetchPokemon(plusIndex);
  }, [plusIndex]);

  return (
    <>
  
    <Banner />
      <div className="flex flex-wrap gap-3 justify-center mx-auto lg:container">
        {listMenuCard.map((val, idx) => (
          <CardMenu avatar={val.avatar} title={val.title} detail={val.detail} />
        ))}
      </div>
      {!pokemonLoading ? (
        <LoadinPoke/>
      ) : (
        <div className="flex bg-gray-500 p-5 flex-wrap gap-3 justify-center mx-auto lg:container">
          {state?.pokemon?.map((val, idx) => (
            <>
              <CardPokemon
                id={val?.id}
                image={val?.sprites?.other?.home?.front_default}
                name={val?.name}
                type={val?.types}
              />
            </>
          ))}
        </div>
      )}
      <div className="flex justify-center mt-5">
      <button className="px-3 py-2 text-lg font-medium border border-gray-300 rounded-md" onClick={()=>setPlusIndex((index) => index+12)}> Load more.... </button>
      </div>
  </> 
  )
}

export default Home