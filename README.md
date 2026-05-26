# React + Vite

## Read me - RFM

## Project Overview

Rest for More is a sleep tracking and wellness web application built with React and Vite. It allows users to monitor their sleep habits, track personal progress, complete an onboarding flow, and manage their account. The application is designed with a mobile-first approach and supports Progressive Web App (PWA) functionality, providing an app-like experience across devices.

## Installation

1. Open a terminal in the project folder:
   cd "c:\Users\maart\OneDrive\Documenten\Semester 4 FED\project 2\RestforMore"
2. Install the dependencies:
   npm install
3. Start the development server:
   npm run dev
4. Build for production:
   npm run build
5. Preview the production build:
   npm run preview

## Dependencies

• react – UI library
• react-dom – React rendering
• react-router-dom – Client-side routing
• lucide-react – Icon library

## Dev Dependencies

• vite – Bundler and development server
• @vitejs/plugin-react – React integration for Vite
• vite-plugin-pwa – PWA functionality
• eslint + @eslint/js – Linting
• eslint-plugin-react-hooks – React Hooks linting rules
• eslint-plugin-react-refresh – Refresh linting
• globals – Global variable definitions
• @types/react / @types/react-dom – TypeScript type definitions for React (IDE support)

## Frameworks & Tools

• React for component-based UI
• Vite as development server and bundler
• React Router for navigation
• vite-plugin-pwa for PWA support
• ESLint for code quality

## Project Structure

• src/main.jsx – Entry point of the application
• src/App.jsx – Main component containing the router and layout
• src/components/ – Reusable UI components
• src/pages/ – Page components for routes
• src/styles/ – Global styles
• src/assets/ – Static assets
• public/ – Public files

## Features / Functionaliteiten

• onboarding-pagina
• Feature/alarmclock
• Feature/avondroutine
• Feature/bedtime-notification
• Feature/lamp-toggle
• Feature/pwa-setup
• Feature/sleep-streaks
• Feature/sleep-tracker

## Naming Conventions

• Component files use PascalCase: Layout.jsx, BottomNav.jsx, Sleep.jsx
• Page files should preferably use PascalCase for consistency
• CSS files are linked to components and usually use kebab-case or PascalCase: lamp-toggle.css, WekkerComponent.css
• React component names in JSX and exports should use PascalCase
• File and folder names should clearly describe their contents: components, pages, styles, assets

## Cloning the Project

1. Clone the repository:
   git clone <repository-url>
   cd RestforMore
2. Install the dependencies:
   npm install
3. Start the application:
   npm run dev
4. Open http://localhost:5173 in your browser.

## Important Files and Structure

• src/App.jsx defines the routes and loads the Layout component
• src/components/Layout.jsx contains the global structure, navigation, and page wrapper
• src/pages/ contains the main application pages: Home, Sleep, Progress, Account, and Onboarding
• vite.config.js contains the PWA configuration and plugins

## Expanding the Project

• Add new pages in src/pages/ and register the route in src/App.jsx
• Add reusable UI elements in src/components/
• Keep styling component-based by placing CSS files next to their corresponding components

## Extra Commands

• npm run lint – Check the code with ESLint

## Notes

• This project uses React 19 and Vite 8
• The application supports PWA functionality
• Keep imports and component names consistent to improve collaboration within the team

## Authors

• Maartje van Duijnhoven
• Sonya Khosravani
