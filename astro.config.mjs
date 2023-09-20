import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import vercel from '@astrojs/vercel/serverless';
import node from '@astrojs/node';

const { PUBLIC_SITE_URL, PUBLIC_SITE_PORT, NODE_BUILD } = loadEnv(
	process.env.NODE_ENV,
	process.cwd(),
	'',
);

const SITE = PUBLIC_SITE_PORT ? `${PUBLIC_SITE_URL}:${PUBLIC_SITE_PORT}` : PUBLIC_SITE_URL;
const PORT = Number(PUBLIC_SITE_PORT) || 4321;

let adapter = vercel();
if (NODE_BUILD) {
	adapter = node({
		mode: 'standalone',
	});
}

// https://astro.build/config
export default defineConfig({
	site: SITE,
	output: 'server',
	server: {
		port: PORT,
	},
	integrations: [sitemap(), tailwind(), vue()],
	adapter: adapter,
	vite: {
		server: {
			watch: {
				ignored: ['**/target/**'],
			},
		},
	},
});
