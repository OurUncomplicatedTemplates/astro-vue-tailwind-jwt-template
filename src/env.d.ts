/// <reference types="astro/client" />

// https://docs.astro.build/en/guides/environment-variables/#intellisense-for-typescript
interface ImportMetaEnv {
	readonly PUBLIC_SITE_URL: string;
	readonly PUBLIC_SITE_PORT: number | undefined;
	readonly PUBLIC_API_URL: string;
	readonly TAURI_BUILD: boolean | undefined;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
