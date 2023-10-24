/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './PokemonCard.scss';
import axios from 'axios';
import { Ring } from '@uiball/loaders'

const colorsType = {
  bug: '#b1c12e',
  dark: '#4f3a2d',
  dragon: '#755edf',
  electric: '#fcbc17',
  fairy: '#f4b1f4',
  fighting: '#bb2f27',
  fire: '#e73b0c',
  flying: '#a3b3f7',
  ghost: '#6060b2',
  grass: '#74c236',
  ground: '#d3b357',
  ice: '#a3e7fd',
  normal: '#c8c4bc',
  poison: '#934594',
  psychic: '#ed4882',
  rock: '#b9a156',
  steel: '#b5b5c3',
  water: '#3295f6',
  shadow: '#3f4171',
  unknown: '#3c3837',
};

const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1);
}

export const PokemonCard = ({
  pokemon,
  handlePokemonData,
  handlePokemonImage,
  handlePokemonInfoCard
}) => {
  const [characteristics, setCharacteristics] = useState();
  const [pokemonImage, setPokemonImage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCharacteristics = async () => {
      setIsLoading(true);

      await axios.get(`${pokemon.url}`)
        .then(response => {
          setCharacteristics(response.data);
          setPokemonImage(response.data.sprites.other.dream_world.front_default);
        })
        .catch(error => {
          console.error(error);
        })
        .finally(() => setIsLoading(false))
    }

    getCharacteristics();
  }, [])

  const onCardClick = () => {
    handlePokemonData(characteristics);
    handlePokemonImage(pokemonImage);
    handlePokemonInfoCard(true);
  }

  return (
    isLoading ? (
      <Ring size={40} lineWeight={5} speed={2} color="black" />
    ) : (
      <div className="pokemon__card pokemon" onClick={onCardClick}>
        <img
          className="pokemon__image"
          src={pokemonImage}
          alt="Pokemon image"
        />
        <h1 className="pokemon__name">{capitalize(pokemon.name)}</h1>
        {characteristics && (
          <div className="pokemon__types">
            {characteristics.types.map(element => (
              <div 
                className="pokemon__type" 
                style={{ backgroundColor: colorsType[element.type.name] }}
                key={element.slot}
              >
                {capitalize(element.type.name)}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  )
}