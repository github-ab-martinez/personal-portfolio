import 'server-only';

import { ClientConfig, createClient } from 'next-sanity';

const config: ClientConfig = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION || '2024-01-29',
  useCdn: false,
};

const client = createClient(config);

export default client;
