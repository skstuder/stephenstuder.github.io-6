import { createClient } from '@sanity/client';
import { PROJECT_ID, API_VERSION } from './env.js';

const client = createClient({
	projectId: PROJECT_ID,
	dataset: 'production',
	apiVersion: API_VERSION,
	useCdn: false
});

export default client;
