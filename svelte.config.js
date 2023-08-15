import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],
	kit: {
		adapter: adapter()
	},
	vite: {
		plugins: [
			(function LoadSecrets() {
				return {
					name: 'load-secrets',
					configureServer: async () => {
						(await import('dotenv')).config();
					}
				};
			})()
		]
	}
};

export default config;
