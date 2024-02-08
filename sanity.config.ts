import { RobotIcon, RocketIcon } from '@sanity/icons';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import schemas from './sanity/schemas';

const config = defineConfig([
  {
    projectId: 'wee8zwth',
    dataset: 'production',
    name: 'production-workspace',
    basePath: '/admin/production',
    title: 'A.b. Martinez Personal Portfolio - Production',
    icon: RocketIcon,
    plugins: [structureTool()],
    schema: {
      types: schemas,
    },
  },
  {
    projectId: 'wee8zwth',
    dataset: 'staging',
    name: 'staging-workspace',
    basePath: '/admin/staging',
    title: 'A.b. Martinez Personal Portfolio - Staging',
    icon: RobotIcon,
    plugins: [structureTool()],
    schema: {
      types: schemas,
    },
  },
]);

export default config;
