import { usePokemonQueryQuery } from '../generated/graphql';

export const Pokemon : React.FC = () => {
  const [ { data }, executeQuery] = usePokemonQueryQuery();

  return (
    <div>
      { data?.pokemon_v2_pokemonsprites.map(pokemon => {
        return (
          <p>{pokemon.id}- {pokemon.pokemon_v2_pokemon?.name}</p>
        );
      })};
    </div>
  );
};
