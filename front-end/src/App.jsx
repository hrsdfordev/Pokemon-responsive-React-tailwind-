import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import CardMenu from "./components/card/CardMenu";
import Footer from "./components/footer/Footer";
import { listMenuCard } from "./utils/constance";
import { usePokemon } from "./contexts";
import CardPokemon from "./components/card/CardPokemon";

function App() {
  const [count, setCount] = useState(0);
  const index = [1, 2, 3, 4];
  const { state, fetchPokemon, pokemonLoading } = usePokemon();

  useEffect(() => {
    fetchPokemon();
    console.log(state.pokemon);
  }, []);

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
        <h1> Loading.... </h1>
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
      <Footer />
    </>
  );
}

export default App;
