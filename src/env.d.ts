/// <reference types="astro/client" />

// https://docs.astro.build/en/guides/environment-variables/#intellisense-for-typescript
interface ImportMetaEnv {
	readonly SITE_URL: string;
	readonly SITE_PORT: number|undefined;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
