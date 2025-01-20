import { useEffect, useState } from "react";

type PokemonResult = {
  name: string;
  url: string;
};

type PokemonApiResponse = {
  count: number;
  results: PokemonResult[];
};

const App = () => {
  // https://pokeapi.co/api/v2/pokemon?offset=0&limit=20

  const [pokemon, setPokemon] = useState<PokemonResult[]>([]);
  const [page, setPage] = useState(0);
  const [totPages, setTotPage] = useState(0);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page * 20}&limit=20`)
      .then((res) => {
        return res.json() as Promise<PokemonApiResponse>;
      })
      .then((data: PokemonApiResponse) => {
        setPokemon(data.results);

        setTotPage(Math.ceil(data.count / 20));
      });
  }, [page]);

  const goToNextPage = () => {
    if (page < totPages - 1) setPage(page + 1);
  };
  const goToPrevPage = () => {
    if (page > 0) setPage(page - 1);
  };
  // const hasNextPage = () => {};
  // const hasPrevPage = () => {};

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemon.map((poke, index) => {
          return <li key={index}>{poke.name}</li>;
        })}
      </ul>
      {/* <button onClick={goToPrevPage} disabled={hasPrevPage}> */}
      <button onClick={goToPrevPage}>Prev Page</button>
      {/* <button onClick={goToNextPage} disabled={hasNextPage}> */}
      <button onClick={goToNextPage}>Next Page</button>
      Current page: {page + 1} of {totPages}
    </div>
  );
};

export default App;
