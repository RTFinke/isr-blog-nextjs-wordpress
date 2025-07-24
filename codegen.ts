import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://gotten-convention-injured-ps.trycloudflare.com/graphql',
  documents: 'src/**/*.tsx',
  generates: {
    './src/generated/graphql.ts': {
      preset: 'client',
    },
  },
}

export default config
