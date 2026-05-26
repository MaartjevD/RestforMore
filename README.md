# Rest for More

## Project Overview

`Rest for More` is a React single-page application built with Vite. The app tracks sleep, progress, onboarding and account screens using React Router. The project also includes PWA support via `vite-plugin-pwa`.

---

## Installatie

1. Open een terminal in de projectmap:
   ```bash
   cd "c:\Users\maart\OneDrive\Documenten\Semester 4 FED\project 2\RestforMore"
   ```
2. Installeer dependencies:
   ```bash
   npm install
   ```
3. Start de ontwikkelserver:
   ```bash
   npm run dev
   ```
4. Bouw voor productie:
   ```bash
   npm run build
   ```
5. Preview de productiebuild:
   ```bash
   npm run preview
   ```

---

## Dependencies

- `react` – UI library
- `react-dom` – React rendering
- `react-router-dom` – client-side routing
- `lucide-react` – icon library

## DevDependencies

- `vite` – bundler en dev server
- `@vitejs/plugin-react` – React integratie voor Vite
- `vite-plugin-pwa` – PWA functionaliteit
- `eslint` + `@eslint/js` – linting
- `eslint-plugin-react-hooks` – React hooks lint regels
- `eslint-plugin-react-refresh` – refresh linting
- `globals` – globale variabelen definities
- `@types/react` / `@types/react-dom` – TypeScript type definities voor React (IDE support)

---

## Frameworks & Tools

- `React` voor component gebaseerde UI
- `Vite` als development server en bundler
- `React Router` voor navigatie
- `PWA` ondersteuning via `vite-plugin-pwa`
- `ESLint` voor codekwaliteit

---

## Projectstructuur

- `src/main.jsx` – entry point van de app
- `src/App.jsx` – hoofdcomponent met router en layout
- `src/components/` – herbruikbare UI-componenten
- `src/pages/` – pagina componenten voor routes
- `src/styles/` – globale styles
- `src/assets/` – statische assets
- `public/` – publieke bestanden

---

## Naming Conventions

- Componentbestanden gebruiken `PascalCase`: `Layout.jsx`, `BottomNav.jsx`, `Sleep.jsx`
- Pagina-bestanden gebruiken `PascalCase` of `kebab-case` in de importpaden; bij voorkeur `PascalCase` om consistent te blijven.
- CSS-bestanden koppelen aan componenten en gebruiken meestal `kebab-case` of `PascalCase` met een duidelijke naam: `lamp-toggle.css`, `WekkerComponent.css`
- React componentnamen in JSX en export moeten `PascalCase` zijn.
- Bestandsnamen en mapnamen moeten beschrijven wat ze bevatten: `components`, `pages`, `styles`, `assets`.

---

## Project overnemen

1. Clone de repository:
   ```bash
   git clone <repository-url>
   cd RestforMore
   ```
2. Installeer dependencies met `npm install`
3. Start de app met `npm run dev`
4. Open `http://localhost:5173` in de browser

### Belangrijke punten om te begrijpen

- `src/App.jsx` definieert de routes en laadt de `Layout`-component.
- `src/components/Layout.jsx` bevat de globale structuur, navigatie en pagina-wrapper.
- `src/pages/` bevat de belangrijkste applicatiepagina's: `Home`, `Sleep`, `Progress`, `Account`, `Onboarding`.
- `vite.config.js` bevat PWA configuratie en plugins.

### Aanpassingen en uitbreidingen

- Voeg nieuwe pagina's toe in `src/pages/` en registreer een route in `src/App.jsx`.
- Voeg herbruikbare UI-elementen toe in `src/components/`.
- Houd styling component-gebonden door CSS-bestanden naast de corresponderende componenten te plaatsen.

---

## Extra commands

- `npm run lint` – controleer code met ESLint

---

## Notities

- Dit project gebruikt React 19 en Vite 8.
- De app ondersteunt PWA-functionaliteit.
- Houd imports en componentnamen consistent om samen met anderen soepel te kunnen werken.
