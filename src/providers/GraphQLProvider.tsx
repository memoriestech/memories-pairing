import { createClient, Provider } from 'urql';
import { ReactNode } from 'react';

type GraphQLProviderProps = {
  endpoint: string;
  children: ReactNode;
};

export const GraphQLProvider: React.FC<GraphQLProviderProps> = ({endpoint, children }) => {
  const client = createClient({
    url: endpoint,
  });
  return <Provider value={client}>{children}</Provider>;
};
