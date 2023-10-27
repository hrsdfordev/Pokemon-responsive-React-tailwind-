import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import CardMenu from "./components/card/CardMenu";
import Footer from "./components/footer/Footer";
import { listMenuCard } from "./utils/constance";
import { usePokemon } from "./contexts";
import CardPokemon from "./components/card/CardPokemon";
import { LoadinPoke } from "./components/loading/LoadinPoke";

function App() {
  const [count, setCount] = useState(0);
  const index = [1, 2, 3, 4];
  const [plusIndex , setPlusIndex] = useState(0)
  const { state, fetchPokemon, pokemonLoading } = usePokemon();

  useEffect(() => {
    fetchPokemon(plusIndex);
    console.log(state.pokemon);
  }, [plusIndex]);

  return (
    <>
      <Navbar />
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
          {state.pokemon.map((val, idx) => (
            <>
              <CardPokemon
                key={idx}
                image={val.sprites.other.home.front_default}
                name={val.name}
                type={val.types}
              />
            </>
          ))}
        </div>
      )}
      <div className="flex justify-center mt-5">

      <button className="px-3 py-2 text-lg font-medium border border-gray-300 rounded-md" onClick={()=>setPlusIndex((index) => index+12)}> Load more.... </button>
      </div>
      <Footer />
    </>
  );
}

export default App;
