import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  graphql: [
    {
      playground: true,
      tag: 'experiment',
      workspace: 'staging-workspace',
      id: 'schema-experiment',
    },
    {
      playground: false,
      workspace: 'production-workspace',
      id: 'schema-production',
    },
  ],
});
