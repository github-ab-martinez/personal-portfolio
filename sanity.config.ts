import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'wee8zwth',
  dataset: 'production',
  title: 'A.b. Martinez Personal Portfolio',
  apiVersion: '2024-01-29',
  basePath: '/admin',
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
});

export default config;
