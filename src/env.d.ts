/// <reference types="astro/client" />

interface User {
	name: string;
	email: string;
}

// https://docs.astro.build/en/guides/environment-variables/#intellisense-for-typescript
interface ImportMetaEnv {
	readonly PUBLIC_SITE_URL: string;
	readonly PUBLIC_SITE_PORT: number | undefined;
	readonly PUBLIC_API_URL: string;
	readonly JWT_PUBLIC_KEY: string;
	readonly NODE_BUILD: boolean | undefined;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare namespace App {
	interface Locals {
		authHeader: string | undefined;
		userId: string | null;
		isAuthenticated: boolean;
		user: User | null;
	}
}
