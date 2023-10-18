import { useEffect, useState } from 'react';
import './PokemonList.scss';
import axios from 'axios';
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { PokemonInfo } from '../PokemonInfo/PokemonInfo';
import { Button } from '../Button/Button';

const itemsPerPage = 12;

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [characteristics, setCharacteristics] = useState();
  const [pokemonImage, setPokemonImage] = useState();
  const [pokemonInfoLoading, setPokemonInfoLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleCurrentPage = (data) => {
    setCurrentPage(data);
  }

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${itemsPerPage * currentPage}`)
      .then(response => {
        setPokemons(response.data.results);
      })
      .catch(error => {
        console.error(error);
      })
  }, [currentPage])

  return (
    <>
      <div className="pokemon__cards cards">
        <div className="cards__list">
          {pokemons.map(pokemon => (
            <PokemonCard
              pokemon={pokemon}
              handlePokemonData={data => setCharacteristics(data)}
              handlePokemonImage={data => setPokemonImage(data)}
              handlePokemonInfoCard={data => setPokemonInfoLoading(data)}
              key={pokemon.url}
            />
          ))}
          <Button currentPage={currentPage} handleCurrentPage={handleCurrentPage} />
        </div>
        {pokemonInfoLoading && (
          <div className="cards__info">
            <PokemonInfo characteristics={characteristics} pokemonImage={pokemonImage} />
          </div>
        )}
      </div>
    </>
  )
}