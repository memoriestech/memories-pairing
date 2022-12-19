import { CodegenConfig } from '@graphql-codegen/cli';

const codegenConfig: CodegenConfig = {
  schema: 'https://beta.pokeapi.co/graphql/v1beta',
  documents: 'src/graphql/*.gql',
  generates: {
    'src/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
    },
  },
  hooks: {
    afterAllFileWrite: 'prettier --write "src/generated"',
  },
};

export default codegenConfig;
