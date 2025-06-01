# TenantGuard

> A React + Vite + Tailwind project to verify and review tenant history.

## 🚀 Live Demo

**URL:** [https://am-vishal.github.io/tenantguard](https://am-vishal.github.io/tenantguard)

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/am-vishal/tenantguard.git
cd tenantguard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start local development server

```bash
npm run dev
```

Visit `http://localhost:5173` to view the app locally.

---

## 🛠 Vite Configuration

In your `vite.config.ts`, set the `base` to the name of your GitHub repo:

```ts
base: 'https://<your-github-username>.github.io/<your-repo-name>'
```

Example:

```ts
base: 'https://am-vishal.github.io/tenantguard'
```

---

## 🚀 Deploying to GitHub Pages

### Step 1: Install gh-pages package

```bash
npm install --save-dev gh-pages
```

### Step 2: Add deploy scripts to `package.json`

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### Step 3: Push your code to GitHub

```bash
git add .
git commit -m "Initial deployment"
git push origin main
```

### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

GitHub Pages will serve the contents of your `dist` folder from:

```
https://<your-github-username>.github.io/<your-repo-name>
```

Example:

```
https://am-vishal.github.io/tenantguard
```

---

## 🧩 Tech Stack

* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [GitHub Pages](https://pages.github.com/)

---

## 📄 License

MIT License. Feel free to use and contribute.

<!-- 
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
``` -->
