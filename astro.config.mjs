import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vue from "@astrojs/vue";
import vercel from "@astrojs/vercel/serverless";

const { SITE_URL, SITE_PORT } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

const SITE = SITE_PORT ? `${SITE_URL}:${SITE_PORT}` : SITE_URL;
const PORT = Number(SITE_PORT) || 3000;

// https://astro.build/config
export default defineConfig({
	site: SITE,
	output: 'server',
	server: {
		port: PORT,
	},
	integrations: [
		sitemap(),
		tailwind(),
		vue()
	],
	adapter: vercel({
		analytics: true,
	})
});
