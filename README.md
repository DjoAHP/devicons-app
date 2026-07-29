# djodev-icons — Bibliothèque d'icônes SVG

Bibliothèque d'icônes SVG maison en React + TypeScript + Tailwind CSS, avec recherche, filtres par style (Plein/Contour) et snippets de code prêts à copier (React, HTML, SVG inline).

## Installation

```bash
npm install djodev-icons
```

## Utilisation

```tsx
import { AlertPleinIcon, HomeContourIcon } from "djodev-icons";

function MonComposant() {
  return (
    <div className="flex gap-4">
      <AlertPleinIcon className="h-6 w-6 text-red-500" />
      <HomeContourIcon className="h-6 w-6 text-sky-400" />
    </div>
  );
}
```

Chaque icône accepte `className`, `width`, `height` et tous les props SVG natifs. La couleur est contrôlée via `currentColor` (CSS `color` parent).

## Stack

- **React 19** + **TypeScript**
- **Vite** (build & dev server)
- **TanStack Router** (routing)
- **Tailwind CSS v4** (styling)
- **Radix UI** (composants accessibles)

## Développement

```bash
# Démarrer le serveur de dev
npm run dev

# Build production (app UI)
npm run build

# Build librairie (npm)
npm run build:lib

# Générer les types TypeScript
npm run build:types

# Synchroniser les SVGs vers public/icons/
npm run build:icons

# Build complet (lib + types + icons)
npm run build:all

# Preview du build
npm run preview

# Lint
npm run lint

# Format
npm run format
```

## Structure du projet

```
src/
├── components/
│   ├── library/      # Composants de la bibliothèque (grille, modal, recherche, etc.)
│   └── ui/           # Composants UI de base (Radix UI + styles)
├── hooks/            # Hooks personnalisés
├── icons/
│   ├── components/   # Composants React d'icônes (AlertIcon, HomeIcon, etc.)
│   ├── svg/
│   │   ├── plein/    # SVGs style "fill/solid"
│   │   └── contour/  # SVGs style "outline"
│   ├── index.ts      # Point d'entrée public djodev-icons
│   └── registry.ts   # Registre des icônes (métadonnées, recherche, catégories)
├── lib/              # Utilitaires (cn, snippets, error handling)
├── routes/           # Routes TanStack Router
├── styles.css        # Design system (tokens, glassmorphism, thème dark)
└── routeTree.gen.ts  # Généré automatiquement par TanStack Router
```

## Ajouter une nouvelle icône

1. Ajoutez les fichiers SVG dans `src/icons/svg/plein/` et `src/icons/svg/contour/`
2. Créez le composant dans `src/icons/components/NouvelleIcone.tsx`
3. Enregistrez l'icône dans `src/icons/registry.ts` (ajoutez une entrée dans `SOURCES`)
4. Exportez depuis `src/icons/index.ts`
5. Lancez `npm run build:icons` pour synchroniser les SVGs vers `public/icons/`

## CDN / SVG directs

Les icônes sont accessibles via URL statique une fois déployées :

```
/icons/plein/alert.svg
/icons/plein/corbeille/corbeille01.svg
/icons/contour/alert.svg
```

## Design System

- **Thème** : Dark mode par défaut
- **Effet** : Glassmorphism (backdrop-blur, transparences)
- **Couleurs principales** : `#246F8F`, `#1F2329`, `#243B8F`, `#FFF0C9`
- **Tokens** : Définis dans `src/styles.css` (OKLCH, variables CSS)

## Licence

MIT
