/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import './PokemonInfo.scss';

const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1);
}

export const PokemonInfo = ({ characteristics, pokemonImage }) => {
  const allPokemonTypes = characteristics.types
    .map(element => capitalize(element.type.name))
    .join(', ');

  return (
    <div className="pokemon__info">
      <img
        className="pokemon__info-image"
        src={pokemonImage}
        alt="Pokemon image"
      />
      <div className="pokemon__info-data">
        <h1 className="pokemon__info-name">{capitalize(characteristics.name)}</h1>
        <table className="pokemon__info-table">
          <tbody>
            <tr>
              <td className="pokemon__info-property">Type</td>
              <td className="pokemon__info-value">{allPokemonTypes}</td>
            </tr>
            {characteristics.stats.map(element => (
              <tr>
                <td className="pokemon__info-property">{capitalize(element.stat.name)}</td>
                <td className="pokemon__info-value">{element.base_stat}</td>
              </tr>
            ))}
            <tr>
              <td className="pokemon__info-property">Weight</td>
              <td className="pokemon__info-value">{characteristics.weight}</td>
            </tr>
            <tr>
              <td className="pokemon__info-property">Total moves</td>
              <td className="pokemon__info-value">{characteristics.moves.length}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}