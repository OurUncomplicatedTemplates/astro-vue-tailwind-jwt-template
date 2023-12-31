/** @type {import("@types/prettier").Options} */
// Extracted from `webdev-configs` (https://github.com/JulianCataldo/web-garden/tree/develop/configs)

module.exports = {
	printWidth: 100,
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'all',

	// See: https://github.com/prettier/prettier/issues/7475
	useTabs: true,

	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
