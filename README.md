# Astro Vue Tailwind JWT Template

This project is a free and open-source template built with the components from [Flowbite](https://github.com/themesberg/flowbite) based on the utility-first [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) framework.

This admin dashboard can quickly help you get started building an application for your project using the newest UI/UX development technologies in the open-source area including Tailwind CSS and Flowbite.

---

## 👨‍🚀 Development

### ⚙️ Workflow

This product is built using the following widely used technologies:

- Tailwind CSS: [tailwindcss.com](https://tailwindcss.com/)
- Flowbite: [flowbite.com](http://flowbite.com/)
- Astro: [astro.build](https://astro.build/)

### 🚀 Quick start

1. Clone this repository or download the ZIP file
2. Make sure that you have **Node.js** and NPM, PNPM or Yarn installed
3. Install the project dependencies from the `package.json` file:

```sh
pnpm install
```

_PNPM is the package manager of choice for illustration, but you can use what you want._

1. Launch the Astro local development server on `localhost:2121` by running the following command:

```sh
pnpm run dev
```

You can also build the project and get the distribution files inside the `dist/` folder by running:

```sh
pnpm run build
```

Then, you can preview the generated build with a local web server:

```sh
pnpm run preview
```

### 🛠 Tools

Efforts have been put on fast **onboarding** and **developer experience**.

This project comes with extensive support for TypeScript, Astro, Tailwind, and VS Code.  
It is configured with sensible defaults, a bit of opinions, plus some tricks to make it plays nice together.

- **TypeScript**: _strictest_ Astro's settings. Full-stack, type-safe code base
- **Prettier**: featuring `prettier-plugin-astro` (bundled with `astro`)
- **Editorconfig**: conforming with prettier
- **VS Code**: extensions recommendations, tooling settings
- **Tailwind**: Astro integration (using Vite and PostCSS)
- **Flowbite**: dependencies (core, typography), settings
- **GitHub**: a [pre-configured workflow](https://github.com/themesberg/flowbite-astro-admin-dashboard/tree/main/.github/workflows) for deployment (using PNPM cache)
