import { createClient, Provider } from 'urql';
import { ReactNode } from 'react';
import config from '../config';

type PokemonProviderProps = {
  children: ReactNode;
};

export const PokemonProvider: React.FC<PokemonProviderProps> = ({children}) => {
  const client = createClient({
    url: config.GRAPHQL_ENDPOINT,
  });
  return <Provider value={client}>{children}</Provider>;
};
